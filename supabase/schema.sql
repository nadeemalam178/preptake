-- =========================================================================
-- PREPTAKE Database Schema (Supabase PostgreSQL with Row Level Security)
-- =========================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (linked to Supabase Auth users)
create table if not exists public.user_profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text not null,
  selected_exams text[] default array['ctet-p2', 'bihar-stet-p1']::text[],
  completed_topics text[] default array[]::text[],
  bookmarked_questions text[] default array[]::text[],
  attempted_questions text[] default array[]::text[],
  question_history jsonb default '{}'::jsonb,
  test_results jsonb default '[]'::jsonb,
  last_studied_topic text,
  google_sheet_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Test Results Table (for detailed queryable history)
create table if not exists public.test_results (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  test_id text not null,
  test_title text not null,
  exam_id text not null,
  total_questions integer not null,
  attempted integer not null,
  correct integer not null,
  incorrect integer not null,
  score numeric not null,
  accuracy numeric not null,
  time_spent_seconds integer not null,
  answers jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Row Level Security (RLS)
alter table public.user_profiles enable row level security;
alter table public.test_results enable row level security;

-- Policies for user_profiles: Each user can only select, insert, or update their own profile
create policy "Users can view own profile" 
  on public.user_profiles for select 
  using (auth.uid() = id);

create policy "Users can insert own profile" 
  on public.user_profiles for insert 
  with check (auth.uid() = id);

create policy "Users can update own profile" 
  on public.user_profiles for update 
  using (auth.uid() = id);

-- Policies for test_results: Each user can only view and insert their own results
create policy "Users can view own test results" 
  on public.test_results for select 
  using (auth.uid() = user_id);

create policy "Users can insert own test results" 
  on public.test_results for insert 
  with check (auth.uid() = user_id);

-- Automatic Profile Creation Trigger on Sign Up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'Student Candidate'),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger definition
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

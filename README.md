# PREPTAKE — B.Ed Exam Preparation Platform

A modern, lightweight, mobile-first web application engineered specifically for B.Ed candidates preparing for competitive teacher recruitment and eligibility examinations.

---

## 🎯 Target Examinations

1. **CTET Paper 2: Mathematics & Science** (Classes VI–VIII, CBSE)
2. **Bihar STET Paper 1: Secondary Math & Science** (Classes IX–X, BSEB)
3. **BPSC TRE 4: Classes VI–VIII Mathematics & Science** (Middle School Teacher, BPSC)
4. **BPSC TRE 4: Classes IX–X Science** (Secondary School Teacher, BPSC)

---

## ✨ Core Principles & Architecture

- **Mobile-First & Clean**: No bloated educational SaaS dashboards, heavy animations, or distracting widgets. Designed for distraction-free studying on phones, tablets, and desktops.
- **Authentic Curriculum & Official PYQs**: Real previous-year questions from CBSE CTET (Jan 2024, Aug 2023, Dec 2022), BSEB STET (2023/2024), and BPSC TRE 1.0, 2.0 & 3.0 Re-exam (2024) with official question booklet citations and detailed pedagogical solutions.
- **Separate & Isolated User Progress**: Every candidate has an isolated profile preserving their completed topics, bookmarked questions, test scores, and question history.
- **Dual Backend Support**:
  - **Google Sheets CMS Integration**: Teachers and students can connect a Google Sheet URL to update or import questions and syllabus items dynamically.
  - **Supabase Auth & PostgreSQL**: Complete database schema with Row Level Security (`supabase/schema.sql`) for cloud persistence.
  - **Zero-Config Persistent Local Mode**: Works immediately out-of-the-box with multi-student switching on the same device.

---

## 🧭 Essential Pages

| Page | Route | Purpose |
| :--- | :--- | :--- |
| **Home / My Study** | `/study` | Welcome banner, active track badges, "Resume Last Studied Topic" card, and snapshot metrics. |
| **Select Examination** | `/exams` | Multi-track selection allowing candidates to toggle any combination of the 4 exams without losing progress. |
| **Syllabus & Study Materials** | `/syllabus` | Hierarchical structure: *Exam → Subject → Chapter → Topic*. Concise notes, concepts, formulas, solved examples, and related PYQs. |
| **Previous-Year Questions** | `/pyqs` | Searchable PYQ archive with filters for examination, year, and verification status. Instant feedback and explanations. |
| **Practice Tests** | `/tests` | Topic drills, chapter tests, PYQ paper practice, and mock tests with timer, question palette, and detailed scorecard review. |
| **My Progress** | `/progress` | Syllabus completion percentage, question accuracy, recent test score logs, topics to revise, bookmarks, and CSV export. |
| **Login / Sign Up** | `/auth` | Passwordless candidate sign-in, instant multi-student profile switching on shared devices, and Supabase cloud auth. |
| **Profile / Settings** | `/settings` | Google Sheets CMS link setup, template generator, Supabase sync status, and data backups (JSON & CSV). |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18+ or v20+ LTS
- **npm** or **pnpm**

### 2. Run Locally
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📊 Google Sheets CMS Setup

You can use a public Google Sheet as your question repository:

1. Create a Google Sheet with the following columns:
   ```text
   Exam, Subject, Chapter, Topic, Year, Question, Option A, Option B, Option C, Option D, Option E, Correct Answer, Explanation, Source, IsOfficialPYQ
   ```
2. Click **Share** → Set to **"Anyone with the link can view"**.
3. Copy the URL (e.g. `https://docs.google.com/spreadsheets/d/.../edit#gid=0`).
4. Go to **Settings (`/settings`)** in PREPTAKE, paste the URL, and click **Sync Sheet**.

---

## 🔐 Supabase Configuration (Optional Cloud Sync)

If you wish to synchronize user progress with a hosted Supabase PostgreSQL database:

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard and run the script in `supabase/schema.sql`.
3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   ```
4. Restart the dev server (`npm run dev`). The application will automatically synchronize profiles to Supabase with Row Level Security (RLS) enabled.

---

## ☁️ Deployment on Vercel

PREPTAKE is optimized for instant one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the repository in Vercel.
3. (Optional) Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables.
4. Click **Deploy**.

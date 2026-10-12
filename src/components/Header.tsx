'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, Layers, CheckCircle2, CloudCheck, User } from 'lucide-react';
import { UserProfile, ExamId } from '@/types';
import { getExamById } from '@/data/exams';
import ExamBadge from './ExamBadge';
import { isSupabaseConfigured } from '@/lib/supabase';

interface HeaderProps {
  onOpenSidebar: () => void;
  user: UserProfile | null;
  pageTitle?: string;
}

export default function Header({ onOpenSidebar, user, pageTitle }: HeaderProps) {
  const primaryExam = user?.selectedExams?.[0] || 'ctet-p2';

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-14 px-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 lg:px-8">
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger */}
        <button
          onClick={onOpenSidebar}
          className="p-1.5 -ml-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {pageTitle ? (
          <h1 className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
            {pageTitle}
          </h1>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
              Candidate:
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[150px] sm:max-w-[220px]">
              {user?.name || 'Candidate'}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Exam Indicator & Switcher */}
        <Link
          href="/exams"
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-colors border border-slate-200 dark:border-slate-700"
          title="Click to change or select multiple examinations"
        >
          <Layers className="w-3.5 h-3.5 text-indigo-500" />
          <span className="hidden sm:inline">Tracks:</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {user?.selectedExams?.length || 1} selected
          </span>
        </Link>

        {/* Sync Indicator */}
        <div
          className="flex items-center gap-1 px-2 py-0.5 text-[11px] rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hidden md:flex"
          title={isSupabaseConfigured ? 'Connected to Supabase PostgreSQL' : 'Local student isolated storage active'}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{isSupabaseConfigured ? 'Supabase Sync' : 'Isolated Storage'}</span>
        </div>

        {/* Profile Avatar link */}
        <Link
          href="/auth"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-semibold text-xs border border-indigo-200 dark:border-indigo-800 hover:ring-2 hover:ring-indigo-400 transition-all"
          title="Switch Account / Login"
        >
          {user?.name?.charAt(0) || <User className="w-4 h-4" />}
        </Link>
      </div>
    </header>
  );
}

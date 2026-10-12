'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut, Layers, Table, CheckCircle2 } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import { getCurrentUser, logoutUser, SPREADSHEET_ID } from '@/lib/storage';
import { UserProfile } from '@/types';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    router.push('/auth');
  };

  if (!mounted || !user) {
    return (
      <AppLayout pageTitle="Student Profile">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout pageTitle="Student Profile">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white font-bold text-2xl flex items-center justify-center uppercase shadow-sm">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {user.name}
              </h1>
              <p className="text-xs text-slate-500 font-mono">
                User ID: {user.id}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Active Examination Tracks
            </h2>
            <div className="flex flex-wrap gap-2">
              {user.selectedExams.map(ex => (
                <ExamBadge key={ex} examId={ex} size="md" />
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-500">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-emerald-600" />
                Backend Spreadsheet:
              </span>
              <span className="font-mono text-[11px] truncate max-w-[200px]">{SPREADSHEET_ID}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Account Status:</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active Session
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleLogout}
              className="w-full py-2.5 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out of PrepTake</span>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

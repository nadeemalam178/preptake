'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut, Layers, Table, CheckCircle2, Save, ArrowLeft, BookOpen, AlertCircle } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import { EXAMS } from '@/data/exams';
import { getCurrentUser, logoutUser, setSelectedExams, SPREADSHEET_ID } from '@/lib/storage';
import { ExamId, UserProfile } from '@/types';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [selected, setSelected] = useState<ExamId[]>([]);
  const [savedNotice, setSavedNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setSelected(currentUser.selectedExams || []);
  }, []);

  const handleToggleExam = (id: ExamId) => {
    setSavedNotice(false);
    setErrorMessage('');
    setSelected(prev => {
      if (prev.includes(id)) {
        if (prev.length === 1) {
          setErrorMessage('At least one examination track must remain active.');
          return prev;
        }
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSaveTracks = () => {
    if (selected.length === 0) {
      setErrorMessage('Please select at least one examination track.');
      return;
    }
    setSelectedExams(selected);
    const updatedUser = getCurrentUser();
    setUser(updatedUser);
    setSavedNotice(true);
    setErrorMessage('');
    setTimeout(() => setSavedNotice(false), 4000);
  };

  const handleLogout = () => {
    logoutUser();
    router.push('/auth');
  };

  if (!mounted || !user) {
    return (
      <AppLayout pageTitle="Profile & Examination Settings">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout pageTitle="Profile & Examination Settings">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Navigation Breadcrumb back to study */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push('/study')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Study Dashboard</span>
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white font-bold text-2xl flex items-center justify-center uppercase shadow-sm shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 truncate">
                {user.name}
              </h1>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Candidate User ID: <span className="font-semibold text-slate-700 dark:text-slate-300">{user.id}</span>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Sheet Database:</span>
              <span className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[170px]">
                {SPREADSHEET_ID}
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Server-Verified Session</span>
            </div>
          </div>
        </div>

        {/* Central Examination Management Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Manage Examination Tracks
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Select the examinations you are currently targeting. Modifying tracks will update your dashboard filters without losing any test history or progress.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {selected.length} of {EXAMS.length} Active
            </span>
          </div>

          {/* Success Banner */}
          {savedNotice && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-200 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Examination preferences updated and synchronized with Google Sheets!</span>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs font-semibold text-rose-800 dark:text-rose-200 flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Track Selection Cards */}
          <div className="space-y-3">
            {EXAMS.map(exam => {
              const isChecked = selected.includes(exam.id);
              return (
                <div
                  key={exam.id}
                  onClick={() => handleToggleExam(exam.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/20 text-slate-900 dark:text-slate-100 ring-1 ring-indigo-500/20 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer pointer-events-none"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {exam.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {exam.targetClasses}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {exam.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-medium text-slate-400">
                        Official Body: {exam.officialBody}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={handleSaveTracks}
              className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Examination Tracks</span>
            </button>
            <button
              onClick={() => router.push('/study')}
              className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors"
            >
              Back to Study
            </button>
          </div>
        </div>

        {/* Logout Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <button
            onClick={handleLogout}
            className="w-full py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out of PrepTake</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

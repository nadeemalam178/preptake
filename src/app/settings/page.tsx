'use client';

import React, { useState, useEffect } from 'react';
import {
  Settings,
  User,
  Table,
  Database,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import {
  getCurrentUser,
  saveUserProfile,
  setGoogleSheetUrl,
  exportUserDataAsJSON,
  exportTestHistoryCSV,
  resetCurrentUserProgress
} from '@/lib/storage';
import { fetchQuestionsFromGoogleSheet, getSampleGoogleSheetCSV } from '@/lib/sheets';
import { isSupabaseConfigured } from '@/lib/supabase';
import { UserProfile } from '@/types';

export default function SettingsPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  // Profile fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);

  // Google Sheets
  const [sheetUrl, setSheetUrl] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showTemplate, setShowTemplate] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Reset confirmation
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    setMounted(true);
    const curr = getCurrentUser();
    setUser(curr);
    setName(curr.name);
    setEmail(curr.email);
    setSheetUrl(curr.googleSheetUrl || '');
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    user.name = name.trim();
    user.email = email.trim();
    saveUserProfile(user);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleSyncGoogleSheet = async () => {
    if (!sheetUrl.trim()) {
      setSyncStatus({ type: 'error', message: 'Please enter a valid Google Sheet URL or published link.' });
      return;
    }

    setIsSyncing(true);
    setSyncStatus(null);

    try {
      setGoogleSheetUrl(sheetUrl);
      const result = await fetchQuestionsFromGoogleSheet(sheetUrl);
      setSyncStatus({
        type: 'success',
        message: `Successfully connected! Imported and validated ${result.count} questions from Google Sheet.`
      });
    } catch (err: any) {
      setSyncStatus({
        type: 'error',
        message: err.message || 'Failed to sync with Google Sheet. Ensure the sheet is public (Anyone with the link can view).'
      });
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(getSampleGoogleSheetCSV());
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  const handleDownloadJSON = () => {
    const jsonStr = exportUserDataAsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `preptake_backup_${user?.name.toLowerCase().replace(/\s+/g, '_') || 'candidate'}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCSV = () => {
    const csvStr = exportTestHistoryCSV();
    const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `preptake_tests_${user?.name.toLowerCase().replace(/\s+/g, '_') || 'candidate'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetProgress = () => {
    resetCurrentUserProgress();
    setUser(getCurrentUser());
    setShowResetConfirm(false);
    alert('Candidate study history, topic completions, and test logs have been reset.');
  };

  if (!mounted || !user) {
    return (
      <AppLayout pageTitle="Profile & Settings">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout pageTitle="Profile & Settings">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Profile & Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your candidate profile, Google Sheets question CMS synchronization, Supabase configuration, and data exports.
          </p>
        </div>

        {/* 1. Candidate Profile Form */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <User className="w-4 h-4 text-indigo-500" />
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Candidate Information
            </h2>
          </div>

          {savedNotice && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Candidate profile updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address / Candidate ID
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-400 font-mono">
                Candidate ID: {user.id}
              </span>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>

        {/* 2. Google Sheets Question CMS Integration */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Table className="w-4 h-4 text-emerald-500" />
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Google Sheets CMS Integration
              </h2>
            </div>
            <button
              onClick={() => setShowTemplate(!showTemplate)}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {showTemplate ? 'Hide Schema' : 'View Template Schema'}
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Connect a Google Sheet to pull or update questions dynamically. Enter either your public Google Sheet share link or published CSV link.
          </p>

          {syncStatus && (
            <div
              className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
                syncStatus.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200'
                  : 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200'
              }`}
            >
              {syncStatus.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>{syncStatus.message}</span>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Google Sheet URL
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={sheetUrl}
                  onChange={e => setSheetUrl(e.target.value)}
                  placeholder="https://docs.google.com/spreadsheets/d/your-sheet-id/edit#gid=0"
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={handleSyncGoogleSheet}
                  disabled={isSyncing}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors shrink-0 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Syncing...' : 'Sync Sheet'}</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Note: In Google Sheets, click <em>Share → Anyone with the link can view</em>.
              </p>
            </div>

            {/* Template Schema Box */}
            {showTemplate && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Expected Sheet Column Format
                  </span>
                  <button
                    onClick={handleCopyTemplate}
                    className="flex items-center gap-1 text-[11px] text-indigo-600 font-semibold hover:underline"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedTemplate ? 'Copied CSV!' : 'Copy Template CSV'}</span>
                  </button>
                </div>
                <div className="font-mono text-[11px] text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
                  Exam, Subject, Chapter, Topic, Year, Question, Option A, Option B, Option C, Option D, Option E, Correct Answer, Explanation, Source, IsOfficialPYQ
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Supabase Cloud Sync Status */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-500" />
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Supabase & PostgreSQL Cloud Status
              </h2>
            </div>
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                isSupabaseConfigured
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300'
                  : 'bg-slate-100 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-400'
              }`}
            >
              {isSupabaseConfigured ? 'Connected & Active' : 'Offline / Local Isolated Mode'}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {isSupabaseConfigured
              ? 'Your student profile and test attempts are synchronized to your Supabase PostgreSQL database with Row Level Security (RLS).'
              : 'PREPTAKE is running in secure local storage mode. To activate Supabase cloud database synchronization, supply NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file. The full PostgreSQL schema is available in supabase/schema.sql.'}
          </p>
        </div>

        {/* 4. Data Export & Danger Zone */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <Download className="w-4 h-4 text-slate-500" />
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Data Backup & Progress Management
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadCSV}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Test Scores (CSV)</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Full Backup (JSON)</span>
            </button>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold transition-colors ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Study Progress</span>
            </button>
          </div>

          {/* Reset Confirmation Dialog */}
          {showResetConfirm && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs space-y-3 animate-in fade-in">
              <p className="font-bold text-rose-900 dark:text-rose-200">
                Are you sure you want to reset your study progress?
              </p>
              <p className="text-rose-700 dark:text-rose-300">
                This will clear your completed topics, bookmarked questions, and test score logs for candidate <strong>{user.name}</strong>.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetProgress}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 text-white font-semibold text-xs"
                >
                  Yes, Reset Everything
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 dark:text-slate-300 text-xs"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

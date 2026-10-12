'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, ArrowRight, AlertCircle, CheckCircle2, ShieldCheck, Table } from 'lucide-react';
import { loginUserWithBackend, isSessionActive, getCurrentUser, SPREADSHEET_ID, APPS_SCRIPT_URL } from '@/lib/storage';

export default function AuthPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setMounted(true);
    // If already logged in, redirect to study
    if (isSessionActive()) {
      router.push('/study');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!userId.trim()) {
      setErrorMsg('Please enter your User ID.');
      return;
    }
    if (!password) {
      setErrorMsg('Please enter your password.');
      return;
    }

    setLoading(true);
    try {
      const res = await loginUserWithBackend(userId.trim(), password);
      if (res.success && res.user) {
        // Step 6: After successful login, immediately show examination selection if not chosen, else study
        if (!res.user.selectedExams || res.user.selectedExams.length === 0) {
          router.push('/exams');
        } else {
          router.push('/exams');
        }
      } else {
        setErrorMsg(res.error || 'Invalid User ID or Password.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center p-4 sm:p-6 antialiased">
      <div className="max-w-md w-full space-y-6">
        {/* Brand / Logo */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-sm">
            P
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            PrepTake
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            B.Ed Examination Preparation Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Student Login
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter your credentials provided in the study spreadsheet.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                User ID
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  autoFocus
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                  placeholder="e.g. nadeem or student1"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 mt-2"
            >
              <span>{loading ? 'Verifying...' : 'Login to PrepTake'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Backend Info Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-500">
              <Table className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Sheet Backend:</span>
              <span className="font-mono text-[10px] truncate max-w-[170px]">{SPREADSHEET_ID}</span>
            </div>
            <p className="leading-relaxed">
              Default candidate test accounts: <code className="font-mono text-slate-600 dark:text-slate-300 font-bold">nadeem</code> / <code className="font-mono text-slate-600 dark:text-slate-300">prep123</code> or <code className="font-mono text-slate-600 dark:text-slate-300 font-bold">student1</code> / <code className="font-mono text-slate-600 dark:text-slate-300">pass123</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

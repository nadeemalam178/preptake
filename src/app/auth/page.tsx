'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  User,
  Lock,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  UserPlus,
  LogIn,
  BadgeCheck
} from 'lucide-react';
import {
  loginUserWithBackend,
  registerUserWithBackend,
  isSessionActive
} from '@/lib/storage';
import { ExamId } from '@/types';
import { EXAMS } from '@/data/exams';

export default function AuthPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Login form state
  const [loginUserId, setLoginUserId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Registration form state
  const [regFullName, setRegFullName] = useState('');
  const [regUserId, setRegUserId] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);
  const [selectedExams, setSelectedExams] = useState<ExamId[]>(['ctet-p2', 'bpsc-tre-middle']);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    if (isSessionActive()) {
      router.push('/study');
    }
  }, [router]);

  const resetMessages = () => {
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleModeSwitch = (mode: 'login' | 'register') => {
    resetMessages();
    setAuthMode(mode);
  };

  const toggleExam = (id: ExamId) => {
    setSelectedExams(prev => {
      if (prev.includes(id)) {
        return prev.filter(e => e !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Handle Login Submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    if (!loginUserId.trim()) {
      setErrorMsg('Please enter your User ID.');
      return;
    }
    if (!loginPassword) {
      setErrorMsg('Please enter your password.');
      return;
    }

    setLoading(true);
    try {
      const res = await loginUserWithBackend(loginUserId.trim(), loginPassword);
      if (res.success && res.user) {
        // Direct dashboard restoration - no redundant selection prompt
        router.push('/study');
      } else {
        setErrorMsg(res.error || 'Invalid User ID or Password.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Registration Submission
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    const name = regFullName.trim();
    const uid = regUserId.trim().toLowerCase();

    if (!name || name.length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }
    if (!uid || uid.length < 3 || uid.length > 30) {
      setErrorMsg('User ID must be between 3 and 30 characters.');
      return;
    }
    const idRegex = /^[a-z0-9_-]+$/;
    if (!idRegex.test(uid)) {
      setErrorMsg('User ID can only contain lowercase letters, numbers, hyphens, and underscores.');
      return;
    }
    if (!regPassword || regPassword.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg('Password and Confirm Password do not match.');
      return;
    }
    if (selectedExams.length === 0) {
      setErrorMsg('Please select at least one examination track to prepare for.');
      return;
    }

    setLoading(true);
    try {
      const res = await registerUserWithBackend(name, uid, regPassword, regConfirmPassword, selectedExams);
      if (res.success && res.user) {
        setSuccessMsg('Account created successfully! Opening your study dashboard...');
        // Directly open study dashboard with saved exam selections
        setTimeout(() => {
          router.push('/study');
        }, 500);
      } else {
        setErrorMsg(res.error || 'Registration failed. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

        {/* Auth Container Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5">
          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => handleModeSwitch('login')}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMode === 'login'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('register')}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMode === 'register'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Create Account</span>
            </button>
          </div>

          {/* Form Header */}
          <div className="pb-1">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {authMode === 'login' ? 'Candidate Login' : 'Create Student Account'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {authMode === 'login'
                ? 'Sign in with your User ID and Password to continue your study.'
                : 'Register your candidate profile to start preparing right away.'}
            </p>
          </div>

          {/* Error Message Alert */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-rose-700 dark:text-rose-300 flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
              <span className="leading-relaxed">{errorMsg}</span>
            </div>
          )}

          {/* Success Message Alert */}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-start gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
              <span className="leading-relaxed">{successMsg}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {authMode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
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
                    value={loginUserId}
                    onChange={e => setLoginUserId(e.target.value)}
                    placeholder="Enter your User ID"
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
                    type={showLoginPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                    aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                  >
                    {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 mt-2"
              >
                <span>{loading ? 'Verifying with Google Sheets...' : 'Login to PrepTake'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => handleModeSwitch('register')}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  New candidate? Create a new account
                </button>
              </div>
            </form>
          ) : (
            /* REGISTRATION FORM */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <BadgeCheck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    autoFocus
                    value={regFullName}
                    onChange={e => setRegFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  User ID
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={regUserId}
                    onChange={e => setRegUserId(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                    placeholder="Choose a unique User ID"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Unique ID for login (letters, numbers, hyphens or underscores; min 3 chars).
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    required
                    value={regPassword}
                    onChange={e => setRegPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                    aria-label={showRegPassword ? 'Hide password' : 'Show password'}
                  >
                    {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showRegConfirmPassword ? 'text' : 'password'}
                    required
                    value={regConfirmPassword}
                    onChange={e => setRegConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                    aria-label={showRegConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showRegConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Examination Track Selection */}
              <div className="pt-1">
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Select Examination(s) <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                    {selectedExams.length} selected
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2">
                  Select one or multiple examination tracks. Everything in your study dashboard will be strictly filtered by your selection.
                </p>
                <div className="space-y-2">
                  {EXAMS.map(exam => {
                    const isChecked = selectedExams.includes(exam.id);
                    return (
                      <div
                        key={exam.id}
                        onClick={() => toggleExam(exam.id)}
                        className={`p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isChecked
                            ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/30 text-slate-900 dark:text-slate-100 ring-1 ring-indigo-500/20'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // Handled by container onClick
                          className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer pointer-events-none"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="text-xs font-bold leading-tight text-slate-900 dark:text-slate-100">
                              {exam.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold shrink-0">
                              {exam.targetClasses}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed line-clamp-1">
                            {exam.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 mt-3"
              >
                <span>{loading ? 'Creating Account & Saving Selections...' : 'Create Account & Open Dashboard'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => handleModeSwitch('login')}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  Already have an account? Sign in
                </button>
              </div>
            </form>
          )}

          {/* Security Notice Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Secure Cloud Authentication</span>
          </div>
        </div>
      </div>
    </div>
  );
}

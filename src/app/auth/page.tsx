'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Users,
  ShieldCheck,
  Sparkles,
  KeyRound
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import {
  getCurrentUser,
  getAllSavedUsers,
  loginOrRegisterUser,
  switchUser,
  saveUserProfile
} from '@/lib/storage';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { UserProfile } from '@/types';

export default function AuthPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [savedUsers, setSavedUsers] = useState<{ id: string; name: string; email: string }[]>([]);

  // Simple student login mode
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Supabase cloud login mode
  const [authMode, setAuthMode] = useState<'quick' | 'supabase'>('quick');
  const [sbEmail, setSbEmail] = useState('');
  const [sbPassword, setSbPassword] = useState('');
  const [sbIsSignUp, setSbIsSignUp] = useState(false);
  const [sbLoading, setSbLoading] = useState(false);
  const [sbMessage, setSbMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    const curr = getCurrentUser();
    setCurrentUser(curr);
    setSavedUsers(getAllSavedUsers());
    if (curr) {
      setName(curr.name);
      setEmail(curr.email);
    }
  }, []);

  const handleQuickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !email.trim()) return;

    const user = loginOrRegisterUser(name, email);
    setCurrentUser(user);
    setSavedUsers(getAllSavedUsers());
    router.push('/study');
  };

  const handleSwitchUser = (userId: string) => {
    const user = switchUser(userId);
    setCurrentUser(user);
    setName(user.name);
    setEmail(user.email);
    router.push('/study');
  };

  const handleSupabaseAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setSbMessage({
        type: 'error',
        text: 'Supabase credentials are not yet configured in .env.local. You can use Quick Student Login below with zero configuration!'
      });
      return;
    }

    setSbLoading(true);
    setSbMessage(null);

    try {
      if (sbIsSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: sbEmail,
          password: sbPassword,
          options: {
            data: { full_name: sbEmail.split('@')[0] }
          }
        });
        if (error) throw error;
        setSbMessage({
          type: 'success',
          text: 'Account created! Check your email for confirmation or log in.'
        });
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: sbEmail,
          password: sbPassword
        });
        if (error) throw error;

        // Fetch or create profile
        const sessionUser = data.user;
        if (sessionUser) {
          const profile = loginOrRegisterUser(
            sessionUser.user_metadata?.full_name || sessionUser.email?.split('@')[0] || 'Candidate',
            sessionUser.email || ''
          );
          setCurrentUser(profile);
          router.push('/study');
        }
      }
    } catch (err: any) {
      setSbMessage({
        type: 'error',
        text: err.message || 'Authentication error occurred.'
      });
    } finally {
      setSbLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!sbEmail.trim()) {
      setSbMessage({ type: 'error', text: 'Please enter your email above first.' });
      return;
    }
    if (!supabase) {
      setSbMessage({
        type: 'error',
        text: 'Supabase credentials must be added to .env.local to send password reset emails.'
      });
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(sbEmail);
      if (error) throw error;
      setSbMessage({ type: 'success', text: 'Password reset link sent to your email.' });
    } catch (err: any) {
      setSbMessage({ type: 'error', text: err.message });
    }
  };

  if (!mounted) {
    return (
      <AppLayout pageTitle="Login & Account">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout pageTitle="Login & Candidate Profile">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-md">
            P
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Candidate Account & Progress Isolation
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Every candidate’s completed syllabus topics, test attempts, and bookmarked questions are strictly saved and restored.
          </p>
        </div>

        {/* Tab Switcher: Quick Student Login vs Supabase Cloud Auth */}
        <div className="flex rounded-xl bg-slate-200/80 dark:bg-slate-800 p-1">
          <button
            onClick={() => setAuthMode('quick')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              authMode === 'quick'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Passwordless Student Sign-In
          </button>
          <button
            onClick={() => setAuthMode('supabase')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'supabase'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Supabase Cloud Auth
            {isSupabaseConfigured && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
          </button>
        </div>

        {/* Tab 1: Passwordless Student Sign-In / Switch */}
        {authMode === 'quick' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
            <form onSubmit={handleQuickLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Candidate Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email / Candidate ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. priya@bedaspirant.in"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Used to separate and restore your progress on this device or when syncing.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Saved Accounts on this Device */}
            {savedUsers.length > 0 && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    Candidates On This Device ({savedUsers.length})
                  </span>
                  <span className="text-[11px] text-slate-400">Click to switch</span>
                </div>

                <div className="space-y-2">
                  {savedUsers.map(u => {
                    const isActive = currentUser?.id === u.id;
                    return (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => handleSwitchUser(u.id)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isActive
                            ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="truncate">
                          <p className="text-xs font-bold truncate">{u.name}</p>
                          <p className="text-[11px] text-slate-400 truncate">{u.email}</p>
                        </div>
                        {isActive ? (
                          <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Active
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 font-medium">Switch →</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Supabase Cloud Auth */}
        {authMode === 'supabase' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-5">
            {!isSupabaseConfigured && (
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Supabase Cloud Not Yet Connected</p>
                  <p className="mt-0.5">
                    Add <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in <code className="font-mono">.env.local</code> to activate live cloud PostgreSQL syncing with Row Level Security.
                  </p>
                </div>
              </div>
            )}

            {sbMessage && (
              <div
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
                  sbMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}
              >
                {sbMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                )}
                <span>{sbMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSupabaseAuth} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={sbEmail}
                    onChange={e => setSbEmail(e.target.value)}
                    placeholder="candidate@preptake.in"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={sbPassword}
                    onChange={e => setSbPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setSbIsSignUp(!sbIsSignUp)}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                >
                  {sbIsSignUp ? 'Already have an account? Log In' : 'Need an account? Sign Up'}
                </button>

                {!sbIsSignUp && (
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={sbLoading}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <span>{sbLoading ? 'Processing...' : sbIsSignUp ? 'Sign Up with Supabase' : 'Log In with Supabase'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

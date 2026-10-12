'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Layers,
  GraduationCap,
  FileQuestion,
  CheckSquare,
  TrendingUp,
  LogOut,
  X
} from 'lucide-react';
import { UserProfile } from '@/types';
import { getCurrentUser } from '@/lib/storage';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  onLogout: () => void;
}

export default function Sidebar({ isOpen, onClose, user, onLogout }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { label: 'My Study', href: '/study', icon: BookOpen },
    { label: 'Switch Examination', href: '/exams', icon: Layers },
    { label: 'Syllabus', href: '/syllabus', icon: GraduationCap },
    { label: 'Previous-Year Questions', href: '/pyqs', icon: FileQuestion },
    { label: 'Practice Tests', href: '/tests', icon: CheckSquare },
    { label: 'My Progress', href: '/progress', icon: TrendingUp },
  ];

  const currentUser = user || (typeof window !== 'undefined' ? getCurrentUser() : null);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-slate-900 text-slate-200 border-r border-slate-800 transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-800">
          <Link href="/study" className="flex items-center gap-2.5 group" onClick={onClose}>
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
              P
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                PREPTAKE
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  B.Ed
                </span>
              </span>
              <p className="text-[11px] text-slate-400 font-medium">Exam Prep Website</p>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Tracks Badge Pill */}
        {currentUser && (
          <div className="px-5 py-3 border-b border-slate-800/80 bg-slate-900/50">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <span>Active Tracks</span>
              <Link
                href="/exams"
                onClick={onClose}
                className="text-indigo-400 hover:text-indigo-300 font-medium text-[11px]"
              >
                Switch
              </Link>
            </div>
            <div className="flex flex-wrap gap-1">
              {currentUser.selectedExams.map(ex => {
                const label = ex === 'ctet-p2' ? 'CTET P2' : ex === 'bihar-stet-p1' ? 'STET P1' : ex === 'bpsc-tre-middle' ? 'BPSC 6-8' : 'BPSC 9-10';
                return (
                  <span
                    key={ex}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium border border-slate-700/60"
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(item => {
            const isActive = pathname === item.href || (item.href !== '/study' && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/40">
          <div className="flex items-center justify-between px-2 py-1.5">
            <div className="flex items-center gap-2.5 overflow-hidden max-w-[150px]">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-indigo-300 flex items-center justify-center font-bold text-xs uppercase shrink-0 border border-slate-700">
                {currentUser?.name?.charAt(0) || 'U'}
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-slate-200 truncate">
                  {currentUser?.name || 'Candidate'}
                </p>
                <p className="text-[10px] text-slate-400 font-mono truncate">
                  ID: {currentUser?.id || 'candidate'}
                </p>
              </div>
            </div>

            <button
              onClick={onLogout}
              title="Logout"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-slate-850 rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

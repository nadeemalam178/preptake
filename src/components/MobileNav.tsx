'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, GraduationCap, FileQuestion, CheckSquare, TrendingUp } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Study', href: '/study', icon: BookOpen },
    { label: 'Syllabus', href: '/syllabus', icon: GraduationCap },
    { label: 'PYQs', href: '/pyqs', icon: FileQuestion },
    { label: 'Tests', href: '/tests', icon: CheckSquare },
    { label: 'Progress', href: '/progress', icon: TrendingUp },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 lg:hidden px-2">
      {navItems.map(item => {
        const isActive = pathname === item.href || (item.href !== '/study' && pathname.startsWith(item.href));
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
              isActive
                ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
            <span className="text-[11px] mt-0.5 tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

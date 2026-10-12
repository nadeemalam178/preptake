'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';
import { UserProfile } from '@/types';
import { getCurrentUser, isSessionActive, logoutUser } from '@/lib/storage';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function AppLayout({ children, pageTitle }: AppLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Require active session for protected pages
    if (!isSessionActive() && pathname !== '/auth') {
      router.push('/auth');
      return;
    }

    const currentUser = getCurrentUser();
    setUser(currentUser);

    const handleStorageUpdate = () => {
      if (!isSessionActive() && pathname !== '/auth') {
        router.push('/auth');
      } else {
        setUser(getCurrentUser());
      }
    };

    window.addEventListener('preptake_storage_updated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('preptake_storage_updated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, [pathname, router]);

  const handleLogout = () => {
    logoutUser();
    router.push('/auth');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased">
      {/* Desktop / Mobile Slideout Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        <Header
          onOpenSidebar={() => setSidebarOpen(true)}
          user={user}
          pageTitle={pageTitle}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-24 lg:pb-12">
          {children}
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileNav />
      </div>
    </div>
  );
}

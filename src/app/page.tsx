'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isSessionActive } from '@/lib/storage';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (isSessionActive()) {
      router.replace('/study');
    } else {
      router.replace('/auth');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

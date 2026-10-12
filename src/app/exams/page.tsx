'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ExamsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redundant route redirected to centralized settings
    router.replace('/settings');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

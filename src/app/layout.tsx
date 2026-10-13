import type { Metadata, Viewport } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'PREPTAKE | B.Ed Exam Preparation Platform',
  description: 'Modern, lightweight, mobile-first preparation platform for CTET Paper 2, Bihar STET Paper 1, and BPSC TRE 4.0 with authentic syllabi and official PYQs.',
  manifest: `${basePath}/manifest.json`,
  icons: {
    icon: `${basePath}/icon.svg`,
    apple: `${basePath}/icon-192.png`,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PrepTake'
  },
  keywords: [
    'CTET Paper 2',
    'Bihar STET Paper 1',
    'BPSC TRE 4',
    'B.Ed exam preparation',
    'CTET Math and Science',
    'Teacher Recruitment Exam'
  ],
  authors: [{ name: 'PREPTAKE Education' }]
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4f46e5'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href={`${basePath}/icon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${basePath}/icon-192.png`} />
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/20 selection:text-indigo-600">
        {children}
      </body>
    </html>
  );
}

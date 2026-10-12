'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  BookOpen,
  FileQuestion,
  Award,
  Bookmark,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import { getCurrentUser, exportTestHistoryCSV } from '@/lib/storage';
import { UserProfile } from '@/types';
import { EXAMS, getExamById } from '@/data/exams';
import { getAllTopics } from '@/data/syllabi';
import { INITIAL_QUESTIONS } from '@/data/questions';

export default function ProgressPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUser(getCurrentUser());

    const handleUpdate = () => setUser(getCurrentUser());
    window.addEventListener('preptake_storage_updated', handleUpdate);
    return () => window.removeEventListener('preptake_storage_updated', handleUpdate);
  }, []);

  const handleDownloadCSV = () => {
    const csvContent = exportTestHistoryCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `preptake_progress_${user?.name.toLowerCase().replace(/\s+/g, '_') || 'student'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted || !user) {
    return (
      <AppLayout pageTitle="My Progress">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  const allTopics = getAllTopics();
  const relevantTopics = allTopics.filter(t => user.selectedExams.includes(t.examId));
  const completedTopics = relevantTopics.filter(t => user.completedTopicIds.includes(t.id));
  const overallPercentage = relevantTopics.length > 0
    ? Math.round((completedTopics.length / relevantTopics.length) * 100)
    : 0;

  // Topics needing revision (relevant topics that are not yet marked completed)
  const pendingTopics = relevantTopics.filter(t => !user.completedTopicIds.includes(t.id));

  // Bookmarked questions
  const bookmarkedQuestions = INITIAL_QUESTIONS.filter(q => user.bookmarkedQuestionIds.includes(q.id));

  // Overall accuracy
  const totalCorrect = Object.values(user.questionHistory).filter(h => h.isCorrect).length;
  const totalAttempted = Object.keys(user.questionHistory).length;
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  return (
    <AppLayout pageTitle="My Progress">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              My Preparation Progress
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Clean tracking of syllabus coverage, test performances, and topics to revise.
            </p>
          </div>

          {user.testResults.length > 0 && (
            <button
              onClick={handleDownloadCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shrink-0 shadow-xs"
            >
              <Download className="w-4 h-4 text-indigo-500" />
              <span>Export Records (CSV / Sheets)</span>
            </button>
          )}
        </div>

        {/* 1. Core Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Syllabus Covered</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {overallPercentage}%
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {completedTopics.length} / {relevantTopics.length} Topics
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Questions Attempted</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {totalAttempted}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Accuracy: {overallAccuracy}%
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Tests Submitted</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {user.testResults.length}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Mock & chapter papers
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Bookmarked Questions</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {bookmarkedQuestions.length}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              For targeted revision
            </p>
          </div>
        </div>

        {/* 2. Syllabus Completion Breakdown Per Examination */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Syllabus Completion by Track
          </h2>

          <div className="space-y-3.5">
            {user.selectedExams.map(examId => {
              const exam = getExamById(examId);
              if (!exam) return null;

              const examTopics = allTopics.filter(t => t.examId === examId);
              const done = examTopics.filter(t => user.completedTopicIds.includes(t.id)).length;
              const pct = examTopics.length > 0 ? Math.round((done / examTopics.length) * 100) : 0;

              return (
                <div key={examId} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <ExamBadge examId={examId} size="sm" />
                      <span className="text-slate-800 dark:text-slate-200">{exam.name}</span>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400">
                      {pct}% ({done}/{examTopics.length} topics)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Recent Test Scores */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Recent Test Scores & Attempt Log
            </h2>
            <Link
              href="/tests"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Take Another Test →
            </Link>
          </div>

          {user.testResults.length > 0 ? (
            <div className="space-y-2.5">
              {user.testResults.slice(0, 5).map(result => (
                <div
                  key={result.id}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ExamBadge examId={result.examId} size="sm" />
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {result.testTitle}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      {new Date(result.date).toLocaleDateString()} at{' '}
                      {new Date(result.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 font-medium">
                    <span className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold">
                      Score: {result.score} / {result.totalQuestions}
                    </span>
                    <span className="px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                      Accuracy: {result.accuracy.toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 rounded-xl bg-slate-50 dark:bg-slate-850">
              You have not attempted any tests yet. Head over to the{' '}
              <Link href="/tests" className="text-indigo-600 font-semibold underline">
                Practice Tests
              </Link>{' '}
              section to test your preparation!
            </div>
          )}
        </div>

        {/* 4. Topics Needing Revision */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Topics to Study & Revise ({pendingTopics.length})
            </h2>
            <Link
              href="/syllabus"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Open Syllabus →
            </Link>
          </div>

          {pendingTopics.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pendingTopics.slice(0, 6).map(topic => (
                <Link
                  key={topic.id}
                  href={`/syllabus?topic=${topic.id}`}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors flex items-center justify-between gap-2 group text-xs"
                >
                  <div className="truncate">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 truncate block">
                      {topic.title}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {topic.ncertReference || 'Core syllabus topic'}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-emerald-600 font-semibold rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              🎉 Outstanding! You have marked all current topics as completed across your selected tracks!
            </div>
          )}
        </div>

        {/* 5. Bookmarked Questions */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Bookmarked Questions ({bookmarkedQuestions.length})
            </h2>
            <Link
              href="/pyqs"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Go to Question Bank →
            </Link>
          </div>

          {bookmarkedQuestions.length > 0 ? (
            <div className="space-y-2.5">
              {bookmarkedQuestions.map(q => (
                <div
                  key={q.id}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ExamBadge examId={q.examId} size="sm" />
                      <span className="text-[11px] text-slate-500 font-mono truncate max-w-xs">
                        {q.sourceReference}
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 dark:text-slate-200 line-clamp-1">
                      {q.questionText}
                    </p>
                  </div>

                  <Link
                    href="/pyqs"
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0"
                  >
                    Solve Now →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 rounded-xl bg-slate-50 dark:bg-slate-850">
              No questions bookmarked yet. When studying PYQs, tap the bookmark icon on any challenging question to save it here for rapid review.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

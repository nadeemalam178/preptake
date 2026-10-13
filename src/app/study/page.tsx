'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileQuestion,
  CheckSquare,
  TrendingUp,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Award,
  Sparkles,
  Layers,
  ChevronRight,
  Calculator,
  ShieldCheck,
  Check
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import { getCurrentUser } from '@/lib/storage';
import { UserProfile, ExamId, Subject } from '@/types';
import { EXAMS, getExamById } from '@/data/exams';
import { getAllTopics, getTopicById, SUBJECTS } from '@/data/syllabi';
import { QUESTIONS } from '@/data/questions';

export default function StudyPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeFormulaSubject, setActiveFormulaSubject] = useState<Subject | null>(null);

  useEffect(() => {
    setMounted(true);
    setUser(getCurrentUser());

    const handleUpdate = () => setUser(getCurrentUser());
    window.addEventListener('preptake_storage_updated', handleUpdate);
    return () => window.removeEventListener('preptake_storage_updated', handleUpdate);
  }, []);

  const allTopics = getAllTopics();

  const userSubjects = useMemo(() => {
    if (!user) return [];
    return SUBJECTS.filter(s => user.selectedExams.includes(s.examId));
  }, [user]);

  if (!mounted || !user) {
    return (
      <AppLayout pageTitle="My Study">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  // Filter topics belonging to user's selected exams
  const relevantTopics = allTopics.filter(t => user.selectedExams.includes(t.examId));
  const completedCount = user.completedTopicIds.filter(id => relevantTopics.some(t => t.id === id)).length;
  const completionPercentage = relevantTopics.length > 0
    ? Math.round((completedCount / relevantTopics.length) * 100)
    : 0;

  // Last studied topic
  const lastTopic = user.lastStudiedTopicId ? getTopicById(user.lastStudiedTopicId) : relevantTopics[0];

  // Questions attempted count strictly filtered by selected exams
  const attemptedCount = user.attemptedQuestionIds.filter(qid => {
    const q = QUESTIONS.find(item => item.id === qid);
    return q && user.selectedExams.includes(q.examId);
  }).length;

  const bookmarkedCount = user.bookmarkedQuestionIds.filter(qid => {
    const q = QUESTIONS.find(item => item.id === qid);
    return q && user.selectedExams.includes(q.examId);
  }).length;

  // Average test accuracy strictly filtered by selected exams
  const relevantResults = user.testResults.filter(r => user.selectedExams.includes(r.examId));
  const totalAccuracy = relevantResults.length > 0
    ? Math.round(relevantResults.reduce((acc, r) => acc + r.accuracy, 0) / relevantResults.length)
    : 0;

  return (
    <AppLayout pageTitle="Home / My Study">
      <div className="space-y-6">
        {/* 1. Welcome Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Aspirant Workspace
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Welcome back, {user.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Focused preparation platform for B.Ed teacher examinations with authentic syllabi, verified PYQs, and full-length mock tests.
            </p>

            {/* Active Tracks */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Selected Tracks:</span>
              {user.selectedExams.map(ex => (
                <ExamBadge key={ex} examId={ex} size="sm" />
              ))}
              <Link
                href="/settings"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
              >
                Manage Tracks
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Quick Preparation Snapshot Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Syllabus Covered</span>
              <BookOpen className="w-4 h-4 text-indigo-500" />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {completionPercentage}%
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {completedCount} of {relevantTopics.length} topics completed
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Questions Attempted</span>
              <FileQuestion className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {attemptedCount}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Across PYQs and drills
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Tests Completed</span>
              <CheckSquare className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {user.testResults.length}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Avg. Accuracy: {totalAccuracy}%
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Saved Bookmarks</span>
              <Bookmark className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {bookmarkedCount}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Saved for quick revision
            </p>
          </div>
        </div>

        {/* 3. Resume Last Studied Topic Card */}
        {lastTopic && (
          <div className="bg-indigo-50/60 dark:bg-indigo-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                  Resume Study
                </span>
                <ExamBadge examId={lastTopic.examId} size="sm" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {lastTopic.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl line-clamp-2">
                {lastTopic.notes}
              </p>
            </div>

            <Link
              href={`/syllabus?topic=${lastTopic.id}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-xs transition-colors shrink-0"
            >
              <span>Continue Topic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* 4. Curriculum Study Modules (Grouped by Subject) */}
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                Curriculum Study Modules
              </h2>
              <p className="text-xs text-slate-500">
                Subject-wise modules aligned with verified NCERT & SCERT learning standards.
              </p>
            </div>
            <Link
              href="/syllabus"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              All Syllabi →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userSubjects.map(sub => {
              const subTopics = sub.chapters.flatMap(c => c.topics);
              const doneCount = subTopics.filter(t => user.completedTopicIds.includes(t.id)).length;
              const subPct = subTopics.length > 0 ? Math.round((doneCount / subTopics.length) * 100) : 0;
              const firstTopic = subTopics[0];
              const formulaCount = subTopics.reduce((a, t) => a + (t.formulas?.length || 0), 0);

              return (
                <div
                  key={sub.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <ExamBadge examId={sub.examId} size="sm" />
                      <span className="text-[11px] font-mono text-slate-400">{sub.code}</span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {sub.description}
                      </p>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>{sub.chapters.length} Chapters</span>
                        <span>{subTopics.length} Topics</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                          style={{ width: `${subPct}%` }}
                        />
                      </div>
                      <div className="text-[11px] text-right text-slate-400">
                        {doneCount}/{subTopics.length} completed ({subPct}%)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={firstTopic ? `/syllabus?topic=${firstTopic.id}` : `/syllabus?exam=${sub.examId}`}
                      className="flex-1 text-center py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Study Notes →
                    </Link>

                    {formulaCount > 0 && (
                      <button
                        onClick={() => setActiveFormulaSubject(sub)}
                        className="py-2 px-3 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-xs font-semibold transition-colors flex items-center gap-1"
                        title="View formulas"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Formulas</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Selected Tracks Overview Section */}
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              Your Examination Tracks
            </h2>
            <Link
              href="/settings"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Manage Tracks
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {user.selectedExams.map(examId => {
              const exam = getExamById(examId);
              if (!exam) return null;

              const examTopics = allTopics.filter(t => t.examId === examId);
              const doneTopics = examTopics.filter(t => user.completedTopicIds.includes(t.id)).length;
              const pct = examTopics.length > 0 ? Math.round((doneTopics / examTopics.length) * 100) : 0;
              const examQuestions = QUESTIONS.filter(q => q.examId === examId);
              const verifiedPyqs = examQuestions.filter(q => q.provenanceTier === 'official_pyq_verified' || q.verificationStatus === 'Verified Official PYQ').length;

              return (
                <div
                  key={examId}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <ExamBadge examId={examId} size="md" />
                      <span className="text-xs font-mono text-slate-400">{exam.officialBody}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {exam.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                      {exam.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-500 font-medium">Topic Completion</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{pct}% ({doneTopics}/{examTopics.length})</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs text-slate-500">
                      {examQuestions.length} Questions ({verifiedPyqs} Verified PYQs)
                    </span>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/syllabus?exam=${examId}`}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Syllabus →
                      </Link>
                      <Link
                        href={`/pyqs?exam=${examId}`}
                        className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        PYQs →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Quick Launch Study Modes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <Link
            href="/pyqs"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs transition-all flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
              <FileQuestion className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                Solve PYQ Archive
              </h4>
              <p className="text-xs text-slate-500">Filter by exam & year</p>
            </div>
          </Link>

          <Link
            href="/tests"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs transition-all flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center shrink-0">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                Start Timed Test
              </h4>
              <p className="text-xs text-slate-500">Mock & chapter practice</p>
            </div>
          </Link>

          <Link
            href="/progress"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs transition-all flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                Track Performance
              </h4>
              <p className="text-xs text-slate-500">View test history & revisions</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Formula Sheet Modal */}
      {activeFormulaSubject && (
        <FormulaSheetModal
          isOpen={!!activeFormulaSubject}
          onClose={() => setActiveFormulaSubject(null)}
          subject={activeFormulaSubject}
        />
      )}
    </AppLayout>
  );
}

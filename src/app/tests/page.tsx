'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { CheckSquare, Clock, FileText, Award, Play, RotateCcw } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import TestRunner from '@/components/TestRunner';
import { PRACTICE_TESTS } from '@/data/tests';
import { EXAMS } from '@/data/exams';
import { PracticeTest, TestType, UserProfile, TestResult } from '@/types';
import { getCurrentUser } from '@/lib/storage';

export default function TestsPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTest, setActiveTest] = useState<PracticeTest | null>(null);

  // Filters
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedExam, setSelectedExam] = useState<string>('all');

  useEffect(() => {
    setMounted(true);
    setUser(getCurrentUser());
  }, []);

  const handleTestFinished = (result: TestResult) => {
    setUser(getCurrentUser());
  };

  const filteredTests = useMemo(() => {
    if (!user) return [];
    return PRACTICE_TESTS.filter(test => {
      // Must strictly belong to user's saved examinations
      if (!user.selectedExams.includes(test.examId)) {
        return false;
      }
      if (selectedType !== 'all' && test.type !== selectedType) {
        return false;
      }
      if (selectedExam !== 'all' && test.examId !== selectedExam) {
        return false;
      }
      return true;
    });
  }, [user, selectedType, selectedExam]);

  if (!mounted || !user) {
    return (
      <AppLayout pageTitle="Practice Tests">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  // If a test is active, show the runner
  if (activeTest) {
    return (
      <AppLayout pageTitle={`Testing: ${activeTest.title}`}>
        <div className="max-w-5xl mx-auto">
          <TestRunner
            test={activeTest}
            onClose={() => setActiveTest(null)}
            onFinish={handleTestFinished}
          />
        </div>
      </AppLayout>
    );
  }

  const testTypeLabels: Record<TestType, { label: string; color: string }> = {
    'topic': { label: 'Topic Drill', color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300' },
    'chapter': { label: 'Chapter Test', color: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300' },
    'pyq-paper': { label: 'PYQ Paper Drill', color: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300' },
    'mock': { label: 'Full Mock Test', color: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300' }
  };

  return (
    <AppLayout pageTitle="Practice Tests">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Practice Tests & Timed Simulations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Topic-wise practice, Chapter assessments, authentic Previous-Year paper simulations, and Full Mock tests.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Test Type Selector */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'all', label: 'All Test Formats' },
                { id: 'topic', label: 'Topic Practice' },
                { id: 'chapter', label: 'Chapter Tests' },
                { id: 'pyq-paper', label: 'PYQ Papers' },
                { id: 'mock', label: 'Full Mocks' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedType === t.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Filter */}
          <select
            value={selectedExam}
            onChange={e => setSelectedExam(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
          >
            <option value="all">All Selected Exams ({user.selectedExams.length})</option>
            {EXAMS.filter(ex => user.selectedExams.includes(ex.id)).map(ex => (
              <option key={ex.id} value={ex.id}>
                {ex.shortName}
              </option>
            ))}
          </select>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTests.map(test => {
            const pastAttempts = user.testResults.filter(r => r.testId === test.id);
            const bestScore = pastAttempts.length > 0
              ? Math.max(...pastAttempts.map(a => a.score))
              : null;
            const lastAttempt = pastAttempts[0];

            return (
              <div
                key={test.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <ExamBadge examId={test.examId} size="sm" />
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${testTypeLabels[test.type].color}`}>
                        {testTypeLabels[test.type].label}
                      </span>
                    </div>

                    {bestScore !== null && (
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        <Award className="w-3 h-3" />
                        Best: {bestScore}/{test.questionIds.length}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    {test.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {test.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {test.questionIds.length} Qs
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {test.durationMinutes} mins
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveTest(test)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{pastAttempts.length > 0 ? 'Retake Test' : 'Start Test'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}

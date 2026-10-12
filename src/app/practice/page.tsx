'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, BookOpen, CheckSquare, Bookmark, RotateCcw } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import QuestionCard from '@/components/QuestionCard';
import { EXAMS } from '@/data/exams';
import { INITIAL_QUESTIONS } from '@/data/questions';
import { ExamId, Question, UserProfile } from '@/types';
import { getCurrentUser } from '@/lib/storage';

function PracticeContent() {
  const searchParams = useSearchParams();
  const examParam = searchParams.get('exam') as ExamId | null;

  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExam, setSelectedExam] = useState<string>(examParam || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = getCurrentUser();
    setUser(u);

    if (examParam && u.selectedExams.includes(examParam)) {
      setSelectedExam(examParam);
    }
  }, [examParam]);

  const filteredQuestions = useMemo(() => {
    if (!user) return [];

    return INITIAL_QUESTIONS.filter(q => {
      // Exclude official PYQs; show only curriculum practice questions
      if (q.isOfficialPYQ) return false;

      // Strictly must belong to user's saved examinations
      if (!user.selectedExams.includes(q.examId)) return false;

      // Exam dropdown filter
      if (selectedExam !== 'all' && q.examId !== selectedExam) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }

      // Bookmark filter
      if (onlyBookmarks && !user.bookmarkedQuestionIds.includes(q.id)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesText = q.questionText.toLowerCase().includes(query);
        const matchesExpl = q.explanation.toLowerCase().includes(query);
        const matchesTopic = (q.topicId || '').toLowerCase().includes(query);
        if (!matchesText && !matchesExpl && !matchesTopic) {
          return false;
        }
      }

      return true;
    });
  }, [user, selectedExam, selectedDifficulty, onlyBookmarks, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedExam('all');
    setSelectedDifficulty('all');
    setOnlyBookmarks(false);
  };

  if (!mounted || !user) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Practice Questions & Subject Drills
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Curriculum-aligned practice drills and numerical problems to reinforce concepts for your selected examinations.
        </p>
      </div>

      {/* Filter Box Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search practice questions by keyword, topic, or concept..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {/* Exam Selector */}
          <select
            value={selectedExam}
            onChange={e => setSelectedExam(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
          >
            <option value="all">All Selected Exams ({user.selectedExams.length})</option>
            {EXAMS.filter(exam => user.selectedExams.includes(exam.id)).map(exam => (
              <option key={exam.id} value={exam.id}>
                {exam.shortName}
              </option>
            ))}
          </select>

          {/* Difficulty Selector */}
          <select
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Challenging">Challenging</option>
          </select>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              onlyBookmarks
                ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarked Only ({user.bookmarkedQuestionIds.length})</span>
          </button>

          {(searchQuery || selectedExam !== 'all' || selectedDifficulty !== 'all' || onlyBookmarks) && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-rose-600 dark:text-rose-400 hover:underline font-semibold ml-auto"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Result Metrics */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <span>
          Showing <strong>{filteredQuestions.length}</strong> practice questions
        </span>
        <span className="text-[11px] text-slate-400">
          Strictly filtered for your active tracks
        </span>
      </div>

      {/* Questions Feed */}
      {filteredQuestions.length > 0 ? (
        <div className="space-y-4">
          {filteredQuestions.map(question => (
            <QuestionCard
              key={question.id}
              question={question}
              isBookmarked={user.bookmarkedQuestionIds.includes(question.id)}
              savedAnswerId={user.questionHistory[question.id]?.selectedOptionId}
              showExamBadge={true}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No practice questions matched your criteria
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your search query or selecting another difficulty level.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <AppLayout pageTitle="Practice Questions">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <PracticeContent />
      </Suspense>
    </AppLayout>
  );
}

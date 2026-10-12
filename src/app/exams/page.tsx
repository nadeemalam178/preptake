'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, CheckCircle2, AlertCircle, ArrowRight, BookOpen, FileQuestion } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import { EXAMS } from '@/data/exams';
import { ExamId, UserProfile } from '@/types';
import { getCurrentUser, setSelectedExams } from '@/lib/storage';
import { getAllTopics } from '@/data/syllabi';
import { INITIAL_QUESTIONS } from '@/data/questions';

export default function ExamsPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [selected, setSelected] = useState<ExamId[]>([]);
  const [savedNotice, setSavedNotice] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = getCurrentUser();
    setUser(u);
    setSelected(u.selectedExams);
  }, []);

  const handleToggle = (id: ExamId) => {
    setSavedNotice(false);
    setSelected(prev => {
      if (prev.includes(id)) {
        if (prev.length === 1) {
          // Keep at least one selected
          return prev;
        }
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSave = () => {
    setSelectedExams(selected);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  if (!mounted) {
    return (
      <AppLayout pageTitle="Select Examination">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  const allTopics = getAllTopics();

  return (
    <AppLayout pageTitle="Select Examination">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Intro */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Select Your Preparation Tracks
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Choose any combination of examinations. Your completed topics, bookmarks, and test history remain preserved whenever you update your choices.
          </p>
        </div>

        {/* Success Alert Banner */}
        {savedNotice && (
          <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm font-semibold animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Preferences updated successfully! Your study materials and question feeds have been filtered accordingly.</span>
          </div>
        )}

        {/* Examination Cards Grid */}
        <div className="space-y-4">
          {EXAMS.map(exam => {
            const isSelected = selected.includes(exam.id);
            const topicCount = allTopics.filter(t => t.examId === exam.id).length;
            const pyqCount = INITIAL_QUESTIONS.filter(q => q.examId === exam.id).length;

            return (
              <div
                key={exam.id}
                onClick={() => handleToggle(exam.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-white dark:bg-slate-900 shadow-md ring-2 ring-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 opacity-80'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <ExamBadge examId={exam.id} size="sm" />
                      <span className="text-xs text-slate-500 font-medium">
                        Target: {exam.targetClasses}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        • {exam.officialBody}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {exam.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {exam.description}
                    </p>

                    {/* Subject Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exam.subjects.map(subj => (
                        <span
                          key={subj}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                        {topicCount} Structured Topics
                      </span>
                      <span className="flex items-center gap-1">
                        <FileQuestion className="w-3.5 h-3.5 text-emerald-500" />
                        {pyqCount} Authentic PYQs
                      </span>
                    </div>
                  </div>

                  {/* Toggle Checkbox */}
                  <div className="shrink-0 pt-1">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'border-2 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">
            {selected.length} track(s) selected
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-colors"
            >
              Save Preferences
            </button>
            <Link
              href="/syllabus"
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold transition-colors flex items-center gap-1"
            >
              <span>Go to Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

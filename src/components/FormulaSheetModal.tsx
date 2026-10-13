'use client';

import React from 'react';
import { X, Calculator, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { Subject, Topic } from '@/types';
import ExamBadge from './ExamBadge';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

export default function FormulaSheetModal({
  isOpen,
  onClose,
  subject
}: FormulaSheetModalProps) {
  if (!isOpen) return null;

  // Extract all formulas grouped by chapter
  const chaptersWithFormulas = subject.chapters.map(ch => {
    const topicsWithFormulas = ch.topics.filter(t => t.formulas && t.formulas.length > 0);
    return {
      chapter: ch,
      topics: topicsWithFormulas
    };
  }).filter(group => group.topics.length > 0);

  const totalFormulaCount = chaptersWithFormulas.reduce((acc, g) => {
    return acc + g.topics.reduce((subAcc, t) => subAcc + (t.formulas?.length || 0), 0);
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-3xl max-h-[88vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-850/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ExamBadge examId={subject.examId} size="sm" />
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 flex items-center gap-1">
                <Calculator className="w-3 h-3 text-purple-600" />
                {totalFormulaCount} Formulas & Core Rules
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {subject.name} — Rapid Formula Sheet
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {chaptersWithFormulas.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Calculator className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="text-sm font-medium">No numerical formulas in this theoretical subject.</p>
              <p className="text-xs text-slate-500">Explore the concepts and notes in the main study reader.</p>
            </div>
          ) : (
            chaptersWithFormulas.map(({ chapter, topics }) => (
              <div key={chapter.id} className="space-y-3">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {chapter.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {topics.map(t => (
                    <div
                      key={t.id}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                          {t.title}
                        </span>
                        {t.ncertReference && (
                          <span className="text-[10px] text-slate-400 font-mono">
                            {t.ncertReference}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {t.formulas?.map((formula, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50 font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 select-all"
                          >
                            {formula}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Click on any formula box to select and copy.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
}

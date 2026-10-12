'use client';

import React, { useState } from 'react';
import { Bookmark, CheckCircle2, XCircle, HelpCircle, ShieldCheck, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Question } from '@/types';
import ExamBadge from './ExamBadge';
import { toggleBookmark, recordQuestionAttempt } from '@/lib/storage';

interface QuestionCardProps {
  question: Question;
  isBookmarked?: boolean;
  onBookmarkToggle?: (questionId: string) => void;
  savedAnswerId?: string;
  showExamBadge?: boolean;
}

export default function QuestionCard({
  question,
  isBookmarked = false,
  onBookmarkToggle,
  savedAnswerId,
  showExamBadge = true
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(savedAnswerId || null);
  const [showExplanation, setShowExplanation] = useState<boolean>(Boolean(savedAnswerId));
  const [bookmarked, setBookmarked] = useState<boolean>(isBookmarked);

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setShowExplanation(true);
    const isCorrect = optionId === question.correctAnswerId;
    recordQuestionAttempt(question.id, optionId, isCorrect);
  };

  const handleBookmark = () => {
    const newState = toggleBookmark(question.id);
    setBookmarked(newState);
    if (onBookmarkToggle) onBookmarkToggle(question.id);
  };

  const isSubmitted = selectedOption !== null;
  const isSelectedCorrect = selectedOption === question.correctAnswerId;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all overflow-hidden p-5">
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
        <div className="flex flex-wrap items-center gap-2">
          {showExamBadge && <ExamBadge examId={question.examId} />}

          {/* Verification Badge */}
          {question.isOfficialPYQ ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Official PYQ
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <FileCheck className="w-3.5 h-3.5 text-blue-500" />
              Curated Practice Drill
            </span>
          )}

          {question.year && (
            <span className="text-xs text-slate-500 font-medium">
              {question.year}
            </span>
          )}
        </div>

        {/* Bookmark Action */}
        <button
          onClick={handleBookmark}
          className={`p-1.5 rounded-lg border transition-colors ${
            bookmarked
              ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 text-amber-600'
              : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
          title={bookmarked ? 'Remove bookmark' : 'Bookmark question for revision'}
          aria-label="Bookmark question"
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
        </button>
      </div>

      {/* Official Source Reference Tag */}
      <div className="mb-3 text-xs text-slate-500 dark:text-slate-400 font-mono bg-slate-50 dark:bg-slate-850 px-2.5 py-1 rounded border border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
        <span className="font-semibold text-slate-600 dark:text-slate-300">Source:</span>
        <span className="truncate">{question.sourceReference}</span>
      </div>

      {/* Question Text */}
      <div className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-medium leading-relaxed mb-4">
        {question.questionText}
      </div>

      {/* Options List */}
      <div className="space-y-2 mb-4">
        {question.options.map(option => {
          const isChosen = selectedOption === option.id;
          const isCorrect = option.id === question.correctAnswerId;

          let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:bg-indigo-50/30 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200';

          if (isSubmitted) {
            if (isCorrect) {
              optionStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium ring-1 ring-emerald-500';
            } else if (isChosen && !isCorrect) {
              optionStyle = 'border-rose-400 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 line-through ring-1 ring-rose-400';
            } else {
              optionStyle = 'border-slate-200 dark:border-slate-800 opacity-60 text-slate-600 dark:text-slate-400';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-all text-sm ${optionStyle}`}
            >
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                  isSubmitted && isCorrect
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : isSubmitted && isChosen && !isCorrect
                    ? 'bg-rose-600 text-white border-rose-600'
                    : isChosen
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                }`}
              >
                {option.id}
              </span>
              <span className="flex-1 leading-snug">{option.text}</span>

              {isSubmitted && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              )}
              {isSubmitted && isChosen && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Toggle & Content */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline py-1"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showExplanation ? 'Hide Explanation & Official Reasoning' : 'View Explanation & Solution'}</span>
          {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showExplanation && (
          <div className="mt-2.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Official Correct Option: {question.correctAnswerId}
            </div>
            <div className="whitespace-pre-line text-slate-600 dark:text-slate-300 font-sans">
              {question.explanation}
            </div>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-200 dark:border-slate-800">
              Verified Source: {question.sourceReference}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

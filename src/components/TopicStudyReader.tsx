'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Lightbulb,
  Calculator,
  CheckCircle2,
  FileQuestion,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Bookmark,
  Share2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Topic, Question } from '@/types';
import ExamBadge from './ExamBadge';
import QuestionCard from './QuestionCard';

interface TopicStudyReaderProps {
  topic: Topic;
  isCompleted: boolean;
  onToggleComplete: (topicId: string) => void;
  onNextTopic?: () => void;
  onPrevTopic?: () => void;
  hasNextTopic?: boolean;
  hasPrevTopic?: boolean;
  nextTopicTitle?: string;
  prevTopicTitle?: string;
  relatedQuestions?: Question[];
}

export default function TopicStudyReader({
  topic,
  isCompleted,
  onToggleComplete,
  onNextTopic,
  onPrevTopic,
  hasNextTopic = false,
  hasPrevTopic = false,
  nextTopicTitle,
  prevTopicTitle,
  relatedQuestions = []
}: TopicStudyReaderProps) {
  const [activeTab, setActiveTab] = useState<'theory' | 'concepts' | 'formulas' | 'examples' | 'revision' | 'practice'>('theory');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col">
      {/* 1. TOP HEADER & METADATA */}
      <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <ExamBadge examId={topic.examId} size="sm" />
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Official Syllabus
            </span>
            {topic.estimatedMinutes && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <Clock className="w-3 h-3 text-slate-400" />
                {topic.estimatedMinutes} min read
              </span>
            )}
          </div>

          {/* Mark Complete Action Button */}
          <button
            onClick={() => onToggleComplete(topic.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-white' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
          </button>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
          {topic.title}
        </h1>

        {topic.ncertReference && (
          <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Reference: {topic.ncertReference}</span>
          </div>
        )}
      </div>

      {/* 2. INTERACTIVE STUDY TABS */}
      <div className="flex items-center gap-1.5 p-2 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 overflow-x-auto text-xs font-semibold scrollbar-none">
        <button
          onClick={() => setActiveTab('theory')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all shrink-0 ${
            activeTab === 'theory'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Theory & Notes</span>
        </button>

        <button
          onClick={() => setActiveTab('concepts')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all shrink-0 ${
            activeTab === 'concepts'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Core Concepts ({topic.concepts.length})</span>
        </button>

        {(topic.formulas && topic.formulas.length > 0) && (
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'formulas'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Formulas & Rules ({topic.formulas.length})</span>
          </button>
        )}

        {(topic.solvedExamples && topic.solvedExamples.length > 0) && (
          <button
            onClick={() => setActiveTab('examples')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'examples'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <FileQuestion className="w-3.5 h-3.5" />
            <span>Solved Problems ({topic.solvedExamples.length})</span>
          </button>
        )}

        {(topic.keyTakeaways && topic.keyTakeaways.length > 0) && (
          <button
            onClick={() => setActiveTab('revision')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'revision'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Rapid Revision</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab('practice')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all shrink-0 ${
            activeTab === 'practice'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <FileQuestion className="w-3.5 h-3.5 text-emerald-500" />
          <span>Practice PYQs ({relatedQuestions.length})</span>
        </button>
      </div>

      {/* 3. TAB CONTENT BODY */}
      <div className="p-5 sm:p-7 flex-1 space-y-6">
        {/* TAB 1: THEORY & NOTES */}
        {activeTab === 'theory' && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Comprehensive Study Notes
              </h2>
              <span className="text-xs text-slate-400">Classes 6–10 NCERT / SCERT Aligned</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-850/50 border border-slate-200/80 dark:border-slate-800 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed space-y-4">
              {topic.notes.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Highlight of Core Takeaways */}
            {topic.keyTakeaways && topic.keyTakeaways.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Key Examination Takeaways
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {topic.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CORE CONCEPTS */}
        {activeTab === 'concepts' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Essential Concepts & Principles
              </h2>
              <span className="text-xs text-slate-400">{topic.concepts.length} Key Concepts</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {topic.concepts.map((concept, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3.5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {cIdx + 1}
                  </span>
                  <div className="leading-relaxed flex-1">
                    {concept}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FORMULAS & RULES */}
        {activeTab === 'formulas' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-500" />
                Key Mathematical & Scientific Formulas
              </h2>
              <span className="text-xs text-slate-400">High-Yield Formula Sheet</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {topic.formulas?.map((formula, fIdx) => (
                <div
                  key={fIdx}
                  className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-900/60 space-y-1.5"
                >
                  <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                    Formula {fIdx + 1}
                  </span>
                  <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50 select-all">
                    {formula}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SOLVED PROBLEMS */}
        {activeTab === 'examples' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <FileQuestion className="w-4 h-4 text-indigo-500" />
                Step-by-Step Solved Problems
              </h2>
              <span className="text-xs text-slate-400">{topic.solvedExamples?.length || 0} Model Solutions</span>
            </div>

            <div className="space-y-4">
              {topic.solvedExamples?.map((ex, exIdx) => (
                <div
                  key={exIdx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-xs shrink-0 mt-0.5">
                      Problem {exIdx + 1}
                    </span>
                    <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-snug">
                      {ex.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Detailed Step-by-Step Solution
                    </div>
                    <div className="font-sans whitespace-pre-line leading-relaxed text-slate-700 dark:text-slate-300 pl-2 border-l-2 border-emerald-500">
                      {ex.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: RAPID REVISION */}
        {activeTab === 'revision' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                Rapid Revision & Key Facts
              </h2>
              <span className="text-xs text-slate-400">Exam Hall Recall Points</span>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-3">
              <ul className="space-y-3">
                {topic.keyTakeaways?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 6: PRACTICE QUESTIONS */}
        {activeTab === 'practice' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <FileQuestion className="w-4 h-4 text-emerald-500" />
                Authentic Practice & PYQ Drill
              </h2>
              <span className="text-xs text-slate-400">{relatedQuestions.length} Questions for this Topic</span>
            </div>

            {relatedQuestions.length === 0 ? (
              <div className="text-center py-12 text-slate-400 space-y-2">
                <FileQuestion className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-700" />
                <p className="text-sm font-medium">No direct questions mapped for this specific topic.</p>
                <p className="text-xs text-slate-500">Explore the Practice and PYQ archives for broad chapter questions.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {relatedQuestions.map(q => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    showExamBadge={false}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. FOOTER: PREVIOUS / NEXT TOPIC NAVIGATION */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
        {hasPrevTopic ? (
          <button
            onClick={onPrevTopic}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left hidden sm:block">
              <span className="text-[10px] text-slate-400 block font-normal">Previous Topic</span>
              <span className="truncate max-w-[160px] block">{prevTopicTitle || 'Previous'}</span>
            </div>
            <span className="sm:hidden">Previous</span>
          </button>
        ) : (
          <div />
        )}

        {hasNextTopic ? (
          <button
            onClick={onNextTopic}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-xs"
          >
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-indigo-200 block font-normal">Next Topic</span>
              <span className="truncate max-w-[160px] block">{nextTopicTitle || 'Next'}</span>
            </div>
            <span className="sm:hidden">Next Topic</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

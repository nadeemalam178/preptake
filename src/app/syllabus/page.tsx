'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  FileQuestion,
  Lightbulb,
  Calculator,
  ShieldCheck,
  ChevronRight,
  Bookmark,
  Layers,
  Sparkles
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import QuestionCard from '@/components/QuestionCard';
import { EXAMS, getExamById } from '@/data/exams';
import { SUBJECTS, getAllTopics, getTopicById } from '@/data/syllabi';
import { INITIAL_QUESTIONS } from '@/data/questions';
import { ExamId, Subject, Chapter, Topic, UserProfile } from '@/types';
import { getCurrentUser, toggleTopicCompletion, setLastStudiedTopic } from '@/lib/storage';

function SyllabusContent() {
  const searchParams = useSearchParams();
  const initialTopicParam = searchParams.get('topic');
  const initialExamParam = searchParams.get('exam') as ExamId | null;

  const [user, setUser] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  // Active track selection
  const [selectedExamId, setSelectedExamId] = useState<ExamId>('ctet-p2');
  const [activeSubjectId, setActiveSubjectId] = useState<string>('');
  const [activeTopicId, setActiveTopicId] = useState<string>('');

  useEffect(() => {
    setMounted(true);
    const u = getCurrentUser();
    setUser(u);

    const preferredExam = initialExamParam && EXAMS.some(e => e.id === initialExamParam)
      ? initialExamParam
      : (u.selectedExams[0] || 'ctet-p2');

    setSelectedExamId(preferredExam);

    const relevantSubjects = SUBJECTS.filter(s => s.examId === preferredExam);
    if (relevantSubjects.length > 0) {
      setActiveSubjectId(relevantSubjects[0].id);

      if (initialTopicParam) {
        const found = getTopicById(initialTopicParam);
        if (found) {
          setSelectedExamId(found.examId);
          setActiveSubjectId(found.subjectId);
          setActiveTopicId(found.id);
          return;
        }
      }

      const firstTopic = relevantSubjects[0].chapters[0]?.topics[0];
      if (firstTopic) {
        setActiveTopicId(firstTopic.id);
      }
    }
  }, [initialExamParam, initialTopicParam]);

  // Keep state synced
  const handleExamChange = (examId: ExamId) => {
    setSelectedExamId(examId);
    const subs = SUBJECTS.filter(s => s.examId === examId);
    if (subs.length > 0) {
      setActiveSubjectId(subs[0].id);
      const top = subs[0].chapters[0]?.topics[0];
      if (top) {
        setActiveTopicId(top.id);
        setLastStudiedTopic(top.id);
      }
    }
  };

  const handleTopicSelect = (topic: Topic) => {
    setActiveTopicId(topic.id);
    setLastStudiedTopic(topic.id);
  };

  const handleToggleComplete = (topicId: string) => {
    toggleTopicCompletion(topicId);
    setUser(getCurrentUser());
  };

  const currentSubjects = useMemo(() => {
    return SUBJECTS.filter(s => s.examId === selectedExamId);
  }, [selectedExamId]);

  const activeSubject = useMemo(() => {
    return currentSubjects.find(s => s.id === activeSubjectId) || currentSubjects[0];
  }, [currentSubjects, activeSubjectId]);

  const activeTopic = useMemo(() => {
    return getTopicById(activeTopicId) || activeSubject?.chapters[0]?.topics[0];
  }, [activeTopicId, activeSubject]);

  // Related PYQs for active topic
  const relatedPYQs = useMemo(() => {
    if (!activeTopic) return [];
    if (activeTopic.pyqIds && activeTopic.pyqIds.length > 0) {
      return INITIAL_QUESTIONS.filter(q => activeTopic.pyqIds?.includes(q.id));
    }
    return INITIAL_QUESTIONS.filter(q => q.chapterId === activeTopic.chapterId || q.topicId === activeTopic.id);
  }, [activeTopic]);

  if (!mounted || !user) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isCompleted = activeTopic ? user.completedTopicIds.includes(activeTopic.id) : false;

  return (
    <div className="space-y-6">
      {/* Header & Exam Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Syllabus and Study Materials
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Hierarchical organization: Examination → Subject → Chapter → Topic with concise notes and authentic PYQs.
          </p>
        </div>

        {/* Exam Selection Pills */}
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {EXAMS.map(exam => {
            const isUserExam = user.selectedExams.includes(exam.id);
            const isCurrent = selectedExamId === exam.id;

            return (
              <button
                key={exam.id}
                onClick={() => handleExamChange(exam.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : isUserExam
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                    : 'bg-slate-100 dark:bg-slate-850 text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {exam.shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200 dark:border-slate-800">
        {currentSubjects.map(sub => {
          const isActive = activeSubject?.id === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setActiveSubjectId(sub.id);
                const firstTop = sub.chapters[0]?.topics[0];
                if (firstTop) {
                  setActiveTopicId(firstTop.id);
                  setLastStudiedTopic(firstTop.id);
                }
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 whitespace-nowrap ${
                isActive
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {sub.name}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Left Chapters & Topics Navigator, Right Study Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Navigator (4 cols on lg) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Chapters & Topics
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {activeSubject?.chapters.reduce((acc, c) => acc + c.topics.length, 0)} Topics
            </span>
          </div>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {activeSubject?.chapters.map((chap, cIdx) => (
              <div key={chap.id} className="space-y-1.5">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 px-2 py-1 bg-slate-50 dark:bg-slate-850 rounded">
                  Ch {cIdx + 1}: {chap.title}
                </div>

                <div className="space-y-1 pl-1">
                  {chap.topics.map(t => {
                    const isSelected = activeTopic?.id === t.id;
                    const isDone = user.completedTopicIds.includes(t.id);

                    return (
                      <button
                        key={t.id}
                        onClick={() => handleTopicSelect(t)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between gap-2 transition-all ${
                          isSelected
                            ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        <span className="truncate flex-1">{t.title}</span>
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Study Reader (8 cols on lg) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
          {activeTopic ? (
            <>
              {/* Topic Header & Completion Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <ExamBadge examId={activeTopic.examId} size="sm" />
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Verified Official Curriculum
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {activeTopic.title}
                  </h2>
                  {activeTopic.ncertReference && (
                    <p className="text-xs text-slate-500 font-mono">
                      Ref: {activeTopic.ncertReference}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleToggleComplete(activeTopic.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                    isCompleted
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
                </button>
              </div>

              {/* 1. Concise Study Notes */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  Concise Study Notes
                </h3>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                  {activeTopic.notes}
                </div>
              </div>

              {/* 2. Important Concepts */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  Important Concepts & Principles
                </h3>
                <ul className="space-y-2">
                  {activeTopic.concepts.map((concept, cIdx) => (
                    <li
                      key={cIdx}
                      className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <span className="leading-snug">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Formulas & Solved Examples */}
              {(activeTopic.formulas || activeTopic.solvedExamples) && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-purple-500" />
                    Formulas & Solved Examples
                  </h3>

                  {activeTopic.formulas && activeTopic.formulas.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 space-y-1.5">
                      <p className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                        Key Formulas:
                      </p>
                      <div className="space-y-1 font-mono text-xs sm:text-sm text-indigo-950 dark:text-indigo-100">
                        {activeTopic.formulas.map((f, fIdx) => (
                          <div key={fIdx} className="bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded border border-indigo-200/50 dark:border-indigo-800/50">
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTopic.solvedExamples && activeTopic.solvedExamples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm space-y-2"
                    >
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        Example {exIdx + 1}: {ex.problem}
                      </p>
                      <div className="pl-3 border-l-2 border-indigo-500 text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">Solution: </span>
                        {ex.solution}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 4. Related Authentic PYQs */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <FileQuestion className="w-4 h-4 text-emerald-500" />
                    Related Authentic Previous-Year Questions ({relatedPYQs.length})
                  </h3>
                </div>

                {relatedPYQs.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPYQs.map(pyq => (
                      <QuestionCard
                        key={pyq.id}
                        question={pyq}
                        isBookmarked={user.bookmarkedQuestionIds.includes(pyq.id)}
                        savedAnswerId={user.questionHistory[pyq.id]?.selectedOptionId}
                        showExamBadge={false}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500">
                    No specific PYQs mapped yet for this sub-topic. Check the comprehensive PYQ Archive.
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-500">
              Select a topic from the left panel to begin reading.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SyllabusPage() {
  return (
    <AppLayout pageTitle="Syllabus and Study Materials">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <SyllabusContent />
      </Suspense>
    </AppLayout>
  );
}

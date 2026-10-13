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
  Sparkles,
  Search,
  Filter,
  Flame,
  Check
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import ExamBadge from '@/components/ExamBadge';
import TopicStudyReader from '@/components/TopicStudyReader';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import { EXAMS, getExamById } from '@/data/exams';
import { SUBJECTS, getAllTopics, getTopicById } from '@/data/syllabi';
import { QUESTIONS } from '@/data/questions';
import { ExamId, Subject, Chapter, Topic, UserProfile, Question } from '@/types';
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

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);

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
    setSearchQuery('');
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
    toggleTopicCompletion(selectedExamId, topicId);
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

  // All topics in subject in sequential order for navigation
  const subjectTopics = useMemo(() => {
    if (!activeSubject) return [];
    const list: Topic[] = [];
    for (const ch of activeSubject.chapters) {
      list.push(...ch.topics);
    }
    return list;
  }, [activeSubject]);

  // Filtered chapters & topics based on search & completion status
  const filteredChapters = useMemo(() => {
    if (!activeSubject) return [];
    const q = searchQuery.toLowerCase().trim();

    return activeSubject.chapters.map(ch => {
      const filteredTopics = ch.topics.filter(t => {
        const matchesSearch = !q ||
          t.title.toLowerCase().includes(q) ||
          t.notes.toLowerCase().includes(q) ||
          (t.concepts && t.concepts.some(c => c.toLowerCase().includes(q)));

        const isDone = user?.completedTopicIds.includes(t.id) || false;
        const matchesStatus =
          statusFilter === 'all' ||
          (statusFilter === 'completed' && isDone) ||
          (statusFilter === 'incomplete' && !isDone);

        return matchesSearch && matchesStatus;
      });

      return {
        ...ch,
        topics: filteredTopics
      };
    }).filter(ch => ch.topics.length > 0);
  }, [activeSubject, searchQuery, statusFilter, user]);

  // Current topic navigation pointers
  const currentTopicIndex = useMemo(() => {
    return subjectTopics.findIndex(t => t.id === activeTopic?.id);
  }, [subjectTopics, activeTopic]);

  const hasPrevTopic = currentTopicIndex > 0;
  const hasNextTopic = currentTopicIndex >= 0 && currentTopicIndex < subjectTopics.length - 1;
  const prevTopic = hasPrevTopic ? subjectTopics[currentTopicIndex - 1] : undefined;
  const nextTopic = hasNextTopic ? subjectTopics[currentTopicIndex + 1] : undefined;

  const handlePrevTopic = () => {
    if (prevTopic) handleTopicSelect(prevTopic);
  };

  const handleNextTopic = () => {
    if (nextTopic) handleTopicSelect(nextTopic);
  };

  // Related questions for active topic strictly filtered by examId
  const relatedQuestions: Question[] = useMemo(() => {
    if (!activeTopic) return [];
    if (activeTopic.pyqIds && activeTopic.pyqIds.length > 0) {
      const matches = QUESTIONS.filter(q => activeTopic.pyqIds?.includes(q.id) && q.examId === activeTopic.examId);
      if (matches.length > 0) return matches;
    }
    return QUESTIONS.filter(q =>
      (q.topicId === activeTopic.id || q.chapterId === activeTopic.chapterId) &&
      q.examId === activeTopic.examId
    ).slice(0, 10);
  }, [activeTopic]);

  if (!mounted || !user) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isCompleted = activeTopic ? user.completedTopicIds.includes(activeTopic.id) : false;

  // Active subject stats
  const subjectTotalTopics = subjectTopics.length;
  const subjectCompletedTopics = subjectTopics.filter(t => user.completedTopicIds.includes(t.id)).length;
  const subjectProgressPct = subjectTotalTopics > 0
    ? Math.round((subjectCompletedTopics / subjectTotalTopics) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* 1. Header & Exam Track Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Syllabus and Study Materials
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Complete NCERT / SCERT curriculum with comprehensive notes, core principles, formulas, solved problems, and PYQ drills.
          </p>
        </div>

        {/* Exam Selection Pills (Strictly filtered to user's saved tracks) */}
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {user.selectedExams.map(examId => {
            const exam = getExamById(examId);
            if (!exam) return null;
            const isCurrent = selectedExamId === exam.id;

            return (
              <button
                key={exam.id}
                onClick={() => handleExamChange(exam.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {exam.shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Subject Tabs & Formula Sheet Access */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {currentSubjects.map(sub => {
            const isActive = activeSubject?.id === sub.id;
            const subTotal = sub.chapters.reduce((a, c) => a + c.topics.length, 0);
            const subDone = sub.chapters.reduce((a, c) => a + c.topics.filter(t => user.completedTopicIds.includes(t.id)).length, 0);

            return (
              <button
                key={sub.id}
                onClick={() => {
                  setActiveSubjectId(sub.id);
                  setSearchQuery('');
                  const firstTop = sub.chapters[0]?.topics[0];
                  if (firstTop) {
                    setActiveTopicId(firstTop.id);
                    setLastStudiedTopic(firstTop.id);
                  }
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-t-xl transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <span>{sub.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {subDone}/{subTotal}
                </span>
              </button>
            );
          })}
        </div>

        {activeSubject && (
          <button
            onClick={() => setIsFormulaModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-semibold hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors shrink-0 self-start sm:self-auto mb-1"
          >
            <Calculator className="w-3.5 h-3.5 text-purple-600" />
            <span>Formula Sheet</span>
          </button>
        )}
      </div>

      {/* 3. Main Grid: Left Chapters & Topics Navigator, Right TopicStudyReader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Navigator (4 cols on lg) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-4">
          {/* Navigator Header with Progress */}
          <div className="space-y-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-500">
                Curriculum Progress
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                {subjectProgressPct}% ({subjectCompletedTopics}/{subjectTotalTopics})
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${subjectProgressPct}%` }}
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics or concepts..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Completion Status Filter Buttons */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-50 dark:bg-slate-850 rounded-xl text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            <button
              onClick={() => setStatusFilter('all')}
              className={`py-1 rounded-lg transition-all ${
                statusFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              All ({subjectTotalTopics})
            </button>
            <button
              onClick={() => setStatusFilter('incomplete')}
              className={`py-1 rounded-lg transition-all ${
                statusFilter === 'incomplete'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Pending ({subjectTotalTopics - subjectCompletedTopics})
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`py-1 rounded-lg transition-all ${
                statusFilter === 'completed'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Done ({subjectCompletedTopics})
            </button>
          </div>

          {/* Chapter & Topic Tree */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin">
            {filteredChapters.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs">
                No topics match your current filter.
              </div>
            ) : (
              filteredChapters.map((chap, cIdx) => (
                <div key={chap.id} className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 px-2.5 py-1.5 bg-slate-100/70 dark:bg-slate-850 rounded-lg flex items-center justify-between">
                    <span className="truncate">Ch {chap.order}: {chap.title}</span>
                    <span className="text-[10px] text-slate-400 font-normal shrink-0">
                      {chap.topics.length} topics
                    </span>
                  </div>

                  <div className="space-y-1 pl-1">
                    {chap.topics.map(t => {
                      const isSelected = activeTopic?.id === t.id;
                      const isDone = user.completedTopicIds.includes(t.id);

                      return (
                        <button
                          key={t.id}
                          onClick={() => handleTopicSelect(t)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between gap-2 transition-all ${
                            isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
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
              ))
            )}
          </div>
        </div>

        {/* Right Study Reader (8 cols on lg) */}
        <div className="lg:col-span-8">
          {activeTopic ? (
            <TopicStudyReader
              topic={activeTopic}
              isCompleted={isCompleted}
              onToggleComplete={handleToggleComplete}
              onNextTopic={handleNextTopic}
              onPrevTopic={handlePrevTopic}
              hasNextTopic={hasNextTopic}
              hasPrevTopic={hasPrevTopic}
              nextTopicTitle={nextTopic?.title}
              prevTopicTitle={prevTopic?.title}
              relatedQuestions={relatedQuestions}
            />
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-500">
              Select a topic from the left panel to begin study.
            </div>
          )}
        </div>
      </div>

      {/* Formula Sheet Modal */}
      {activeSubject && (
        <FormulaSheetModal
          isOpen={isFormulaModalOpen}
          onClose={() => setIsFormulaModalOpen(false)}
          subject={activeSubject}
        />
      )}
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

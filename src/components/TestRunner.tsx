'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Timer,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ArrowLeft,
  Award,
  AlertCircle
} from 'lucide-react';
import { PracticeTest, Question, TestResult } from '@/types';
import { QUESTIONS } from '@/data/questions';
import { recordTestResult } from '@/lib/storage';

interface TestRunnerProps {
  test: PracticeTest;
  onClose: () => void;
  onFinish?: (result: TestResult) => void;
}

export default function TestRunner({ test, onClose, onFinish }: TestRunnerProps) {
  // Load questions for this test
  const questions: Question[] = test.questionIds
    .map(id => QUESTIONS.find(q => q.id === id))
    .filter((q): q is Question => q !== undefined);

  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [showPaletteOnMobile, setShowPaletteOnMobile] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isSubmitted]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleClearAnswer = () => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const handleToggleReview = () => {
    if (isSubmitted) return;
    setMarkedForReview(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleSubmitTest = () => {
    let correctCount = 0;
    let incorrectCount = 0;
    const answersData = questions.map(q => {
      const chosen = selectedAnswers[q.id];
      const isCorrect = chosen === q.correctAnswerId;
      if (chosen) {
        if (isCorrect) correctCount++;
        else incorrectCount++;
      }
      return {
        questionId: q.id,
        selectedOptionId: chosen || '',
        isCorrect
      };
    });

    const attemptedCount = Object.keys(selectedAnswers).length;
    const unattemptedCount = questions.length - attemptedCount;
    const accuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
    const score = correctCount; // 1 mark per correct answer

    const result: TestResult = {
      id: 'res_' + Math.random().toString(36).substr(2, 9),
      testId: test.id,
      testTitle: test.title,
      examId: test.examId,
      date: new Date().toISOString(),
      totalQuestions: questions.length,
      attempted: attemptedCount,
      correct: correctCount,
      incorrect: incorrectCount,
      unattempted: unattemptedCount,
      score,
      accuracy,
      timeSpentSeconds: timeSpent,
      answers: answersData
    };

    // Save to storage
    recordTestResult(result);
    setTestResult(result);
    setIsSubmitted(true);
    setShowConfirmSubmit(false);

    // Confetti on passing > 50%
    if (accuracy >= 50) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }

    if (onFinish) onFinish(result);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-600 dark:text-slate-400">No questions found for this test.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium"
        >
          Return to Tests
        </button>
      </div>
    );
  }

  // Pre-test instructions screen before beginning
  if (!hasStarted) {
    const isBpsc = test.examId.startsWith('bpsc');
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 max-w-3xl mx-auto shadow-xs">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                Official Examination Pattern
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {test.type === 'mock' ? 'Full Mock Test' : test.type === 'pyq-paper' ? 'Official PYQ Paper' : 'Targeted Practice'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {test.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {test.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Cancel"
          >
            <XCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Test Overview Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-500 font-medium">Total Questions</span>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {questions.length} Qs
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-500 font-medium">Total Duration</span>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {test.durationMinutes} mins
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-500 font-medium">Marking Scheme</span>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              +1 / 0 Marks
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-500 font-medium">Format</span>
            <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
              {isBpsc ? '5 Options (A–E)' : '4 Options (A–D)'}
            </p>
          </div>
        </div>

        {/* Detailed Instructions */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-indigo-600" />
            <span>Important Test Instructions & Guidelines</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed list-disc pl-5">
            <li>
              <strong>Timer & Auto-Submission:</strong> The timer will begin immediately when you click <em>Begin Test</em>. The test will automatically submit when the allotted time of {test.durationMinutes} minutes expires.
            </li>
            <li>
              <strong>Negative Marking:</strong> There is <strong>no negative marking</strong> in this examination. Attempting all questions is encouraged.
            </li>
            <li>
              <strong>Question Options:</strong> {isBpsc ? 'As per BPSC official rules, questions contain 5 options (A, B, C, D, and E: "None of the above / More than one of the above").' : 'Questions have four choices (A, B, C, D) matching the official examination pattern.'}
            </li>
            <li>
              <strong>Question Palette & Review:</strong> You can navigate freely between questions using the Question Palette. You may change your chosen answer or use the <em>Mark for Review</em> button at any stage.
            </li>
            <li>
              <strong>Result Persistence:</strong> Upon submission, your score, accuracy, question breakdown, and detailed explanations will be calculated and synchronized with your Google Sheets record.
            </li>
          </ul>
        </div>

        {/* Color Legend */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300">Question Palette Color Codes:</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600 inline-block" />
              <span>Answered</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-500 inline-block" />
              <span>Marked for Review</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-200 dark:bg-slate-700 inline-block" />
              <span>Not Answered</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded border-2 border-indigo-600 bg-white dark:bg-slate-900 inline-block" />
              <span>Current Question</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors"
          >
            Cancel & Return
          </button>
          <button
            onClick={() => setHasStarted(true)}
            className="py-2.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-2"
          >
            <Timer className="w-4 h-4" />
            <span>I Have Read the Instructions — Begin Test</span>
          </button>
        </div>
      </div>
    );
  }

  // Submitted Scorecard View
  if (isSubmitted && testResult) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Test Summary & Performance
              </h2>
            </div>
            <p className="text-sm text-slate-500">{test.title}</p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tests
          </button>
        </div>

        {/* Score Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900">
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Score</span>
            <p className="text-2xl font-bold text-indigo-950 dark:text-indigo-100 mt-1">
              {testResult.score} / {testResult.totalQuestions}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Accuracy</span>
            <p className="text-2xl font-bold text-emerald-950 dark:text-emerald-100 mt-1">
              {testResult.accuracy.toFixed(0)}%
            </p>
          </div>
          <div className="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900">
            <span className="text-xs text-rose-600 dark:text-rose-400 font-medium">Incorrect</span>
            <p className="text-2xl font-bold text-rose-950 dark:text-rose-100 mt-1">
              {testResult.incorrect}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 font-medium">Time Taken</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {formatTime(testResult.timeSpentSeconds)}
            </p>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Detailed Solution & Question Breakdown
          </h3>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const selected = selectedAnswers[q.id];
              const isCorrect = selected === q.correctAnswerId;
              const isAttempted = Boolean(selected);

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    !isAttempted
                      ? 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50'
                      : isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/20'
                      : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      Q {idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium">
                      {!isAttempted ? (
                        <span className="text-slate-400">Unattempted</span>
                      ) : isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                        </span>
                      ) : (
                        <span className="text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                    {q.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    {q.options.map(opt => {
                      const isOptionCorrect = opt.id === q.correctAnswerId;
                      const wasOptionChosen = selected === opt.id;

                      let badgeStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                      if (isOptionCorrect) {
                        badgeStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                      } else if (wasOptionChosen && !isOptionCorrect) {
                        badgeStyle = 'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 line-through';
                      }

                      return (
                        <div key={opt.id} className={`p-2 rounded-lg border flex items-start gap-2 ${badgeStyle}`}>
                          <span className="font-bold shrink-0">{opt.id}.</span>
                          <span>{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-lg bg-slate-100/80 dark:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p className="font-semibold text-slate-900 dark:text-slate-200 mb-1">
                      Official Source & Solution:
                    </p>
                    <p className="whitespace-pre-line">{q.explanation}</p>
                    <p className="text-[11px] text-slate-400 mt-1 font-mono">{q.sourceReference}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Test Interface
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Top Bar with Timer and Progress */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 truncate max-w-[200px] sm:max-w-md">
            {test.title}
          </h2>
          <p className="text-xs text-slate-500">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Timer */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-sm ${
              timeLeftSeconds < 120
                ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 animate-pulse'
                : 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>{formatTime(timeLeftSeconds)}</span>
          </div>

          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[460px]">
        {/* Main Question Panel (3 cols) */}
        <div className="lg:col-span-3 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Question {currentIndex + 1}
              </span>

              <button
                onClick={handleToggleReview}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                  markedForReview[currentQuestion.id]
                    ? 'bg-purple-50 text-purple-700 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${markedForReview[currentQuestion.id] ? 'fill-purple-600' : ''}`} />
                <span>{markedForReview[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed mb-6">
              {currentQuestion.questionText}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map(option => {
                const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full text-left flex items-start gap-3 p-3.5 rounded-xl border text-sm transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 font-medium ring-1 ring-indigo-600'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {option.id}
                    </span>
                    <span className="flex-1 leading-snug">{option.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={handleClearAnswer}
              disabled={!selectedAnswers[currentQuestion.id]}
              className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-rose-600 disabled:opacity-40 transition-colors"
            >
              Clear Selection
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold disabled:opacity-40 shadow-xs transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Question Navigation Palette (1 col) */}
        <div className="p-4 sm:p-5 bg-slate-50/60 dark:bg-slate-850/60 flex flex-col justify-between border-t lg:border-t-0">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question Palette ({questions.length} Qs)
              </h4>
              <button
                type="button"
                onClick={() => setShowPaletteOnMobile(!showPaletteOnMobile)}
                className="lg:hidden text-xs text-indigo-600 dark:text-indigo-400 font-semibold"
              >
                {showPaletteOnMobile ? 'Hide Grid ▲' : 'Show Grid ▼'}
              </button>
            </div>

            <div className={`space-y-4 ${showPaletteOnMobile ? 'block' : 'hidden lg:block'}`}>
              <div className="max-h-72 sm:max-h-80 overflow-y-auto pr-1 grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isSelected = selectedAnswers[q.id];
                  const isCurrent = currentIndex === idx;
                  const isMarked = markedForReview[q.id];

                  let pillColor = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                  if (isSelected) {
                    pillColor = 'bg-emerald-600 border-emerald-600 text-white font-bold';
                  } else if (isMarked) {
                    pillColor = 'bg-purple-600 border-purple-600 text-white font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                          setShowPaletteOnMobile(false);
                        }
                      }}
                      className={`h-9 rounded-lg text-xs font-semibold border flex items-center justify-center transition-all ${pillColor} ${
                        isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900 scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="space-y-2 text-[11px] text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-emerald-600 shrink-0" />
                  <span>Answered ({Object.keys(selectedAnswers).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-purple-600 shrink-0" />
                  <span>Marked for Review ({Object.values(markedForReview).filter(Boolean).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shrink-0" />
                  <span>Unattempted ({questions.length - Object.keys(selectedAnswers).length})</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 lg:pt-6">
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors"
            >
              Submit & Review Results
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 max-w-sm w-full shadow-xl">
            <div className="flex items-center gap-2.5 text-indigo-600 mb-3">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Confirm Submission
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              You have answered{' '}
              <strong className="text-emerald-600">
                {Object.keys(selectedAnswers).length}
              </strong>{' '}
              out of <strong>{questions.length}</strong> questions.
              {questions.length - Object.keys(selectedAnswers).length > 0 && (
                <span className="block mt-1 text-amber-600 dark:text-amber-400">
                  {questions.length - Object.keys(selectedAnswers).length} question(s) remain unattempted.
                </span>
              )}
            </p>

            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Resume Test
              </button>
              <button
                onClick={handleSubmitTest}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

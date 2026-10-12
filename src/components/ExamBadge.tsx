'use client';

import React from 'react';
import { ExamId } from '@/types';
import { getExamById } from '@/data/exams';

interface ExamBadgeProps {
  examId: ExamId;
  size?: 'sm' | 'md';
}

export default function ExamBadge({ examId, size = 'sm' }: ExamBadgeProps) {
  const exam = getExamById(examId);
  if (!exam) return null;

  const colorStyles: Record<ExamId, string> = {
    'ctet-p2': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
    'bihar-stet-p1': 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    'bpsc-tre-middle': 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    'bpsc-tre-secondary': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800'
  };

  const sizeStyles = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${colorStyles[examId]} ${sizeStyles}`}
    >
      {exam.shortName}
    </span>
  );
}

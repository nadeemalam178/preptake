import { PracticeTest } from "@/types";
import rawTests from "./tests.json";

export const TESTS: PracticeTest[] = rawTests as PracticeTest[];

export function getTestsByExam(examId: string): PracticeTest[] {
  return TESTS.filter(t => t.examId === examId);
}

export function getTestById(id: string): PracticeTest | undefined {
  return TESTS.find(t => t.id === id);
}

export const PRACTICE_TESTS = TESTS;

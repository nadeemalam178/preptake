import { Question } from "@/types";
import rawQuestions from "./questions.json";

export const QUESTIONS: Question[] = rawQuestions as Question[];

export function getQuestionsByExam(examId: string): Question[] {
  return QUESTIONS.filter(q => q.examId === examId);
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return QUESTIONS.filter(q => q.topicId === topicId);
}

export function getQuestionsByChapter(chapterId: string): Question[] {
  return QUESTIONS.filter(q => q.chapterId === chapterId);
}

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS.find(q => q.id === id);
}

export const INITIAL_QUESTIONS = QUESTIONS;

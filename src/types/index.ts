export type ExamId = 
  | 'ctet-p2'
  | 'bihar-stet-p1'
  | 'bpsc-tre-middle'
  | 'bpsc-tre-secondary';

export interface Exam {
  id: ExamId;
  name: string;
  shortName: string;
  category: string;
  targetClasses: string;
  description: string;
  officialBody: string;
  badgeColor: string;
  subjects: string[];
}

export interface SolvedExample {
  problem: string;
  solution: string;
}

export interface Topic {
  id: string;
  chapterId: string;
  subjectId: string;
  examId: ExamId;
  title: string;
  order: number;
  notes: string;
  concepts: string[];
  formulas?: string[];
  solvedExamples?: SolvedExample[];
  practiceQuestionIds?: string[];
  pyqIds?: string[];
  verificationStatus: 'verified' | 'provisional';
  ncertReference?: string;
}

export interface Chapter {
  id: string;
  subjectId: string;
  examId: ExamId;
  title: string;
  order: number;
  description?: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  examId: ExamId;
  name: string;
  code: string;
  iconName: string;
  description: string;
  chapters: Chapter[];
}

export interface QuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  text: string;
}

export type QuestionVerificationStatus = 
  | 'Verified Official PYQ'
  | 'Curated Practice Drill'
  | 'Mock Question';

export interface Question {
  id: string;
  examId: ExamId;
  subjectId: string;
  chapterId: string;
  topicId?: string;
  year?: number;
  session?: string; // e.g. "January", "August", "TRE 2.0"
  questionText: string;
  options: QuestionOption[];
  correctAnswerId: string;
  explanation: string;
  sourceReference: string; // e.g. "CTET Jan 2024 Paper 2 (Set K, Q. 65)"
  isOfficialPYQ: boolean;
  verificationStatus: QuestionVerificationStatus;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
}

export type TestType = 'topic' | 'chapter' | 'pyq-paper' | 'mock';

export interface PracticeTest {
  id: string;
  examId: ExamId;
  type: TestType;
  title: string;
  description: string;
  durationMinutes: number;
  questionIds: string[];
  subjectId?: string;
  chapterId?: string;
}

export interface TestAttemptAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export interface TestResult {
  id: string;
  testId: string;
  testTitle: string;
  examId: ExamId;
  date: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  accuracy: number;
  timeSpentSeconds: number;
  answers: TestAttemptAnswer[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarSeed?: string;
  selectedExams: ExamId[];
  completedTopicIds: string[];
  bookmarkedQuestionIds: string[];
  attemptedQuestionIds: string[];
  questionHistory: Record<string, {
    selectedOptionId: string;
    isCorrect: boolean;
    timestamp: string;
  }>;
  testResults: TestResult[];
  lastStudiedTopicId?: string;
  googleSheetUrl?: string;
  createdAt: string;
  updatedAt: string;
}

import { ExamId, TestResult, UserProfile } from '@/types';
import { supabase, isSupabaseConfigured } from './supabase';

const STORAGE_KEY_CURRENT_USER = 'preptake_current_user_id';
const STORAGE_KEY_USERS_PREFIX = 'preptake_user_profile_';
const STORAGE_KEY_ALL_USERS = 'preptake_registered_users';

export const DEFAULT_EXAMS: ExamId[] = ['ctet-p2', 'bihar-stet-p1'];

function generateId(): string {
  return 'usr_' + Math.random().toString(36).substring(2, 9);
}

export function createDefaultProfile(name: string = 'Candidate', email: string = 'student@preptake.edu'): UserProfile {
  const now = new Date().toISOString();
  return {
    id: generateId(),
    name: name.trim() || 'Candidate',
    email: email.trim().toLowerCase() || 'student@preptake.edu',
    selectedExams: DEFAULT_EXAMS,
    completedTopicIds: [],
    bookmarkedQuestionIds: [],
    attemptedQuestionIds: [],
    questionHistory: {},
    testResults: [],
    lastStudiedTopicId: 'ctet-math-t1',
    createdAt: now,
    updatedAt: now
  };
}

export function getAllSavedUsers(): { id: string; name: string; email: string }[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ALL_USERS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse saved users list', e);
    return [];
  }
}

function saveUsersList(users: { id: string; name: string; email: string }[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(users));
}

export function getUserProfile(userId: string): UserProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_USERS_PREFIX}${userId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to get user profile', e);
    return null;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return;
  try {
    profile.updatedAt = new Date().toISOString();
    localStorage.setItem(`${STORAGE_KEY_USERS_PREFIX}${profile.id}`, JSON.stringify(profile));
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, profile.id);

    // Update users index
    const users = getAllSavedUsers();
    const index = users.findIndex(u => u.id === profile.id);
    if (index >= 0) {
      users[index] = { id: profile.id, name: profile.name, email: profile.email };
    } else {
      users.push({ id: profile.id, name: profile.name, email: profile.email });
    }
    saveUsersList(users);

    // Trigger local storage event for reactive UI across tabs/components
    window.dispatchEvent(new Event('preptake_storage_updated'));

    // Asynchronously push to Supabase if configured
    if (isSupabaseConfigured && supabase) {
      supabase
        .from('user_profiles')
        .upsert({
          id: profile.id,
          name: profile.name,
          email: profile.email,
          selected_exams: profile.selectedExams,
          completed_topics: profile.completedTopicIds,
          bookmarked_questions: profile.bookmarkedQuestionIds,
          attempted_questions: profile.attemptedQuestionIds,
          question_history: profile.questionHistory,
          test_results: profile.testResults,
          last_studied_topic: profile.lastStudiedTopicId,
          google_sheet_url: profile.googleSheetUrl,
          updated_at: profile.updatedAt
        })
        .then(({ error }) => {
          if (error) console.warn('Supabase profile sync notice:', error.message);
        });
    }
  } catch (e) {
    console.error('Failed to save user profile', e);
  }
}

export function getCurrentUser(): UserProfile {
  if (typeof window === 'undefined') {
    return createDefaultProfile();
  }
  const currentId = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
  if (currentId) {
    const existing = getUserProfile(currentId);
    if (existing) return existing;
  }

  // Check if any user exists
  const allUsers = getAllSavedUsers();
  if (allUsers.length > 0) {
    const firstUser = getUserProfile(allUsers[0].id);
    if (firstUser) {
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, firstUser.id);
      return firstUser;
    }
  }

  // Create default initial candidate
  const fresh = createDefaultProfile('B.Ed Aspirant', 'candidate@preptake.in');
  saveUserProfile(fresh);
  return fresh;
}

export function switchUser(userId: string): UserProfile {
  if (typeof window === 'undefined') return createDefaultProfile();
  const profile = getUserProfile(userId);
  if (profile) {
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, profile.id);
    window.dispatchEvent(new Event('preptake_storage_updated'));
    return profile;
  }
  return getCurrentUser();
}

export function loginOrRegisterUser(name: string, email: string): UserProfile {
  if (typeof window === 'undefined') return createDefaultProfile(name, email);
  const cleanEmail = email.trim().toLowerCase();
  const allUsers = getAllSavedUsers();
  const existingSummary = allUsers.find(u => u.email === cleanEmail);

  if (existingSummary) {
    const existing = getUserProfile(existingSummary.id);
    if (existing) {
      if (name && name.trim()) {
        existing.name = name.trim();
        saveUserProfile(existing);
      }
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, existing.id);
      window.dispatchEvent(new Event('preptake_storage_updated'));
      return existing;
    }
  }

  // Create new student profile
  const newProfile = createDefaultProfile(name, cleanEmail);
  saveUserProfile(newProfile);
  return newProfile;
}

export function toggleTopicCompletion(topicId: string): boolean {
  const user = getCurrentUser();
  const exists = user.completedTopicIds.includes(topicId);
  if (exists) {
    user.completedTopicIds = user.completedTopicIds.filter(id => id !== topicId);
  } else {
    user.completedTopicIds.push(topicId);
  }
  saveUserProfile(user);
  return !exists;
}

export function toggleBookmark(questionId: string): boolean {
  const user = getCurrentUser();
  const exists = user.bookmarkedQuestionIds.includes(questionId);
  if (exists) {
    user.bookmarkedQuestionIds = user.bookmarkedQuestionIds.filter(id => id !== questionId);
  } else {
    user.bookmarkedQuestionIds.push(questionId);
  }
  saveUserProfile(user);
  return !exists;
}

export function recordQuestionAttempt(questionId: string, selectedOptionId: string, isCorrect: boolean): void {
  const user = getCurrentUser();
  if (!user.attemptedQuestionIds.includes(questionId)) {
    user.attemptedQuestionIds.push(questionId);
  }
  user.questionHistory[questionId] = {
    selectedOptionId,
    isCorrect,
    timestamp: new Date().toISOString()
  };
  saveUserProfile(user);
}

export function recordTestResult(result: TestResult): void {
  const user = getCurrentUser();
  user.testResults.unshift(result);
  // Also register individual question attempts from this test
  result.answers.forEach(ans => {
    if (!user.attemptedQuestionIds.includes(ans.questionId)) {
      user.attemptedQuestionIds.push(ans.questionId);
    }
    user.questionHistory[ans.questionId] = {
      selectedOptionId: ans.selectedOptionId,
      isCorrect: ans.isCorrect,
      timestamp: result.date
    };
  });
  saveUserProfile(user);
}

export function setLastStudiedTopic(topicId: string): void {
  const user = getCurrentUser();
  user.lastStudiedTopicId = topicId;
  saveUserProfile(user);
}

export function setSelectedExams(examIds: ExamId[]): void {
  const user = getCurrentUser();
  user.selectedExams = examIds.length > 0 ? examIds : DEFAULT_EXAMS;
  saveUserProfile(user);
}

export function toggleSelectedExam(examId: ExamId): void {
  const user = getCurrentUser();
  let updated = [...user.selectedExams];
  if (updated.includes(examId)) {
    if (updated.length > 1) {
      updated = updated.filter(id => id !== examId);
    }
  } else {
    updated.push(examId);
  }
  user.selectedExams = updated;
  saveUserProfile(user);
}

export function setGoogleSheetUrl(url: string): void {
  const user = getCurrentUser();
  user.googleSheetUrl = url.trim();
  saveUserProfile(user);
}

export function exportUserDataAsJSON(): string {
  const user = getCurrentUser();
  return JSON.stringify(user, null, 2);
}

export function exportTestHistoryCSV(): string {
  const user = getCurrentUser();
  const headers = ['Test Title', 'Exam ID', 'Date', 'Total Questions', 'Attempted', 'Correct', 'Incorrect', 'Score', 'Accuracy %'];
  const rows = user.testResults.map(r => [
    `"${r.testTitle.replace(/"/g, '""')}"`,
    r.examId,
    r.date,
    r.totalQuestions,
    r.attempted,
    r.correct,
    r.incorrect,
    r.score,
    r.accuracy.toFixed(1)
  ]);
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

export function resetCurrentUserProgress(): void {
  const user = getCurrentUser();
  user.completedTopicIds = [];
  user.bookmarkedQuestionIds = [];
  user.attemptedQuestionIds = [];
  user.questionHistory = {};
  user.testResults = [];
  saveUserProfile(user);
}

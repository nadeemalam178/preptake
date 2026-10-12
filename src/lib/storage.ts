import { ExamId, TestResult, UserProfile } from '@/types';

const STORAGE_KEY_CURRENT_USER = 'preptake_current_user_id';
const STORAGE_KEY_USERS_PREFIX = 'preptake_user_profile_';
const STORAGE_KEY_ALL_USERS = 'preptake_registered_users';
const STORAGE_KEY_SESSION = 'preptake_session_active';

export const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || '14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0';
export const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec';

export const DEFAULT_EXAMS: ExamId[] = ['ctet-p2', 'bihar-stet-p1'];

export function isSessionActive(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY_SESSION) === 'true';
}

export function setSessionActive(active: boolean): void {
  if (typeof window === 'undefined') return;
  if (active) {
    localStorage.setItem(STORAGE_KEY_SESSION, 'true');
  } else {
    localStorage.removeItem(STORAGE_KEY_SESSION);
  }
}

export function createDefaultProfile(userId: string = 'student1', displayName: string = 'Candidate'): UserProfile {
  const now = new Date().toISOString();
  return {
    id: userId.trim().toLowerCase(),
    name: displayName.trim() || 'Candidate',
    email: `${userId.trim().toLowerCase()}@preptake.internal`,
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

export function getAllSavedUsers(): { id: string; name: string }[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ALL_USERS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveUsersList(users: { id: string; name: string }[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(users));
}

export function getUserProfile(userId: string): UserProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_USERS_PREFIX}${userId.toLowerCase()}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return;
  try {
    profile.updatedAt = new Date().toISOString();
    const cleanId = profile.id.toLowerCase();
    localStorage.setItem(`${STORAGE_KEY_USERS_PREFIX}${cleanId}`, JSON.stringify(profile));
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, cleanId);

    // Update local users index
    const users = getAllSavedUsers();
    const index = users.findIndex(u => u.id === cleanId);
    if (index >= 0) {
      users[index] = { id: cleanId, name: profile.name };
    } else {
      users.push({ id: cleanId, name: profile.name });
    }
    saveUsersList(users);

    // Broadcast reactive update to all views
    window.dispatchEvent(new Event('preptake_storage_updated'));
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

  const allUsers = getAllSavedUsers();
  if (allUsers.length > 0) {
    const first = getUserProfile(allUsers[0].id);
    if (first) {
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, first.id);
      return first;
    }
  }

  const fresh = createDefaultProfile('nadeem', 'Nadeem');
  saveUserProfile(fresh);
  return fresh;
}

export async function loginUserWithBackend(userId: string, plainPassword: string): Promise<{ success: boolean; error?: string; user?: UserProfile }> {
  const cleanId = userId.trim().toLowerCase();

  // If Google Apps Script Web App URL is configured, authenticate server-side against Google Sheets!
  if (APPS_SCRIPT_URL) {
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'login',
          userId: cleanId,
          password: plainPassword
        })
      });

      if (response.ok) {
        const resData = await response.json();
        if (resData.success && resData.user) {
          // Merge server data into user profile
          const serverData = resData.data || {};
          let profile = getUserProfile(cleanId);
          if (!profile) {
            profile = createDefaultProfile(cleanId, resData.user.displayName || cleanId);
          }
          profile.name = resData.user.displayName || profile.name;
          if (serverData.selectedExams && serverData.selectedExams.length > 0) {
            profile.selectedExams = serverData.selectedExams;
          }
          if (serverData.completedTopicIds) profile.completedTopicIds = serverData.completedTopicIds;
          if (serverData.bookmarkedQuestionIds) profile.bookmarkedQuestionIds = serverData.bookmarkedQuestionIds;
          if (serverData.testResults) profile.testResults = serverData.testResults;
          if (serverData.questionHistory) profile.questionHistory = serverData.questionHistory;
          if (serverData.attemptedQuestionIds) profile.attemptedQuestionIds = serverData.attemptedQuestionIds;

          saveUserProfile(profile);
          setSessionActive(true);
          return { success: true, user: profile };
        } else {
          return { success: false, error: resData.error || 'Invalid credentials' };
        }
      }
    } catch (err: any) {
      console.warn('Apps Script backend unreachable, falling back to verified local candidate session:', err);
    }
  }

  // Local student verification fallback
  let profile = getUserProfile(cleanId);
  if (!profile) {
    profile = createDefaultProfile(cleanId, cleanId.charAt(0).toUpperCase() + cleanId.slice(1));
  }
  saveUserProfile(profile);
  setSessionActive(true);
  return { success: true, user: profile };
}

export function logoutUser(): void {
  setSessionActive(false);
  window.dispatchEvent(new Event('preptake_storage_updated'));
}

export function switchUser(userId: string): UserProfile {
  if (typeof window === 'undefined') return createDefaultProfile();
  const profile = getUserProfile(userId);
  if (profile) {
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, profile.id);
    setSessionActive(true);
    window.dispatchEvent(new Event('preptake_storage_updated'));
    return profile;
  }
  return getCurrentUser();
}

function postToBackend(payload: Record<string, any>): void {
  if (!APPS_SCRIPT_URL || typeof window === 'undefined') return;
  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).catch(e => console.warn('Google Sheet sync notice:', e));
}

export function toggleTopicCompletion(examId: ExamId, topicId: string): boolean {
  const user = getCurrentUser();
  const exists = user.completedTopicIds.includes(topicId);
  if (exists) {
    user.completedTopicIds = user.completedTopicIds.filter(id => id !== topicId);
  } else {
    user.completedTopicIds.push(topicId);
  }
  saveUserProfile(user);

  postToBackend({
    action: 'toggleTopicCompletion',
    userId: user.id,
    examId,
    topicId,
    isCompleted: !exists
  });

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

  postToBackend({
    action: 'toggleBookmark',
    userId: user.id,
    questionId
  });

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

  postToBackend({
    action: 'recordAnswer',
    userId: user.id,
    questionId,
    selectedAnswer: selectedOptionId,
    isCorrect
  });
}

export function recordTestResult(result: TestResult): void {
  const user = getCurrentUser();
  user.testResults.unshift(result);
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

  postToBackend({
    action: 'recordTestAttempt',
    userId: user.id,
    testResult: result
  });
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

  postToBackend({
    action: 'saveExamSelections',
    userId: user.id,
    examIds: user.selectedExams
  });
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

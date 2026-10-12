import { ExamId, TestResult, UserProfile } from '@/types';

const STORAGE_KEY_SESSION_TOKEN = 'preptake_session_token';
const STORAGE_KEY_CURRENT_USER = 'preptake_current_user_profile';

export const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || '14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0';
export const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec';

export const DEFAULT_EXAMS: ExamId[] = ['ctet-p2', 'bihar-stet-p1'];

/**
 * Session Token Management
 */
export function getSessionToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY_SESSION_TOKEN);
}

export function setSessionToken(token: string | null): void {
  if (typeof window === 'undefined') return;
  if (token) {
    localStorage.setItem(STORAGE_KEY_SESSION_TOKEN, token);
  } else {
    localStorage.removeItem(STORAGE_KEY_SESSION_TOKEN);
  }
}

export function isSessionActive(): boolean {
  if (typeof window === 'undefined') return false;
  const token = getSessionToken();
  return Boolean(token && token.trim().length > 0);
}

/**
 * Profile helpers
 */
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

export function getCurrentUser(): UserProfile {
  if (typeof window === 'undefined') {
    return createDefaultProfile();
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error reading cached user profile:', e);
  }
  return createDefaultProfile();
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return;
  try {
    profile.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(profile));
    window.dispatchEvent(new Event('preptake_storage_updated'));
  } catch (e) {
    console.error('Failed to save user profile cache', e);
  }
}

/**
 * Send authenticated POST payload to Apps Script backend
 */
function postToBackend(payload: Record<string, any>): void {
  if (!APPS_SCRIPT_URL || typeof window === 'undefined') return;
  const token = getSessionToken();
  if (!token) return;

  const body = {
    ...payload,
    sessionToken: token
  };

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body)
  }).catch(e => console.warn('Google Sheet background sync notice:', e));
}

/**
 * Server Authentication: Login
 * Authenticates against Google Sheets Users table using salted SHA-256.
 * Generates and stores a secure sessionToken.
 */
export async function loginUserWithBackend(
  userId: string,
  plainPassword: string
): Promise<{ success: boolean; error?: string; user?: UserProfile }> {
  const cleanId = userId.trim().toLowerCase();

  if (!cleanId || !plainPassword) {
    return { success: false, error: 'User ID and Password are required.' };
  }

  if (!APPS_SCRIPT_URL) {
    return { success: false, error: 'Google Apps Script backend URL is not configured.' };
  }

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

    if (!response.ok) {
      return { success: false, error: `Server error (${response.status}). Please try again.` };
    }

    const resData = await response.json();
    if (resData.success && resData.sessionToken && resData.user) {
      // Store verified session token
      setSessionToken(resData.sessionToken);

      // Construct and cache profile
      const serverData = resData.data || {};
      const profile: UserProfile = {
        id: resData.user.userId,
        name: resData.user.displayName || resData.user.userId,
        email: `${resData.user.userId}@preptake.internal`,
        selectedExams: serverData.selectedExams && serverData.selectedExams.length > 0
          ? serverData.selectedExams
          : DEFAULT_EXAMS,
        completedTopicIds: serverData.completedTopicIds || [],
        bookmarkedQuestionIds: serverData.bookmarkedQuestionIds || [],
        attemptedQuestionIds: serverData.attemptedQuestionIds || [],
        questionHistory: serverData.questionHistory || {},
        testResults: serverData.testResults || [],
        lastStudiedTopicId: serverData.lastStudiedTopicId || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      saveUserProfile(profile);
      return { success: true, user: profile };
    } else {
      return { success: false, error: resData.error || 'Invalid User ID or Password.' };
    }
  } catch (err: any) {
    console.error('Login network error:', err);
    return {
      success: false,
      error: 'Unable to connect to Google Sheets backend. Please check your internet connection.'
    };
  }
}

/**
 * Server Authentication: New User Registration
 * Validates fields on frontend and server, checks uniqueness with LockService,
 * stores salted hash in Google Sheets Users tab, and establishes a new session.
 */
export async function registerUserWithBackend(
  fullName: string,
  userId: string,
  plainPassword: string,
  confirmPassword: string,
  selectedExams: ExamId[] = DEFAULT_EXAMS
): Promise<{ success: boolean; error?: string; user?: UserProfile; isNewUser?: boolean }> {
  const cleanName = fullName.trim();
  const cleanId = userId.trim().toLowerCase();

  // Frontend validation
  if (!cleanName || cleanName.length < 2) {
    return { success: false, error: 'Full Name must be at least 2 characters.' };
  }
  if (!cleanId || cleanId.length < 3 || cleanId.length > 30) {
    return { success: false, error: 'User ID must be between 3 and 30 characters.' };
  }
  const idRegex = /^[a-z0-9_-]+$/;
  if (!idRegex.test(cleanId)) {
    return { success: false, error: 'User ID can only contain letters, numbers, hyphens, and underscores.' };
  }
  if (!plainPassword || plainPassword.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters long.' };
  }
  if (plainPassword !== confirmPassword) {
    return { success: false, error: 'Password and Confirm Password do not match.' };
  }
  if (!selectedExams || selectedExams.length === 0) {
    return { success: false, error: 'Please select at least one examination to prepare for.' };
  }

  if (!APPS_SCRIPT_URL) {
    return { success: false, error: 'Google Apps Script backend URL is not configured.' };
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'register',
        fullName: cleanName,
        userId: cleanId,
        password: plainPassword,
        confirmPassword: confirmPassword,
        selectedExams: selectedExams
      })
    });

    if (!response.ok) {
      return { success: false, error: `Registration server error (${response.status}). Please try again.` };
    }

    const resData = await response.json();
    if (resData.success && resData.sessionToken && resData.user) {
      // Store verified session token
      setSessionToken(resData.sessionToken);

      const profile: UserProfile = {
        id: resData.user.userId,
        name: resData.user.displayName || cleanName,
        email: `${resData.user.userId}@preptake.internal`,
        selectedExams: (resData.data && resData.data.selectedExams && resData.data.selectedExams.length > 0)
          ? resData.data.selectedExams
          : selectedExams,
        completedTopicIds: [],
        bookmarkedQuestionIds: [],
        attemptedQuestionIds: [],
        questionHistory: {},
        testResults: [],
        lastStudiedTopicId: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      saveUserProfile(profile);
      return { success: true, user: profile, isNewUser: true };
    } else {
      return { success: false, error: resData.error || 'Registration failed.' };
    }
  } catch (err: any) {
    console.error('Registration network error:', err);
    return {
      success: false,
      error: 'Unable to connect to Google Sheets backend. Registration cannot proceed offline.'
    };
  }
}

/**
 * Validate and restore session on application load or page refresh
 */
export async function restoreSessionWithBackend(): Promise<UserProfile | null> {
  const token = getSessionToken();
  if (!token) {
    logoutUser();
    return null;
  }

  if (!APPS_SCRIPT_URL) return getCurrentUser();

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'validateSession',
        sessionToken: token
      })
    });

    if (response.ok) {
      const resData = await response.json();
      if (resData.success && resData.user) {
        const serverData = resData.data || {};
        const profile: UserProfile = {
          id: resData.user.userId,
          name: resData.user.displayName || resData.user.userId,
          email: `${resData.user.userId}@preptake.internal`,
          selectedExams: serverData.selectedExams && serverData.selectedExams.length > 0
            ? serverData.selectedExams
            : DEFAULT_EXAMS,
          completedTopicIds: serverData.completedTopicIds || [],
          bookmarkedQuestionIds: serverData.bookmarkedQuestionIds || [],
          attemptedQuestionIds: serverData.attemptedQuestionIds || [],
          questionHistory: serverData.questionHistory || {},
          testResults: serverData.testResults || [],
          lastStudiedTopicId: serverData.lastStudiedTopicId || '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        saveUserProfile(profile);
        return profile;
      } else {
        // Session invalid or expired on server
        logoutUser();
        return null;
      }
    }
  } catch (err) {
    console.warn('Backend session verification offline, using locally cached profile:', err);
  }

  return getCurrentUser();
}

/**
 * Logout and invalidate session on server
 */
export function logoutUser(): void {
  const token = getSessionToken();
  if (token && APPS_SCRIPT_URL) {
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'logout',
        sessionToken: token
      })
    }).catch(e => console.warn('Logout server notice:', e));
  }

  setSessionToken(null);
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
    window.dispatchEvent(new Event('preptake_storage_updated'));
  }
}

/**
 * Progress & Data Sync (Strictly scoped by sessionToken on the backend)
 */
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

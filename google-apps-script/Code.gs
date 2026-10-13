/**
 * @OnlyCurrentDoc
 * ==============================================================================
 * PREPTAKE — Google Apps Script Backend
 * ==============================================================================
 * Database: Google Sheet (Multi-Tab Persistent Storage)
 *
 * Supported Tabs:
 * 1. Users          ['UserID', 'PasswordHash', 'Salt', 'FullName', 'ActiveStatus', 'CreatedAt']
 * 2. Sessions       ['SessionToken', 'UserID', 'ExpiresAt', 'CreatedAt']
 * 3. ExamSelections ['UserID', 'ExamID', 'SelectedAt']
 * 4. Syllabus       ['ExamID', 'Subject', 'Chapter', 'Topic', 'Notes', 'Concepts', 'Formulas', 'Source', 'VerificationStatus']
 * 5. Questions      ['QuestionID', 'ExamID', 'Subject', 'Chapter', 'Topic', 'Year', 'Paper', 'Question', 'OptionA', 'OptionB', 'OptionC', 'OptionD', 'OptionE', 'CorrectAnswer', 'Explanation', 'SourceURL', 'QuestionType', 'VerificationStatus']
 * 6. UserProgress   ['UserID', 'ExamID', 'TopicID', 'CompletionStatus', 'LastStudiedAt']
 * 7. UserAnswers    ['UserID', 'QuestionID', 'SelectedAnswer', 'IsCorrect', 'AttemptedAt']
 * 8. TestAttempts   ['AttemptID', 'UserID', 'ExamID', 'TestID', 'Score', 'TotalMarks', 'Accuracy', 'TimeTaken', 'SubmittedAt', 'AnswersJSON']
 * 9. Bookmarks      ['UserID', 'QuestionID', 'CreatedAt']
 * 10. Tests         ['TestID', 'ExamID', 'Title', 'TestType', 'Duration', 'QuestionIDs', 'PublicationStatus']
 *
 * Security & Isolation:
 * - Salted SHA-256 password hashing. Raw passwords & hashes NEVER returned to client.
 * - Server-verified session tokens stored in 'Sessions' tab with 14-day expiry.
 * - Identity derived strictly from sessionToken on all protected reads & writes.
 * - Concurrency control with LockService.
 * ==============================================================================
 */

const SHEET_ID = '14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0';

function getSpreadsheet() {
  try {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) return active;
  } catch (e) {}
  return SpreadsheetApp.openById(SHEET_ID);
}

/**
 * Run this function once from Apps Script Editor (or called automatically on missing tabs)
 * to initialize all necessary tabs and headers while preserving existing records.
 */
function setupSheetStructure() {
  const ss = getSpreadsheet();
  
  const tabs = {
    'Users': ['UserID', 'PasswordHash', 'Salt', 'FullName', 'ActiveStatus', 'CreatedAt'],
    'Sessions': ['SessionToken', 'UserID', 'ExpiresAt', 'CreatedAt'],
    'ExamSelections': ['UserID', 'ExamID', 'SelectedAt'],
    'Syllabus': ['ExamID', 'Subject', 'Chapter', 'Topic', 'Notes', 'Concepts', 'Formulas', 'Source', 'VerificationStatus'],
    'Questions': ['QuestionID', 'ExamID', 'Subject', 'Chapter', 'Topic', 'Year', 'Paper', 'Question', 'OptionA', 'OptionB', 'OptionC', 'OptionD', 'OptionE', 'CorrectAnswer', 'Explanation', 'SourceURL', 'QuestionType', 'VerificationStatus'],
    'UserProgress': ['UserID', 'ExamID', 'TopicID', 'CompletionStatus', 'LastStudiedAt'],
    'UserAnswers': ['UserID', 'QuestionID', 'SelectedAnswer', 'IsCorrect', 'AttemptedAt'],
    'TestAttempts': ['AttemptID', 'UserID', 'ExamID', 'TestID', 'Score', 'TotalMarks', 'Accuracy', 'TimeTaken', 'SubmittedAt', 'AnswersJSON'],
    'Bookmarks': ['UserID', 'QuestionID', 'CreatedAt'],
    'Tests': ['TestID', 'ExamID', 'Title', 'TestType', 'Duration', 'QuestionIDs', 'PublicationStatus']
  };

  for (const sheetName in tabs) {
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    const headers = tabs[sheetName];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#f1f5f9');
    }
  }

  // Remove default 'Sheet1' if it is empty and other sheets exist
  const sheet1 = ss.getSheetByName('Sheet1');
  if (sheet1 && sheet1.getLastRow() === 0 && ss.getSheets().length > 1) {
    try { ss.deleteSheet(sheet1); } catch (e) {}
  }

  Logger.log('PREPTAKE schema setup/migration completed successfully!');
}

/**
 * SHA-256 Salted Hashing helper
 */
function hashPassword(password, salt) {
  const combined = password + ':' + salt;
  const rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, combined, Utilities.Charset.UTF_8);
  return rawHash.map(function(byte) {
    const v = (byte < 0 ? byte + 256 : byte).toString(16);
    return v.length === 1 ? '0' + v : v;
  }).join('');
}

function generateSalt() {
  return Utilities.getUuid().substring(0, 8);
}

function generateSessionToken() {
  return 'pt_sess_' + Utilities.getUuid().replace(/-/g, '') + '_' + new Date().getTime().toString(36);
}

function createUserInternal(userId, plainPassword, displayName) {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName('Users');
  const salt = generateSalt();
  const hash = hashPassword(plainPassword, salt);
  const now = new Date().toISOString();
  sheet.appendRow([userId.trim().toLowerCase(), hash, salt, displayName.trim(), 'ACTIVE', now]);
}

/**
 * Session Helpers
 */
function createSession(userId) {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName('Sessions');
  if (!sheet) {
    sheet = ss.insertSheet('Sessions');
    sheet.appendRow(['SessionToken', 'UserID', 'ExpiresAt', 'CreatedAt']);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold').setBackground('#f1f5f9');
  }
  
  const token = generateSessionToken();
  const now = new Date();
  // 14 days expiration
  const expiresAt = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString();
  sheet.appendRow([token, userId.toLowerCase(), expiresAt, now.toISOString()]);
  return { sessionToken: token, expiresAt: expiresAt };
}

function validateSession(sessionToken) {
  if (!sessionToken || typeof sessionToken !== 'string') return null;
  const token = sessionToken.trim();
  if (!token) return null;

  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName('Sessions');
  if (!sheet || sheet.getLastRow() <= 1) return null;

  const rows = sheet.getDataRange().getValues();
  const now = new Date().getTime();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][0]).trim() === token) {
      const userId = String(rows[i][1]).trim().toLowerCase();
      const expiresAtStr = String(rows[i][2]);
      const expiresAt = new Date(expiresAtStr).getTime();
      if (isNaN(expiresAt) || expiresAt > now) {
        return { userId: userId, expiresAt: expiresAtStr, rowIndex: i + 1 };
      } else {
        return null; // Expired session
      }
    }
  }
  return null;
}

function invalidateSession(sessionToken) {
  if (!sessionToken) return false;
  const token = sessionToken.trim();
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName('Sessions');
  if (!sheet || sheet.getLastRow() <= 1) return false;

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const rows = sheet.getDataRange().getValues();
    for (let i = rows.length - 1; i >= 1; i--) {
      if (String(rows[i][0]).trim() === token) {
        sheet.deleteRow(i + 1);
        return true;
      }
    }
    return false;
  } finally {
    lock.releaseLock();
  }
}

function requireAuth(data) {
  const sessionToken = data.sessionToken;
  const session = validateSession(sessionToken);
  if (!session) {
    return { ok: false, response: responseJSON({ success: false, error: 'Unauthorized: Valid session required.' }) };
  }
  return { ok: true, userId: session.userId };
}

/**
 * Web App POST Router
 */
function doPost(e) {
  try {
    let requestData;
    if (e && e.postData && e.postData.contents) {
      requestData = JSON.parse(e.postData.contents);
    } else {
      return responseJSON({ success: false, error: 'Missing POST body' });
    }

    const action = requestData.action;

    if (action === 'register') {
      return handleRegister(requestData);
    } else if (action === 'login') {
      return handleLogin(requestData);
    } else if (action === 'validateSession') {
      return handleValidateSession(requestData);
    } else if (action === 'logout') {
      return handleLogout(requestData);
    } else if (action === 'getUserData') {
      return handleGetUserData(requestData);
    } else if (action === 'saveExamSelections') {
      return handleSaveExamSelections(requestData);
    } else if (action === 'toggleTopicCompletion') {
      return handleToggleTopicCompletion(requestData);
    } else if (action === 'recordAnswer') {
      return handleRecordAnswer(requestData);
    } else if (action === 'recordTestAttempt') {
      return handleRecordTestAttempt(requestData);
    } else if (action === 'toggleBookmark') {
      return handleToggleBookmark(requestData);
    } else if (action === 'importQuestionsBatch') {
      return handleImportQuestionsBatch(requestData);
    } else if (action === 'importTestsBatch') {
      return handleImportTestsBatch(requestData);
    } else if (action === 'purgeAllTestData') {
      return handlePurgeAllTestData(requestData);
    } else {
      return responseJSON({ success: false, error: 'Unknown action: ' + action });
    }
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  }
}

/**
 * Web App GET Router
 */
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'health';
  if (action === 'health') {
    return responseJSON({ success: true, service: 'PrepTake Google Apps Script Backend', status: 'ready' });
  } else if (action === 'getQuestions') {
    return handleGetQuestions(e.parameter.examId, e.parameter.limit, e.parameter.offset);
  }
  return responseJSON({ success: false, error: 'Unknown GET action' });
}

/**
 * Action: getQuestions (GET)
 * Fetches questions from Questions sheet, optionally filtered by examId
 */
function handleGetQuestions(examId, limitParam, offsetParam) {
  try {
    const ss = getSpreadsheet();
    const qSheet = ss.getSheetByName('Questions');
    if (!qSheet) {
      return responseJSON({ success: true, count: 0, totalMatched: 0, questions: [] });
    }
    const rows = qSheet.getDataRange().getValues();
    if (rows.length <= 1) {
      return responseJSON({ success: true, count: 0, totalMatched: 0, questions: [] });
    }

    const limit = parseInt(limitParam, 10) || 100;
    const offset = parseInt(offsetParam, 10) || 0;
    const matched = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const rowExamId = String(row[1] || '').trim();
      if (!examId || rowExamId === examId) {
        matched.push({
          id: String(row[0] || '').trim(),
          examId: rowExamId,
          subjectId: String(row[2] || '').trim(),
          chapterId: String(row[3] || '').trim(),
          topicId: String(row[4] || '').trim(),
          year: row[5] ? parseInt(row[5], 10) : undefined,
          session: String(row[6] || '').trim(),
          questionText: String(row[7] || '').trim(),
          options: [
            { id: 'A', text: String(row[8] || '').trim() },
            { id: 'B', text: String(row[9] || '').trim() },
            { id: 'C', text: String(row[10] || '').trim() },
            { id: 'D', text: String(row[11] || '').trim() },
            ...(row[12] ? [{ id: 'E', text: String(row[12] || '').trim() }] : [])
          ],
          correctAnswerId: String(row[13] || '').trim(),
          explanation: String(row[14] || '').trim(),
          sourceReference: String(row[15] || '').trim(),
          contentType: String(row[16] || '').trim(),
          verificationStatus: String(row[17] || '').trim(),
          difficulty: String(row[18] || '').trim()
        });
      }
    }

    const paged = matched.slice(offset, offset + limit);
    return responseJSON({
      success: true,
      totalMatched: matched.length,
      count: paged.length,
      offset: offset,
      limit: limit,
      questions: paged
    });
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  }
}

/**
 * Action: register
 */
function handleRegister(data) {
  const fullName = (data.fullName || '').trim();
  const userId = (data.userId || '').trim().toLowerCase();
  const password = data.password || '';
  const confirmPassword = data.confirmPassword || '';

  // Validation
  if (!fullName || fullName.length < 2) {
    return responseJSON({ success: false, error: 'Full Name must be at least 2 characters.' });
  }
  if (!userId || userId.length < 3 || userId.length > 30) {
    return responseJSON({ success: false, error: 'User ID must be between 3 and 30 characters.' });
  }
  const idRegex = /^[a-z0-9_-]+$/;
  if (!idRegex.test(userId)) {
    return responseJSON({ success: false, error: 'User ID can only contain letters, numbers, hyphens, and underscores.' });
  }
  if (!password || password.length < 6) {
    return responseJSON({ success: false, error: 'Password must be at least 6 characters long.' });
  }
  if (password !== confirmPassword) {
    return responseJSON({ success: false, error: 'Password and Confirm Password do not match.' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    let usersSheet = ss.getSheetByName('Users');
    if (!usersSheet) {
      setupSheetStructure();
      usersSheet = ss.getSheetByName('Users');
    }

    // Check duplicate User ID (case-insensitive)
    const rows = usersSheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      const existingId = String(rows[i][0]).trim().toLowerCase();
      if (existingId === userId) {
        return responseJSON({ success: false, error: 'User ID "' + userId + '" is already registered. Please choose another or log in.' });
      }
    }

    const salt = generateSalt();
    const hash = hashPassword(password, salt);
    const now = new Date().toISOString();

    usersSheet.appendRow([userId, hash, salt, fullName, 'ACTIVE', now]);

    // Save initial examination selections into ExamSelections sheet
    const selectedExams = Array.isArray(data.selectedExams) && data.selectedExams.length > 0
      ? data.selectedExams
      : ['ctet-p2', 'bpsc-tre-middle'];
    let examSheet = ss.getSheetByName('ExamSelections');
    if (!examSheet) {
      examSheet = ss.insertSheet('ExamSelections');
      examSheet.appendRow(['UserID', 'ExamID', 'SelectedAt']);
      examSheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#f1f5f9');
    }
    selectedExams.forEach(function(examId) {
      examSheet.appendRow([userId, String(examId).trim(), now]);
    });

    // Create session token
    const session = createSession(userId);
    const userData = fetchUserRecords(userId);

    return responseJSON({
      success: true,
      sessionToken: session.sessionToken,
      user: {
        userId: userId,
        displayName: fullName
      },
      data: userData,
      isNewUser: true
    });
  } catch (err) {
    return responseJSON({ success: false, error: 'Registration failed: ' + err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: login
 */
function handleLogin(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const password = data.password || '';

  if (!userId || !password) {
    return responseJSON({ success: false, error: 'User ID and Password are required.' });
  }

  const ss = getSpreadsheet();
  let usersSheet = ss.getSheetByName('Users');
  if (!usersSheet || usersSheet.getLastRow() <= 1) {
    setupSheetStructure();
    usersSheet = ss.getSheetByName('Users');
  }

  const values = usersSheet.getDataRange().getValues();
  // Header: UserID(0), PasswordHash(1), Salt(2), FullName/DisplayName(3), ActiveStatus(4)
  for (let i = 1; i < values.length; i++) {
    const rowUser = String(values[i][0]).trim().toLowerCase();
    if (rowUser === userId) {
      const storedHash = String(values[i][1]);
      const salt = String(values[i][2]);
      const displayName = String(values[i][3]) || userId;
      const status = String(values[i][4]);

      if (status !== 'ACTIVE') {
        return responseJSON({ success: false, error: 'This user account is inactive. Please contact your administrator.' });
      }

      const inputHash = hashPassword(password, salt);
      if (inputHash === storedHash) {
        // Authenticated! Create server session
        const session = createSession(userId);
        const userData = fetchUserRecords(userId);
        return responseJSON({
          success: true,
          sessionToken: session.sessionToken,
          user: {
            userId: userId,
            displayName: displayName
          },
          data: userData
        });
      } else {
        return responseJSON({ success: false, error: 'Invalid User ID or Password.' });
      }
    }
  }

  return responseJSON({ success: false, error: 'Invalid User ID or Password.' });
}

/**
 * Action: validateSession
 */
function handleValidateSession(data) {
  const sessionToken = data.sessionToken;
  const session = validateSession(sessionToken);
  if (!session) {
    return responseJSON({ success: false, error: 'Session expired or invalid.' });
  }

  const ss = getSpreadsheet();
  const usersSheet = ss.getSheetByName('Users');
  let displayName = session.userId;
  if (usersSheet && usersSheet.getLastRow() > 1) {
    const values = usersSheet.getDataRange().getValues();
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][0]).trim().toLowerCase() === session.userId) {
        displayName = String(values[i][3]) || session.userId;
        break;
      }
    }
  }

  const userData = fetchUserRecords(session.userId);
  return responseJSON({
    success: true,
    user: {
      userId: session.userId,
      displayName: displayName
    },
    data: userData
  });
}

/**
 * Action: logout
 */
function handleLogout(data) {
  const sessionToken = data.sessionToken;
  if (sessionToken) {
    invalidateSession(sessionToken);
  }
  return responseJSON({ success: true, message: 'Logged out successfully.' });
}

/**
 * Action: getUserData (Authenticated)
 */
function handleGetUserData(data) {
  const auth = requireAuth(data);
  if (!auth.ok) return auth.response;
  const userData = fetchUserRecords(auth.userId);
  return responseJSON({ success: true, data: userData });
}

function fetchUserRecords(userId) {
  const ss = getSpreadsheet();

  // 1. Exam Selections
  const selectionsSheet = ss.getSheetByName('ExamSelections');
  const selectedExams = [];
  if (selectionsSheet && selectionsSheet.getLastRow() > 1) {
    const rows = selectionsSheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() === userId) {
        selectedExams.push(String(rows[i][1]));
      }
    }
  }

  // 2. Completed Topics
  const progressSheet = ss.getSheetByName('UserProgress');
  const completedTopics = [];
  let lastStudiedTopic = '';
  if (progressSheet && progressSheet.getLastRow() > 1) {
    const rows = progressSheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() === userId) {
        const topicId = String(rows[i][2]);
        if (rows[i][3] === true || String(rows[i][3]).toUpperCase() === 'COMPLETED' || String(rows[i][3]).toUpperCase() === 'TRUE') {
          completedTopics.push(topicId);
        }
        if (rows[i][4]) lastStudiedTopic = topicId;
      }
    }
  }

  // 3. Bookmarks
  const bookmarksSheet = ss.getSheetByName('Bookmarks');
  const bookmarkedQuestions = [];
  if (bookmarksSheet && bookmarksSheet.getLastRow() > 1) {
    const rows = bookmarksSheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() === userId) {
        bookmarkedQuestions.push(String(rows[i][1]));
      }
    }
  }

  // 4. Test Attempts
  const testsSheet = ss.getSheetByName('TestAttempts');
  const testResults = [];
  if (testsSheet && testsSheet.getLastRow() > 1) {
    const rows = testsSheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][1]).trim().toLowerCase() === userId) {
        testResults.push({
          id: String(rows[i][0]),
          examId: String(rows[i][2]),
          testId: String(rows[i][3]),
          testTitle: String(rows[i][3]),
          score: Number(rows[i][4]),
          totalQuestions: Number(rows[i][5]),
          accuracy: Number(rows[i][6]),
          timeSpentSeconds: Number(rows[i][7]),
          date: String(rows[i][8])
        });
      }
    }
  }

  // 5. Question history
  const answersSheet = ss.getSheetByName('UserAnswers');
  const questionHistory = {};
  const attemptedQuestionIds = [];
  if (answersSheet && answersSheet.getLastRow() > 1) {
    const rows = answersSheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() === userId) {
        const qId = String(rows[i][1]);
        if (!attemptedQuestionIds.includes(qId)) attemptedQuestionIds.push(qId);
        questionHistory[qId] = {
          selectedOptionId: String(rows[i][2]),
          isCorrect: rows[i][3] === true || String(rows[i][3]).toUpperCase() === 'TRUE',
          timestamp: String(rows[i][4])
        };
      }
    }
  }

  return {
    selectedExams: selectedExams.length > 0 ? selectedExams : ['ctet-p2', 'bihar-stet-p1'],
    completedTopicIds: completedTopics,
    bookmarkedQuestionIds: bookmarkedQuestions,
    attemptedQuestionIds: attemptedQuestionIds,
    questionHistory: questionHistory,
    testResults: testResults.reverse(),
    lastStudiedTopicId: lastStudiedTopic
  };
}

/**
 * Action: saveExamSelections (Authenticated)
 */
function handleSaveExamSelections(data) {
  const auth = requireAuth(data);
  if (!auth.ok) return auth.response;
  const userId = auth.userId;
  const examIds = data.examIds || [];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName('ExamSelections');
    if (!sheet) {
      sheet = ss.insertSheet('ExamSelections');
      sheet.appendRow(['UserID', 'ExamID', 'SelectedAt']);
      sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#f1f5f9');
    }
    
    // Remove existing rows for this user
    const rows = sheet.getDataRange().getValues();
    for (let i = rows.length - 1; i >= 1; i--) {
      if (String(rows[i][0]).trim().toLowerCase() === userId) {
        sheet.deleteRow(i + 1);
      }
    }

    // Append new rows
    const now = new Date().toISOString();
    examIds.forEach(function(examId) {
      sheet.appendRow([userId, examId, now]);
    });

    return responseJSON({ success: true });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: toggleTopicCompletion (Authenticated)
 */
function handleToggleTopicCompletion(data) {
  const auth = requireAuth(data);
  if (!auth.ok) return auth.response;
  const userId = auth.userId;
  const examId = data.examId || '';
  const topicId = data.topicId || '';
  const isCompleted = Boolean(data.isCompleted);
  if (!topicId) return responseJSON({ success: false, error: 'Missing topicId' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName('UserProgress');
    if (!sheet) {
      sheet = ss.insertSheet('UserProgress');
      sheet.appendRow(['UserID', 'ExamID', 'TopicID', 'CompletionStatus', 'LastStudiedAt']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#f1f5f9');
    }

    const rows = sheet.getDataRange().getValues();
    let foundIndex = -1;

    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() === userId && String(rows[i][2]) === topicId) {
        foundIndex = i + 1;
        break;
      }
    }

    const now = new Date().toISOString();
    if (foundIndex > 0) {
      sheet.getRange(foundIndex, 4).setValue(isCompleted ? 'COMPLETED' : 'INCOMPLETE');
      sheet.getRange(foundIndex, 5).setValue(now);
    } else {
      sheet.appendRow([userId, examId, topicId, isCompleted ? 'COMPLETED' : 'INCOMPLETE', now]);
    }

    return responseJSON({ success: true, isCompleted: isCompleted });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: recordAnswer (Authenticated)
 */
function handleRecordAnswer(data) {
  const auth = requireAuth(data);
  if (!auth.ok) return auth.response;
  const userId = auth.userId;
  const questionId = data.questionId || '';
  const selectedAnswer = data.selectedAnswer || '';
  const isCorrect = Boolean(data.isCorrect);
  if (!questionId) return responseJSON({ success: false, error: 'Missing questionId' });

  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName('UserAnswers');
  if (!sheet) {
    sheet = ss.insertSheet('UserAnswers');
    sheet.appendRow(['UserID', 'QuestionID', 'SelectedAnswer', 'IsCorrect', 'AttemptedAt']);
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#f1f5f9');
  }
  sheet.appendRow([userId, questionId, selectedAnswer, isCorrect, new Date().toISOString()]);
  return responseJSON({ success: true });
}

/**
 * Action: recordTestAttempt (Authenticated)
 */
function handleRecordTestAttempt(data) {
  const auth = requireAuth(data);
  if (!auth.ok) return auth.response;
  const userId = auth.userId;
  const result = data.testResult;
  if (!result) return responseJSON({ success: false, error: 'Missing testResult' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName('TestAttempts');
    if (!sheet) {
      sheet = ss.insertSheet('TestAttempts');
      sheet.appendRow(['AttemptID', 'UserID', 'ExamID', 'TestID', 'Score', 'TotalMarks', 'Accuracy', 'TimeTaken', 'SubmittedAt', 'AnswersJSON']);
      sheet.getRange(1, 1, 1, 10).setFontWeight('bold').setBackground('#f1f5f9');
    }
    const attemptId = 'att_' + Utilities.getUuid().substring(0, 8);
    const answersJSON = JSON.stringify(result.answers || []);

    sheet.appendRow([
      attemptId,
      userId,
      result.examId || '',
      result.testTitle || result.testId,
      result.score,
      result.totalQuestions,
      result.accuracy,
      result.timeSpentSeconds,
      new Date().toISOString(),
      answersJSON
    ]);

    return responseJSON({ success: true, attemptId: attemptId });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: toggleBookmark (Authenticated)
 */
function handleToggleBookmark(data) {
  const auth = requireAuth(data);
  if (!auth.ok) return auth.response;
  const userId = auth.userId;
  const questionId = data.questionId || '';
  if (!questionId) return responseJSON({ success: false, error: 'Missing questionId' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName('Bookmarks');
    if (!sheet) {
      sheet = ss.insertSheet('Bookmarks');
      sheet.appendRow(['UserID', 'QuestionID', 'CreatedAt']);
      sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#f1f5f9');
    }
    const rows = sheet.getDataRange().getValues();
    let foundRow = -1;

    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() === userId && String(rows[i][1]) === questionId) {
        foundRow = i + 1;
        break;
      }
    }

    if (foundRow > 0) {
      sheet.deleteRow(foundRow);
      return responseJSON({ success: true, isBookmarked: false });
    } else {
      sheet.appendRow([userId, questionId, new Date().toISOString()]);
      return responseJSON({ success: true, isBookmarked: true });
    }
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: getQuestions (Public or Authenticated)
 */
function handleGetQuestions(examId) {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName('Questions');
  if (!sheet || sheet.getLastRow() <= 1) {
    return responseJSON({ success: true, questions: [] });
  }

  const rows = sheet.getDataRange().getValues();
  const questions = [];
  for (let i = 1; i < rows.length; i++) {
    const rowExam = String(rows[i][1]);
    if (!examId || rowExam === examId) {
      questions.push({
        id: String(rows[i][0]),
        examId: rowExam,
        subjectId: String(rows[i][2]),
        chapterId: String(rows[i][3]),
        topicId: String(rows[i][4]),
        year: rows[i][5] ? Number(rows[i][5]) : undefined,
        questionText: String(rows[i][7]),
        options: [
          { id: 'A', text: String(rows[i][8]) },
          { id: 'B', text: String(rows[i][9]) },
          { id: 'C', text: String(rows[i][10]) },
          { id: 'D', text: String(rows[i][11]) }
        ],
        correctAnswerId: String(rows[i][13]),
        explanation: String(rows[i][14]),
        sourceReference: String(rows[i][15]),
        isOfficialPYQ: String(rows[i][17]).toUpperCase() === 'VERIFIED OFFICIAL PYQ',
        verificationStatus: String(rows[i][17])
      });
    }
  }

  return responseJSON({ success: true, questions: questions });
}

/**
 * Action: importQuestionsBatch (Batch Upsert for Content Pipeline)
 */
function handleImportQuestionsBatch(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const ss = getSpreadsheet();
    let qSheet = ss.getSheetByName('Questions');
    if (!qSheet) {
      qSheet = ss.insertSheet('Questions');
      qSheet.appendRow([
        'QuestionID', 'ExamID', 'SubjectID', 'ChapterID', 'TopicID',
        'Year', 'Session', 'QuestionText', 'OptionA', 'OptionB', 'OptionC', 'OptionD', 'OptionE',
        'CorrectAnswer', 'Explanation', 'SourceReference', 'ContentType', 'VerificationStatus', 'Difficulty', 'ImportedAt'
      ]);
      qSheet.getRange(1, 1, 1, 20).setFontWeight('bold').setBackground('#f1f5f9');
    }

    let logSheet = ss.getSheetByName('ImportLogs');
    if (!logSheet) {
      logSheet = ss.insertSheet('ImportLogs');
      logSheet.appendRow(['LogID', 'Type', 'BatchSize', 'Added', 'Updated', 'Timestamp']);
      logSheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f1f5f9');
    }

    const items = data.questions || [];
    const rows = qSheet.getDataRange().getValues();
    const existingMap = {};
    for (let i = 1; i < rows.length; i++) {
      existingMap[String(rows[i][0]).trim()] = i + 1;
    }

    let added = 0;
    let updated = 0;
    const now = new Date().toISOString();

    items.forEach(function(q) {
      const qid = String(q.id || q.questionId).trim();
      const optA = (q.options && q.options[0]) ? q.options[0].text : '';
      const optB = (q.options && q.options[1]) ? q.options[1].text : '';
      const optC = (q.options && q.options[2]) ? q.options[2].text : '';
      const optD = (q.options && q.options[3]) ? q.options[3].text : '';
      const optE = (q.options && q.options[4]) ? q.options[4].text : '';
      const rowData = [
        qid,
        q.examId || '',
        q.subjectId || '',
        q.chapterId || '',
        q.topicId || '',
        q.year || '',
        q.session || '',
        q.questionText || '',
        optA, optB, optC, optD, optE,
        q.correctAnswerId || q.correctAnswer || '',
        q.explanation || '',
        q.sourceReference || q.sourceTitle || '',
        q.contentType || '',
        q.verificationStatus || '',
        q.difficulty || '',
        now
      ];

      if (existingMap[qid]) {
        qSheet.getRange(existingMap[qid], 1, 1, 20).setValues([rowData]);
        updated++;
      } else {
        qSheet.appendRow(rowData);
        added++;
      }
    });

    const logId = 'log_' + Utilities.getUuid().substring(0, 8);
    logSheet.appendRow([logId, 'QuestionsBatch', items.length, added, updated, now]);

    return responseJSON({ success: true, added: added, updated: updated, totalInBatch: items.length });
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: importTestsBatch (Batch Upsert for Content Pipeline)
 */
function handleImportTestsBatch(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const ss = getSpreadsheet();
    let tSheet = ss.getSheetByName('Tests');
    if (!tSheet) {
      tSheet = ss.insertSheet('Tests');
      tSheet.appendRow(['TestID', 'ExamID', 'Type', 'Title', 'Description', 'DurationMinutes', 'QuestionCount', 'ImportedAt']);
      tSheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#f1f5f9');
    }

    let logSheet = ss.getSheetByName('ImportLogs');
    if (!logSheet) {
      logSheet = ss.insertSheet('ImportLogs');
      logSheet.appendRow(['LogID', 'Type', 'BatchSize', 'Added', 'Updated', 'Timestamp']);
      logSheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f1f5f9');
    }

    const items = data.tests || [];
    const tRows = tSheet.getDataRange().getValues();
    const existingTestMap = {};
    for (let i = 1; i < tRows.length; i++) {
      existingTestMap[String(tRows[i][0]).trim()] = i + 1;
    }

    let added = 0;
    let updated = 0;
    const now = new Date().toISOString();

    items.forEach(function(t) {
      const tid = String(t.id).trim();
      const qCount = Array.isArray(t.questionIds) ? t.questionIds.length : 0;
      const rowData = [
        tid,
        t.examId || '',
        t.type || '',
        t.title || '',
        t.description || '',
        t.durationMinutes || 0,
        qCount,
        now
      ];

      if (existingTestMap[tid]) {
        tSheet.getRange(existingTestMap[tid], 1, 1, 8).setValues([rowData]);
        updated++;
      } else {
        tSheet.appendRow(rowData);
        added++;
      }
    });

    const logId = 'log_' + Utilities.getUuid().substring(0, 8);
    logSheet.appendRow([logId, 'TestsBatch', items.length, added, updated, now]);

    return responseJSON({ success: true, added: added, updated: updated, totalInBatch: items.length });
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Action: purgeAllTestData (POST or Editor)
 * Clears all test accounts, test sessions, and user records across all user tabs
 * while preserving Questions, Tests, and Syllabus content intact.
 */
function handlePurgeAllTestData(data) {
  const ss = getSpreadsheet();
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const userSheets = ['Users', 'Sessions', 'ExamSelections', 'UserProgress', 'UserAnswers', 'TestAttempts', 'Bookmarks'];
    const summary = {};
    for (let s = 0; s < userSheets.length; s++) {
      const sheet = ss.getSheetByName(userSheets[s]);
      if (sheet && sheet.getLastRow() > 1) {
        const numRows = sheet.getLastRow() - 1;
        sheet.deleteRows(2, numRows);
        summary[userSheets[s]] = numRows;
      } else {
        summary[userSheets[s]] = 0;
      }
    }
    return responseJSON({ success: true, message: 'All test accounts and user records cleared successfully.', summary: summary });
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Convenience function to run directly from Google Apps Script Editor
 */
function purgeAllTestDataFromEditor() {
  const ss = getSpreadsheet();
  const userSheets = ['Users', 'Sessions', 'ExamSelections', 'UserProgress', 'UserAnswers', 'TestAttempts', 'Bookmarks'];
  for (let s = 0; s < userSheets.length; s++) {
    const sheet = ss.getSheetByName(userSheets[s]);
    if (sheet && sheet.getLastRow() > 1) {
      const numRows = sheet.getLastRow() - 1;
      sheet.deleteRows(2, numRows);
      Logger.log('Cleared ' + numRows + ' rows from ' + userSheets[s]);
    }
  }
  Logger.log('All test accounts and user data cleared successfully.');
}

function responseJSON(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

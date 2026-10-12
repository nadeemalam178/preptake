/**
 * @OnlyCurrentDoc
 * ==============================================================================
 * PREPTAKE — Google Apps Script Backend
 * ==============================================================================
 * Connects directly to Google Sheet:
 * https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit
 *
 * Provides:
 * 1. setupSheetStructure(): Run once in Apps Script Editor to scaffold all tabs and headers.
 * 2. doPost(): Secure API endpoint for login, user session, progress saving, test recording.
 * 3. doGet(): Read educational content, syllabi, questions, and health check.
 *
 * Password Security:
 * Uses salted SHA-256 hashing. Passwords and hashes are NEVER exposed in API responses.
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
 * Run this function once from the Apps Script Editor (Extensions -> Apps Script -> Select setupSheetStructure -> Run)
 * to initialize all necessary tabs, headers, and an initial test account.
 */
function setupSheetStructure() {
  const ss = getSpreadsheet();
  
  const tabs = {
    'Users': ['UserID', 'PasswordHash', 'Salt', 'DisplayName', 'ActiveStatus', 'CreatedAt'],
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

  // Add initial default accounts if Users sheet only has headers
  const usersSheet = ss.getSheetByName('Users');
  if (usersSheet && usersSheet.getLastRow() <= 1) {
    createUserInternal('nadeem', 'prep123', 'Nadeem');
    createUserInternal('student1', 'pass123', 'Candidate One');
    createUserInternal('student2', 'pass123', 'Candidate Two');
  }

  Logger.log('PREPTAKE spreadsheet schema successfully set up!');
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

function createUserInternal(userId, plainPassword, displayName) {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName('Users');
  const salt = generateSalt();
  const hash = hashPassword(plainPassword, salt);
  const now = new Date().toISOString();
  sheet.appendRow([userId.trim().toLowerCase(), hash, salt, displayName.trim(), 'ACTIVE', now]);
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

    if (action === 'login') {
      return handleLogin(requestData);
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
    return handleGetQuestions(e.parameter.examId);
  }
  return responseJSON({ success: false, error: 'Unknown GET action' });
}

function handleLogin(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const password = data.password || '';

  if (!userId || !password) {
    return responseJSON({ success: false, error: 'User ID and Password are required.' });
  }

  const ss = getSpreadsheet();
  const usersSheet = ss.getSheetByName('Users');
  if (!usersSheet || usersSheet.getLastRow() <= 1) {
    return responseJSON({ success: false, error: 'User database not initialized.' });
  }

  const values = usersSheet.getDataRange().getValues();
  // Header: UserID(0), PasswordHash(1), Salt(2), DisplayName(3), ActiveStatus(4)
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
        // Authenticated! Fetch user's isolated data
        const userData = fetchUserRecords(userId);
        return responseJSON({
          success: true,
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

  return responseJSON({ success: false, error: 'User not found. Please check your credentials.' });
}

function handleGetUserData(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  if (!userId) return responseJSON({ success: false, error: 'Missing userId' });
  const userData = fetchUserRecords(userId);
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

function handleSaveExamSelections(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const examIds = data.examIds || [];
  if (!userId) return responseJSON({ success: false, error: 'Missing userId' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName('ExamSelections');
    
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

function handleToggleTopicCompletion(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const examId = data.examId || '';
  const topicId = data.topicId || '';
  const isCompleted = Boolean(data.isCompleted);
  if (!userId || !topicId) return responseJSON({ success: false, error: 'Missing userId or topicId' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName('UserProgress');
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

function handleRecordAnswer(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const questionId = data.questionId || '';
  const selectedAnswer = data.selectedAnswer || '';
  const isCorrect = Boolean(data.isCorrect);
  if (!userId || !questionId) return responseJSON({ success: false, error: 'Missing parameters' });

  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName('UserAnswers');
  sheet.appendRow([userId, questionId, selectedAnswer, isCorrect, new Date().toISOString()]);
  return responseJSON({ success: true });
}

function handleRecordTestAttempt(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const result = data.testResult;
  if (!userId || !result) return responseJSON({ success: false, error: 'Missing testResult' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName('TestAttempts');
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

function handleToggleBookmark(data) {
  const userId = (data.userId || '').trim().toLowerCase();
  const questionId = data.questionId || '';
  if (!userId || !questionId) return responseJSON({ success: false, error: 'Missing parameters' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName('Bookmarks');
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

function responseJSON(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

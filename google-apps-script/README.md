# PrepTake Google Sheets Integration & Deployment Guide

This guide explains how to connect and deploy your Google Sheet backend for PrepTake.

**Connected Spreadsheet:**
[https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit](https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit)

---

## 📊 Database Schema (10 Managed Tabs)

When `setupSheetStructure()` runs, it automatically verifies and scaffolds the following tabs:

1. **`Users`**: `UserID`, `PasswordHash`, `Salt`, `FullName`, `ActiveStatus`, `CreatedAt`
2. **`Sessions`**: `SessionToken`, `UserID`, `ExpiresAt`, `CreatedAt`
3. **`ExamSelections`**: `UserID`, `ExamID`, `SelectedAt`
4. **`Syllabus`**: `ExamID`, `Subject`, `Chapter`, `Topic`, `Notes`, `Concepts`, `Formulas`, `Source`, `VerificationStatus`
5. **`Questions`**: `QuestionID`, `ExamID`, `Subject`, `Chapter`, `Topic`, `Year`, `Paper`, `Question`, `OptionA`, `OptionB`, `OptionC`, `OptionD`, `OptionE`, `CorrectAnswer`, `Explanation`, `SourceURL`, `QuestionType`, `VerificationStatus`
6. **`UserProgress`**: `UserID`, `ExamID`, `TopicID`, `CompletionStatus`, `LastStudiedAt`
7. **`UserAnswers`**: `UserID`, `QuestionID`, `SelectedAnswer`, `IsCorrect`, `AttemptedAt`
8. **`TestAttempts`**: `AttemptID`, `UserID`, `ExamID`, `TestID`, `Score`, `TotalMarks`, `Accuracy`, `TimeTaken`, `SubmittedAt`, `AnswersJSON`
9. **`Bookmarks`**: `UserID`, `QuestionID`, `CreatedAt`
10. **`Tests`**: `TestID`, `ExamID`, `Title`, `TestType`, `Duration`, `QuestionIDs`, `PublicationStatus`

---

## 🚀 How to Deploy Updated Backend Code (1 Minute)

Whenever you update [`google-apps-script/Code.gs`](./Code.gs):

1. Open your Google Sheet in your browser:
   [https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit](https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit)
2. In the top menu, click **Extensions** → **Apps Script**.
3. Replace the code in the editor with the entire contents of [`google-apps-script/Code.gs`](./Code.gs).
4. Click **Save (`Ctrl + S`)**.
5. Select **`setupSheetStructure`** from the function dropdown at the top and click **Run (▶️)** to create any missing tabs (such as the `Sessions` tab).
6. In the top-right corner, click **Deploy** → **Manage deployments**.
7. Click the **Edit** (pencil icon) next to your active Web App deployment.
8. Under **Version**, click the dropdown and choose **New version**.
9. Ensure:
   - **Execute as**: `Me (<your-email>)`
   - **Who has access**: `Anyone`
10. Click **Deploy**. Your Web App URL remains the same and will immediately run the new code!

---

## 🔐 Authentication, Registration & Session Flow

1. **New User Registration**:
   - Any student can register directly on the website (`/auth`).
   - The frontend validates full name, User ID pattern, and password length (>= 6 chars).
   - The request is dispatched to Google Apps Script (`action: 'register'`).
   - A concurrency lock (`LockService.getScriptLock()`) ensures duplicate User IDs are rejected even under simultaneous requests.
   - A unique salt is generated, the password is hashed with SHA-256, and a new record is added to the `Users` tab.
   - A session token is created with a 14-day expiry and stored in the `Sessions` tab.
   - The student is automatically logged in and redirected to examination selection (`/exams`).

2. **Existing User Login**:
   - The student logs in with User ID and Password.
   - The backend looks up the user, matches the salted hash, generates a new session token, and returns the student's isolated progress.

3. **Data Isolation**:
   - Every read and write (`saveExamSelections`, `toggleTopicCompletion`, `recordAnswer`, `recordTestAttempt`, `toggleBookmark`) passes `sessionToken`.
   - The backend validates the token, derives the authenticated User ID from the `Sessions` tab, and only writes/reads rows matching that student. User A can never tamper with or read User B's records.

4. **Session Expiry & Logout**:
   - Calling `logout` removes the active token from the `Sessions` tab.
   - Expired tokens (> 14 days) are automatically rejected by the server.

---

## ⚙️ Environment Variables (Local & Vercel)

Add these to `.env.local` or your Vercel Project Settings:

```env
NEXT_PUBLIC_GOOGLE_SHEET_ID=14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec
```

---

## 🛠️ Troubleshooting

### 1. "User ID is already registered"
User IDs are unique across all candidates. Choose another User ID or sign in with your existing account.

### 2. "Unable to connect to Google Sheets backend"
This occurs if the browser has no internet connection or if the Google Apps Script Web App URL is invalid. Check that your Web App is deployed with **Who has access: Anyone**.

### 3. "This app is blocked" during Authorization
If running `setupSheetStructure` triggers a block:
- Open the sheet in an **Incognito Window (`Ctrl + Shift + N`)** with only one Google account logged in.
- The `/** @OnlyCurrentDoc */` tag in `Code.gs` prevents Google from requiring full Drive permissions.
- Click **Advanced** → **Go to Untitled project (unsafe)** → **Allow**.

---

## 👥 Default Test Accounts

| User ID | Password | Role |
| :--- | :--- | :--- |
| `nadeem` | `prep123` | Student / Admin |
| `student1` | `pass123` | Student Candidate |
| `student2` | `pass123` | Student Candidate |

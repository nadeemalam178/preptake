# PrepTake Google Sheets Integration & Setup Guide

This guide walks you through connecting your Google Sheet to the PrepTake web app in under 2 minutes.

**Target Spreadsheet:**
[https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit](https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit)

---

## Step 1: Open Apps Script

1. Open your spreadsheet in your web browser:
   `https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit`
2. In the top menu bar, click **Extensions** → **Apps Script**.
3. A new tab will open with the Google Apps Script editor.

---

## Step 2: Paste the Updated Backend Code

1. In the Apps Script code editor, delete any existing code inside `Code.gs`.
2. Copy the entire contents of [`google-apps-script/Code.gs`](./Code.gs) (which includes the `@OnlyCurrentDoc` security tag to prevent Google from blocking the app).
3. Paste it into `Code.gs` and click the **Save** icon (`Ctrl + S`).

---

## Step 3: Run the Auto-Setup Function

1. At the top of the Apps Script toolbar, locate the function dropdown.
2. Select **`setupSheetStructure`** from the dropdown.
3. Click the **Run** button (play icon).
4. **Permissions Flow**:
   - Click **Review permissions**.
   - Choose your Google account.
   - Click **Advanced** (small link at bottom-left of the warning popup).
   - Click **Go to Untitled project (unsafe)** (or **Go to PrepTake (unsafe)**).
   - Click **Allow**.
5. The script will execute in ~3 seconds. Switch back to your Google Sheet tab — all 9 tabs are now automatically created with formatted headers and sample student accounts:
   - `Users` (includes test accounts `nadeem` / `prep123` and `student1` / `pass123`)
   - `ExamSelections`
   - `Syllabus`
   - `Questions`
   - `UserProgress`
   - `UserAnswers`
   - `TestAttempts`
   - `Bookmarks`
   - `Tests`

---

## Step 4: Deploy as Web App

1. In the top right corner of Apps Script, click the blue **Deploy** button → **New deployment**.
2. Click the gear icon (**Select type**) on the left and select **Web app**.
3. Configure the deployment settings:
   - **Description**: `PrepTake Production API`
   - **Execute as**: `Me (<your-email>)`
   - **Who has access**: **`Anyone`** *(Crucial so the web app frontend can make API calls)*
4. Click **Deploy**.
5. Copy the **Web App URL** (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Step 5: Connect to PrepTake

Open `.env.local` in the project root (or your deployment environment variables on Vercel/Netlify) and set:

```env
NEXT_PUBLIC_GOOGLE_SHEET_ID=14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_COPIED_ID/exec
```

---

## Troubleshooting: "This app is blocked"

If Google shows **"This app is blocked"** (with only a "Back to safety" button), check these 3 quick fixes:

### Fix 1: Use an Incognito Window (Solves Multi-Account Conflicts)
If you have multiple Google accounts logged into the same Chrome window (e.g. personal Gmail + college/work email), Google's OAuth gets confused and blocks the authorization.
1. Open a new **Incognito Window** (`Ctrl + Shift + N`).
2. Log in only to the Google account that owns the spreadsheet.
3. Open the spreadsheet → **Extensions** → **Apps Script** → Run **`setupSheetStructure`**.

### Fix 2: Check if Using a College / School / Work Google Account
If your email ends in `@college.edu`, `@school.org`, or a company domain, your administrator may have a security policy blocking unverified scripts.
- **Solution**: Open the spreadsheet using your **personal `@gmail.com` account** (or share the spreadsheet with your personal Gmail and run Apps Script from there).

### Fix 3: Updated `Code.gs` with `@OnlyCurrentDoc`
The updated `Code.gs` in this repository contains the `/** @OnlyCurrentDoc */` annotation and `SpreadsheetApp.getActiveSpreadsheet()`. This tells Google the script only touches this single spreadsheet, not your entire Google Drive, which removes the high-risk block.

---

## Default Login Credentials

After running `setupSheetStructure`, you can log in with:

| User ID | Password | Role |
| :--- | :--- | :--- |
| `nadeem` | `prep123` | Student / Admin |
| `student1` | `pass123` | Student |

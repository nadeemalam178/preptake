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

## Step 2: Paste the Backend Code

1. In the Apps Script code editor, delete any default code inside `Code.gs`.
2. Copy the entire contents of [`google-apps-script/Code.gs`](./Code.gs) from this repository.
3. Paste it into the editor and click the **Save** icon (disk icon or `Ctrl + S`).

---

## Step 3: Run the Auto-Setup Function

1. At the top of the Apps Script toolbar, locate the function dropdown (it might say `myFunction`).
2. Select **`setupSheetStructure`** from the dropdown.
3. Click the **Run** button (play icon).
4. **Permissions Notice**: Google will prompt you to authorize the script:
   - Click **Review permissions**.
   - Choose your Google account.
   - Click **Advanced** (bottom left of modal) → click **Go to Untitled project (unsafe)**.
   - Click **Allow**.
5. The script will execute in ~3 seconds. Switch back to your Google Sheet tab — you will see all 9 tabs automatically created with bold headers and sample student accounts:
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

Restart your Next.js server (`npm run dev`) or redeploy. PrepTake is now fully synced to your live Google Sheet!

---

## Default Login Credentials

After running `setupSheetStructure`, you can log in with:

| User ID | Password | Role |
| :--- | :--- | :--- |
| `nadeem` | `prep123` | Student / Admin |
| `student1` | `pass123` | Student |

*You can also create more users directly in the `Users` tab using `setupSheetStructure()` or the `createUser(userId, password, displayName)` helper inside `Code.gs`.*

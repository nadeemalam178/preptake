# PrepTake Google Sheets Integration & Publication Summary

- **Execution Timestamp**: 2026-10-13 06:05:22Z
- **Persistent Database**: Google Sheets (`14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`)
- **Total Validated Questions Ready for Sheets**: 4719
- **Total Practice & Mock Tests Ready for Sheets**: 28
- **Web App Endpoint**: `https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec`
- **API Batch Action Status**: `Web App Deployment is pinned to an earlier version in Google Apps Script Editor`

## 1. Generated Import Artifacts

- **Questions CSV**: [`questions_sheet_import.csv`](file:///C:/Users/Nadeem/Downloads/Antigravity/PREPTAKE/content-pipeline/normalized/questions_sheet_import.csv) (4719 rows, 20 columns)
- **Tests CSV**: [`tests_sheet_import.csv`](file:///C:/Users/Nadeem/Downloads/Antigravity/PREPTAKE/content-pipeline/normalized/tests_sheet_import.csv) (28 rows, 8 columns)

## 2. Google Apps Script Web App Update Instructions

The updated Apps Script backend code with `importQuestionsBatch` and `importTestsBatch` handlers is located in [`google-apps-script/Code.gs`](file:///c:/Users/Nadeem/Downloads/Antigravity/PREPTAKE/google-apps-script/Code.gs).

To enable automated batch API upserting directly from python CLI without CSV import:
1. Open the Apps Script editor for spreadsheet `14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`.
2. Paste or sync the updated [`google-apps-script/Code.gs`](file:///c:/Users/Nadeem/Downloads/Antigravity/PREPTAKE/google-apps-script/Code.gs).
3. Click **Deploy** > **Manage deployments**.
4. Click the edit (pencil) icon next to the active Web App deployment.
5. Select **Version: New version**, and click **Deploy**.

## 3. Direct Google Sheets Import (Immediate 1-Click)

Alternatively, candidates and administrators can directly import the prepared CSV files into the existing spreadsheet:
1. In Google Sheets, navigate to the `Questions` tab.
2. Select **File > Import > Upload** and choose `content-pipeline/normalized/questions_sheet_import.csv`.
3. Select **Import location: Replace current sheet** or **Append to current sheet**.

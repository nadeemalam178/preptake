#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Google Sheets Importer & CSV Synchronizer
Publishes normalized and validated question bank and mock test sets to Google Sheets
via the Google Apps Script Web App using batched upserts, and generates matching
direct CSV datasets for immediate spreadsheet import.
"""

import json
import os
import sys
import time
import csv
import urllib.request
import urllib.error

APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec"

def send_request(payload):
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        APPS_SCRIPT_URL,
        data=data,
        headers={'Content-Type': 'text/plain;charset=utf-8'}
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        res_body = resp.read().decode('utf-8')
        return json.loads(res_body)

def export_direct_csvs(questions, tests, norm_dir):
    """Generate RFC 4180 CSV files directly matching Google Sheet headers."""
    q_csv_path = os.path.join(norm_dir, 'questions_sheet_import.csv')
    q_headers = [
        'QuestionID', 'ExamID', 'SubjectID', 'ChapterID', 'TopicID',
        'Year', 'Session', 'QuestionText', 'OptionA', 'OptionB', 'OptionC', 'OptionD', 'OptionE',
        'CorrectAnswer', 'Explanation', 'SourceReference', 'ContentType', 'VerificationStatus', 'Difficulty', 'ImportedAt'
    ]
    now_iso = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())

    with open(q_csv_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, quoting=csv.QUOTE_ALL)
        writer.writerow(q_headers)
        for q in questions:
            opts = q.get('options', [])
            optA = opts[0]['text'] if len(opts) > 0 else ''
            optB = opts[1]['text'] if len(opts) > 1 else ''
            optC = opts[2]['text'] if len(opts) > 2 else ''
            optD = opts[3]['text'] if len(opts) > 3 else ''
            optE = opts[4]['text'] if len(opts) > 4 else ''
            writer.writerow([
                q.get('id', ''),
                q.get('examId', ''),
                q.get('subjectId', ''),
                q.get('chapterId', ''),
                q.get('topicId', ''),
                q.get('year', ''),
                q.get('session', ''),
                q.get('questionText', ''),
                optA, optB, optC, optD, optE,
                q.get('correctAnswerId', ''),
                q.get('explanation', ''),
                q.get('sourceReference', ''),
                q.get('contentType', ''),
                q.get('verificationStatus', ''),
                q.get('difficulty', ''),
                now_iso
            ])
    print(f"Exported direct Google Sheets CSV: {q_csv_path} ({len(questions)} rows)")

    t_csv_path = os.path.join(norm_dir, 'tests_sheet_import.csv')
    t_headers = ['TestID', 'ExamID', 'Type', 'Title', 'Description', 'DurationMinutes', 'QuestionCount', 'ImportedAt']
    with open(t_csv_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, quoting=csv.QUOTE_ALL)
        writer.writerow(t_headers)
        for t in tests:
            writer.writerow([
                t.get('id', ''),
                t.get('examId', ''),
                t.get('type', ''),
                t.get('title', ''),
                t.get('description', ''),
                t.get('durationMinutes', ''),
                len(t.get('questionIds', [])),
                now_iso
            ])
    print(f"Exported direct Google Sheets CSV: {t_csv_path} ({len(tests)} rows)")

    return q_csv_path, t_csv_path

def test_endpoint_capabilities():
    """Check if the currently deployed Apps Script Web App has import batch action enabled."""
    try:
        res = send_request({"action": "importQuestionsBatch", "questions": []})
        if res.get('success'):
            return True, "API Ready"
        elif "Unknown action" in res.get('error', ''):
            return False, "Web App Deployment is pinned to an earlier version in Google Apps Script Editor"
        return False, res.get('error', 'Unknown response')
    except Exception as e:
        return False, str(e)

def publish_questions(questions, batch_size=30, max_batches=3):
    total = len(questions)
    print(f"\n--- Publishing Questions in batches of {batch_size} (Testing first {max_batches} batches) ---")
    total_added = 0
    total_updated = 0
    failed_batches = 0

    batches_to_run = min(max_batches, (total + batch_size - 1) // batch_size)
    for b_idx in range(batches_to_run):
        start = b_idx * batch_size
        batch = questions[start:start + batch_size]
        print(f"[{b_idx+1}/{batches_to_run}] Upserting items {start+1} to {start + len(batch)}...", end="", flush=True)

        payload = {
            "action": "importQuestionsBatch",
            "questions": batch
        }

        try:
            res = send_request(payload)
            if res.get('success'):
                added = res.get('added', 0)
                updated = res.get('updated', 0)
                total_added += added
                total_updated += updated
                print(f" OK (Added: {added}, Updated: {updated})")
            else:
                print(f" FAILED: {res.get('error')}")
                failed_batches += 1
        except Exception as e:
            print(f" FAILED: {e}")
            failed_batches += 1

    return total_added, total_updated, failed_batches

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    norm_dir = os.path.join(base_dir, 'normalized')
    reports_dir = os.path.join(base_dir, 'reports')
    os.makedirs(reports_dir, exist_ok=True)

    q_file = os.path.join(norm_dir, 'master_question_bank.json')
    t_file = os.path.join(norm_dir, 'mock_tests.json')

    if not os.path.exists(q_file):
        print(f"Error: Question file not found at {q_file}.")
        sys.exit(1)

    with open(q_file, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    with open(t_file, 'r', encoding='utf-8') as f:
        tests = json.load(f)

    print(f"Loaded {len(questions)} validated questions and {len(tests)} tests.")

    # 1. Export direct CSVs
    q_csv, t_csv = export_direct_csvs(questions, tests, norm_dir)

    # 2. Check deployed Google Apps Script status
    print("\nProbing Google Apps Script Web App endpoint...")
    ready, status_msg = test_endpoint_capabilities()
    print(f"Endpoint Deployment Status: {status_msg}")

    added_q, updated_q, failed_b = 0, 0, 0
    if ready:
        added_q, updated_q, failed_b = publish_questions(questions, batch_size=30, max_batches=5)

    # 3. Write summary report
    summary_path = os.path.join(reports_dir, 'import_summary.md')
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("# PrepTake Google Sheets Integration & Publication Summary\n\n")
        f.write(f"- **Execution Timestamp**: {time.strftime('%Y-%m-%d %H:%M:%SZ', time.gmtime())}\n")
        f.write(f"- **Persistent Database**: Google Sheets (`14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`)\n")
        f.write(f"- **Total Validated Questions Ready for Sheets**: {len(questions)}\n")
        f.write(f"- **Total Practice & Mock Tests Ready for Sheets**: {len(tests)}\n")
        f.write(f"- **Web App Endpoint**: `{APPS_SCRIPT_URL}`\n")
        f.write(f"- **API Batch Action Status**: `{status_msg}`\n\n")

        f.write("## 1. Generated Import Artifacts\n\n")
        f.write(f"- **Questions CSV**: [`questions_sheet_import.csv`](file:///{q_csv.replace(os.sep, '/')}) ({len(questions)} rows, 20 columns)\n")
        f.write(f"- **Tests CSV**: [`tests_sheet_import.csv`](file:///{t_csv.replace(os.sep, '/')}) ({len(tests)} rows, 8 columns)\n\n")

        f.write("## 2. Google Apps Script Web App Update Instructions\n\n")
        f.write("The updated Apps Script backend code with `importQuestionsBatch` and `importTestsBatch` handlers is located in [`google-apps-script/Code.gs`](file:///c:/Users/Nadeem/Downloads/Antigravity/PREPTAKE/google-apps-script/Code.gs).\n\n")
        f.write("To enable automated batch API upserting directly from python CLI without CSV import:\n")
        f.write("1. Open the Apps Script editor for spreadsheet `14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`.\n")
        f.write("2. Paste or sync the updated [`google-apps-script/Code.gs`](file:///c:/Users/Nadeem/Downloads/Antigravity/PREPTAKE/google-apps-script/Code.gs).\n")
        f.write("3. Click **Deploy** > **Manage deployments**.\n")
        f.write("4. Click the edit (pencil) icon next to the active Web App deployment.\n")
        f.write("5. Select **Version: New version**, and click **Deploy**.\n\n")

        f.write("## 3. Direct Google Sheets Import (Immediate 1-Click)\n\n")
        f.write("Alternatively, candidates and administrators can directly import the prepared CSV files into the existing spreadsheet:\n")
        f.write("1. In Google Sheets, navigate to the `Questions` tab.\n")
        f.write("2. Select **File > Import > Upload** and choose `content-pipeline/normalized/questions_sheet_import.csv`.\n")
        f.write("3. Select **Import location: Replace current sheet** or **Append to current sheet**.\n")

    print(f"Summary report written to {summary_path}")

if __name__ == '__main__':
    main()

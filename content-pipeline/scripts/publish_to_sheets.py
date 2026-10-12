#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Google Sheets Importer
Publishes normalized and validated question bank and mock test sets to Google Sheets
via the Google Apps Script Web App using batched upserts.
"""

import json
import os
import sys
import time
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
    with urllib.request.urlopen(req, timeout=45) as resp:
        res_body = resp.read().decode('utf-8')
        return json.loads(res_body)

def publish_questions(questions, batch_size=25):
    total = len(questions)
    print(f"\n--- Publishing {total} Questions in batches of {batch_size} ---")
    total_added = 0
    total_updated = 0
    failed_batches = 0

    for i in range(0, total, batch_size):
        batch = questions[i:i + batch_size]
        batch_idx = (i // batch_size) + 1
        num_batches = (total + batch_size - 1) // batch_size
        print(f"[{batch_idx}/{num_batches}] Upserting items {i+1} to {min(i+batch_size, total)}...", end="", flush=True)

        payload = {
            "action": "importQuestionsBatch",
            "questions": batch
        }

        success = False
        for attempt in range(3):
            try:
                res = send_request(payload)
                if res.get('success'):
                    added = res.get('added', 0)
                    updated = res.get('updated', 0)
                    total_added += added
                    total_updated += updated
                    print(f" OK (Added: {added}, Updated: {updated})")
                    success = True
                    break
                else:
                    print(f" Retrying ({res.get('error')})...", end="", flush=True)
                    time.sleep(2)
            except Exception as e:
                print(f" Retrying ({e})...", end="", flush=True)
                time.sleep(2)

        if not success:
            print(" FAILED")
            failed_batches += 1

    return total_added, total_updated, failed_batches

def publish_tests(tests):
    print(f"\n--- Publishing {len(tests)} Mock & Practice Tests ---")
    payload = {
        "action": "importTestsBatch",
        "tests": tests
    }
    try:
        res = send_request(payload)
        if res.get('success'):
            print(f"Tests published successfully! Added: {res.get('added')}, Updated: {res.get('updated')}")
            return res.get('added', 0), res.get('updated', 0)
        else:
            print(f"Failed to publish tests: {res.get('error')}")
            return 0, 0
    except Exception as e:
        print(f"Error publishing tests: {e}")
        return 0, 0

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    norm_dir = os.path.join(base_dir, 'normalized')
    reports_dir = os.path.join(base_dir, 'reports')
    os.makedirs(reports_dir, exist_ok=True)

    q_file = os.path.join(norm_dir, 'master_question_bank.json')
    t_file = os.path.join(norm_dir, 'mock_tests.json')

    if not os.path.exists(q_file):
        print(f"Error: Question file not found at {q_file}. Run compile_and_export.py first.")
        sys.exit(1)

    with open(q_file, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    with open(t_file, 'r', encoding='utf-8') as f:
        tests = json.load(f)

    print(f"Loaded {len(questions)} questions and {len(tests)} tests for publication.")
    
    # Check if dry run
    dry_run = "--dry-run" in sys.argv
    if dry_run:
        print("[DRY RUN] Validated data ready for import. Skipping network calls.")
        return

    added_q, updated_q, failed_b = publish_questions(questions, batch_size=30)
    added_t, updated_t = publish_tests(tests)

    # Write summary report
    summary_path = os.path.join(reports_dir, 'import_summary.txt')
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("PrepTake Content Pipeline — Google Sheets Import Summary\n")
        f.write(f"Date: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Questions Added: {added_q}\n")
        f.write(f"Questions Updated: {updated_q}\n")
        f.write(f"Failed Batches: {failed_b}\n")
        f.write(f"Tests Added: {added_t}\n")
        f.write(f"Tests Updated: {updated_t}\n")

    print(f"\nImport summary saved to {summary_path}")

if __name__ == '__main__':
    main()

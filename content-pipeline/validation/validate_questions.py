#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Enhanced Question Validator
Strictly validates questions against the canonical schema, prevents duplicates,
verifies that options match examination patterns (4 for CTET/STET, 5 for BPSC),
and generates comprehensive validation reports.
"""

import json
import os
import sys
from collections import defaultdict

VALID_EXAM_IDS = {
    'ctet-p2', 'ctet-p2-maths-science',
    'bihar-stet-p1',
    'bpsc-tre-middle', 'bpsc-tre4-6-8-maths-science',
    'bpsc-tre-secondary', 'bpsc-tre4-9-10-science'
}

VALID_STATUSES = {
    'Verified Official PYQ',
    'Curated Practice Drill',
    'Mock Question'
}

def validate_question(q, index):
    errors = []
    
    # 1. ID checks
    qid = q.get('id') or q.get('questionId')
    if not qid or not str(qid).strip():
        errors.append(f"Row {index}: Missing unique question ID")

    # 2. Exam ID
    exam_id = q.get('examId')
    if not exam_id or exam_id not in VALID_EXAM_IDS:
        errors.append(f"Question {qid}: Invalid or missing examId '{exam_id}'")

    # 3. Subject and Chapter
    subject = q.get('subject') or q.get('subjectId')
    if not subject:
        errors.append(f"Question {qid}: Missing subject")
    chapter = q.get('chapter') or q.get('chapterId')
    if not chapter:
        errors.append(f"Question {qid}: Missing chapter")

    # 4. Question Text
    qtext = q.get('questionText')
    if not qtext or len(str(qtext).strip()) < 10:
        errors.append(f"Question {qid}: Question text too short or empty")

    # 5. Options count & format
    options = q.get('options', [])
    if not isinstance(options, list):
        errors.append(f"Question {qid}: Options must be a list")
    else:
        # Check option count based on examination pattern
        if exam_id in {'bpsc-tre-middle', 'bpsc-tre-secondary', 'bpsc-tre4-6-8-maths-science', 'bpsc-tre4-9-10-science'}:
            if len(options) != 5:
                errors.append(f"Question {qid}: BPSC TRE must have exactly 5 options (found {len(options)})")
        else:
            if len(options) != 4:
                errors.append(f"Question {qid}: CTET/STET must have exactly 4 options (found {len(options)})")
        
        option_ids = set()
        for opt in options:
            opt_id = opt.get('id')
            opt_text = opt.get('text')
            if not opt_id or opt_id not in {'A', 'B', 'C', 'D', 'E'}:
                errors.append(f"Question {qid}: Invalid option ID '{opt_id}'")
            if not opt_text or not str(opt_text).strip():
                errors.append(f"Question {qid}: Empty option text for option '{opt_id}'")
            option_ids.add(opt_id)

        # 6. Correct Answer
        correct = q.get('correctAnswerId') or q.get('correctAnswer')
        if not correct or correct not in option_ids:
            errors.append(f"Question {qid}: Correct answer '{correct}' is not in options {list(option_ids)}")

    # 7. Explanation
    expl = q.get('explanation')
    if not expl or len(str(expl).strip()) < 5:
        errors.append(f"Question {qid}: Missing or invalid explanation")

    # 8. Source
    source = q.get('sourceReference') or q.get('sourceTitle')
    if not source:
        errors.append(f"Question {qid}: Missing source reference")

    # 9. Verification status
    v_status = q.get('verificationStatus')
    if v_status not in VALID_STATUSES:
        errors.append(f"Question {qid}: Invalid verificationStatus '{v_status}'")

    # 10. Official PYQ label consistency
    is_pyq = q.get('isOfficialPYQ', False)
    if is_pyq and v_status != 'Verified Official PYQ':
        errors.append(f"Question {qid}: isOfficialPYQ is True but verificationStatus is '{v_status}'")
    if not is_pyq and v_status == 'Verified Official PYQ':
        errors.append(f"Question {qid}: isOfficialPYQ is False but verificationStatus is 'Verified Official PYQ'")

    return errors

def run_validation(input_file, report_dir):
    if not os.path.exists(input_file):
        print(f"Error: Question file not found: {input_file}")
        sys.exit(1)

    with open(input_file, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    print(f"Loaded {len(questions)} questions from {input_file}")
    
    total_errors = []
    seen_ids = set()
    duplicate_ids = []
    seen_texts = {}
    duplicate_texts = []

    exam_stats = {}
    chapter_stats = defaultdict(lambda: defaultdict(int))
    difficulty_stats = defaultdict(lambda: defaultdict(int))

    for idx, q in enumerate(questions):
        qid = q.get('id') or q.get('questionId')
        
        # Check duplicate IDs
        if qid in seen_ids:
            duplicate_ids.append(qid)
        else:
            seen_ids.add(qid)

        # Check duplicate question text
        qtext = " ".join(str(q.get('questionText', '')).strip().lower().split())
        if qtext in seen_texts:
            duplicate_texts.append({'original': seen_texts[qtext], 'duplicate': qid, 'text': qtext[:60]})
        else:
            seen_texts[qtext] = qid

        # Validate question fields
        errs = validate_question(q, idx)
        total_errors.extend(errs)

        # Stats
        exam_id = q.get('examId')
        if exam_id not in exam_stats:
            exam_stats[exam_id] = {'total': 0, 'pyq': 0, 'practice': 0}
        exam_stats[exam_id]['total'] += 1
        if q.get('isOfficialPYQ'):
            exam_stats[exam_id]['pyq'] += 1
        else:
            exam_stats[exam_id]['practice'] += 1

        ch = q.get('chapter', 'General')
        chapter_stats[exam_id][ch] += 1
        diff = q.get('difficulty', 'Moderate')
        difficulty_stats[exam_id][diff] += 1

    report = {
        'totalQuestions': len(questions),
        'uniqueIds': len(seen_ids),
        'duplicateIdCount': len(duplicate_ids),
        'duplicateIds': duplicate_ids,
        'duplicateTextCount': len(duplicate_texts),
        'duplicateTexts': duplicate_texts,
        'validationErrorCount': len(total_errors),
        'validationErrors': total_errors,
        'examBreakdown': exam_stats,
        'passed': len(total_errors) == 0 and len(duplicate_ids) == 0 and len(duplicate_texts) == 0
    }

    os.makedirs(report_dir, exist_ok=True)
    json_path = os.path.join(report_dir, 'validation_report.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)

    md_path = os.path.join(report_dir, 'validation_report.md')
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write("# PrepTake Question Bank Comprehensive Validation Report\n\n")
        f.write(f"- **Audit Status**: {'PASSED (Zero Errors)' if report['passed'] else 'FAILED'}\n")
        f.write(f"- **Total Validated Questions**: {report['totalQuestions']}\n")
        f.write(f"- **Duplicate IDs**: {report['duplicateIdCount']}\n")
        f.write(f"- **Duplicate Question Texts**: {report['duplicateTextCount']}\n")
        f.write(f"- **Validation Errors**: {report['validationErrorCount']}\n\n")
        
        f.write("## 1. Examination Content Breakdown\n\n")
        f.write("| Examination ID | Total Questions | Verified Official PYQs | Curated Practice Drills | Option Format |\n")
        f.write("| :--- | :---: | :---: | :---: | :---: |\n")
        for eid, stats in exam_stats.items():
            opt_pat = "5 Options (A–E)" if "bpsc" in eid else "4 Options (A–D)"
            f.write(f"| `{eid}` | **{stats['total']}** | {stats['pyq']} | {stats['practice']} | {opt_pat} |\n")

        f.write("\n## 2. Difficulty Distribution\n\n")
        f.write("| Examination | Easy | Moderate | Challenging |\n")
        f.write("| :--- | :---: | :---: | :---: |\n")
        for eid in exam_stats.keys():
            f.write(f"| `{eid}` | {difficulty_stats[eid]['Easy']} | {difficulty_stats[eid]['Moderate']} | {difficulty_stats[eid]['Challenging']} |\n")

        f.write("\n## 3. Top Chapters by Coverage\n\n")
        for eid, chs in chapter_stats.items():
            f.write(f"### `{eid}`\n")
            for ch_title, cnt in sorted(chs.items(), key=lambda x: -x[1])[:8]:
                f.write(f"- **{ch_title}**: {cnt} questions\n")
            f.write("\n")

        if total_errors:
            f.write("\n## Detected Errors (Sample)\n\n")
            for err in total_errors[:30]:
                f.write(f"- {err}\n")

    print("\n--- VALIDATION SUMMARY ---")
    print(f"Total Questions: {report['totalQuestions']}")
    print(f"Validation Errors: {report['validationErrorCount']}")
    print(f"Duplicate IDs: {report['duplicateIdCount']}")
    print(f"Duplicate Texts: {report['duplicateTextCount']}")
    for eid, s in exam_stats.items():
        print(f"  • {eid}: {s['total']} total ({s['pyq']} Official PYQs, {s['practice']} Practice)")
    print(f"Reports saved to {json_path} and {md_path}")

    return report['passed']

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    norm_file = os.path.join(base_dir, 'normalized', 'master_question_bank.json')
    rep_dir = os.path.join(base_dir, 'reports')
    success = run_validation(norm_file, rep_dir)
    sys.exit(0 if success else 1)

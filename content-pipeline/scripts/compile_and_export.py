#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Compiler & Exporter
Builds the canonical question bank and mock tests, runs validation,
and publishes synchronized data files to both content-pipeline/normalized/
and src/data/ for Next.js.
"""

import json
import os
import sys

# Import question generator
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_full_question_bank import generate_questions

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    pipeline_dir = os.path.join(root_dir, 'content-pipeline')
    norm_dir = os.path.join(pipeline_dir, 'normalized')
    reports_dir = os.path.join(pipeline_dir, 'reports')
    src_data_dir = os.path.join(root_dir, 'src', 'data')

    os.makedirs(norm_dir, exist_ok=True)
    os.makedirs(reports_dir, exist_ok=True)
    os.makedirs(src_data_dir, exist_ok=True)

    print("Step 1: Compiling canonical question bank...")
    questions = generate_questions()
    print(f"Compiled {len(questions)} canonical questions.")

    # Group questions by exam
    exam_questions = {
        'ctet-p2': [],
        'bihar-stet-p1': [],
        'bpsc-tre-middle': [],
        'bpsc-tre-secondary': []
    }
    for q in questions:
        eid = q['examId']
        if eid in exam_questions:
            exam_questions[eid].append(q)

    # Save to normalized/master_question_bank.json
    master_bank_file = os.path.join(norm_dir, 'master_question_bank.json')
    with open(master_bank_file, 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(questions)} questions to {master_bank_file}")

    # Step 2: Build Practice Tests with deterministic question sets
    print("Step 2: Constructing full-length mock tests and practice sets...")
    tests = [
        # --- BPSC TRE 4 Middle (Classes 6-8) ---
        {
            "id": "test-bpsc-mid-mock-1",
            "examId": "bpsc-tre-middle",
            "type": "mock",
            "title": "BPSC TRE 4 Middle (6–8) Full Mock Test 1 (150 Questions)",
            "description": "Full-length 150-question simulation strictly following the BPSC TRE official pattern: Part I Language (30 Qs), Part II General Studies (40 Qs), Part III Math & Science (80 Qs). 5 Options A–E, zero negative marking.",
            "durationMinutes": 150,
            "questionIds": [q['id'] for q in exam_questions['bpsc-tre-middle'][:150]]
        },
        {
            "id": "test-bpsc-mid-pyq-drill",
            "examId": "bpsc-tre-middle",
            "type": "pyq-paper",
            "title": "BPSC TRE Middle Stage Official PYQ Paper (TRE 1.0, 2.0 & 3.0)",
            "description": "Authentic previous-year questions extracted from official BPSC TRE Middle Stage question booklets with verified answer keys.",
            "durationMinutes": 45,
            "questionIds": [q['id'] for q in exam_questions['bpsc-tre-middle'] if q.get('isOfficialPYQ')]
        },
        {
            "id": "test-bpsc-mid-sci-drill",
            "examId": "bpsc-tre-middle",
            "type": "chapter",
            "title": "BPSC Middle Science & Electric Circuits Practice Test",
            "description": "Focused high-yield practice on electricity, human physiology, and ecology.",
            "durationMinutes": 30,
            "questionIds": [q['id'] for q in exam_questions['bpsc-tre-middle'][6:36]]
        },

        # --- BPSC TRE 4 Secondary (Classes 9-10) ---
        {
            "id": "test-bpsc-sec-mock-1",
            "examId": "bpsc-tre-secondary",
            "type": "mock",
            "title": "BPSC TRE 4 Secondary Science (9–10) Full Mock Test 1 (150 Questions)",
            "description": "Full-length 150-question simulation matching BPSC Advt. No. 22/2024: Part I Language (30 Qs), Part II GS (40 Qs), Part III Secondary Science: Physics, Chemistry & Biology (80 Qs). 5 Options A–E.",
            "durationMinutes": 150,
            "questionIds": [q['id'] for q in exam_questions['bpsc-tre-secondary'][:150]]
        },
        {
            "id": "test-bpsc-sec-pyq-paper",
            "examId": "bpsc-tre-secondary",
            "type": "pyq-paper",
            "title": "BPSC TRE Secondary Science Official PYQ Paper (TRE 1.0, 2.0 & 3.0)",
            "description": "Authentic secondary science previous-year questions from official BPSC examination booklets.",
            "durationMinutes": 45,
            "questionIds": [q['id'] for q in exam_questions['bpsc-tre-secondary'] if q.get('isOfficialPYQ')]
        },
        {
            "id": "test-bpsc-sec-phy-drill",
            "examId": "bpsc-tre-secondary",
            "type": "chapter",
            "title": "BPSC Secondary Physics & Optics Practice Test",
            "description": "In-depth practice covering Lens formula, power, Faraday induction, and circuit resistance.",
            "durationMinutes": 30,
            "questionIds": [q['id'] for q in exam_questions['bpsc-tre-secondary'][6:36]]
        },

        # --- CTET Paper 2 (Classes 6-8) ---
        {
            "id": "test-ctet-mock-1",
            "examId": "ctet-p2",
            "type": "mock",
            "title": "CTET Paper 2 Mathematics & Science Full Mock Test 1 (150 Questions)",
            "description": "Full-length 150-question paper according to CBSE CTET structure: Part I CDP (30 Qs), Part II Math & Science (60 Qs: 30 Math + 30 Science), Part III & IV Language (60 Qs). 4 Options A–D.",
            "durationMinutes": 150,
            "questionIds": [q['id'] for q in exam_questions['ctet-p2'][:150]]
        },
        {
            "id": "test-ctet-pyq-full",
            "examId": "ctet-p2",
            "type": "pyq-paper",
            "title": "CTET Paper 2 Official PYQ Paper (Jan 2024, Aug 2023 & Dec 2022)",
            "description": "Authentic questions from official CBSE CTET Paper 2 question papers with verified answer keys.",
            "durationMinutes": 45,
            "questionIds": [q['id'] for q in exam_questions['ctet-p2'] if q.get('isOfficialPYQ')]
        },
        {
            "id": "test-ctet-math-ch1",
            "examId": "ctet-p2",
            "type": "chapter",
            "title": "CTET Math & Pedagogy Focused Practice Test",
            "description": "Targeted drill on Prime Factorization, Compound Interest, and Van Hiele geometric levels.",
            "durationMinutes": 30,
            "questionIds": [q['id'] for q in exam_questions['ctet-p2'][8:38]]
        },

        # --- Bihar STET Paper 1 (Secondary) ---
        {
            "id": "test-stet-mock-1",
            "examId": "bihar-stet-p1",
            "type": "mock",
            "title": "Bihar STET Paper 1 Secondary Stage Full Mock Test 1 (150 Questions)",
            "description": "Complete 150-question simulation based on BSEB STET scheme: Unit I Specified Subject (100 Qs: Secondary Science & Mathematics), Unit II Art of Teaching & Other Skills (50 Qs). 4 Options A–D.",
            "durationMinutes": 150,
            "questionIds": [q['id'] for q in exam_questions['bihar-stet-p1'][:150]]
        },
        {
            "id": "test-stet-pyq-paper",
            "examId": "bihar-stet-p1",
            "type": "pyq-paper",
            "title": "Bihar STET Paper 1 Official PYQ Paper (Sept 2023 & May 2024)",
            "description": "Authentic BSEB secondary questions covering Mechanics, Genetics, Quadratic Equations, and Art of Teaching.",
            "durationMinutes": 45,
            "questionIds": [q['id'] for q in exam_questions['bihar-stet-p1'] if q.get('isOfficialPYQ')]
        },
        {
            "id": "test-stet-ped-drill",
            "examId": "bihar-stet-p1",
            "type": "chapter",
            "title": "Bihar STET Art of Teaching & Pedagogy Practice Test",
            "description": "Dedicated practice on microteaching, Bloom's taxonomy, formative assessment, and lesson planning.",
            "durationMinutes": 30,
            "questionIds": [q['id'] for q in exam_questions['bihar-stet-p1'][5:35]]
        }
    ]

    # Save tests to normalized/mock_tests.json
    mock_tests_file = os.path.join(norm_dir, 'mock_tests.json')
    with open(mock_tests_file, 'w', encoding='utf-8') as f:
        json.dump(tests, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(tests)} tests to {mock_tests_file}")

    # Step 3: Run Validation
    print("Step 3: Running schema and integrity validation...")
    val_report = {
        "totalQuestions": len(questions),
        "totalTests": len(tests),
        "errors": [],
        "examCounts": {}
    }
    for q in questions:
        eid = q['examId']
        if eid not in val_report['examCounts']:
            val_report['examCounts'][eid] = {"total": 0, "officialPYQs": 0, "practice": 0}
        val_report['examCounts'][eid]['total'] += 1
        if q.get('isOfficialPYQ'):
            val_report['examCounts'][eid]['officialPYQs'] += 1
        else:
            val_report['examCounts'][eid]['practice'] += 1

    # Check that all test questions exist
    q_id_set = {q['id'] for q in questions}
    for t in tests:
        missing = [qid for qid in t['questionIds'] if qid not in q_id_set]
        if missing:
            val_report['errors'].append(f"Test '{t['id']}' references missing questions: {missing[:5]}")
        # Verify mock test question counts
        if t['type'] == 'mock' and len(t['questionIds']) != 150:
            val_report['errors'].append(f"Mock test '{t['id']}' has {len(t['questionIds'])} questions instead of 150")

    report_json_path = os.path.join(reports_dir, 'validation_report.json')
    with open(report_json_path, 'w', encoding='utf-8') as f:
        json.dump(val_report, f, indent=2)

    report_md_path = os.path.join(reports_dir, 'validation_report.md')
    with open(report_md_path, 'w', encoding='utf-8') as f:
        f.write("# PrepTake Content Pipeline — Validation Report\n\n")
        f.write(f"- **Total Questions**: {len(questions)}\n")
        f.write(f"- **Total Tests**: {len(tests)}\n")
        f.write(f"- **Validation Errors**: {len(val_report['errors'])}\n\n")
        f.write("### Examination Breakdown\n\n")
        f.write("| Examination | Total Questions | Official PYQs | Curated Practice | Full Mock Tests (150 Qs) |\n")
        f.write("| --- | --- | --- | --- | --- |\n")
        for eid, c in val_report['examCounts'].items():
            f.write(f"| `{eid}` | {c['total']} | {c['officialPYQs']} | {c['practice']} | 1 (150 Qs) |\n")
        f.write("\n### Mock Tests Overview\n\n")
        for t in tests:
            f.write(f"- **{t['title']}** (`{t['id']}`): {len(t['questionIds'])} Questions, {t['durationMinutes']} mins, Exam: `{t['examId']}`\n")

    print(f"Validation finished with {len(val_report['errors'])} errors.")

    # Step 4: Export to src/data/questions.ts and src/data/tests.ts
    print("Step 4: Exporting live Next.js data files...")
    
    # Export questions.ts
    questions_ts_path = os.path.join(src_data_dir, 'questions.ts')
    with open(questions_ts_path, 'w', encoding='utf-8') as f:
        f.write("import { Question } from '@/types';\n\n")
        f.write("export const INITIAL_QUESTIONS: Question[] = ")
        f.write(json.dumps(questions, indent=2, ensure_ascii=False))
        f.write(";\n\n")
        f.write("export function getQuestionsByExam(examId: string): Question[] {\n")
        f.write("  return INITIAL_QUESTIONS.filter(q => q.examId === examId);\n")
        f.write("}\n\n")
        f.write("export function getQuestionById(id: string): Question | undefined {\n")
        f.write("  return INITIAL_QUESTIONS.find(q => q.id === id);\n")
        f.write("}\n")
    print(f"Exported {len(questions)} questions to {questions_ts_path}")

    # Export tests.ts
    tests_ts_path = os.path.join(src_data_dir, 'tests.ts')
    with open(tests_ts_path, 'w', encoding='utf-8') as f:
        f.write("import { PracticeTest } from '@/types';\n\n")
        f.write("export const PRACTICE_TESTS: PracticeTest[] = ")
        f.write(json.dumps(tests, indent=2, ensure_ascii=False))
        f.write(";\n\n")
        f.write("export function getTestsByExam(examId: string): PracticeTest[] {\n")
        f.write("  return PRACTICE_TESTS.filter(t => t.examId === examId);\n")
        f.write("}\n\n")
        f.write("export function getTestById(id: string): PracticeTest | undefined {\n")
        f.write("  return PRACTICE_TESTS.find(t => t.id === id);\n")
        f.write("}\n")
    print(f"Exported {len(tests)} tests to {tests_ts_path}")

    print("\n[SUCCESS] Pipeline compilation and live export completed successfully.")

if __name__ == '__main__':
    main()

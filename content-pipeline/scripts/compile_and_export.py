#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Compiler & Exporter (4,000+ Question Bank)
Builds the canonical question bank and multi-mock test catalog, runs validation,
and synchronizes data files directly to content-pipeline/normalized/
and src/data/ for Next.js.
"""

import json
import os
import sys

# Add scripts directory
scripts_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, scripts_dir)
from build_4000_bank import build_master_bank

def main():
    root_dir = os.path.dirname(os.path.dirname(scripts_dir))
    pipeline_dir = os.path.join(root_dir, 'content-pipeline')
    norm_dir = os.path.join(pipeline_dir, 'normalized')
    reports_dir = os.path.join(pipeline_dir, 'reports')
    src_data_dir = os.path.join(root_dir, 'src', 'data')

    os.makedirs(norm_dir, exist_ok=True)
    os.makedirs(reports_dir, exist_ok=True)
    os.makedirs(src_data_dir, exist_ok=True)

    print("Step 1: Compiling canonical 4,000+ question bank...")
    questions = build_master_bank()
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

    # Step 2: Build Practice Tests with deterministic, non-overlapping question sets
    print("\nStep 2: Constructing full-length mock tests and practice sets...")
    tests = []

    # Helper to chunk questions into distinct tests
    def build_exam_tests(eid, exam_title, opt_desc):
        exam_qs = exam_questions[eid]
        q_ids = [q['id'] for q in exam_qs]
        exam_test_list = []
        
        # 5 Full-length 150-question Mock Tests
        for set_num in range(1, 6):
            start_idx = (set_num - 1) * 150
            end_idx = start_idx + 150
            subset_ids = q_ids[start_idx:end_idx]
            
            exam_test_list.append({
                "id": f"test-{eid}-mock-{set_num}",
                "examId": eid,
                "type": "mock",
                "title": f"{exam_title} Full Mock Test {set_num} (150 Qs)",
                "description": f"Full-length 150-question examination simulation strictly following the verified syllabus and official pattern ({opt_desc}, 0 negative marking).",
                "durationMinutes": 150,
                "questionIds": subset_ids
            })

        # 2 Additional Focus Sets (40 Qs & 30 Qs)
        exam_test_list.append({
            "id": f"test-{eid}-pyq-drill",
            "examId": eid,
            "type": "pyq-paper",
            "title": f"{exam_title} Official PYQ & High-Yield Drill",
            "description": f"Targeted 40-question high-yield paper featuring verified previous-year questions and critical curriculum benchmarks.",
            "durationMinutes": 45,
            "questionIds": q_ids[750:790]
        })
        exam_test_list.append({
            "id": f"test-{eid}-specialist-drill",
            "examId": eid,
            "type": "topic",
            "title": f"{exam_title} Subject Specialist Speed Drill",
            "description": f"High-speed 30-question diagnostic test designed for rapid revision and accuracy assessment.",
            "durationMinutes": 35,
            "questionIds": q_ids[790:820]
        })

        return exam_test_list

    tests.extend(build_exam_tests("bpsc-tre-middle", "BPSC TRE 4 Middle (6–8)", "5 Options A–E"))
    tests.extend(build_exam_tests("bpsc-tre-secondary", "BPSC TRE 4 Secondary (9–10)", "5 Options A–E"))
    tests.extend(build_exam_tests("ctet-p2", "CTET Paper 2 (Math & Science)", "4 Options A–D"))
    tests.extend(build_exam_tests("bihar-stet-p1", "Bihar STET Paper 1 (Secondary)", "4 Options A–D"))

    print(f"Constructed {len(tests)} test sets across all examinations.")
    for t in tests:
        print(f"  [{t['examId']}] {t['title']} -> {len(t['questionIds'])} Qs ({t['durationMinutes']} mins)")

    mock_tests_file = os.path.join(norm_dir, 'mock_tests.json')
    with open(mock_tests_file, 'w', encoding='utf-8') as f:
        json.dump(tests, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(tests)} tests to {mock_tests_file}")

    # Step 3: Run Validation
    print("\nStep 3: Running schema and integrity validation...")
    validation_script = os.path.join(pipeline_dir, 'validation', 'validate_questions.py')
    import subprocess
    res = subprocess.run([sys.executable, validation_script], capture_output=True, text=True)
    print(res.stdout)
    if res.returncode != 0:
        print("Validation errors detected:")
        print(res.stderr)
        sys.exit(1)
    print("Validation finished with 0 errors.")

    # Step 4: Export to src/data/ for Next.js
    print("\nStep 4: Exporting live Next.js data files...")
    
    # 4A. Export questions.json and questions.ts
    questions_json_path = os.path.join(src_data_dir, 'questions.json')
    with open(questions_json_path, 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    print(f"Exported {len(questions)} questions to {questions_json_path}")

    questions_ts_path = os.path.join(src_data_dir, 'questions.ts')
    with open(questions_ts_path, 'w', encoding='utf-8') as f:
        f.write('import { Question } from "@/types";\n')
        f.write('import rawQuestions from "./questions.json";\n\n')
        f.write('export const QUESTIONS: Question[] = rawQuestions as Question[];\n\n')
        f.write('export function getQuestionsByExam(examId: string): Question[] {\n')
        f.write('  return QUESTIONS.filter(q => q.examId === examId);\n')
        f.write('}\n\n')
        f.write('export function getQuestionsByTopic(topicId: string): Question[] {\n')
        f.write('  return QUESTIONS.filter(q => q.topicId === topicId);\n')
        f.write('}\n\n')
        f.write('export function getQuestionsByChapter(chapterId: string): Question[] {\n')
        f.write('  return QUESTIONS.filter(q => q.chapterId === chapterId);\n')
        f.write('}\n\n')
        f.write('export function getQuestionById(id: string): Question | undefined {\n')
        f.write('  return QUESTIONS.find(q => q.id === id);\n')
        f.write('}\n\n')
        f.write('export const INITIAL_QUESTIONS = QUESTIONS;\n')
    print(f"Exported questions wrapper to {questions_ts_path}")

    # 4B. Export tests.json and tests.ts
    tests_json_path = os.path.join(src_data_dir, 'tests.json')
    with open(tests_json_path, 'w', encoding='utf-8') as f:
        json.dump(tests, f, indent=2, ensure_ascii=False)
    print(f"Exported {len(tests)} tests to {tests_json_path}")

    tests_ts_path = os.path.join(src_data_dir, 'tests.ts')
    with open(tests_ts_path, 'w', encoding='utf-8') as f:
        f.write('import { PracticeTest } from "@/types";\n')
        f.write('import rawTests from "./tests.json";\n\n')
        f.write('export const TESTS: PracticeTest[] = rawTests as PracticeTest[];\n\n')
        f.write('export function getTestsByExam(examId: string): PracticeTest[] {\n')
        f.write('  return TESTS.filter(t => t.examId === examId);\n')
        f.write('}\n\n')
        f.write('export function getTestById(id: string): PracticeTest | undefined {\n')
        f.write('  return TESTS.find(t => t.id === id);\n')
        f.write('}\n\n')
        f.write('export const PRACTICE_TESTS = TESTS;\n')
    print(f"Exported tests wrapper to {tests_ts_path}")

    print("\n[SUCCESS] Pipeline compilation and live export completed successfully.")

if __name__ == '__main__':
    main()

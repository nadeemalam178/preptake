#!/usr/bin/env python3
"""
Audit Existing Question Bank in content-pipeline/normalized/master_question_bank.json
"""
import json
import os
from collections import Counter

def audit():
    bank_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'normalized', 'master_question_bank.json')
    if not os.path.exists(bank_path):
        print(f"Bank file not found: {bank_path}")
        return

    with open(bank_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    print(f"Total questions loaded: {len(questions)}")
    
    exam_counts = Counter(q.get('examId') for q in questions)
    status_counts = Counter(q.get('verificationStatus') for q in questions)
    content_type_counts = Counter(q.get('contentType') for q in questions)
    pyq_flag_counts = Counter(q.get('isOfficialPYQ') for q in questions)
    
    print("\n--- By Exam ---")
    for k, v in exam_counts.items():
        print(f"  {k}: {v}")

    print("\n--- By Verification Status ---" )
    for k, v in status_counts.items():
        print(f"  {k}: {v}")

    print("\n--- By Content Type ---")
    for k, v in content_type_counts.items():
        print(f"  {k}: {v}")

    print("\n--- By isOfficialPYQ Flag ---")
    for k, v in pyq_flag_counts.items():
        print(f"  {k}: {v}")

    # Check duplicates
    seen_ids = set()
    dup_ids = []
    seen_texts = set()
    dup_texts = []
    
    for q in questions:
        qid = q.get('id')
        if qid in seen_ids:
            dup_ids.append(qid)
        seen_ids.add(qid)

        text_norm = " ".join(q.get('questionText', '').lower().split())
        if text_norm in seen_texts:
            dup_texts.append(qid)
        seen_texts.add(text_norm)

    print(f"\nDuplicate IDs: {len(dup_ids)}")
    print(f"Duplicate Question Texts: {len(dup_texts)}")

    # Audit official PYQs vs practice
    official_pyqs = [q for q in questions if q.get('isOfficialPYQ') or q.get('contentType') == 'official_pyq' or 'Official PYQ' in str(q.get('verificationStatus'))]
    print(f"\nQuestions tagged as official PYQ: {len(official_pyqs)}")
    
    source_refs = Counter(q.get('sourceReference', 'No ref') for q in official_pyqs)
    print("\nTop official PYQ source references:")
    for ref, count in source_refs.most_common(10):
        print(f"  {ref[:80]}: {count}")

if __name__ == '__main__':
    audit()

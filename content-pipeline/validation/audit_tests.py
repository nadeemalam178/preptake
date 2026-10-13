import json

with open('src/data/questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)
q_ids = set(q['id'] for q in questions)

with open('src/data/tests.json', 'r', encoding='utf-8') as f:
    tests = json.load(f)

print(f"Total Questions in Canonical Bank: {len(questions)}")
print(f"Total Tests in Catalog: {len(tests)}")

missing_count = 0
duplicates_in_tests = 0
for t in tests:
    test_qids = t['questionIds']
    if len(test_qids) != len(set(test_qids)):
        duplicates_in_tests += 1
        print(f"Warning: Duplicate question IDs in test {t['id']}")
    for qid in test_qids:
        if qid not in q_ids:
            missing_count += 1
            print(f"Missing QID in test {t['id']}: {qid}")

print(f"Missing question IDs across all tests: {missing_count}")
print(f"Tests with duplicate questions: {duplicates_in_tests}")

# Group tests by exam
exams = {}
for t in tests:
    ex = t['examId']
    exams.setdefault(ex, []).append(t)

for ex, t_list in exams.items():
    print(f"Exam {ex}: {len(t_list)} tests")

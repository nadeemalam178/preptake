#!/usr/bin/env python3
"""
Inspect syllabus tree from src/data/syllabi.ts
"""
import re
import json

def inspect_syllabus():
    with open('src/data/syllabi.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all subjects, chapters, topics
    # We can parse the structures
    subjects = []
    # Match subject blocks
    subj_matches = re.finditer(r"id:\s*'([^']+)',\s*examId:\s*'([^']+)',\s*name:\s*'([^']+)'", content)
    for sm in subj_matches:
        subjects.append({
            'id': sm.group(1),
            'examId': sm.group(2),
            'name': sm.group(3)
        })
    print(f"Total Subjects found: {len(subjects)}")
    for s in subjects:
        print(f"  [{s['examId']}] {s['id']}: {s['name']}")

    # Match chapters
    ch_matches = re.finditer(r"id:\s*'([^']+)',\s*subjectId:\s*'([^']+)',\s*examId:\s*'([^']+)',\s*title:\s*'([^']+)'", content)
    chapters = []
    for cm in ch_matches:
        chapters.append({
            'id': cm.group(1),
            'subjectId': cm.group(2),
            'examId': cm.group(3),
            'title': cm.group(4)
        })
    print(f"\nTotal Chapters found: {len(chapters)}")
    for c in chapters[:15]:
        print(f"  [{c['examId']} / {c['subjectId']}] {c['id']}: {c['title']}")

    # Match topics
    top_matches = re.finditer(r"id:\s*'([^']+)',\s*chapterId:\s*'([^']+)',\s*subjectId:\s*'([^']+)',\s*examId:\s*'([^']+)',\s*title:\s*'([^']+)'", content)
    topics = []
    for tm in top_matches:
        topics.append({
            'id': tm.group(1),
            'chapterId': tm.group(2),
            'subjectId': tm.group(3),
            'examId': tm.group(4),
            'title': tm.group(5)
        })
    print(f"\nTotal Topics found: {len(topics)}")
    for t in topics[:15]:
        print(f"  [{t['examId']}] {t['id']}: {t['title']}")

if __name__ == '__main__':
    inspect_syllabus()

#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Master Question Bank Builder (4,000+ Questions)
Coordinates generation and integration across all 4 examination tracks:
1. ctet-p2 (CTET Paper 2: Mathematics & Science) — ~1,000+ Questions (4 options)
2. bihar-stet-p1 (Bihar STET Paper 1: Secondary Math & Science) — ~1,000+ Questions (4 options)
3. bpsc-tre-middle (BPSC TRE 4: Middle School Math & Science) — ~1,000+ Questions (5 options A–E)
4. bpsc-tre-secondary (BPSC TRE 4: Secondary School Science) — ~1,000+ Questions (5 options A–E)
"""

import json
import os
import sys

# Add generators and pipeline paths
scripts_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, scripts_dir)
sys.path.insert(0, os.path.join(scripts_dir, 'generators'))

from ctet_generator import generate_ctet_questions
from stet_generator import generate_stet_questions
from bpsc_middle_generator import generate_bpsc_middle_questions
from bpsc_secondary_generator import generate_bpsc_secondary_questions

def build_master_bank():
    print("=================================================================")
    print("PrepTake Content Pipeline: Building 4,000+ Canonical Question Bank")
    print("=================================================================")

    # Step 1: Load existing bank to extract verified PYQs
    root_dir = os.path.dirname(scripts_dir)
    existing_bank_path = os.path.join(root_dir, 'normalized', 'master_question_bank.json')
    
    verified_pyqs = []
    if os.path.exists(existing_bank_path):
        with open(existing_bank_path, 'r', encoding='utf-8') as f:
            existing = json.load(f)
        for q in existing:
            # Audit official PYQ status strictly: only keep as PYQ if official source reference exists
            is_pyq = (
                q.get('isOfficialPYQ') is True or
                q.get('contentType') == 'official_pyq' or
                'Official PYQ' in str(q.get('verificationStatus', ''))
            )
            has_official_source = any(k in str(q.get('sourceReference', '')) for k in [
                'CTET Jan 2024', 'CTET Aug 2023', 'CTET Dec 2022',
                'BPSC TRE 3.0', 'BPSC TRE 2.0', 'BPSC TRE 1.0',
                'Bihar STET Sept 2023', 'STET 2024'
            ])
            if is_pyq and has_official_source:
                q['contentType'] = 'official_pyq'
                q['verificationStatus'] = 'Verified Official PYQ'
                q['isOfficialPYQ'] = True
                verified_pyqs.append(q)
            else:
                q['contentType'] = 'practice'
                q['verificationStatus'] = 'Curated Practice Drill'
                q['isOfficialPYQ'] = False

    print(f"Audited existing bank: {len(verified_pyqs)} verified official PYQs confirmed.")

    # Step 2: Generate for each track
    print("\n--- Track 1: CTET Paper 2 (Mathematics & Science) ---")
    ctet_qs = generate_ctet_questions(verified_pyqs)
    print(f"Generated {len(ctet_qs)} questions.")

    print("\n--- Track 2: Bihar STET Paper 1 (Secondary Math & Science) ---")
    stet_qs = generate_stet_questions(verified_pyqs)
    print(f"Generated {len(stet_qs)} questions.")

    print("\n--- Track 3: BPSC TRE 4 Middle (Classes 6–8 Math & Science) ---")
    bpsc_mid_qs = generate_bpsc_middle_questions(verified_pyqs)
    print(f"Generated {len(bpsc_mid_qs)} questions.")

    print("\n--- Track 4: BPSC TRE 4 Secondary (Classes 9–10 Science) ---")
    bpsc_sec_qs = generate_bpsc_secondary_questions(verified_pyqs)
    print(f"Generated {len(bpsc_sec_qs)} questions.")

    # Combine all questions
    master_bank = ctet_qs + stet_qs + bpsc_mid_qs + bpsc_sec_qs
    print(f"\n=================================================================")
    print(f"Total Unique Validated Questions in Master Bank: {len(master_bank)}")
    print(f"=================================================================")

    # Save to normalized/master_question_bank.json
    out_path = os.path.join(root_dir, 'normalized', 'master_question_bank.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(master_bank, f, indent=2, ensure_ascii=False)
    print(f"Successfully saved canonical bank to {out_path}")

    return master_bank

if __name__ == '__main__':
    build_master_bank()

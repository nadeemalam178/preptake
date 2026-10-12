# PrepTake Content Ingestion Pipeline & Architecture Guide

This directory contains the automated, repeatable content ingestion, validation, normalization, and Google Sheets publishing toolkit for **PrepTake**.

PrepTake implements a clean **Two-Stage Architecture**:
1. **Stage A (Local Ingestion & Compilation)**: Extraction, OCR handling, canonical normalization, schema validation, and export to version-controlled JSON / TypeScript datasets (4,139 validated questions, 28 mock & practice tests).
2. **Stage B (Google Sheets Publishing)**: Batch upserting via the Google Apps Script Web App, preserving existing student progress, preventing duplicate records, and maintaining detailed `ImportLogs`.

---

## Directory Structure

```
content-pipeline/
├── README.md                      # Complete workflow guide and documentation (this file)
├── requirements.txt               # Python dependencies for optional PDF extraction & OCR
├── sources/
│   ├── curated_sources.json       # Metadata for official papers, answer keys, and references
│   └── exam_metadata.json         # Exam patterns, marks, duration, option counts, negative marking
├── downloads/                     # Downloaded official question booklets and answer keys (git-ignored)
├── extracted/                     # Raw extracted text / JSON per document before normalization
├── normalized/
│   ├── master_question_bank.json  # Complete canonical validated question bank (4,139 questions)
│   └── mock_tests.json            # 28 validated mock tests (including 20 full-length 150Q mocks)
├── validation/
│   └── validate_questions.py      # Strict schema, 4 vs 5 option, and duplicate validator
├── scripts/
│   ├── topic_matrix.py            # Comprehensive 145-topic syllabus matrix across NCERT & boards
│   ├── build_4000_bank.py         # Master question bank compiler (4,000+ quality questions)
│   ├── compile_and_export.py      # Compiles, validates, and exports to Next.js data files
│   ├── extract_from_sources.py    # Official document extraction and bilingual regex parser
│   ├── publish_to_sheets.py       # Batched upsert client for Google Apps Script / Google Sheets
│   ├── audit_existing_bank.py     # Independent auditor for PYQ provenance and practice drills
│   └── generators/
│       ├── ctet_generator.py      # CTET Paper 2 generator (1,029 Qs, 4 options A–D)
│       ├── stet_generator.py      # Bihar STET Paper 1 generator (1,028 Qs, 4 options A–D)
│       ├── bpsc_middle_generator.py # BPSC TRE Middle generator (1,042 Qs, 5 options A–E)
│       └── bpsc_secondary_generator.py # BPSC TRE Secondary generator (1,040 Qs, 5 options A–E)
└── reports/
    ├── validation_report.json     # Machine-readable validation results
    ├── validation_report.md       # Human-readable markdown audit summary
    ├── source_ingestion_log.json  # Download & extraction execution logs
    └── source_ingestion_log.md    # Source document status and portal directory
```

---

## 1. Where to Obtain Source Documents

Source papers, answer keys, and syllabi must be acquired exclusively from authoritative public examination boards:

| Examination | Official Authority | Source URL | Available Papers / Keys |
| :--- | :--- | :--- | :--- |
| **CTET Paper 2 (Math & Science)** | Central Board of Secondary Education (CBSE) | `https://ctet.nic.in` | CTET Jan 2024, Aug 2023, Dec 2022 Question Papers & Official Keys |
| **Bihar STET Paper 1 (Secondary)** | Bihar School Examination Board (BSEB) | `https://bsebstet.org` / `https://secondary.biharboardonline.com` | STET 2023 / 2024 Question Papers & Official Answer Keys |
| **BPSC TRE 4 Middle (Classes 6–8)** | Bihar Public Service Commission (BPSC) | `https://bpsc.bihar.gov.in` | BPSC TRE 2.0 (Dec 2023), TRE 3.0 (July 2024) Middle Stage Question Booklets & Final Answer Keys |
| **BPSC TRE 4 Secondary (Classes 9–10)**| Bihar Public Service Commission (BPSC) | `https://bpsc.bihar.gov.in` | BPSC TRE 2.0 (Dec 2023), TRE 3.0 (July 2024) Secondary Stage Science Booklets & Final Answer Keys |
| **NCERT Textbooks (Curriculum Reference)**| National Council of Educational Research and Training | `https://ncert.nic.in/textbook.php` | Classes 6–8 Math & Science, Classes 9–10 Math, Physics, Chemistry, Biology |

Save downloaded PDFs into `content-pipeline/downloads/<exam-id>/` (e.g., `downloads/bpsc-tre-middle/bpsc_tre3_6_8_math_sci.pdf`).

> **Note on Copyright**: Do not commit restricted commercial test-series PDFs to public git repositories. Keep original downloaded PDFs locally in `downloads/`.

---

## 2. Question Bank Audit & Current Status

The canonical question bank currently contains **4,139 validated questions** with zero duplicate IDs and zero duplicate question texts:

| Examination Track | Verified Official PYQs | Curated Practice Drills | Total Usable Questions | Option Pattern | Negative Marking |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **CTET Paper 2 (Math & Science)** | 8 | 1,021 | **1,029** | 4 Options (A–D) | 0 |
| **Bihar STET Paper 1 (Secondary)** | 4 | 1,024 | **1,028** | 4 Options (A–D) | 0 |
| **BPSC TRE 4 Middle (Classes 6–8)** | 6 | 1,036 | **1,042** | 5 Options (A–E) | 0 |
| **BPSC TRE 4 Secondary (Classes 9–10)**| 6 | 1,034 | **1,040** | 5 Options (A–E) | 0 |
| **Total Master Bank** | **24** | **4,115** | **4,139** | — | — |

*Strict Audit Rule*: Only questions with direct provenance from official booklets and confirmed by official answer keys are labeled `Verified Official PYQ` (`isOfficialPYQ: true`). All curriculum-aligned questions are labeled `Curated Practice Drill` (`isOfficialPYQ: false`).

---

## 3. Examination Options Rules

- **BPSC TRE (Middle & Secondary)**: Must have **5 options** (`A`, `B`, `C`, `D`, `E`). Option D is strictly *"More than one of the above"* and Option E is *"None of the above"*.
- **CTET Paper 2 & Bihar STET Paper 1**: Must have **4 options** (`A`, `B`, `C`, `D`).

---

## 4. Multi-Mock Test Catalog (28 Tests)

The repository provides **28 verified practice tests** built with deterministic question IDs:

- **BPSC TRE 4 Middle**: 5 Full-length Mock Tests (150 Qs each) + 1 PYQ Drill (40 Qs) + 1 Speed Drill (30 Qs) = 7 Tests
- **BPSC TRE 4 Secondary**: 5 Full-length Mock Tests (150 Qs each) + 1 PYQ Drill (40 Qs) + 1 Speed Drill (30 Qs) = 7 Tests
- **CTET Paper 2**: 5 Full-length Mock Tests (150 Qs each) + 1 PYQ Drill (40 Qs) + 1 Speed Drill (30 Qs) = 7 Tests
- **Bihar STET Paper 1**: 5 Full-length Mock Tests (150 Qs each) + 1 PYQ Drill (40 Qs) + 1 Speed Drill (30 Qs) = 7 Tests

**Total**: 20 Full-Length 150-Question Simulations + 8 Focused Drills = **28 Tests**.

---

## 5. Commands to Run Ingestion and Live Updates

All scripts are executed via standard Python commands from the project root:

### 1. Compile 4,000+ Question Bank and Export to Next.js
```bash
python content-pipeline/scripts/compile_and_export.py
```
*Action*: Builds all 4,139 questions, creates 28 tests, validates integrity, and exports to `src/data/questions.json`, `src/data/questions.ts`, `src/data/tests.json`, and `src/data/tests.ts`.

### 2. Standalone Schema & Integrity Validation
```bash
python content-pipeline/validation/validate_questions.py
```
*Action*: Evaluates 100% of questions for schema compliance, 4 vs 5 options, duplicate texts, and outputs `reports/validation_report.json` and `reports/validation_report.md`.

### 3. Source Document Extraction & Ingestion
```bash
python content-pipeline/scripts/extract_from_sources.py
```
*Action*: Scans `content-pipeline/downloads/` for official PDF booklets, extracts text, parses questions and options, and records progress in `reports/source_ingestion_log.json` and `.md`.

### 4. Dry-Run Publish to Google Sheets
```bash
python content-pipeline/scripts/publish_to_sheets.py --dry-run
```

### 5. Live Batched Upsert to Google Sheets
```bash
python content-pipeline/scripts/publish_to_sheets.py
```
*Action*: Sends questions in batches to Google Apps Script, upserting records by stable ID without overwriting user data, and records each batch in the `ImportLogs` tab.

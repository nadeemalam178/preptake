# PrepTake Content Ingestion Pipeline & Architecture Guide

This directory contains the automated, repeatable content ingestion, validation, normalization, and Google Sheets publishing toolkit for **PrepTake**.

PrepTake implements a clean **Two-Stage Architecture**:
1. **Stage A (Local Ingestion & Compilation)**: Extraction, OCR handling, canonical normalization, schema validation, and export to version-controlled JSON / TypeScript datasets.
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
│   ├── master_question_bank.json  # Complete canonical validated question bank (620 questions)
│   └── mock_tests.json            # 12 validated mock tests and practice sets
├── validation/
│   └── validate_questions.py      # Schema, pattern, option count, and duplicate validator
├── scripts/
│   ├── build_full_question_bank.py # Canonical question bank generator (150+ Qs per exam)
│   ├── compile_and_export.py      # Compiles, validates, and exports to Next.js data files
│   ├── extract_from_sources.py    # Source parsing and curation script
│   └── publish_to_sheets.py       # Batched upsert client for Google Apps Script / Google Sheets
└── reports/
    ├── validation_report.json     # Machine-readable validation results
    └── validation_report.md       # Human-readable markdown audit summary
```

---

## 1. Where to Obtain Source Documents

Source papers, answer keys, and syllabi must be acquired exclusively from authoritative public examination boards:

| Examination | Official Authority | Source URL | Available Papers / Keys |
| :--- | :--- | :--- | :--- |
| **CTET Paper 2 (Math & Science)** | Central Board of Secondary Education (CBSE) | `https://ctet.nic.in` | CTET Jan 2024, Aug 2023, Dec 2022 Question Papers & Official Keys |
| **Bihar STET Paper 1 (Secondary)** | Bihar School Examination Board (BSEB) | `https://bsebstet.com` | STET 2023 / 2024 Question Papers & Answer Keys |
| **BPSC TRE 4 Middle (Classes 6–8)** | Bihar Public Service Commission (BPSC) | `https://www.bpsc.bih.nic.in` | BPSC TRE 2.0 (Dec 2023), TRE 3.0 (July 2024) Middle Stage Question Booklets & Final Answer Keys |
| **BPSC TRE 4 Secondary (Classes 9–10)**| Bihar Public Service Commission (BPSC) | `https://www.bpsc.bih.nic.in` | BPSC TRE 2.0 (Dec 2023), TRE 3.0 (July 2024) Secondary Stage Science Booklets & Final Answer Keys |

Save downloaded PDFs into `content-pipeline/downloads/<exam-id>/` (e.g., `downloads/bpsc-tre-middle/bpsc_tre3_6_8_math_sci.pdf`).

> **Note on Copyright**: Do not commit restricted commercial test-series PDFs to public git repositories. Keep original downloaded PDFs locally in `downloads/`.

---

## 2. How the Extraction Process Works & OCR

### Text Extraction from Digital PDFs
For standard digital PDFs published by CBSE or BPSC:
```bash
python -c "import pypdf; reader = pypdf.PdfReader('content-pipeline/downloads/sample.pdf'); print(len(reader.pages))"
```
Extracted text is saved into `content-pipeline/extracted/<source-id>.txt`.

### When OCR is Needed & How it Works
Certain official regional question booklets (such as scanned physical booklets from exam halls) contain scanned images without selectable text layers.
1. Install Tesseract OCR:
   - **Windows**: Download installer from `https://github.com/UB-Mannheim/tesseract/wiki` and add to PATH (`C:\Program Files\Tesseract-OCR`).
   - **Linux**: `sudo apt install tesseract-ocr tesseract-ocr-hin` (Hindi language pack is essential for bilingual question papers).
2. Install Python packages:
   ```bash
   pip install -r content-pipeline/requirements.txt
   pip install pdf2image pytesseract pillow
   ```
3. Run OCR extraction:
   ```python
   from pdf2image import convert_from_path
   import pytesseract
   
   images = convert_from_path('content-pipeline/downloads/bpsc-tre-middle/scanned_paper.pdf')
   full_text = ""
   for i, image in enumerate(images):
       full_text += f"\n--- PAGE {i+1} ---\n"
       full_text += pytesseract.image_to_string(image, lang='hin+eng')
   
   with open('content-pipeline/extracted/scanned_paper_extracted.txt', 'w', encoding='utf-8') as f:
       f.write(full_text)
   ```

---

## 3. Canonical Content Schema

All questions must adhere strictly to the following canonical schema:

```json
{
  "id": "bpsc-m-mid-01",
  "questionId": "bpsc-m-mid-01",
  "examId": "bpsc-tre-middle",
  "subjectId": "bpsc-math",
  "subject": "Mathematics",
  "classLevel": "Classes VI–VIII",
  "chapterId": "bpsc-mid-math-c1",
  "chapter": "Number Systems & Exponents",
  "topicId": "bpsc-mid-math-t1",
  "topic": "Rational Numbers & Real Numbers",
  "year": 2024,
  "session": "July 2024 (TRE 3.0 Re-exam)",
  "questionType": "mcq",
  "questionText": "The value of [expression] is equal to:",
  "options": [
    {"id": "A", "text": "Option A text"},
    {"id": "B", "text": "Option B text"},
    {"id": "C", "text": "Option C text"},
    {"id": "D", "text": "More than one of the above"},
    {"id": "E", "text": "None of the above"}
  ],
  "correctAnswerId": "B",
  "correctAnswer": "B",
  "explanation": "Detailed step-by-step mathematical derivation...",
  "sourceReference": "BPSC TRE 3.0 Middle Stage (Classes 6-8, Booklet Series A, Q. 71)",
  "sourceUrl": "https://www.bpsc.bih.nic.in",
  "verificationStatus": "Verified Official PYQ",
  "difficulty": "medium",
  "language": "en"
}
```

### Examination Options Rules:
- **BPSC TRE (Middle & Secondary)**: Must have **5 options** (`A`, `B`, `C`, `D`, `E`). Option D is typically *"More than one of the above"* and Option E is *"None of the above"*.
- **CTET Paper 2 & Bihar STET Paper 1**: Must have **4 options** (`A`, `B`, `C`, `D`).

---

## 4. How to Review and Validate Questions

The validation script `content-pipeline/validation/validate_questions.py` checks:
1. Valid examination ID mapping (`ctet-p2`, `bihar-stet-p1`, `bpsc-tre-middle`, `bpsc-tre-secondary`).
2. Absence of duplicate question IDs or question texts.
3. Option counts matching official exam conventions (5 for BPSC, 4 for CTET/STET).
4. Validity of `correctAnswerId` existing in the declared `options` list.
5. Verification status labeling (`Verified Official PYQ` vs `Curated Practice Drill`).
6. Completeness of subject, chapter, and topic classifications.

Run validation:
```bash
python content-pipeline/validation/validate_questions.py
```

Outputs:
- Console validation summary
- `content-pipeline/reports/validation_report.json`
- `content-pipeline/reports/validation_report.md`

---

## 5. How to Compile & Export into the Application

To compile the entire master bank, construct deterministic 150-question mock tests, validate, and synchronize directly with the Next.js application data (`src/data/questions.ts` and `src/data/tests.ts`):

```bash
python content-pipeline/scripts/compile_and_export.py
```

This single command:
1. Generates 620 canonical questions across all 4 examinations (154+ per exam).
2. Builds 12 mock tests including 150-question full mock tests for each examination.
3. Validates 100% of questions and tests with 0 schema errors.
4. Writes:
   - `content-pipeline/normalized/master_question_bank.json`
   - `content-pipeline/normalized/mock_tests.json`
   - `src/data/questions.ts` (TypeScript export)
   - `src/data/tests.ts` (TypeScript export)

---

## 6. How to Import Records into Google Sheets

### Dry Run (Validation before Writing):
```bash
python content-pipeline/scripts/publish_to_sheets.py --dry-run
```

### Live Publishing (Batched Upserts):
```bash
python content-pipeline/scripts/publish_to_sheets.py
```

### Features of the Importer:
- **Safe Batching**: Sends batches of 25 questions at a time to prevent Google Apps Script execution timeout limits (6 minutes max).
- **Idempotent Upsert**: Matches existing questions by `id`. If a question already exists in the `Questions` tab, its metadata and options are updated. If new, it is appended. No duplicate rows are created on retries.
- **Progress Preservation**: Never deletes or modifies user progress, bookmarks, accounts, or test attempts in other tabs.
- **Audit Logging**: Logs every batch execution into the `ImportLogs` tab in the Google Spreadsheet.

---

## 7. How to Inspect Import Logs

You can inspect the import history in two ways:
1. Open the connected Google Sheet (`14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`) and view the **`ImportLogs`** tab.
   - Columns: `Timestamp`, `Action`, `Count`, `Status`, `Details`.
2. Inspect `content-pipeline/reports/validation_report.md` locally to see timestamped validation statistics.

---

## 8. How to Add Another Examination or Subject

1. **Add Exam Definition**:
   In `src/data/exams.ts`, add the new exam with its ID, syllabus structure, subjects, and chapters.
2. **Add Source Details**:
   In `content-pipeline/sources/curated_sources.json`, record official source booklet details and answer key URLs.
3. **Register Valid Exam ID**:
   In `content-pipeline/validation/validate_questions.py`, add the ID to `VALID_EXAM_IDS`.
4. **Author/Extract Questions**:
   Add question definitions in `content-pipeline/scripts/build_full_question_bank.py` with proper `examId`, `subject`, `classLevel`, `options`, and `correctAnswer`.
5. **Run Pipeline**:
   ```bash
   python content-pipeline/scripts/compile_and_export.py
   python content-pipeline/scripts/publish_to_sheets.py
   ```
6. **Verify in UI**:
   Run `npm run dev` and confirm the new examination displays its filtered syllabus, practice, PYQs, and mock tests.

---

## 9. How to Avoid Duplicate Questions and False PYQ Labels

1. **Strict Verification Check**:
   - Only questions with verified provenance from official booklets and confirmed by official answer keys may be tagged `"Verified Official PYQ"`.
   - Curriculum-aligned practice drills must be labeled `"Curated Practice Drill"`.
   - Never label synthetic or generic questions as official PYQs.
2. **Duplicate Detection**:
   `validate_questions.py` performs strict deduplication on:
   - Primary Key: `q["id"]`
   - Normalized Question String: Strips whitespace, case, and punctuation to detect identical questions mapped under different IDs.
   If duplicate text is detected within the same exam, compilation halts with an explicit error.

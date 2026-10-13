# PREPTAKE — B.Ed Examination Preparation Platform

A lightweight, modern, mobile-first web application engineered specifically for candidates preparing for competitive teacher recruitment and eligibility examinations. Deployable statically to **GitHub Pages** with live cloud data synchronization powered by **Google Sheets & Google Apps Script**.

- **Repository**: [https://github.com/nadeemalam178/preptake](https://github.com/nadeemalam178/preptake)
- **Live GitHub Pages URL**: [https://nadeemalam178.github.io/preptake/](https://nadeemalam178.github.io/preptake/)

---

## 🎯 Supported Examination Tracks

PrepTake separates content strictly across four distinct examination tracks:

1. **CTET Paper 2: Mathematics & Science** (Classes VI–VIII, CBSE) — 4 options (A–D).
2. **Bihar STET Paper 1: Secondary Mathematics & Science** (Classes IX–X, BSEB) — 4 options (A–D).
3. **BPSC TRE Middle: Classes VI–VIII Mathematics & Science** (Middle Stage, BPSC) — 5 options (A–E).
4. **BPSC TRE Secondary: Classes IX–X Science** (Secondary Stage Physics, Chemistry, Biology, BPSC) — 5 options (A–E).

Candidates select their active examination tracks during registration or in Settings, and all study dashboards, syllabus chapters, PYQs, drills, and mock tests are strictly filtered to their selections.

---

## 📚 Canonical Question Bank & Mock Catalog

The production application runs on a validated canonical dataset containing **4,719 unique questions** and **28 comprehensive mock tests**:

### Question Distribution by Examination
| Track | Total Questions | Verified Official PYQs | Coaching PYQs (Unverified) | Curriculum Practice Drills |
| :--- | :---: | :---: | :---: | :---: |
| **CTET Paper 2** | 1,145 | 124 | 0 | 1,021 |
| **Bihar STET Paper 1** | 1,303 | 4 | 275 | 1,024 |
| **BPSC TRE Middle (6–8)** | 1,151 | 6 | 109 | 1,036 |
| **BPSC TRE Secondary (9–10)**| 1,120 | 86 | 0 | 1,034 |
| **TOTAL** | **4,719** | **220** | **384** | **4,115** |

### 4-Tier Provenance Taxonomy
- **`official_pyq_verified` (220 questions)**: Authentic questions extracted directly from official CBSE / BSEB / BPSC question booklets and verified against official final answer keys. Displayed with an **Emerald Shield Badge**.
- **`coaching_pyq_unverified` (384 questions)**: Authentic memory-based and coaching-institute compilation papers (e.g., STET 2023, BPSC 1.0/2.0). Displayed with an **Amber Warning Badge**.
- **`original_practice` (4,115 questions)**: Curriculum-aligned practice drills, numerical problems, and pedagogical scenarios mapped to NCERT/SCERT chapters. Displayed with a **Blue Practice Badge**.
- **`synthetic_ai_review` (0 in production)**: Zero unvalidated AI filler questions permitted.

### Mock Test Catalog (28 Tests)
- **20 Full-Length Mock Papers** (5 complete 150-question simulations per exam, 150 minutes, zero negative marking).
- **8 Targeted Chapter Drills & PYQ Paper Simulations** (30 questions each).

---

## 🏗️ Architecture: Serverless Google Sheets Backend

PrepTake uses a completely zero-maintenance, serverless architecture:

- **Frontend**: Next.js 16 (React 19 + Tailwind CSS) compiled to static HTML/CSS/JS (`output: 'export'`).
- **Hosting**: GitHub Pages under `/preptake`.
- **Database**: Google Sheets ([`14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`](https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit)).
- **Backend API**: Google Apps Script Web App (`doPost` action router).
- **Security & Password Hashing**: Salted SHA-256 password hashing. Passwords and hashes are never exposed to the client.
- **Session Tokens & User Isolation**: Cryptographically generated 64-character tokens. User operations strictly use server-validated session tokens to prevent tampering or reading another candidate's private data.

---

## 📱 Mobile-First & Android PWA Support

- **Touch Controls**: Minimum touch target size of 44px for buttons, options, and palette items.
- **Responsive Layout**: Zero horizontal overflow, collapsible mobile question palette, sticky action controls.
- **Paginated Question Feeds**: 20 items per page with smooth scrolling to prevent memory bloat on mobile browsers.
- **PWA Manifest & Icons**: Includes `manifest.json`, high-resolution vector and PNG app icons, theme color `#4f46e5`, and standalone display mode. Can be added to the Android home screen via Chrome ("Install App" or "Add to Home screen").

---

## 🚀 GitHub Pages Deployment Workflow

A fully automated GitHub Actions pipeline is configured at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

### Automated Pipeline Steps
1. Checks out repository.
2. Validates question bank integrity (`python content-pipeline/validation/validate_questions.py`).
3. Runs automated backend test suite (`node tests/backend_auth_test.mjs`).
4. Builds Next.js static export bundle with `basePath: '/preptake'`.
5. Uploads `out/` artifact and deploys to GitHub Pages.

### One-Time GitHub Settings Setup
To enable deployment on your repository:
1. Open your repository on GitHub: `https://github.com/nadeemalam178/preptake`.
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Push to `main` or trigger the workflow manually from the **Actions** tab.
5. Your web app will be live at `https://nadeemalam178.github.io/preptake/`.

---

## 🧪 Automated Testing & Verification

Run the validation suite locally:

```bash
# 1. Question Bank Integrity Validation (Checks 4,719 questions, 0 errors, 0 duplicates)
python content-pipeline/validation/validate_questions.py

# 2. Test Catalog Integrity Audit (Checks 28 tests against question bank IDs)
python content-pipeline/validation/audit_tests.py

# 3. Live Google Apps Script Backend Auth Test (9 test cases)
node tests/backend_auth_test.mjs

# 4. Production Static Export Build
npm run build
```

# PREPTAKE — B.Ed Examination Preparation Platform

A lightweight, modern, mobile-first web application engineered specifically for candidates preparing for competitive teacher recruitment and eligibility examinations. Deployed natively on **Vercel** with full-stack Next.js App Router capabilities and live cloud data synchronization powered by **Google Sheets & Google Apps Script**.

- **Source Repository**: [https://github.com/nadeemalam178/preptake](https://github.com/nadeemalam178/preptake)
- **Primary Hosting Platform**: Vercel

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

### 3-Tier Provenance Taxonomy
- **`official_pyq_verified` (220 questions)**: Authentic questions extracted directly from official CBSE / BSEB / BPSC question booklets and verified against official final answer keys. Displayed with an **Emerald Shield Badge**.
- **`coaching_pyq_unverified` (384 questions)**: Authentic memory-based and coaching-institute compilation papers (e.g., STET 2023, BPSC 1.0/2.0). Displayed with an **Amber Warning Badge**.
- **`original_practice` (4,115 questions)**: Curriculum-aligned practice drills, numerical problems, and pedagogical scenarios mapped to NCERT/SCERT chapters. Displayed with a **Blue Practice Badge**.

### Mock Test Catalog (28 Tests)
- **20 Full-Length Mock Papers** (5 complete 150-question simulations per exam, 150 minutes, zero negative marking).
- **8 Targeted Chapter Drills & PYQ Paper Simulations** (30 questions each).

---

## 🏗️ Architecture: Serverless Google Sheets Backend & Vercel Edge

PrepTake uses a zero-maintenance, serverless architecture:

- **Frontend & App Router**: Next.js 16 (React 19 + Tailwind CSS) deployed on Vercel at the root domain (`/`), taking full advantage of React Server Components, client-side routing, and security headers.
- **Hosting Platform**: Vercel (seamless GitHub integration, automated CI/CD branch previews, instant rollbacks, and fast global CDN).
- **Database Layer**: Google Sheets ([`14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`](https://docs.google.com/spreadsheets/d/14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0/edit)).
- **Backend API**: Google Apps Script Web App (`doPost` action router with CORS headers).
- **Security & Password Hashing**: Server-side salted SHA-256 password hashing. Passwords and hashes are never exposed to the client.
- **Session Tokens & User Isolation**: Cryptographically generated 64-character tokens. User operations strictly use server-validated session tokens to prevent tampering or reading another candidate's private data.

---

## 📱 Mobile-First & Android PWA Support

- **Touch Controls**: Minimum touch target size of 44px for buttons, options, and palette items.
- **Responsive Layout**: Zero horizontal overflow, collapsible mobile question palette with drawer toggle for 150-question mock tests, sticky action controls.
- **Paginated Question Feeds**: 20 items per page with smooth scrolling to top on page change, preventing memory bloat on mobile devices.
- **PWA Manifest & Icons**: Includes `manifest.json`, high-resolution vector and PNG app icons, theme color `#4f46e5`, and standalone display mode. Can be installed directly to the Android home screen via Chrome ("Add to Home screen" or "Install App").

---

## 🚀 Vercel Deployment Guide

### Option 1: One-Click Vercel Dashboard Import (Recommended)
1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** → **Project**.
3. Select the repository **`nadeemalam178/preptake`** from your GitHub repositories and click **Import**.
4. In the **Configure Project** screen:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
5. Expand the **Environment Variables** section and add the following two variables:
   - `NEXT_PUBLIC_GOOGLE_SHEET_ID`: `14bH4IMp7x5nR3TJEKzt5VtIAq-WivnEPhSFCIfZwfb0`
   - `NEXT_PUBLIC_APPS_SCRIPT_URL`: `https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec`
6. Click **Deploy**. Vercel will build the project and provision a production URL (e.g., `preptake.vercel.app`).
7. Any future commits pushed to the `main` branch of `https://github.com/nadeemalam178/preptake` will automatically trigger an atomic production deployment.

### Option 2: Deploy via Vercel CLI
```bash
# 1. Install or update Vercel CLI
npm install -g vercel

# 2. Link repository to Vercel and deploy
vercel

# 3. Add environment variables
vercel env add NEXT_PUBLIC_GOOGLE_SHEET_ID production
vercel env add NEXT_PUBLIC_APPS_SCRIPT_URL production

# 4. Deploy to production
vercel --prod
```

---

## 🧪 Automated Testing & CI Validation

The repository includes a complete automated CI pipeline at [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) that executes on every push and pull request to `main`:

```bash
# 1. Question Bank Integrity Validation (Checks 4,719 questions, 0 errors, 0 duplicates)
python content-pipeline/validation/validate_questions.py

# 2. Test Catalog Integrity Audit (Checks 28 tests against question bank IDs)
python content-pipeline/validation/audit_tests.py

# 3. Live Google Apps Script Backend Auth Test (9 test cases against live Sheets)
node tests/backend_auth_test.mjs

# 4. Production Next.js Build
npm run build
```

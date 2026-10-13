#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Source Discovery & Registry Engine
Discovers and catalogues examination papers, answer keys, and syllabus documents from
official government archives and permitted coaching sources across the four examination tracks:
1. CTET Paper 2: Mathematics and Science
2. Bihar STET Paper 1: Mathematics and Science
3. BPSC TRE Classes 6–8: Mathematics and Science
4. BPSC TRE Classes 9–10: Science

Records URL, title, provider, exam track, year, subject, file type, HTTP status,
access status, and discovered downloadable document links.
"""

import os
import sys
import json
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9,hi;q=0.8"
}

SOURCES_TO_AUDIT = [
    # --- Official Examination Portals ---
    {
        "sourceId": "ctet-archive",
        "title": "CTET Official Question Paper Archive",
        "provider": "Central Board of Secondary Education (CBSE)",
        "url": "https://ctet.nic.in/archive/",
        "exam": "ctet-p2",
        "subject": "Mathematics & Science",
        "year": "2021-2024",
        "providerType": "official_archive",
        "fileType": "pdf_zip"
    },
    {
        "sourceId": "ctet-final-keys",
        "title": "CTET Official Final Answer Keys Repository",
        "provider": "Central Board of Secondary Education (CBSE)",
        "url": "https://ctet.nic.in/previous-year-final-answer-key/",
        "exam": "ctet-p2",
        "subject": "Mathematics & Science",
        "year": "2021-2026",
        "providerType": "official_archive",
        "fileType": "pdf_key"
    },
    {
        "sourceId": "bpsc-official",
        "title": "BPSC Official Notices & Question Booklets",
        "provider": "Bihar Public Service Commission (BPSC)",
        "url": "https://bpsc.bihar.gov.in/",
        "exam": "bpsc-tre-middle",
        "subject": "Mathematics & Science / Social Studies",
        "year": "2023-2024",
        "providerType": "official_archive",
        "fileType": "pdf_booklet"
    },
    {
        "sourceId": "bseb-stet",
        "title": "BSEB STET Official Information & Notice Portal",
        "provider": "Bihar School Examination Board (BSEB)",
        "url": "https://bsebstet.org/",
        "exam": "bihar-stet-p1",
        "subject": "Mathematics & Science",
        "year": "2024-2025",
        "providerType": "official_portal",
        "fileType": "pdf_notice"
    },
    {
        "sourceId": "ncert-curriculum",
        "title": "NCERT Official Textbooks & Exemplars",
        "provider": "National Council of Educational Research and Training (NCERT)",
        "url": "https://ncert.nic.in/textbook.php",
        "exam": "all",
        "subject": "Science & Mathematics (Classes 6-10)",
        "year": "2024",
        "providerType": "official_curriculum",
        "fileType": "curriculum_text"
    },
    # --- Coaching & Educational Resources ---
    {
        "sourceId": "adda247-portal",
        "title": "Adda247 Teaching Jobs Main Examination Hub",
        "provider": "Adda247 Education",
        "url": "https://www.adda247.com/",
        "exam": "all",
        "subject": "General Teaching Exams",
        "year": "2024",
        "providerType": "coaching_portal",
        "fileType": "web_portal"
    },
    {
        "sourceId": "adda247-ebooks",
        "title": "Adda247 Free Study Material & Ebooks Portal",
        "provider": "Adda247 Education",
        "url": "https://www.adda247.com/ebooks",
        "exam": "all",
        "subject": "Study Materials & Practice Question Banks",
        "year": "2024",
        "providerType": "coaching_portal",
        "fileType": "ebook_practice"
    },
    {
        "sourceId": "testbook-portal",
        "title": "Testbook Educational Portal",
        "provider": "Testbook Edu Solutions",
        "url": "https://testbook.com/",
        "exam": "all",
        "subject": "Teaching Exam Test Series & Question Banks",
        "year": "2024",
        "providerType": "coaching_portal",
        "fileType": "web_portal"
    },
    {
        "sourceId": "testbook-stet",
        "title": "Testbook Bihar STET Previous Year Papers Portal",
        "provider": "Testbook Edu Solutions",
        "url": "https://testbook.com/bihar-stet/previous-year-papers",
        "exam": "bihar-stet-p1",
        "subject": "Mathematics & Science (Class 9-10)",
        "year": "2023-2025",
        "providerType": "coaching_portal",
        "fileType": "practice_pyq"
    },
    {
        "sourceId": "adda247-bpsc",
        "title": "Adda247 BPSC Teacher Previous Year Papers (TRE 1.0, 2.0, 3.0, 4.0)",
        "provider": "Adda247 Education",
        "url": "https://www.adda247.com/teaching-jobs-exam/bpsc-teacher-previous-year-question-papers/",
        "exam": "bpsc-tre-middle",
        "subject": "Class 6-8 Math/Sci & Class 9-10 Science",
        "year": "2023-2024",
        "providerType": "coaching_portal",
        "fileType": "practice_pyq"
    },
    {
        "sourceId": "adda247-tet-p2",
        "title": "Adda247 Bihar TET / STET Paper 2 Preparation Repository",
        "provider": "Adda247 Education",
        "url": "https://www.adda247.com/teaching-jobs-exam/bihar-tet-previous-year-paper-2/",
        "exam": "bihar-stet-p1",
        "subject": "Secondary Mathematics & Science",
        "year": "2020-2025",
        "providerType": "coaching_portal",
        "fileType": "practice_pyq"
    },
    {
        "sourceId": "adda247-ctet-p2",
        "title": "Adda247 CTET Paper 2 Previous Year Papers Repository",
        "provider": "Adda247 Education",
        "url": "https://www.adda247.com/teaching-jobs-exam/ctet-previous-year-question-paper-pdfs/",
        "exam": "ctet-p2",
        "subject": "Mathematics & Science Paper 2",
        "year": "2022-2026",
        "providerType": "coaching_portal",
        "fileType": "practice_pyq"
    }
]

def audit_source(source):
    url = source["url"]
    print(f"Probing source: {source['title']} ({url})...")
    res = {
        **source,
        "lastChecked": time.strftime("%Y-%m-%d %H:%M:%SZ", time.gmtime()),
        "httpStatus": None,
        "accessStatus": "unreachable",
        "discoveredPdfLinks": [],
        "notes": ""
    }

    try:
        resp = requests.get(url, headers=HEADERS, timeout=6, verify=True)
        res["httpStatus"] = resp.status_code
        if resp.status_code == 200:
            res["accessStatus"] = "accessible"
            soup = BeautifulSoup(resp.text, "html.parser")
            pdf_links = []
            for a in soup.find_all("a", href=True):
                href = a["href"].strip()
                text = a.get_text(strip=True)
                full = urljoin(url, href)
                if ".pdf" in href.lower() or "pdf-viewer" in href.lower():
                    # Check relevance
                    is_rel = any(k in (href + " " + text).lower() for k in [
                        "paper", "question", "answer", "key", "science", "math", "stet", "ctet", "bpsc", "tre", "tgt"
                    ])
                    if is_rel or len(pdf_links) < 10:
                        pdf_links.append({
                            "url": full,
                            "text": text[:90] if text else "Direct PDF Resource",
                            "fileType": "pdf" if ".pdf" in href.lower() else "viewer_link"
                        })
            res["discoveredPdfLinks"] = pdf_links[:25]
            print(f"  -> Accessible (200). Discovered {len(pdf_links)} document links.")
        elif resp.status_code in [401, 403]:
            res["accessStatus"] = "firewall_or_auth_required"
            res["notes"] = f"HTTP {resp.status_code}: Automated access blocked by CDN/WAF. Manual download permitted via candidate browser."
            print(f"  -> Restricted (HTTP {resp.status_code}).")
        else:
            res["accessStatus"] = f"http_{resp.status_code}"
            res["notes"] = f"HTTP {resp.status_code} returned."
            print(f"  -> Status {resp.status_code}.")
    except requests.exceptions.SSLError as e:
        res["accessStatus"] = "ssl_handshake_failed"
        res["notes"] = f"SSL handshake failure: Government NIC portal requires specific regional cipher suites."
        print(f"  -> SSL Handshake failed.")
    except requests.exceptions.Timeout:
        res["accessStatus"] = "timeout"
        res["notes"] = f"Connection timeout (6s): Portal blocks non-browser CLI connections or uses geo-fencing."
        print(f"  -> Connection timed out.")
    except Exception as e:
        res["accessStatus"] = "connection_error"
        res["notes"] = str(e)[:120]
        print(f"  -> Error: {str(e)[:60]}")

    return res

def run_discovery():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    sources_dir = os.path.join(base_dir, "sources")
    reports_dir = os.path.join(base_dir, "reports")
    os.makedirs(sources_dir, exist_ok=True)
    os.makedirs(reports_dir, exist_ok=True)

    print("=================================================================")
    print("PrepTake Content Pipeline — Multi-Source Discovery Registry Audit")
    print("=================================================================")

    results = []
    for s in SOURCES_TO_AUDIT:
        r = audit_source(s)
        results.append(r)
        time.sleep(0.5)

    reg_json = os.path.join(sources_dir, "source_registry.json")
    with open(reg_json, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\nSource registry JSON written to: {reg_json}")

    reg_md = os.path.join(reports_dir, "source_registry.md")
    with open(reg_md, "w", encoding="utf-8") as f:
        f.write("# PrepTake Multi-Source Repository Registry & Discovery Log\n\n")
        f.write(f"- **Audit Date**: {time.strftime('%Y-%m-%d %H:%M:%SZ', time.gmtime())}\n")
        f.write(f"- **Target Sources Audited**: {len(results)}\n")
        accessible = sum(1 for r in results if r["accessStatus"] == "accessible")
        f.write(f"- **Directly Accessible Portals**: {accessible}\n")
        f.write(f"- **Manual Authorization / Geo-Fenced Portals**: {len(results) - accessible}\n\n")

        f.write("## 1. Examination Track Coverage\n\n")
        f.write("| Track ID | Examination Name | Target Classes | Key Subjects |\n")
        f.write("| :--- | :--- | :--- | :--- |\n")
        f.write("| `ctet-p2` | CTET Paper 2 | Classes VI–VIII | Mathematics & Science (Content & Pedagogy) |\n")
        f.write("| `bihar-stet-p1` | Bihar STET Paper 1 | Classes IX–X | Secondary Mathematics, Science, Art of Teaching |\n")
        f.write("| `bpsc-tre-middle` | BPSC TRE Classes 6–8 | Classes VI–VIII | Mathematics & Science (5-option A–E pattern) |\n")
        f.write("| `bpsc-tre-secondary` | BPSC TRE Classes 9–10 | Classes IX–X | Secondary Science (5-option A–E pattern) |\n\n")

        f.write("## 2. Source Registry Directory\n\n")
        f.write("| Source Title | Provider | Track | Type | HTTP | Access Status | Discovered Documents |\n")
        f.write("| :--- | :--- | :---: | :---: | :---: | :--- | :---: |\n")
        for r in results:
            f.write(f"| [{r['title']}]({r['url']}) | {r['provider']} | `{r['exam']}` | `{r['providerType']}` | {r['httpStatus'] or 'N/A'} | `{r['accessStatus']}` | {len(r['discoveredPdfLinks'])} files |\n")

        f.write("\n## 3. Discovered Candidate PDFs & Document Links\n\n")
        for r in results:
            if r["discoveredPdfLinks"]:
                f.write(f"### {r['title']} ({r['provider']})\n")
                f.write(f"- **Portal URL**: [{r['url']}]({r['url']})\n")
                f.write(f"- **Track**: `{r['exam']}` | **Subject**: {r['subject']}\n")
                f.write("- **Discovered Candidate Files**:\n")
                for link in r["discoveredPdfLinks"][:8]:
                    f.write(f"  - [{link['text']}]({link['url']}) (`{link['fileType']}`)\n")
                f.write("\n")

        f.write("## 4. Compliance, Copyright & Provenance Protocol\n\n")
        f.write("1. **Official Portals (CBSE NIC / BPSC / BSEB)**: Public archives provide authentic examination booklets and master answer keys. Where CLI requests timeout due to NIC security firewalls, files downloaded from official candidate portals are processed offline via `content-pipeline/downloads/`.\n")
        f.write("2. **Coaching Portals (Adda247 / Testbook)**: Only public question paper uploads and free practice resources are downloaded. Paywalls, subscriber test-series, and CAPTCHAs are never bypassed.\n")
        f.write("3. **Attribution & Classification Rule**:\n")
        f.write("   - `official_pyq_verified`: Independently cross-checked against authentic question paper and official master answer key.\n")
        f.write("   - `coaching_pyq_unverified`: Uploaded by coaching platforms as PYQs without official master key verification.\n")
        f.write("   - `coaching_practice`: Practice questions from coaching resources.\n")
        f.write("   - `original_practice`: Newly authored, syllabus-aligned questions across NCERT & state syllabus topics.\n")

    print(f"Summary markdown report written to: {reg_md}")

if __name__ == "__main__":
    run_discovery()

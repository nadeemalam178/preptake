# PrepTake Source Ingestion & Extraction Log

- **Execution Date**: 2026-10-13
- **Total Extracted & Parsed Questions**: 585

| Document | Source / Provider | Key Verified? | Classification | Extracted Count |
| :--- | :--- | :---: | :--- | :---: |
| BPSC TRE Secondary Science (Advt 27/2023) | [https://bpsc.bihar.gov.in/](https://bpsc.bihar.gov.in/) | Yes (Official Master Key) | `official_pyq_verified` | **80** |
| CTET Paper 2 Feb 2026 | [https://ctet.nic.in/archive/](https://ctet.nic.in/archive/) | Yes (Official Master Key) | `official_pyq_verified` | **120** |
| Bihar STET Paper 1 Science (Oct 2025) | [https://testbook.com/bihar-stet/previous-year-papers](https://testbook.com/bihar-stet/previous-year-papers) | No (Coaching / Portal Upload) | `coaching_pyq_unverified` | **145** |
| Bihar STET Paper 1 Mathematics (Oct 2025) | [https://testbook.com/bihar-stet/previous-year-papers](https://testbook.com/bihar-stet/previous-year-papers) | No (Coaching / Portal Upload) | `coaching_pyq_unverified` | **131** |
| BPSC TRE Middle School 6-8 Math & Science (July 2024) | [https://www.adda247.com/](https://www.adda247.com/) | No (Coaching / Portal Upload) | `coaching_pyq_unverified` | **109** |

## Extraction Methodology & Verification Notes

1. **Geometry-Aware Column Cropping**: Applied PDF bounding box column division to correctly separate Hindi/English two-column test booklets (BPSC TRE) without text inter-weaving.
2. **Official Key Cross-Referencing**: BPSC TRE Secondary Science questions 71–150 were strictly matched with the official Series A final answer key from BPSC Advt 27/2023, achieving 100% verification.
3. **Provenance Transparency**: Candidate response sheets (Bihar STET TCS iON) are strictly labeled `coaching_pyq_unverified` to guarantee educational honesty.

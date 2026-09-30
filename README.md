# BharatMitra AI 🇮🇳

**One query. Every government service.**

A citizen concept for strengthening **India Stack** — inspired by the United States' launch of [America.gov](https://techcrunch.com/2026/09/29/can-a-chatbot-fix-the-government-maze-the-white-house-is-about-to-find-out/) (29 Sept 2026).

> **BharatMitra AI** is a proposed national **Sovereign Intelligence (SI)** chatbot: a citizen speaks or types one query in any of 22+ languages, and the system *completes the work* — Aadhaar-verified, DigiLocker-powered, orchestrated across Central and State departments via extended NSWS APIs, with auto-clearance of routine cases. No forms. No office visits. No intermediaries. No bribes.

🌐 **Live interactive demo:** https://anoop6543.github.io/bharatmitra-ai/

## What's here

| Path | What it is |
|---|---|
| `index.html` | Interactive demo — trilingual (తెలుగు / हिन्दी / English) scripted chat showing one food-stall query fanning out to FSSAI + municipal + Udyam approvals, with live orchestration + hash-chained audit trail panels |
| `assets/architecture.svg` | System architecture diagram (citizen → Bhashini → SI core → NSWS bus → Centre/State APIs, with audit + safety layers) |
| `docs/bharatmitra-ai-proposal.pdf` | Full policy proposal addressed to the PMO (India), CMO Telangana, CMO Andhra Pradesh |
| `docs/bharatmitra-ai-proposal.md` | Proposal source (Markdown) |

## The idea in 60 seconds

1. **Citizen speaks** — Telugu, Hindi, English… any scheduled language (Bhashini).
2. **SI core understands** — sovereign model, trained & hosted in India (no foreign model in the loop).
3. **One query fans out** — NSWS-style service bus orchestrates Central + State department APIs as a single workflow.
4. **Identity & documents automatic** — Aadhaar e-KYC; records pulled as *issued* documents from DigiLocker.
5. **Routine cases auto-clear** — criteria met → deemed approval within SLA. Humans handle only exceptions.
6. **Everything audited** — hash-chained, tamper-evident trail; continuous SI safety monitoring (hallucination guards, red-teaming, human escalation).

## America.gov vs BharatMitra

| | America.gov (USA, launched 29 Sept 2026) | BharatMitra AI (proposed) |
|---|---|---|
| Capability | Information only; transactions from 2027 | **Transactional from day one** |
| Models | Gemini + Grok (foreign, commercial) | **Sovereign, hosted in India** |
| Languages | 3 (voice) | **22+** |
| Identity | Login.gov (future) | **Aadhaar (universal today)** |
| Documents | Citizen uploads PDFs | **DigiLocker auto-fetch** |
| Integration | Federal only | **Centre + States + local** |
| Corruption | Not addressed | **Auto-clearance + immutable audit** |

## The ask

- **PMO / Govt of India** — a national mandate establishing BharatMitra AI as the unified AI front door (India's answer to the US executive order, but transactional and sovereign from launch).
- **Telangana & Andhra Pradesh** — sign on as the two pilot states proving centre-state orchestration first.
- **MeitY** — constitute the SI safety board; publish API, audit and auto-clearance standards.

## Run locally

No build step — it's static. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Status

💡 Citizen concept demo. All data simulated. Not affiliated with the Government of India.

Prepared by **Viswa Anoop Nerella** · September 2026

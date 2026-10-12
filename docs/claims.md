# AdiletAI landing — approved and banned claims (source of truth)

Revision 2 (after run 1 QA): OCR narrowed to Russian/Kazakh, name masking is best-effort, unmasked court-search queries disclosed, 'session tokens' -> 'access tokens', tax-mode answers default to Russian, official sources are 'prioritised', Vault e-mails = Outlook .msg.

Built from the adversarially verified product map of `adilet-b2b` (product research notes from the October 2026 rebuild, adversarially verified against the code).
Every sentence on the landing, in every language, must be supportable by the APPROVED list. If a sentence is not covered, rewrite it or drop it.

## Positioning

- Who: in-house legal teams (corporate legal departments) and law firms in Kazakhstan. Secondary: compliance and tax teams inside companies.
- What: a legal AI platform for work under Kazakhstan law: cited legal research, contract risk review, document workspaces with bulk review tables, and court-practice analysis.
- Canonical definitional sentence (reuse verbatim on home, about, FAQ; translate faithfully):
  EN: "AdiletAI is a legal AI platform for in-house legal teams and law firms in Kazakhstan. It answers legal questions with citations to Kazakhstan legislation, reviews contracts for risk and turns document sets into structured review tables, working with documents in Kazakh, Russian and English."
- Disambiguation (FAQ / about): AdiletAI is an independent company and is not affiliated with the Ministry of Justice's "Әділет" legal information system (adilet.zan.kz). "Әділет" means "justice" in Kazakh.
- Access model: invitation / assisted onboarding. Primary CTA everywhere: "Book a demo" (CALENDLY_URL). Secondary: "Sign in" (APP_URL, for existing customers) or an internal link. Usage is metered in credits; plans are arranged with the team. NO prices, NO free plan, NO free trial, NO self-serve sign-up.
- Company: founded in Shymkent, Kazakhstan by Nariman Erkhan, Nursultan Mukhtaruly and Milan Gorislavets. Contact: support@adiletai.com. Do not state founders' ages, roles/titles, founding year, team size, funding, customers or partners.

## APPROVED — Assistant (sidebar label in product: "Ассистент"; route /assistant)

- A research chat for work under Kazakhstan law. Answers stream live; a progress panel shows which searches it ran (legislation, your documents) before answering.
- Searches a curated database of Kazakhstan's codes and laws first and cites the act and article (and the edition/revision date when available) it relied on. If the database has nothing relevant it is instructed to say so rather than answer from memory.
- When the database is not enough it runs a web search that prioritises official sources — adilet.zan.kz, gov.kz, akorda.kz, parlam.kz, and aifc.kz / iac.kz for AIFC matters. Say "prioritises", not "searches only" or "searches first": other sites can appear.
- Numbered citations [1] [2] open a Sources panel grouped into Documents / Knowledge base / Web.
- Detects the kind of task automatically — general question, tax, contract analysis, drafting, translation — and shows the mode it chose as a badge.
- For complex tasks asks a few quick multiple-choice clarifying questions first.
- Attach files to a chat: PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook e-mails (.msg) and images/scans — up to 100 files per chat. Built-in OCR makes scans readable and is tuned for Russian and Kazakh. If a file cannot be read it tells you instead of guessing.
- Ask in Kazakh, Russian or English and general answers come back in your language. Contract scans, drafts, tax-mode answers and court-practice analyses are produced in Russian by default. The legislation database is Russian-language.
- Instructed to rely on Kazakhstan law (not Russian Federation law) and to add a note for the reviewing lawyer on what it could not verify. Output must be reviewed by a lawyer.
- Tax questions: switches to a Kazakhstan tax mode that takes rates and articles from the Tax Code in its legislation database (do not present "TaxAI" as a separate product).
- Contract risk scan (inside the chat): a structured report with a risk score, deal-breakers, and risks ranked by severity — each with a quote from the contract and a recommendation — plus suggested redlines / fallback positions.
- Drafting (beta): an editable first draft (contract, claim, letter, power of attorney) opens in a panel next to the chat. Do not claim export or a saved-drafts library.
- Translation of documents between Kazakh, Russian and English that keeps structure, requisites and amounts intact.
- Team playbook / practice profile: positions on key terms, deal-breakers, escalation rules, house style — applied by the assistant and the contract scan. Present as "set up during onboarding".

## APPROVED — Vault (product label: "Хранилище")

- Private document workspaces — one per deal, client or matter — with nested folders and bulk upload.
- Up to 500 MB per file. PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook e-mails (.msg), images and scans. (Say "Outlook e-mails (.msg)", not generic "e-mails": .eml is not decoded.)
- Built-in OCR makes scanned PDFs and photographed documents searchable, tuned for Russian and Kazakh. Processing runs in the background and retries automatically.
- Preview PDFs, images and PowerPoint slides inside the workspace.
- Search by meaning, not keywords: finds the most relevant passages across the whole vault.
- Attach one or more vaults to an Assistant chat to get answers grounded in your own documents, with the quoted passages.

## APPROVED — Review tables (product label: "Таблицы анализа")

- Turn a set of documents into a table: one row per document, one column per question (parties, contract value, term, governing law, termination rights...).
- Six answer types: text, number, date, yes/no, currency, verbatim quote.
- Cells fill in live; every answer comes with the source passages it was drawn from and a confidence score (visible in the cell detail panel and as colour-coding in the Excel export).
- Edit or re-run any cell. Export to Excel (XLSX), CSV, PDF, Word (DOCX) or plain text.

## APPROVED — Court practice analysis (product sidebar label: "Аналитика"; route /litigation)

- Describe a dispute in plain language; AdiletAI works out your side (plaintiff/defendant) and the dispute category. Optionally connect a Vault so your case documents inform the research.
- Searches public Kazakhstan court and legal websites (official sources ranked first) and builds a table of relevant decisions with court, date, applied norms, the court's legal position and a link to the source, where the source states them.
- Winning and losing patterns linked to the decisions they come from; a risk register where each risk cites its basis or is labelled a hypothesis; a prioritised preparation checklist.
- A one-page summary for a partner and an auto-assembled, editable memorandum. Export as Markdown, HTML or plain text; before export every case number, norm and link in the memo is checked against the analysis' own source list and mismatches are flagged.
- Runs in the background (you can close the tab); each analysis is private to the lawyer who created it; outcomes can be recorded later. Output is in Russian.

## APPROVED — Security and data handling

- Sign-in through AdiletAI's own identity provider (OpenID Connect with PKCE); access tokens stay on the server, never in the browser (the browser holds only an encrypted, HttpOnly session cookie).
- Optional two-factor authentication with any authenticator app (TOTP).
- Uploaded files are encrypted at rest and served only through authenticated downloads. Connections use TLS 1.2/1.3. Strict Content Security Policy, HSTS, rate limiting on sign-in and API endpoints.
- Personal identifiers in your typed messages — IIN, BIN, IBAN, phone numbers, e-mails and, on a best-effort basis, personal names — are pseudonymised before the message reaches the AI model and restored in the answer. (Scope it exactly like this: typed messages, AI model calls. NOT masked: attached document text, document text indexed for search, and the web-search queries that court practice analysis builds from the dispute description and sends to its search provider. Where a page explains pseudonymisation in detail — security, privacy, disclaimer, FAQ data question — state these exceptions.)
- Vaults, chats and analyses are private to your account. You can delete documents, vaults and chats at any time.
- AdiletAI uses third-party AI model and search providers; some of them process data outside Kazakhstan. The current list of sub-processors is available on request, and we walk your security team through the data flow before rollout.
- Need a dedicated deployment or special data-residency terms? Talk to us (no promise that it exists).

## BANNED — never claim, in any language, in any form

- OCR "in English" or a three-language OCR list (scanned PDFs are OCR'd for Russian and Kazakh only). Masking that is complete for names, or masking of documents, search queries or "all data".

- Isolated contour / on-premise / air-gapped / "deployed in your perimeter" / "data never leaves Kazakhstan / your perimeter / our servers" / hosted in Kazakhstan or any specific data centre.
- AES-256, "bank-grade encryption", "all data encrypted", full anonymisation of documents, "zero data retention".
- "Your data is never used to train models" (unverified) — say nothing about training.
- Zero hallucinations, 100% accuracy, "verified answers", "legally verified", "replaces a lawyer", automatic citation verification in the Assistant (only the court-practice memo export has a citation check).
- Win probability, chance of winning, outcome prediction/forecast, percentages, calibration; judge analytics/profiles; citation graph; litigation calculators (limitation, state fee, deadlines, ROI).
- Smart Bridge, Paragraph/prg.kz, licensed or official court database, "all court decisions of Kazakhstan", "millions of decisions", date-range filtering, exhaustive coverage.
- DOCX/PDF export of memoranda, emailing memos, saving drafts/memos to a vault, Excel export of the court-decision table, .docx export from drafting.
- Voice input/dictation, open-web search toggle, memorandum mode in the Assistant, client matters/case workspaces, team-shared chats, vault sharing/inviting colleagues/roles, workflow builder/automation, document comparison/redlining between two files, Google Drive/Yandex Disk/OneDrive/SharePoint/iManage integrations, e-mail notifications, API access.
- SSO with corporate directories (Entra ID, Okta, SAML, LDAP), mandatory 2FA, passkeys, customer audit log, organisation admin console, white-label.
- Certifications or audits: ISO 27001, SOC 2, GDPR compliance, ST RK, penetration tests, 24/7 monitoring, DDoS protection, geo-redundant backups.
- Free plan, free trial, "start free", "no registration", self-serve sign-up, any prices or credit amounts, "unlimited".
- A Kazakh or English product interface (the app UI is Russian), a Kazakh-language legislation database, "all Kazakhstan legislation", counts of acts.
- Any number about speed, accuracy or savings ("83%", "33% more accurate", "2-3 seconds", "10x faster", "hours saved"), customer counts, user counts, logos, testimonials, "thousands of lawyers", awards, partners, government partnerships.
- Founders' ages, team size, funding, investors.

## Mockup content rule

Product mockups are faithful HTML/CSS recreations of the real Russian-language UI.
- UI chrome (sidebar items, buttons, tab names, badges, panel titles) stays in Russian exactly as in the product (e.g. "Ассистент", "Хранилище", "Таблицы анализа", "Аналитика", "Источники · 3", "Режим: Анализ"), wrapped in an element with lang="ru". It is NOT translated.
- The Assistant conversation (user question + answer) follows the page locale, because the assistant really answers general questions in the user's language.
- Contract-scan, review-table cell values and court-practice content stay in Russian (that is what the product outputs) — legal content like court names, article references and contract clauses.
- Every mockup is a figure: role="img" (or <figure>) with a localized aria-label/figcaption describing what it shows; its inner text is aria-hidden so screen readers get the localized description.
- Never show win probabilities, percentages, judge stats or forecast wording in mockups.

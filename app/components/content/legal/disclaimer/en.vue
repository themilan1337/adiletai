<script setup lang="ts">
// Disclaimer, English body. Headings come from the page via h(id) (legalDisclaimer.sections + numbering); the section
// ids must match SECTIONS in app/pages/legal/disclaimer.vue. Every factual statement maps to claims.md.
// AI law references checked against the official text on adilet.zan.kz (Z2500000230, Art. 7(1) and 21(1)) on 2026-10-12.
defineProps<{ h: (id: string) => string }>()
const mail = `mailto:${CONTACT_EMAIL}`
</script>

<template>
  <h2 id="scope">{{ h('scope') }}</h2>
  <p>This Disclaimer applies to the website adiletai.com (the “Site”) and to the AdiletAI platform at business.adiletai.com (the “Platform”). It covers everything the Platform produces: Assistant answers, contract risk reports, review tables, drafts, translations, court practice analyses and memoranda (together, “Output”).</p>
  <p>Read it together with the <NuxtLinkLocale to="/legal/terms">Terms of use</NuxtLinkLocale>. If your organisation’s agreement with AdiletAI differs from this Disclaimer, the agreement prevails.</p>

  <h2 id="ai">{{ h('ai') }}</h2>
  <p>The Platform produces Output using artificial intelligence systems, including AI models and search services from third-party providers. Output is generated automatically and is not reviewed by a person before it reaches you.</p>
  <p>Under Article 21(1) of the Law of the Republic of Kazakhstan No. 230-VIII “On Artificial Intelligence” of 17 November 2025, users must be informed when services are provided using artificial intelligence systems. Article 7(1) of the same Law requires that users receive information about the characteristics and limitations of an AI system. The main limitations of the Platform are described below. The text of the Law is published on <a href="https://adilet.zan.kz/rus/docs/Z2500000230">adilet.zan.kz</a> (in Kazakh and Russian).</p>

  <h2 id="advice">{{ h('advice') }}</h2>
  <p>AdiletAI is a tool that assists legal professionals. AdiletAI does not provide legal services or legal advice, does not represent you, and does not act as your lawyer or advocate. Using the Platform or the Site does not create a lawyer–client relationship between you and AdiletAI.</p>
  <p>Output is not a legal opinion and does not replace the professional judgement of a qualified lawyer. Articles and other materials on the Site are general information. They are not legal advice and may not reflect later changes in legislation.</p>

  <h2 id="accuracy">{{ h('accuracy') }}</h2>
  <p>AI models can produce text that reads confidently but is wrong. For example, Output may:</p>
  <ul>
    <li>rely on a norm that has been amended or repealed, or on an outdated edition of an act;</li>
    <li>rely on the legislation or court practice of another country, such as the Russian Federation;</li>
    <li>cite an article that does not contain the provision the answer attributes to it;</li>
    <li>miss a relevant norm, bylaw, court decision or contract clause;</li>
    <li>misstate facts, dates, amounts or parties from your documents;</li>
    <li>contain errors from text recognition (OCR) of scanned documents or from translation.</li>
  </ul>
  <p>The assistant first searches a curated, Russian-language database of Kazakhstan codes and laws. The database does not contain every normative legal act and may not yet reflect the latest amendments.</p>
  <p>A risk score, a severity level and a confidence score are based on the model’s own assessments and are not measures of accuracy. A contract risk scan can miss risks: if a risk is not flagged, that does not mean it is absent. A review-table cell can be wrong even when its confidence score is high.</p>
  <p>Drafting is in beta. A draft is a first version that a lawyer must check and adapt before it is used.</p>
  <p>Output depends on the questions and documents you provide. If they are incomplete or ambiguous, Output may be too.</p>

  <h2 id="citations">{{ h('citations') }}</h2>
  <p>Numbered citations and the Sources panel show the sources an answer refers to. They help you check the answer, but they do not confirm that it is correct.</p>
  <p>The assistant does not automatically check that a cited act, article or edition contains what the answer attributes to it. Before you rely on a norm, open its current official text, for example on adilet.zan.kz, and check the edition and the date it took effect.</p>
  <p>Open a review-table cell to see the document passages its answer was drawn from. If a cell shows no source passage, treat its value as unconfirmed.</p>
  <p>Before a court practice memorandum is exported, the Platform compares its case numbers, norms and links with the analysis’s own source list and flags mismatches. This is a consistency check only. It does not confirm decisions or norms against court records or official texts.</p>
  <p>When the legislation database is not enough, the assistant runs a web search that prioritises official sources such as adilet.zan.kz, gov.kz, akorda.kz and parlam.kz. Other websites can also appear among the sources, so judge their reliability yourself.</p>

  <h2 id="court">{{ h('court') }}</h2>
  <p>Court practice analysis helps you research how courts have resolved similar disputes. It is a research tool, not a forecast.</p>
  <ul>
    <li>The Platform searches public Kazakhstan court and legal websites. The results are not exhaustive: relevant decisions may be missing, and a decision it finds may since have been changed or set aside by a higher court.</li>
    <li>The court, date, case number, applied norms and the court’s legal position are extracted by AI from the source. They may be missing or extracted with errors, and a case number may not match the official one. Some sources are news articles or digests rather than court decisions. Check each decision against its source.</li>
    <li>Winning and losing patterns, the risk register and the preparation checklist are AI-generated summaries of the decisions found. A link from a pattern, risk or step to a decision does not confirm that the decision supports it. A risk labelled “hypothesis” has no cited basis.</li>
    <li>The analysis is not designed to predict the outcome of your case or estimate your chances of success. If Output contains wording about a likely outcome or chances of success, it is not a forecast and must not be relied on as one. The outcome depends on the facts, the evidence, the parties’ arguments and the court’s assessment.</li>
  </ul>

  <h2 id="responsibility">{{ h('responsibility') }}</h2>
  <p>You and your organisation decide whether and how to use Output, and you are responsible for those decisions. A qualified lawyer must review Output before it is used in advice to clients, in documents for a court or a state body, in contracts or in business decisions.</p>
  <p>Your professional obligations to clients, courts and employers, including confidentiality and professional secrecy, remain with you.</p>
  <p>Upload only documents you have the right to use, and only the data a task needs. Personal identifiers in your typed messages (IIN, BIN, IBAN, phone numbers, e‑mail addresses and, on a best-effort basis, personal names) are pseudonymised before the message reaches the AI model and restored in the answer. Names are detected automatically, so some may be missed. Pseudonymisation does not cover the text of attached documents or document text indexed for search. Nor does it cover the web-search queries that court practice analysis builds from your dispute description and sends to its search provider. Some third-party providers process data outside Kazakhstan. See the <NuxtLinkLocale to="/legal/privacy">Privacy policy</NuxtLinkLocale> and the <NuxtLinkLocale to="/security">Security</NuxtLinkLocale> page for details.</p>

  <h2 id="liability">{{ h('liability') }}</h2>
  <p>The Platform and Output are provided “as is”. AdiletAI does not guarantee that Output is accurate, complete or up to date, or that it suits your purpose.</p>
  <p>To the extent permitted by the legislation of the Republic of Kazakhstan, AdiletAI is not liable for losses that result from relying on Output that a lawyer has not reviewed. The limits of AdiletAI’s liability are set out in the <NuxtLinkLocale to="/legal/terms">Terms of use</NuxtLinkLocale> and in your organisation’s agreement with AdiletAI. Nothing on this page limits liability that cannot be limited under the legislation of the Republic of Kazakhstan.</p>

  <h2 id="sources">{{ h('sources') }}</h2>
  <p>Output and the Site contain links to third-party websites, including official legal portals and court websites. AdiletAI does not control these websites and is not responsible for their content, availability or changes.</p>
  <p>AdiletAI is an independent company and is not affiliated with the Ministry of Justice’s <span lang="kk">“Әділет”</span> legal information system (adilet.zan.kz). <span lang="kk">“Әділет”</span> means “justice” in Kazakh.</p>

  <h2 id="changes">{{ h('changes') }}</h2>
  <p>We may update this Disclaimer as the Platform changes. The current version is always published on this page, with the date of the last update shown at the top.</p>
  <p>This Disclaimer is published in Kazakh, Russian and English. If the language versions differ, the Russian version prevails.</p>

  <h2 id="contact">{{ h('contact') }}</h2>
  <p>Send questions about this Disclaimer, or reports of errors in Output, to <a :href="mail">{{ CONTACT_EMAIL }}</a>. For other enquiries, see the <NuxtLinkLocale to="/contact">Contact</NuxtLinkLocale> page.</p>
</template>

<script setup lang="ts">
// "Legal AI assistant", English body. Headings come from the page via h(id); ids must match SECTIONS in
// app/pages/blog/yuridicheskiy-ii-pomoshnik.vue. The product figure comes in through the #figure slot.
// Every statement about AdiletAI maps to claims.md; external sources were checked on 12 October 2026.
defineProps<{ h: (id: string) => string }>()

const SRC = {
  rag: 'https://arxiv.org/abs/2005.11401',
  stanford: 'https://arxiv.org/abs/2405.20362',
  aiLaw: 'https://adilet.zan.kz/eng/docs/Z2500000230',
  pdLaw: 'https://adilet.zan.kz/eng/docs/Z1300000094',
}
</script>

<template>
  <h2 id="what">{{ h('what') }}</h2>
  <p>A legal AI assistant is software that answers legal questions and works with legal documents by combining a large language model with a search over legal sources. Instead of answering from memory, a well-built assistant first finds the relevant articles, contract clauses or court materials. It then writes its answer from them and shows you where each point came from.</p>
  <p>That last step is what separates it from a general chatbot. A general model has read a great deal of text, but it cannot tell you which edition of the Tax Code it remembers. It can also drift into Russian law, whose codes use similar terms and structure. For a lawyer, an answer without a traceable source is a hypothesis, not a finding.</p>

  <h2 id="tasks">{{ h('tasks') }}</h2>
  <p>In-house legal teams and law firms use legal AI assistants for work that is text-heavy, repetitive and easy to check:</p>
  <ul>
    <li><strong>Legal research.</strong> Questions such as “Can the court reduce a contractual penalty?” answered with references to the act and article.</li>
    <li><strong>Contract review.</strong> A first pass over a supply, lease or services agreement that flags risky clauses, quotes them and suggests what to change.</li>
    <li><strong>Questions across your own documents.</strong> Ask about a set of contracts, letters or scans and get answers with the passages they rely on.</li>
    <li><strong>Structured extraction.</strong> Pull the same facts, such as parties, contract value, term and governing law, from many documents into one table.</li>
    <li><strong>First drafts and translation.</strong> A starting draft of a letter or claim, or a translation between Kazakh, Russian and English that keeps the structure and amounts intact.</li>
  </ul>
  <p>In each case the assistant does the searching and the first draft, and a lawyer makes the decision. None of these tasks removes the need for professional judgement.</p>

  <h2 id="rag">{{ h('rag') }}</h2>
  <p>Many legal AI assistants use an approach called retrieval-augmented generation, or RAG. The term comes from a <a :href="SRC.rag">2020 paper by Lewis and colleagues</a>, which showed that a language model gives more specific and factual answers when it can first look things up in an external collection of documents. In plain terms, it works in three steps:</p>
  <ol>
    <li><strong>Search.</strong> The assistant turns your question into searches over its sources: a legislation database, the documents you attached and, when needed, the web.</li>
    <li><strong>Read.</strong> It takes the most relevant passages, such as specific articles or clauses, and puts them in front of the language model together with your question.</li>
    <li><strong>Write and cite.</strong> The model writes the answer from those passages and numbers the sources it used, so you can open them and read the original text.</li>
  </ol>
  <p>Take the question in the illustration below. A supplier charges an uncapped daily penalty under clause 7.2 of a supply agreement, and the buyer asks whether a court can reduce it. The assistant searches the legislation for the rules on penalties and finds Articles 293 and 297 of the Civil Code. It also finds clause 7.2 in the attached contract and builds the answer from those three sources. The answer marks its points with numbered citations, and the sources it drew on are listed in the Sources panel.</p>
  <slot name="figure" />
  <p>Retrieval does two useful things. It ties the answer to text you can check, and it lets the tool work with material the model never saw in training: recent amendments, your contracts, your client’s correspondence. It does not make errors impossible. In a <a :href="SRC.stanford">preregistered 2024 study led by Stanford University researchers</a>, RAG-based legal research tools from LexisNexis and Thomson Reuters still hallucinated between 17% and 33% of the time, although they did better than a general-purpose chatbot. The study counted an answer as a hallucination if it was incorrect or cited a source that did not support it.</p>
  <p>The lesson is simple: a citation tells you where to look, not that the answer is right.</p>

  <h2 id="evaluate">{{ h('evaluate') }}</h2>
  <p>Demos show the best case. Bring your own questions and documents, and check five things.</p>
  <ol>
    <li><strong>Coverage of Kazakhstan law.</strong> Ask which codes and laws are in the database, in which language, and how new editions are added. Ask what the tool does when the database has nothing relevant: a good assistant says so rather than filling the gap from memory. Test a question where Kazakhstan and Russian law differ, and see which country’s code it cites.</li>
    <li><strong>Sources you can open.</strong> A substantive answer should come with sources you can open and read. Open two or three of them and confirm that the article or clause says what the answer claims. Check whether the tool names the act, the article and, where it has it, the edition date.</li>
    <li><strong>Data handling and sub-processors.</strong> Find out which AI model and search providers process your data, and where. Article 16 of the <a :href="SRC.pdLaw">Law on Personal Data and Their Protection</a> sets the rules for cross-border transfer of personal data, so your security team will want the list of sub-processors. Ask whether personal identifiers are masked before they reach the model, what exactly is masked, and whether you can delete documents and chats.</li>
    <li><strong>Languages.</strong> Legal work in Kazakhstan runs in Kazakh and Russian, often with English. Check separately the language you can ask in, the language of the answers, the language of the legislation database, the language of generated reports and the language of the interface. They are often not the same.</li>
    <li><strong>Review workflow.</strong> See how easily a lawyer can check and correct the output. Does the tool show which searches it ran? Does it flag what it could not verify? Can you edit results instead of retyping them? Article 8 of the <a :href="SRC.aiLaw">Law on Artificial Intelligence</a> requires the owner, holder and user of an AI system to keep it under continuous control, to an extent that depends on their role. A tool that makes review easy helps your team do that.</li>
  </ol>

  <h2 id="limits">{{ h('limits') }}</h2>
  <p>Every assistant has limits, and a vendor should state them plainly. Article 7 of the Law on Artificial Intelligence says that users must be given full information about an AI system’s characteristics and limitations. In practice, plan for these:</p>
  <ul>
    <li><strong>Errors still happen.</strong> The model can misread a passage, combine two norms incorrectly or cite a source that does not quite support the point.</li>
    <li><strong>Coverage has edges.</strong> No database holds every act in every edition. Ask what is outside it, and check recent amendments against the official text on adilet.zan.kz.</li>
    <li><strong>Facts come from you.</strong> The assistant knows only what is in your question and documents. A missing annex or an unstated fact can change the answer.</li>
    <li><strong>Search is not a full review.</strong> A question across a large set of documents returns the most relevant passages. It does not guarantee that nothing was missed. For a complete pass, ask the same question of every document in a structured review.</li>
    <li><strong>It is not legal advice.</strong> The output is a draft for a qualified lawyer, and responsibility for the advice stays with the lawyer.</li>
  </ul>

  <h2 id="adiletai">{{ h('adiletai') }}</h2>
  <p>AdiletAI is a legal AI platform for in-house legal teams and law firms in Kazakhstan. It answers legal questions with citations to Kazakhstan legislation, reviews contracts for risk and turns document sets into structured review tables, working with documents in Kazakh, Russian and English. Here is how it maps to the checklist above.</p>
  <ul>
    <li><strong>Kazakhstan law.</strong> The <NuxtLinkLocale to="/features#assistant">Assistant</NuxtLinkLocale> searches a curated database of Kazakhstan’s codes and laws first. It cites the act and article it relied on, and the edition date when available. If the database has nothing relevant, it is instructed to say so rather than answer from memory. When the database is not enough, it runs a web search that prioritises official sources such as adilet.zan.kz, gov.kz, akorda.kz and parlam.kz. Other sites can also appear in the results. It is instructed to rely on Kazakhstan law, not Russian Federation law.</li>
    <li><strong>Sources.</strong> Numbered citations open a Sources panel grouped into Documents, Knowledge base and Web. A progress panel shows which searches ran before the answer.</li>
    <li><strong>Data.</strong> Personal identifiers in your typed messages (IIN, BIN, IBAN, phone numbers, e‑mail addresses and, on a best-effort basis, personal names) are pseudonymised before the message reaches the AI model and restored in the answer. This applies to typed messages only: attached documents, document text indexed for search and court practice search queries are not masked. AdiletAI uses third-party AI model and search providers, and some of them process data outside Kazakhstan. The current list of sub-processors is available on request. Details are on the <NuxtLinkLocale to="/security">security page</NuxtLinkLocale>.</li>
    <li><strong>Languages.</strong> Ask in Kazakh, Russian or English, and general answers come back in your language. Contract scans, drafts, tax-mode answers and court practice analyses are produced in Russian by default. The legislation database is Russian-language, and the app interface is in Russian.</li>
    <li><strong>Review.</strong> Substantive analyses are instructed to open with a note for the reviewing lawyer on what could not be verified. The <NuxtLinkLocale to="/features#contract-review">contract risk scan</NuxtLinkLocale> quotes the clause behind each risk, and in <NuxtLinkLocale to="/features#review-tables">review tables</NuxtLinkLocale> the cell detail panel shows the source passages an answer was drawn from. Output must be reviewed by a lawyer.</li>
  </ul>
  <p>The <NuxtLinkLocale to="/how-it-works">how it works</NuxtLinkLocale> page walks through a request from the first question to an answer reviewed by your lawyer. AdiletAI is an independent company and is not affiliated with the Ministry of Justice’s <span lang="kk">“Әділет”</span> legal information system (adilet.zan.kz).</p>

  <h2 id="sources">{{ h('sources') }}</h2>
  <ul class="text-[0.9375rem]">
    <li>Lewis P. et al. <a :href="SRC.rag">Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</a>. arXiv:2005.11401, 2020.</li>
    <li>Magesh V. et al. <a :href="SRC.stanford">Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools</a>. arXiv:2405.20362, 2024.</li>
    <li>Law of the Republic of Kazakhstan No.&nbsp;230-VIII of 17 November 2025 <a :href="SRC.aiLaw">“On Artificial Intelligence”</a>. Articles 7 and 8.</li>
    <li>Law of the Republic of Kazakhstan No.&nbsp;94-V of 21 May 2013 <a :href="SRC.pdLaw">“On Personal Data and Their Protection”</a>. Article 16.</li>
  </ul>
</template>

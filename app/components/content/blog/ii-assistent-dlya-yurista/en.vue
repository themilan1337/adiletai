<script setup lang="ts">
// English body of the blog post "AI assistant for lawyers". Section headings come from postIiAssistentDlyaYurista.toc
// (shared with the page's table of contents; ids and order must match SECTIONS in pages/blog/ii-assistent-dlya-yurista.vue).
// Every product statement maps to claims.md. Keep ru.vue and kk.vue in step with this file.
// Mockups sit between ProseArticle segments so the prose typography never reaches them.
const { t } = useI18n()
const h = (id: string) => t(`postIiAssistentDlyaYurista.toc.${id}`)
</script>

<template>
  <ProseArticle class="post-section">
    <p>An AI assistant for lawyers is software that reads your question and your documents, searches the law and returns a first draft with the sources it relied on. Used well, it handles the first pass of research, contract review and document extraction and leaves the judgement to you. Everything it produces is a draft that a lawyer must review.</p>
    <p>This guide covers five tasks that come up every week in a Kazakhstan practice, with an example prompt for each, a routine for checking the output and questions for vendors. The examples use AdiletAI, the legal AI platform we build for in-house legal teams and law firms in Kazakhstan, but the habits apply to any tool.</p>

    <h2 id="research">
      {{ h('research') }}
    </h2>
    <p>Brief the assistant as you would a junior colleague: the facts, the side you act for and what you need back. The more precise the question, the easier the answer is to check.</p>
    <p>In AdiletAI, the <NuxtLinkLocale to="/features#assistant">Assistant</NuxtLinkLocale> searches a curated database of Kazakhstan’s codes and laws first and cites the act and article it relied on, with the edition date when available. If the database has nothing relevant, it is instructed to say so rather than answer from memory. When the database is not enough, it runs a web search that prioritises official sources such as adilet.zan.kz, gov.kz, akorda.kz and parlam.kz. Other sites can also appear in the results. Numbered markers open a Sources panel grouped into Documents, Knowledge base and Web.</p>
    <div class="post-prompt">
      <p class="post-prompt-label">
        Example prompt
      </p>
      <p>We are the buyer under a supply contract. Clause 7.2 charges a daily penalty for late payment with no cap. Under Kazakhstan law, can we ask the court to reduce the penalty, and what will the court take into account? Cite the act and article, give the edition date if you have it, and list anything you could not verify.</p>
    </div>
    <p>For complex tasks the assistant first asks a few quick multiple-choice questions, such as which side you are on. You can ask in Kazakh, Russian or English, and general answers come back in your language.</p>
  </ProseArticle>

  <MockFrame
    caption="Illustration: the Assistant answering a question about a penalty clause, with numbered citations and a note for the reviewing lawyer. Sample data; the product interface is in Russian."
    tile-class="h-[44rem]"
    shell-class="mx-3 mt-5 sm:mx-7 sm:mt-7"
  >
    <MockAssistant
      lang="en"
      :sidebar="false"
      :drawer="false"
      question="Clause 7.2 of the attached supply contract charges a daily penalty with no cap. Can we ask the court to reduce it?"
      :answer="[
        'Yes. The supplier does not have to prove its losses to claim a penalty[3], but at the debtor’s request the court may reduce a penalty that is excessively high compared with the creditor’s losses[2].',
        'Clause 7.2 sets a daily penalty with no upper limit[1]. The court will consider how far the obligation was performed and the legitimate interests of both parties.',
      ]"
      note-title="Note for the reviewing lawyer"
      note="The contract does not show the supplier’s actual losses. Request them before relying on this argument."
    />
  </MockFrame>

  <ProseArticle class="post-section">
    <h2 id="contracts">
      {{ h('contracts') }}
    </h2>
    <p>A first pass answers one question: what in this contract needs a lawyer’s attention before signing? Attach the contract to a chat and ask for a risk scan from your side of the deal.</p>
    <p>AdiletAI returns a <NuxtLinkLocale to="/features#contract-review">structured risk report</NuxtLinkLocale> with a risk score, deal-breakers and risks ranked by severity. Each risk comes with a quote from the contract and a recommendation, plus suggested redlines and fallback positions where it proposes them. If your team’s <NuxtLinkLocale to="/features#playbook">practice profile</NuxtLinkLocale> was set up during onboarding, the scan applies your positions on key terms, your deal-breakers and your escalation rules. The report is produced in Russian by default.</p>
    <div class="post-prompt">
      <p class="post-prompt-label">
        Example prompt
      </p>
      <p>Scan the attached supply contract for risks. We are the buyer. Focus on liability, penalties, termination and dispute resolution, and flag any deal-breakers.</p>
    </div>
    <p>Treat the risk score as a way to order your reading, not as a verdict. Check every quote against the contract and every legal reference against the text of the law before it goes into your comments.</p>
  </ProseArticle>

  <MockFrame
    caption="Illustration: the top of a contract risk scan with the risk score, deal-breakers and the number of risks by severity. Sample data; the report and the interface are in Russian."
    tile-class="p-3 sm:p-7"
  >
    <MockRiskScan compact />
  </MockFrame>

  <ProseArticle class="post-section">
    <h2 id="tables">
      {{ h('tables') }}
    </h2>
    <p>When the same questions apply to a whole set of contracts, as in due diligence or a supplier audit, use a table rather than a chat.</p>
    <p>In AdiletAI, upload the documents to a <NuxtLinkLocale to="/features#vault">vault</NuxtLinkLocale>, a private workspace for one deal, client or matter, and create a <NuxtLinkLocale to="/features#review-tables">review table</NuxtLinkLocale>. Each document becomes a row, each question a column. A column can return text, a number, a date, yes or no, a currency amount or a verbatim quote. Cells fill in live, and every answer comes with the source passages it was drawn from and a confidence score. You can edit or re-run any cell and export the table to Excel, CSV, PDF, Word or plain text.</p>
    <div class="post-prompt">
      <p class="post-prompt-label">
        Example columns
      </p>
      <ul>
        <li>Contract value and currency (currency)</li>
        <li>Governing law (text)</li>
        <li>Can the buyer terminate the contract without cause? (yes or no)</li>
        <li>Quote the limitation of liability clause in full (verbatim quote)</li>
      </ul>
    </div>
    <p>Write each column as one precise question. Then open the source passages for every value you plan to rely on, starting with the lowest-confidence cells.</p>
  </ProseArticle>

  <MockFrame
    caption="Illustration: a review table of supplier contracts filling in live, one row per document and one column per question. Sample data; the interface and the values are in Russian."
    tile-class="h-[30rem] sm:h-[23rem]"
    shell-class="mx-3 mt-5 sm:mx-7 sm:mt-7"
  >
    <MockReviewTable :detail="false" class="sm:[zoom:0.86]" />
  </MockFrame>

  <ProseArticle class="post-section">
    <h2 id="disputes">
      {{ h('disputes') }}
    </h2>
    <p>Before a hearing you need to know how courts have treated similar disputes. AdiletAI’s <NuxtLinkLocale to="/features#court-practice">court practice analysis</NuxtLinkLocale> starts from a plain-language description of the dispute. It works out your side, plaintiff or defendant, and the dispute category, and you can connect a vault so that your case documents inform the research.</p>
    <p>It then searches public Kazakhstan court and legal websites, with official sources ranked first, and builds a table of relevant decisions. For each decision it shows the court, the date, the applied norms, the court’s legal position and a link to the source, where the source states them. It adds winning and losing patterns linked to the decisions they come from, a risk register in which each risk cites its basis or is labelled a hypothesis, and a prioritised preparation checklist. The output is in Russian.</p>
    <div class="post-prompt">
      <p class="post-prompt-label">
        Example prompt
      </p>
      <p>Our client, the buyer, refused to pay for a delivery of building materials because a third of the goods did not match the specification. The supplier has filed a claim for the price and a contractual penalty. We act for the defendant.</p>
    </div>
    <p>Use the result to plan, not to predict. The search covers public websites, so it will not find every relevant decision. Add the cases you already know, and read in full every decision you plan to cite.</p>
  </ProseArticle>

  <MockFrame
    caption="Illustration: the risk register and the preparation checklist of a court practice analysis; one risk is labelled a hypothesis. Sample data; the analysis and the interface are in Russian."
    tile-class="p-3 sm:p-7"
  >
    <MockCourtRisks />
  </MockFrame>

  <ProseArticle class="post-section">
    <h2 id="translation">
      {{ h('translation') }}
    </h2>
    <p>Many contracts in Kazakhstan are signed in Kazakh and Russian, and the two versions should match. The Assistant <NuxtLinkLocale to="/features#drafting-translation">translates documents</NuxtLinkLocale> between Kazakh, Russian and English and keeps the structure, requisites and amounts intact. That helps with a first draft of the second language version, or with a Kazakh document when your team works in Russian.</p>
    <div class="post-prompt">
      <p class="post-prompt-label">
        Example prompt
      </p>
      <p>Translate the attached lease agreement from Russian into Kazakh. Keep the clause numbering, the requisites of the parties and all amounts and dates exactly as in the original.</p>
    </div>
    <p>Then read the two versions side by side. For terms of art, compare the wording with the official Kazakh text of the relevant code on adilet.zan.kz: the <a href="https://adilet.zan.kz/kaz/docs/K940001000_" hreflang="kk">Civil Code</a>, for example, is published there in both languages. If the contract is an old .doc file, save it as .docx or PDF before you upload it.</p>
  </ProseArticle>

  <MockFrame
    caption="Illustration: one clause of a sample lease in Kazakh, Russian and English in the Assistant’s translation mode. Sample data; the interface is in Russian."
    tile-class="p-3 sm:p-7"
  >
    <MockTranslation />
  </MockFrame>

  <ProseArticle class="post-section">
    <h2 id="verification">
      {{ h('verification') }}
    </h2>
    <p>An AI assistant can be wrong in ways that look right: a real article with different content, an outdated edition, a decision that says something else. Run this routine before any output leaves your desk.</p>
    <ol>
      <li><strong>Open the Sources panel.</strong> Every legal conclusion should rest on a listed source. A conclusion with no source is a hypothesis until you find one.</li>
      <li><strong>Check each citation.</strong> Confirm that the act and article exist and say what the answer claims, exceptions included.</li>
      <li><strong>Read the article on adilet.zan.kz.</strong> The official site shows the current text and the history of amendments. If the answer gives no edition date, do not assume it used the current edition.</li>
      <li><strong>Read the note for the reviewing lawyer.</strong> The AdiletAI assistant is instructed to add a note on what it could not verify. Close each point, or remove the statement that rests on it.</li>
      <li><strong>Mark what is still unverified.</strong> Flag anything you could not confirm, so the reader of your draft knows what the conclusion rests on.</li>
      <li><strong>Open every court decision.</strong> Check the court, date, case number and legal position against the decision itself. Before a court practice memo is exported, AdiletAI checks its case numbers, norms and links against the analysis’ own source list and flags mismatches. That check does not replace reading the decision.</li>
    </ol>
  </ProseArticle>

  <MockFrame
    caption="Illustration: a Knowledge base card in the Sources panel showing the article an answer relied on. Sample data; the interface is in Russian."
    tile-class="p-3 sm:p-7"
  >
    <div class="bg-stone-50 p-3 sm:p-4">
      <MockSourceCard
        :index="2"
        kind="kb"
        label="Статья 297. Уменьшение размера неустойки"
        subtitle="Кодекс · Гражданский кодекс РК (Общая часть)"
        quote="Если подлежащая уплате неустойка (штраф, пеня) чрезмерно велика по сравнению с убытками кредитора, суд по требованию должника вправе уменьшить неустойку (штраф, пеню), учитывая степень выполнения обязательства должником и заслуживающие внимания интересы должника и кредитора."
        highlighted
      />
    </div>
  </MockFrame>

  <ProseArticle class="post-section">
    <h2 id="data">
      {{ h('data') }}
    </h2>
    <p>Client files hold personal data and confidential information, so put these questions to any AI vendor before rollout. If they contain personal data, the Law of the Republic of Kazakhstan <a href="https://adilet.zan.kz/eng/docs/Z1300000094">“On Personal Data and Their Protection”</a> applies, including its rules on cross-border transfer. Here is how AdiletAI answers each question.</p>
    <ul>
      <li><strong>Which AI model and search providers process our data, and where?</strong> AdiletAI uses third-party AI model and search providers, and some of them process data outside Kazakhstan. The current list of sub-processors is available on request.</li>
      <li><strong>What is masked before it reaches the model?</strong> Personal identifiers in your typed messages (IIN, BIN, IBAN, phone numbers, e‑mail addresses and, on a best-effort basis, personal names) are pseudonymised before the message reaches the AI model and restored in the answer. Names are detected automatically, so some may be missed. Pseudonymisation does not cover the text of attached documents or document text indexed for search. Nor does it cover the web-search queries that court practice analysis builds from your dispute description and sends to its search provider.</li>
      <li><strong>How are stored files protected?</strong> Uploaded files are encrypted at rest and served only through authenticated downloads. Connections use TLS 1.2 or 1.3.</li>
      <li><strong>How do people sign in?</strong> Through AdiletAI’s own identity provider (OpenID Connect with PKCE), with optional two-factor authentication in an authenticator app.</li>
      <li><strong>Who can see our work, and can we delete it?</strong> Vaults, chats and analyses are private to your account. You can delete documents, vaults and chats at any time.</li>
      <li><strong>Can we have a dedicated deployment or special data-residency terms?</strong> Ask us. Before rollout we walk your security team through the data flow.</li>
    </ul>
    <p>The details are on our <NuxtLinkLocale to="/security">security page</NuxtLinkLocale>.</p>

    <h2 id="start">
      {{ h('start') }}
    </h2>
    <p>Pick one task from this guide and run it on a closed matter where you know the right answer. Compare the output with your own work, note where it helped and where it went wrong, and agree on the verification routine before the team uses it on live matters.</p>
    <p>The <NuxtLinkLocale to="/features">platform page</NuxtLinkLocale> describes each module in detail, and the <NuxtLinkLocale to="/use-cases">use cases</NuxtLinkLocale> show how in-house legal teams, law firms, and compliance and tax teams put them together.</p>
    <p class="post-note">
      This article is general information about working with AI tools. It is not legal advice.
    </p>
  </ProseArticle>
</template>

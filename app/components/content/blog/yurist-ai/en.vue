<script setup lang="ts">
// English body of /blog/yurist-ai. Rendered in two parts around the Sources figure (part 1 ends with "sources").
// H2 text comes from postYuristAi.toc (shared with the page's contents list; order = SECTIONS in pages/blog/yurist-ai.vue).
// Product statements map to claims.md. The AI law is quoted from adilet.zan.kz (Z2500000230, current edition, read 2026-10-12);
// Civil Code articles from adilet.zan.kz (K940001000_). Keep ru.vue and kk.vue in step with this file.
defineProps<{ part: 1 | 2 }>()
const { t } = useI18n()
const h = (id: string) => t(`postYuristAi.toc.${id}`)
</script>

<template>
  <template v-if="part === 1">
    <p>AI will not replace lawyers in Kazakhstan, but it is already changing how legal work is divided. The first pass of research, document review and drafting moves to software. Judgement, accountability and the client relationship stay with the lawyer.</p>

    <div class="mt-8 rounded-card border border-line bg-surface p-5 sm:p-7">
      <h2 class="mt-0 font-sans text-base font-semibold text-ink">
        In short
      </h2>
      <ul class="mt-3">
        <li>AI is good at first passes: finding the norm, summarising, extracting terms, drafting, translating.</li>
        <li>It is weak where the work depends on judgement, unseen facts, recent amendments and local practice.</li>
        <li>In Kazakhstan the source matters: a general chatbot can answer with a Russian Federation rule. Ask for the act and article, then check them.</li>
        <li>Responsibility stays with the lawyer. Law No.&nbsp;230-VIII “On Artificial Intelligence” requires the owner, holder and user of an AI system to keep it under control.</li>
        <li>Adopt AI in steps: a few real tasks, written review rules, a pilot, then scale.</li>
      </ul>
    </div>

    <h2 id="tasks">
      {{ h('tasks') }}
    </h2>
    <p>AI is most useful on the first pass: reading, finding and sorting. It finds the act and article that answer a question, flags risky clauses, pulls the same facts out of dozens of documents, drafts a first version of a letter or a claim and translates between Kazakh, Russian and English.</p>
    <p>In each case the result can be checked against a source, which is what makes the task reasonable to delegate. The line usually falls like this:</p>
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th scope="col">
              Task
            </th>
            <th scope="col">
              What AI can take on
            </th>
            <th scope="col">
              What stays with the lawyer
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Legal research</th>
            <td>Finding acts and articles, summarising them</td>
            <td>Deciding which norm applies to the facts</td>
          </tr>
          <tr>
            <th scope="row">Contract review</th>
            <td>Flagging risky clauses, suggesting edits</td>
            <td>Weighing each risk against the deal and the client’s goals</td>
          </tr>
          <tr>
            <th scope="row">Due diligence</th>
            <td>Extracting the same terms from many documents</td>
            <td>Judging what the findings mean for the transaction</td>
          </tr>
          <tr>
            <th scope="row">Drafting</th>
            <td>A first version of a letter or a claim</td>
            <td>Strategy, tone and the final text</td>
          </tr>
          <tr>
            <th scope="row">Court practice</th>
            <td>Collecting relevant decisions and the courts’ positions</td>
            <td>Assessing the case and advising the client</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="limits">
      {{ h('limits') }}
    </h2>
    <p>AI is weakest exactly where legal work is hardest.</p>
    <ul>
      <li><strong>Facts it has not seen.</strong> If the decisive e‑mail or side letter is not in front of the model, the analysis will miss it, and it will not always say what is missing.</li>
      <li><strong>Judgement.</strong> Whether to sue, settle or accept a counterparty’s edit depends on the client’s appetite for risk and on context that is not in the documents.</li>
      <li><strong>Recent amendments.</strong> A model’s general knowledge stops at a cut-off date, so an answer from memory may describe an edition that is no longer in force.</li>
      <li><strong>Confident errors.</strong> Language models can write text that sounds authoritative and is wrong, including references to articles that say something else.</li>
    </ul>
    <p>None of this makes AI useless; it marks where review is needed.</p>

    <h2 id="sources">
      {{ h('sources') }}
    </h2>
    <p>A legal answer is only as good as the law it relies on. Kazakhstan and Russia share much of their legal vocabulary, and much of the Russian-language legal material online deals with Russian Federation law. A general chatbot asked a question in Russian can easily answer with Russian rules.</p>
    <p>Take a contractual penalty. In Kazakhstan, the court’s power to reduce it is set out in <a href="https://adilet.zan.kz/eng/docs/K940001000_" target="_blank" rel="noopener">Article 297 of the Civil Code</a>: at the debtor’s request, the court may reduce a penalty that is excessively large compared with the creditor’s losses, taking into account how far the debtor performed and the legitimate interests of both parties. The comparable Russian rule, Article 333 of the Russian Civil Code, uses a different test, a penalty “clearly disproportionate to the consequences of the breach”, and allows a contractual penalty owed by a business to be reduced only in exceptional cases. Article 297 contains no such wording. An answer built on the Russian article could give a Kazakhstan client the wrong picture of their position.</p>
    <p>The practical test for any AI tool: does it show the act and article it relied on, and can you open the text? An answer without a source is a hypothesis.</p>
    <p>The <NuxtLinkLocale to="/features#assistant">AdiletAI Assistant</NuxtLinkLocale> is built around this test. It searches a curated database of Kazakhstan’s codes and laws first and cites the act and article it relied on, with the edition date when available. If the database has nothing relevant, it is instructed to say so rather than answer from memory. When the database is not enough, it runs a web search that prioritises official sources such as adilet.zan.kz, gov.kz, akorda.kz and parlam.kz. Other sites can also appear in the results. It is instructed to rely on Kazakhstan law, not Russian Federation law, and to add a note for the reviewing lawyer on what it could not verify. Its sources are listed in a Sources panel, like the one below.</p>
  </template>

  <template v-else>
    <h2 id="responsibility">
      {{ h('responsibility') }}
    </h2>
    <p>Using AI does not move responsibility for advice from the lawyer to the software. If an AI-assisted memo cites the wrong article, the lawyer who signed it answers for the mistake. In practice, this means three habits.</p>
    <ul>
      <li><strong>Check every source the conclusion depends on.</strong> Open the article, read it in the current edition and make sure it says what the answer claims.</li>
      <li><strong>Know what the tool did not see.</strong> Ask which documents and sources the answer rests on.</li>
      <li><strong>Keep client data under control.</strong> Know where your documents go and what is masked. In AdiletAI, personal identifiers in typed messages (IIN, BIN, IBAN, phone numbers, e‑mail addresses and, on a best-effort basis, personal names) are pseudonymised before the message reaches the AI model and restored in the answer. This applies to typed messages only: attached documents, document text indexed for search and court practice search queries are not masked. AdiletAI uses third-party AI model and search providers; some of them process data outside Kazakhstan. Details are on the <NuxtLinkLocale to="/security">security page</NuxtLinkLocale>.</li>
    </ul>

    <h2 id="law">
      {{ h('law') }}
    </h2>
    <p>Kazakhstan has a dedicated statute on AI. The key facts, as published on adilet.zan.kz:</p>
    <div class="overflow-x-auto">
      <table>
        <tbody>
          <tr>
            <th scope="row">Act</th>
            <td><a href="https://adilet.zan.kz/eng/docs/Z2500000230" target="_blank" rel="noopener">Law of the Republic of Kazakhstan No.&nbsp;230-VIII “On Artificial Intelligence”</a></td>
          </tr>
          <tr>
            <th scope="row">Date</th>
            <td>17 November 2025</td>
          </tr>
          <tr>
            <th scope="row">First official publication</th>
            <td>18 November 2025</td>
          </tr>
          <tr>
            <th scope="row">Entry into force</th>
            <td>Sixty calendar days after the first official publication (Article 31)</td>
          </tr>
          <tr>
            <th scope="row">Amendments</th>
            <td>Already amended, including by Law No.&nbsp;326-VIII of 24 June 2026</td>
          </tr>
          <tr>
            <th scope="row">Text</th>
            <td>Kazakh and Russian, with an unofficial English translation</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>The law contains no rules written specifically for lawyers. It sets general rules for everyone who creates, owns, holds or uses AI systems. Four provisions matter most for a legal team.</p>
    <ul>
      <li><strong>Control (Article 8).</strong> The owner, the holder and the user of an AI system must ensure continuous control over it, to the extent their role requires. Everyone who creates or operates AI systems bears the responsibility established by law for them and their results, according to their role.</li>
      <li><strong>Transparency (Articles 7 and 21).</strong> Users must receive complete information about the characteristics and limitations of an AI system so that they can use it as intended. Users must also be informed that goods, works and services are produced or provided using AI systems.</li>
      <li><strong>The human decision (Article 17).</strong> A low-autonomy system processes data and produces recommendations or options for a decision, while the final choice and the actions are always taken by a person.</li>
      <li><strong>Authorship (Article 23).</strong> Works created with AI systems are protected by copyright only where a person made a creative contribution to them.</li>
    </ul>
    <p>How these rules apply to your firm or department, for example how to tell clients that AI is used in their matter, needs your own analysis of the current edition. The direction is clear, though: a person stays in control of the system and answers for its results.</p>

    <h2 id="skills">
      {{ h('skills') }}
    </h2>
    <p>The key skills are not technical: they are the skills of a good reviewer.</p>
    <ul>
      <li><strong>Asking precise questions.</strong> State the facts, the side you act for and the answer you need.</li>
      <li><strong>Verifying sources.</strong> Open the cited article, check the edition, read the neighbouring provisions. Every day, not as a special step.</li>
      <li><strong>Knowing the tool’s limits.</strong> Which sources does it search, and what does it do when it finds nothing? That tells you when to dig further.</li>
      <li><strong>Working across languages.</strong> Contracts in Kazakhstan are often bilingual. AI can produce a working translation; the lawyer makes sure each legal term means the same thing in every version.</li>
      <li><strong>Explaining the result.</strong> Clients and courts expect reasoning, not a printout. Turning findings into advice is still the lawyer’s job.</li>
    </ul>

    <h2 id="adoption">
      {{ h('adoption') }}
    </h2>
    <p>Teams that adopt AI well start small, with rules.</p>
    <ol>
      <li><strong>Choose the tasks.</strong> Pick two or three recurring tasks whose results are easy to check, such as research questions or a first review of standard contracts.</li>
      <li><strong>Write down the rules.</strong> What may be uploaded, who reviews AI output, how sources are checked, and what never goes to a client without review.</li>
      <li><strong>Run a pilot on real matters.</strong> With a small group, compare the AI’s first pass with the team’s own work. Note where it helped and where it misled.</li>
      <li><strong>Put your positions in writing.</strong> Standard positions on key terms and a house style, once written down, can be applied the same way by people and tools. In AdiletAI this is the <NuxtLinkLocale to="/features#playbook">practice profile</NuxtLinkLocale>, set up during onboarding and applied by the Assistant and the contract risk scan.</li>
      <li><strong>Check data handling.</strong> Ask the vendor which providers process your data and where, and bring in your security team before rollout.</li>
      <li><strong>Scale what works.</strong> Extend the tools to more people and tasks once the review rules hold up, and revisit the rules when the law or the tool changes.</li>
    </ol>
    <p>To see how AdiletAI builds an answer and where its limits are, read <NuxtLinkLocale to="/how-it-works">How it works</NuxtLinkLocale>; for team tasks, see the <NuxtLinkLocale to="/use-cases">use cases for in-house teams and law firms</NuxtLinkLocale>.</p>

    <h2 id="unchanged">
      {{ h('unchanged') }}
    </h2>
    <p>The core of legal work stays where it was. Clients come to a lawyer for judgement, for someone who answers for the advice and knows how things actually work in Kazakhstan. AI changes the route to the point where judgement is needed. It does not change who exercises it.</p>
    <p class="text-sm text-ink-subtle">
      This article is general information, not legal advice. See also our <NuxtLinkLocale to="/legal/disclaimer">disclaimer</NuxtLinkLocale>.
    </p>
  </template>
</template>

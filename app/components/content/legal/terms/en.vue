<script setup lang="ts">
// Terms of use, English body. Headings come from the page via h(id) (legalTerms.sections + numbering); the section ids
// must match SECTIONS in app/pages/legal/terms.vue. Every factual statement maps to claims.md.
defineProps<{ h: (id: string) => string }>()
const mail = `mailto:${CONTACT_EMAIL}`
</script>

<template>
  <h2 id="scope">{{ h('scope') }}</h2>
  <p>These Terms of use (the “Terms”) apply to the website adiletai.com (the “Site”) and to the AdiletAI legal AI platform at business.adiletai.com (the “Platform”). “AdiletAI”, “we” and “us” refer to the company that operates the Site and the Platform.</p>
  <p>The Platform is intended for organisations: companies, their legal departments and law firms. Access is provided under an agreement between AdiletAI and the organisation (the “Agreement”). The organisation that has entered into the Agreement is the “Customer”, and the people it authorises to use the Platform are “Authorised Users”.</p>
  <p>These Terms form part of the Agreement. If the Agreement differs from these Terms, the Agreement prevails.</p>
  <p>By using the Site or the Platform, you accept these Terms, the <NuxtLinkLocale to="/legal/privacy">Privacy policy</NuxtLinkLocale> and the <NuxtLinkLocale to="/legal/disclaimer">Disclaimer</NuxtLinkLocale>. If you accept these Terms on behalf of an organisation, you confirm that you have the authority to do so. If you do not accept them, do not use the Site or the Platform.</p>

  <h2 id="site">{{ h('site') }}</h2>
  <p>The Site provides general information about AdiletAI and the Platform. You do not need an account to use it.</p>
  <p>Articles and other materials on the Site are for information only. They are not legal advice and may not reflect recent changes in legislation.</p>
  <p>The Site links to third-party services, such as the service used to book a demo. Those services are governed by their own terms and privacy policies, and AdiletAI is not responsible for them.</p>

  <h2 id="platform">{{ h('platform') }}</h2>
  <p>AdiletAI is a legal AI platform for in-house legal teams and law firms in Kazakhstan. The Platform includes:</p>
  <ul>
    <li>the Assistant, a chat that answers legal questions with citations to Kazakhstan legislation and reviews contracts for risk;</li>
    <li>Vault, private document workspaces with search by meaning;</li>
    <li>review tables, which turn a set of documents into a table of answers, each with the source passages it was drawn from;</li>
    <li>court practice analysis, which searches public Kazakhstan court and legal websites and builds a table of relevant decisions.</li>
  </ul>
  <p>Features we describe as beta, such as document drafting, are still in development. They may change, work with limitations or be withdrawn. We develop the Platform continuously and may add, change or remove features.</p>
  <p>AdiletAI is an independent company and is not affiliated with the Ministry of Justice’s <span lang="kk">“Әділет”</span> legal information system (adilet.zan.kz).</p>

  <h2 id="access">{{ h('access') }}</h2>
  <p>Access to the Platform is by invitation: we create accounts for Authorised Users under the Agreement. There is no public sign-up.</p>
  <ul>
    <li>Each Authorised User signs in with their own account and keeps their sign-in details confidential. Accounts must not be shared.</li>
    <li>Account details must be accurate and kept up to date.</li>
    <li>We recommend turning on two-factor authentication.</li>
    <li>The Customer is responsible for activity under its Authorised Users’ accounts and for ensuring that they comply with these Terms.</li>
    <li>If you suspect unauthorised access to an account, notify us immediately at <a :href="mail">{{ CONTACT_EMAIL }}</a>.</li>
  </ul>
  <p>We may suspend access to an account if these Terms are breached or if the security of the Platform or its users is at risk.</p>

  <h2 id="use">{{ h('use') }}</h2>
  <p>The Site and the Platform may be used only for lawful purposes, and the Platform only for the Customer’s professional work, including work on its clients’ matters. You must not:</p>
  <ul>
    <li>use them for unlawful purposes, spam, misleading others or infringing the rights of third parties;</li>
    <li>upload materials you have no right to use, or files containing malicious code;</li>
    <li>decompile or otherwise reverse engineer the Platform, interfere with its operation, circumvent access controls or credit metering, or carry out load or security testing without our written permission;</li>
    <li>access the Platform using bots, scrapers or other automated means;</li>
    <li>resell access to the Platform or make it available to anyone who is not an Authorised User.</li>
  </ul>

  <h2 id="output">{{ h('output') }}</h2>
  <p>The Platform uses AI models to produce answers, reports, tables, drafts and other results (“Output”). Output may be incomplete, outdated or wrong, even when it cites sources.</p>
  <p>Output is not legal advice and does not replace a lawyer’s professional judgement. Output must be reviewed by a lawyer before it is relied on or passed to others. The Customer and its Authorised Users decide how to use Output and are responsible for those decisions.</p>
  <p>Citations and source links help you check an answer, but they do not guarantee that it is correct or complete. Check important points against the official text of the act or court decision. The limits of the Platform are described in more detail in the <NuxtLinkLocale to="/legal/disclaimer">Disclaimer</NuxtLinkLocale>.</p>
  <p>Subject to these Terms and the Agreement, the Customer may use Output in its work, including in documents prepared for its clients.</p>

  <h2 id="content">{{ h('content') }}</h2>
  <p>“Customer Content” means the documents, messages and other materials that Authorised Users upload to or enter into the Platform. The Customer retains all rights to Customer Content.</p>
  <p>The Customer grants AdiletAI the right to store and process Customer Content only to the extent needed to provide, secure and support the Platform for the Customer, or as required by law.</p>
  <p>To produce Output, the Platform uses third-party AI model and search providers and passes them the data each task requires. Some of these providers process data outside Kazakhstan. The current list of sub-processors is available on request.</p>
  <p>The Customer is responsible for having the right to upload Customer Content and, where it contains personal data, a lawful basis for processing that data under the legislation of the Republic of Kazakhstan. We recommend uploading only the data a task actually needs.</p>
  <p>Vaults, chats and analyses are private to the account that created them. Authorised Users can delete documents, vaults and chats at any time. How we process personal data is explained in the <NuxtLinkLocale to="/legal/privacy">Privacy policy</NuxtLinkLocale>, and our security measures are described on the <NuxtLinkLocale to="/security">Security</NuxtLinkLocale> page.</p>

  <h2 id="fees">{{ h('fees') }}</h2>
  <p>Usage of the Platform is metered in credits. Plans, fees and payment terms are agreed with the Customer and set out in the Agreement.</p>
  <p>When the credit balance runs out, features that use credits are unavailable until credits are added under the Agreement.</p>

  <h2 id="ip">{{ h('ip') }}</h2>
  <p>The Site and the Platform, including their software, design, texts, logos and the AdiletAI name, belong to AdiletAI or to other rights holders and are protected by law.</p>
  <p>For the term of the Agreement, AdiletAI grants the Customer and its Authorised Users a limited, non-exclusive, non-transferable and revocable right to use the Platform for the Customer’s professional work. No other rights are granted.</p>

  <h2 id="warranty">{{ h('warranty') }}</h2>
  <p>The Site and the Platform are provided “as is” and “as available”. We work to keep them running, but we do not guarantee that they will operate without interruptions or errors, or that Output will be accurate or complete.</p>
  <p>The Platform searches public sources, including official websites. We do not control these sources and are not responsible for their availability, completeness or accuracy.</p>
  <p>Except as expressly stated in the Agreement, AdiletAI gives no other warranties.</p>

  <h2 id="liability">{{ h('liability') }}</h2>
  <p>To the extent permitted by the legislation of the Republic of Kazakhstan:</p>
  <ul>
    <li>AdiletAI is not liable for lost profit, indirect losses, or losses resulting from decisions based on Output that was not reviewed by a lawyer;</li>
    <li>AdiletAI is not liable for failures caused by third-party services or by force majeure;</li>
    <li>AdiletAI’s total liability is limited to the amount actually paid by the Customer for access to the Platform under the Agreement.</li>
  </ul>
  <p>If the Agreement sets different limits of liability, the Agreement prevails. Nothing in these Terms limits liability that cannot be limited under the legislation of the Republic of Kazakhstan.</p>

  <h2 id="termination">{{ h('termination') }}</h2>
  <p>We may suspend or terminate access to the Platform for the Customer or for individual Authorised Users if these Terms are breached, if security is at risk, if the law requires it, or for other material reasons. Where circumstances allow, we will notify the Customer in advance.</p>
  <p>Access also ends when the Agreement ends. The Customer may stop using the Platform at any time; termination of the Agreement itself is governed by the Agreement.</p>
  <p>Provisions that by their nature should continue after access ends, including those on intellectual property, liability and disputes, remain in force.</p>

  <h2 id="changes">{{ h('changes') }}</h2>
  <p>We may update these Terms. The current version is always published on this page, with the date of the last update shown at the top. If the Agreement sets a procedure for amending its terms, that procedure applies.</p>
  <p>By continuing to use the Site or the Platform after an update is published, you accept the updated Terms.</p>

  <h2 id="law">{{ h('law') }}</h2>
  <p>These Terms are governed by the legislation of the Republic of Kazakhstan.</p>
  <p>The parties will seek to resolve disputes through negotiation. Disputes that are not resolved by negotiation are referred to the competent courts of the Republic of Kazakhstan, unless the Agreement provides otherwise.</p>
  <p>These Terms are published in Kazakh, Russian and English. If the language versions differ, the Russian version prevails.</p>

  <h2 id="contact">{{ h('contact') }}</h2>
  <p>Send questions about these Terms to <a :href="mail">{{ CONTACT_EMAIL }}</a>. For other enquiries, see the <NuxtLinkLocale to="/contact">Contact</NuxtLinkLocale> page.</p>
</template>

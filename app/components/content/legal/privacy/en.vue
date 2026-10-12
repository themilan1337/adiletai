<script setup lang="ts">
// English body of the privacy policy. Section headings come from legalPrivacy.toc (shared with the page's table of
// contents; their order must match SECTIONS in pages/legal/privacy.vue). Every statement maps to claims.md.
// Keep ru.vue and kk.vue in step with this file and bump UPDATED in the page when anything changes.
const { t } = useI18n()
const localePath = useLocalePath()
const mail = `mailto:${CONTACT_EMAIL}`
</script>

<template>
  <div class="rounded-card border border-line bg-surface p-6 sm:p-8">
    <h2 class="mt-0 font-display text-xl font-normal tracking-normal text-ink">
      In short
    </h2>
    <ul class="mt-5 text-[15px] leading-relaxed marker:text-accent-600">
      <li>AdiletAI processes the data you give it to run the platform: your account details, the documents you upload, your messages and the results the platform produces.</li>
      <li>To answer questions and run searches, AdiletAI uses third-party AI model and search providers. Some of them process data outside Kazakhstan. The sub-processor list is available on request.</li>
      <li>Personal identifiers in your typed messages are pseudonymised before the message reaches the AI model. Document text, attached images, court practice search queries and the other content listed in <a href="#pseudonymisation">section 6</a> are not masked.</li>
      <li>Uploaded files are encrypted at rest, and connections to AdiletAI use TLS 1.2 or 1.3.</li>
      <li>You can delete documents, vaults and chats at any time. To exercise your rights under Kazakhstan law, write to <a :href="mail">{{ CONTACT_EMAIL }}</a>.</li>
    </ul>
  </div>

  <h2 id="scope">
    {{ t('legalPrivacy.toc.scope') }}
  </h2>
  <p>This policy explains how AdiletAI (“AdiletAI”, “we”, “us”) processes personal data when you visit the website adiletai.com, use the AdiletAI platform at business.adiletai.com, or contact us. AdiletAI is based in Shymkent, Kazakhstan.</p>
  <p>Our processing of personal data is subject to the Law of the Republic of Kazakhstan No. 94-V of 21 May 2013 “On Personal Data and Their Protection” (the “Personal Data Law”) and other Kazakhstan legislation.</p>
  <p>If your organisation has a separate agreement with AdiletAI, the data processing terms of that agreement prevail where they differ from this policy.</p>

  <h2 id="data">
    {{ t('legalPrivacy.toc.data') }}
  </h2>
  <h3>On the website</h3>
  <ul>
    <li><strong>Analytics.</strong> We use Vercel Web Analytics to count visits. It does not use cookies. It records data such as the page visited, the referring site, browser, operating system, device type and country, and tells visits apart with a hash derived from the request that is discarded after 24 hours.</li>
    <li><strong>Technical data.</strong> The servers that deliver the website process standard request data, such as your IP address and browser details, to serve pages and protect the site.</li>
    <li><strong>Browser storage.</strong> If you accept or dismiss the language suggestion, the website remembers that choice in your browser’s local storage. The website does not use cookies for analytics or advertising.</li>
    <li><strong>Messages and demo bookings.</strong> If you write to us, we process your name, e‑mail address and the content of your message. Demo bookings are made through Calendly, a third-party scheduling service, which processes the details you enter under its own privacy policy.</li>
  </ul>
  <h3>On the platform</h3>
  <ul>
    <li><strong>Account data:</strong> your name, e‑mail address and account settings. Passwords and two-factor authentication settings are managed by AdiletAI’s own identity provider.</li>
    <li><strong>Documents:</strong> the files you upload to vaults or attach to chats, the text extracted from them (including text read by OCR) and the search index built from that text.</li>
    <li><strong>Messages and results:</strong> the questions and instructions you type and what the platform produces from them, such as answers, contract risk scans, review tables, drafts and court practice analyses, as well as your team’s practice profile if one is set up.</li>
    <li><strong>Usage data:</strong> which features you use, the credits each action consumes and your credit balance.</li>
    <li><strong>Technical logs:</strong> IP address, browser details, timestamps and records of requests and errors, which we use to keep the platform secure and working.</li>
  </ul>
  <p>Documents you upload may contain personal data of other people, such as counterparties, employees or clients. You are responsible for having a lawful basis to upload and process that data in AdiletAI.</p>

  <h2 id="purposes">
    {{ t('legalPrivacy.toc.purposes') }}
  </h2>
  <p>We process personal data to:</p>
  <ul>
    <li>provide the platform: sign you in, store and process your documents, answer your questions, run searches, and build review tables and court practice analyses;</li>
    <li>meter usage in credits and administer the plan agreed with your organisation;</li>
    <li>keep the platform and the website secure, prevent abuse and fix errors;</li>
    <li>reply to your messages and arrange demos and onboarding;</li>
    <li>understand, in aggregate, how the website is used;</li>
    <li>meet our obligations under Kazakhstan law.</li>
  </ul>

  <h2 id="grounds">
    {{ t('legalPrivacy.toc.grounds') }}
  </h2>
  <p>We collect and process personal data with the consent of the data subject and in other cases permitted by Kazakhstan law. You can withdraw your consent by writing to us, except in cases provided by law. After you withdraw it, we may no longer be able to give you access to the platform.</p>

  <h2 id="providers">
    {{ t('legalPrivacy.toc.providers') }}
  </h2>
  <p>AdiletAI uses third-party AI model and search providers to prepare answers, analyse documents and search legal sources. Depending on the task, they receive the content that task needs: the text of your messages (with personal identifiers pseudonymised, see <a href="#pseudonymisation">section 6</a>), your team’s practice profile if one is set up, the text of documents you upload or attach, including when the search index for your vaults is built, images you attach to a chat, and search queries based on your request.</p>
  <p>Some of these providers process data outside Kazakhstan. This is a cross-border transfer of personal data within the meaning of Article 16 of the Personal Data Law.</p>
  <p>The current list of sub-processors is available on request at <a :href="mail">{{ CONTACT_EMAIL }}</a>. Before rollout, we walk your security team through the data flow.</p>
  <p>We also use providers of hosting and infrastructure for the platform, Vercel for hosting the website and its analytics, and Calendly for demo bookings. Vercel and Calendly may also process data outside Kazakhstan.</p>
  <p>We disclose personal data to state bodies only where Kazakhstan law requires it.</p>

  <h2 id="pseudonymisation">
    {{ t('legalPrivacy.toc.pseudonymisation') }}
  </h2>
  <p>Personal identifiers in your typed messages (IIN, BIN, IBAN, phone numbers, e‑mail addresses and, on a best-effort basis, personal names) are pseudonymised before the message reaches the AI model and restored in the answer. AdiletAI replaces each identifier it detects with a placeholder, then puts the original value back in the answer you see.</p>
  <p>Pseudonymisation applies only to the text you type. It does not cover the text of attached documents or document text indexed for search, including documents stored in your vaults. Nor does it cover the web-search queries that court practice analysis builds from your dispute description and sends to its search provider. Images you attach to a chat and your team’s practice profile are not masked either. Names are detected automatically, so some may be missed. Treat pseudonymisation as an extra safeguard, not a guarantee, and include only the personal data your task needs.</p>

  <h2 id="security">
    {{ t('legalPrivacy.toc.security') }}
  </h2>
  <ul>
    <li>Files you upload are encrypted at rest and served only through authenticated downloads.</li>
    <li>Connections between your browser and AdiletAI use TLS 1.2 or 1.3, and HSTS tells browsers to connect over HTTPS only.</li>
    <li>You sign in through AdiletAI’s own identity provider (OpenID Connect with PKCE). Access tokens stay on our server, never in your browser: your browser holds only an encrypted, HttpOnly session cookie. You can turn on two-factor authentication with any authenticator app.</li>
    <li>A strict Content Security Policy and rate limiting on sign-in and API endpoints protect the web app.</li>
    <li>Vaults, chats and court practice analyses are private to your account.</li>
  </ul>
  <p>No system is completely secure. If we learn of unauthorised access to your personal data, we will take the steps required by Kazakhstan law. Each control is described in more detail on the <NuxtLink :to="localePath('/security')">Security page</NuxtLink>.</p>

  <h2 id="retention">
    {{ t('legalPrivacy.toc.retention') }}
  </h2>
  <ul>
    <li>Documents, vaults and chats stay in your account until you delete them, and you can delete them at any time. Copies of deleted data may remain in database backups for a limited period.</li>
    <li>Account data and usage data are kept while you have access to AdiletAI, and afterwards only for as long as the purposes in <a href="#purposes">section 3</a> require or the law prescribes.</li>
    <li>Technical logs are kept for a limited period for security and troubleshooting.</li>
    <li>To delete your account, or data you cannot delete yourself (such as court practice analyses), write to <a :href="mail">{{ CONTACT_EMAIL }}</a>.</li>
    <li>Processing by third-party AI model and search providers is governed by their own terms.</li>
  </ul>

  <h2 id="rights">
    {{ t('legalPrivacy.toc.rights') }}
  </h2>
  <p>Under Article 24 of the Personal Data Law, as a personal data subject you have the right to:</p>
  <ul>
    <li>know whether we hold your personal data, and receive information about the purposes, sources and methods of its collection and processing, the list of data and the periods of its processing, including storage;</li>
    <li>request changes and additions to your personal data where there are grounds confirmed by documents;</li>
    <li>request that your personal data be blocked and/or anonymised if there is information that the conditions of its collection or processing were violated;</li>
    <li>request the destruction or deletion of personal data collected and processed in breach of Kazakhstan law, and in other cases established by law;</li>
    <li>withdraw your consent to the collection, processing, distribution in publicly available sources, transfer to third parties and cross-border transfer of personal data, except in cases provided by law;</li>
    <li>give or refuse consent to the distribution of your personal data in publicly available sources;</li>
    <li>protect your rights and legitimate interests, including compensation for moral and material damage;</li>
    <li>exercise other rights provided by the Personal Data Law and other laws of the Republic of Kazakhstan.</li>
  </ul>
  <p>To exercise these rights, write to <a :href="mail">{{ CONTACT_EMAIL }}</a> from the e‑mail address linked to your account, or tell us how we can verify your identity. We respond within the time limits set by Kazakhstan law. You may also lodge a complaint with the authorised body for personal data protection or apply to a court.</p>

  <h2 id="changes">
    {{ t('legalPrivacy.toc.changes') }}
  </h2>
  <p>We may update this policy when the way we process data changes. The date at the top of this page shows when it was last updated.</p>

  <h2 id="contact">
    {{ t('legalPrivacy.toc.contact') }}
  </h2>
  <p>For questions about this policy or the processing of your personal data, write to <a :href="mail">{{ CONTACT_EMAIL }}</a>. Other ways to reach us are on the <NuxtLink :to="localePath('/contact')">contact page</NuxtLink>.</p>
  <p>AdiletAI, Shymkent, Kazakhstan.</p>
</template>

# AdiletAI landing: SEO and GEO research

- **Date:** 2026-10-12
- **Scope:** the adiletai.com marketing site (Nuxt 4 SSR, Tailwind v4, `@nuxtjs/seo` 3.4.0, Vercel). Product facts come from the `adilet-b2b` repo.
- **Goal:** grow organic traffic from classic search (Google, Yandex, Bing) and from AI answer engines (Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini, Claude, Copilot, Yandex Search with Alice) after the move to an English default with Russian and Kazakh versions.

This was read-only research. No site code was changed. Every live-site finding below was checked with `curl` against production on 2026-10-12.

---

## 0. Executive summary: 12 decisions

1. **URL scheme:** English at `/`, Russian at `/ru/...`, Kazakh at `/kk/...` (`@nuxtjs/i18n` `prefix_except_default`), all on one host.
2. **Fix the host split first.** `https://adiletai.com/*` returns a **307** redirect to `https://www.adiletai.com/*`. Every canonical, `og:url`, sitemap `<loc>` and robots `Sitemap:` line points to the apex domain, which redirects. Make the apex the primary domain in Vercel, with www redirecting to it by 308.
3. **Delete all hand-written canonical, `lang` and `ogUrl` tags from pages.** Let i18n and nuxt-seo-utils emit per-locale canonicals, `hreflang` and `og:locale`. Yandex reads hreflang only from HTML `<link>` tags, not from sitemaps.
4. **No automatic language redirects.** Show a dismissible "available in Russian / Kazakh" banner instead.
5. **Fonts:** self-host them through `@nuxt/fonts` and keep the `cyrillic-ext` subset, because the Kazakh letters ә ғ қ ң ө ү һ live there. Remove the two render-blocking CSS `@import`s and the third-party Product Sans font.
6. **Prerender all marketing routes.** Use static OG images, one per locale. Today's `og:image` returns a 404.
7. **Structured data:** one Organization entity with real `sameAs`, legal name and BIN; WebSite per locale; BlogPosting with real Person authors and reviewers. Remove the fake `dateModified: new Date()`, the invalid `LegalApplication` category and `ru-RU`. FAQ rich results have not shown in Google since 7 May 2026: keep visible FAQs and treat the markup as optional.
8. **robots.txt:** a single `User-agent: *` / `Allow: /` group plus the sitemap line. That one rule admits every search and AI crawler. Never turn on `blockAiBots`.
9. **llms.txt:** low value. Google says it doesn't use it, and server logs show almost no reads. Ship a ~30-line file only if someone owns keeping it current.
10. **GEO writing patterns:** an answer-first definitional sentence, statistics with sources, article-level citations to adilet.zan.kz, comparison tables and dated "last reviewed" stamps. In the Princeton GEO study, adding statistics was the best tactic for Law & Government queries.
11. **Off-site entity work beats on-site tricks.** Branded web mentions correlate 0.664 with AI Overview visibility, against 0.218 for backlinks. Disambiguate "AdiletAI" from the Ministry of Justice "Әділет" systems, which own the "adilet" autocomplete.
12. **Growth engine:** free calculators reviewed by a lawyer (court state fee, limitation period, procedural deadlines; the logic already exists in `adilet-b2b/backend/src/app/services/litigation_calculators_service.py`), plus a three-language hub on the Kazakhstan AI Law (No. 230-VIII). Both have measurable search demand.

---

## 1. Current state: defects found (live site and repo)

| # | Defect | Evidence | Impact |
|---|---|---|---|
| 1 | Host split | `curl https://adiletai.com/about` → `307 → https://www.adiletai.com/about`. The canonical, `og:url`, sitemap and robots `Sitemap:` line all use the apex. | Every canonical points at a temporary redirect, so signals are split between two hosts. |
| 2 | Broken OG image | `og:image` = `https://adiletai.com/og-image.png` → 307 → **404** on www. `public/` contains only `app.png` and `logo.png`. | No preview cards in Telegram, LinkedIn or WhatsApp, the main B2B sharing channels in Kazakhstan. |
| 3 | Render-blocking fonts | The built `entry.css` starts with `@import "https://fonts.cdnfonts.com/css/google-sans"` and a Google Fonts Manrope request for **18** weight and style variants. `@nuxt/fonts` is installed but bypassed. | Two extra origins and chained requests before first paint. Product Sans is Google's proprietary brand font served from a mirror, which is a licensing risk. |
| 4 | Hardcoded head tags | Each page calls `useHead({ link: [{ rel: 'canonical', href: 'https://adiletai.com/...' }] })`. `index.vue` sets `htmlAttrs.lang = 'ru'`. Blog posts hardcode `ogUrl`. | After i18n is added, `/ru/about` would canonicalize to English `/about`, and the RU and KK pages would drop out of the index. |
| 5 | Title bloat | `site.name` = "AdiletAI - Юридический AI Помощник для Казахстана" is appended by the title template. The home title is about 130 characters with the brand twice. | Truncated SERP titles and a diluted entity name. |
| 6 | JSON-LD errors | `inLanguage: 'ru-RU'`; `dateModified: new Date().toISOString()`, which changes on every render; `applicationCategory: 'LegalApplication'`, which is not a Google-supported value; `sameAs: ['https://app.adiletai.com']`, which is the company's own subdomain. | Fake freshness and a wrong region. The entity is not linked to any external profile. |
| 7 | Broken sitewide links | The header links to `/contact` (404) and `https://docs.adiletai.com/` (DNS does not resolve). | Crawl errors on every page, and a weaker trust signal. |
| 8 | Positioning conflict | `/features`, the blog layout CTA ("Попробовать бесплатно" → app.adiletai.com, "тысячи юристов") and the blog posts describe the old consumer chatbot. The home page describes the B2B platform. | Mixed entity description for search engines and LLMs. Unverifiable claims are a trust problem. |
| 9 | Thin YMYL blog | Three Russian posts by "AdiletAI Team", with `meta keywords` (ignored by Google), no reviewer and no primary sources. | Low E-E-A-T on a legal (YMYL) topic. |
| 10 | Redundant perf tooling | `nuxt-booster`, `@nuxt/image` and full GSAP. Booster ships runtime "performance detection" JavaScript. | Extra JavaScript with no measured benefit. |
| 11 | robots.txt noise | Two `User-agent: *` groups, from the module config and the merged `public/_robots.txt`, plus a named group. | Harmless today, but fragile: a bot matched by a named group ignores the `*` rules. |

---

## 2. Market context

### 2.1 Search engines in Kazakhstan

StatCounter, September 2026, all platforms: **Google 68.15%, Yandex 29.72%, Bing 1.46%**, DuckDuckGo 0.2%. Host data for June 2026: google.com 68.41%, yandex.kz 23.1%, yandex.ru 4.86%.

Implications:
- Google comes first.
- Yandex is a real second engine with about 30% of searches. Its strength is likely in Russian-language queries.
- Bing is small as a search engine, but it feeds Copilot and is one of the sources ChatGPT blends into its answers.

### 2.2 Where AI answer engines get their sources

| Engine | Retrieval source | Control or report |
|---|---|---|
| Google AI Overviews and AI Mode | The Google index, plus "query fan-out" over subtopics. "There are no additional technical requirements." | Normal Googlebot rules. Traffic is counted under the "Web" search type in Search Console. A generative-AI impressions report (no clicks) started rolling out in June 2026 (secondary sources). |
| ChatGPT search | OAI-SearchBot. A 2026 study of ChatGPT's server events found its own index ("Labrador") blended with third-party providers (single source). | Allow `OAI-SearchBot`. Links carry `utm_source=chatgpt.com`. |
| Perplexity | Its own index, built by PerplexityBot ("not used to crawl content for AI foundation models"). | Allow `PerplexityBot`. `Perplexity-User` "generally ignores robots.txt rules". |
| Claude | Claude-SearchBot and Claude-User. Web search is powered by Brave Search, which is on Anthropic's subprocessor list. | Allow both bots. Being in the Brave index matters. |
| Copilot | The Bing index. | Bing Webmaster Tools "AI Performance" report (public preview since February 2026): citations and grounding queries. |
| Yandex Search with Alice (formerly Neuro) | Pages already in the Yandex index. A page is "more likely" to be used when it is well-organized and informative. | Opt-out token: `YandexAdditional` / `YandexAdditionalBot`. |

**Bottom line:** clean indexing in Google, Yandex and Bing (and crawlability for Brave) is the prerequisite for every engine above. No AI-specific file or markup replaces it, and Google says so explicitly ("You don't need to create new machine readable files, AI text files, or markup").

### 2.3 Language demand

I collected Google and Yandex autocomplete suggestions on 2026-10-12, with Google `gl=kz` and Yandex region Kazakhstan. Raw output is in the scratchpad research folder. Autocomplete shows that a query exists, not how often it is searched, so confirm volumes in Yandex Wordstat and Google Keyword Planner (Kazakhstan) before final prioritization.

- **Russian (commercial core):**
  - "ии для юристов рк", "ии для юристов в казахстане", "ии юрист казахстан", "ии юрист рк"
  - "нейросеть для юристов", "нейросеть для проверки договоров", "проверить договор через нейросеть", "анализ договора нейросетью", "нейросеть для составления договоров"
  - "автоматизация юридического отдела", "ии для юридической фирмы", "ии для юридического отдела"
  - "сравнение двух договоров онлайн"
  - Competitor and brand modifiers: "стриж", "гарант", "яндекс", "алиса".
- **Kazakh:**
  - There are almost no completions for "AI for lawyers" phrasing ("жи заңгер", "жасанды интеллект заңгер" return nothing).
  - Kazakh demand sits in documents and law texts: "келісім шарт үлгісі қазақша", "келісім шарт жасау", "сот практикасы", "талап қою мерзімі", "жасанды интеллект туралы заң" (with modifiers "әділет кз", "қашан қабылданды").
  - Yandex reports that Kazakh-language queries reach up to 15% of daily queries (Forbes.kz).
  - **Kazakh pages should therefore target document tasks and legal texts, not translated slogans.**
- **English:** "harvey ai alternatives", "ai contract review", "contract analysis ai", "legal ai platforms", "kazakhstan ai law", "aifc law", "aifc contract law", "due diligence kazakhstan".
- **Tool demand (strong, Russian):**
  - "госпошлина в суд рк" (+2026, +калькулятор, +для юридических лиц), "калькулятор госпошлины в суд рк"
  - "исковая давность рк", "калькулятор исковой давности", "процессуальные сроки гпк рк"
  - Kazakh: "талап қою мерзімі"
- **Brand collision:** "adilet ai" autocompletes to "aisoip adilet" (the Ministry of Justice debtor registry), and "адилет" autocompletes to "адилет зан кз" and to a singer. The brand must always be written as one token, "AdiletAI", and it needs explicit disambiguation (see 5.2).

---

## 3. Technical SEO for a multilingual Nuxt SSR site

### 3.1 URL strategy

- **Use `prefix_except_default`:** `/` for English, `/ru/...` and `/kk/...` for the other locales.
  - Google rates subdirectories as fine and URL parameters as "Not recommended".
  - Separate ccTLDs or subdomains split authority and triple the Search Console and Yandex Webmaster work. That gains nothing for a single-country B2B brand.
- **Slugs:** keep the same English slugs in all locales (`/ru/security`, `/kk/security`).
  - One route table, and the hreflang mapping is trivial.
  - Slug keywords carry very little ranking weight.
  - Blog posts written natively in one language can have native slugs later. That is not needed now.
- **Trailing slash:** keep `trailingSlash: false` and make sure Vercel does not append one.

### 3.2 Locale codes and Kazakh specifics

- **i18n `language` values:** `en-US`, `ru-KZ`, `kk-KZ`.
  - `@nuxtjs/i18n` also emits language-only "catch-all" hreflang tags (`en`, `ru`, `kk`) and `x-default`, which points to the English default.
  - Results: `og:locale` becomes `ru_KZ` / `kk_KZ`, and `html lang` becomes `kk-KZ`.
  - Google accepts ISO 639-1 plus an optional ISO 3166-1 region. Yandex lists Kazakh as `kk`.
  - Replace today's `ru-RU` everywhere.
- **Script:** publish Kazakh in Cyrillic.
  - The switch to the Latin alphabet still had no fixed deadline as of September 2026.
  - If a Latin edition is ever added, it becomes its own locale, `kk-Latn`. Google supports ISO 15924 script subtags.
- **Fonts and Kazakh glyphs (verified):**
  - ә U+04D9, ғ U+0493, қ U+049B, ң U+04A3, ө U+04E9, ү U+04AF and һ U+04BB are in Google Fonts' **`cyrillic-ext`** subset (U+0460–052F).
  - The `cyrillic` subset (U+0400–045F, U+0490–0491, U+04B0–04B1) covers only ұ and і.
  - A font build limited to latin + cyrillic renders Kazakh with fallback glyphs: a visible mixed-typeface bug.
  - `@nuxt/fonts` includes `cyrillic-ext` by default. Never narrow the subsets, and pick a family that actually ships `cyrillic-ext` (Manrope and Inter both do).
- **Translation quality:** have native speakers review every RU and KK page. Google's scaled content abuse policy names "automated transformations like … translating" when little value is added.
- **No half-translated pages:** if a post exists only in Russian, do not emit hreflang for EN and KK, and do not serve an English URL with a Russian body.

### 3.3 hreflang, canonical and `html lang`

- **Google's rules:**
  - Every version lists itself and all the others.
  - Links must be reciprocal: "If two pages don't both point to each other, the tags will be ignored."
  - `x-default` is the fallback.
  - HTML, HTTP-header and sitemap methods are equivalent.
- **Yandex:** "Yandex no longer supports using the Sitemap file for language versions." The `<link rel="alternate" hreflang>` tags in `<head>` are therefore **mandatory**. Sitemap alternates are only a bonus for Google.
- **Canonical:** each locale canonicalizes to itself (`/ru/about` → `/ru/about`). Never canonicalize a translation to English.
- **Implementation:**
  - Call `useLocaleHead()` once in `app.vue` (see section 8).
  - Delete every per-page canonical, `htmlAttrs.lang` and `ogUrl`.
  - Check the SSR HTML of each page for exactly one canonical, one `html lang`, three hreflang URLs plus catch-alls, and `x-default`.
- **Language switcher:** a header dropdown of real `<a href>` links built with `useSwitchLocalePath()`. Each link goes to the equivalent page, not the locale home page. Do not use JS-only buttons.

### 3.4 Language detection

Google's guidance:
- "Avoid automatically redirecting" between language versions.
- "Don't use IP analysis to adapt your content."
- Googlebot mostly crawls from the US and sends no `Accept-Language` header.

Recommendation:
- Set `detectBrowserLanguage: false`.
- Add a small client-only banner: when `navigator.language` starts with `ru` or `kk` and the visitor is on English, offer a link to the same page in their language. Store the dismissal in `localStorage` inside try/catch.
- This matters more than usual: an English default means most Kazakhstan visitors land on English.
- If the business insists on a redirect, use `redirectOn: 'root'` with `useCookie: true`, which only redirects `/`, and only once. The i18n docs call this the SEO-safe setting.

### 3.5 Sitemaps and indexing

- `@nuxtjs/sitemap` integrates with i18n automatically: a sitemap index, one sitemap per locale, and hreflang alternates. Remove `strictNuxtContentPaths`, since the site has no Nuxt Content.
- `lastmod` must carry only real dates, such as a post's `dateModified`. Never stamp "now" on every URL.
- Submit `https://adiletai.com/sitemap_index.xml` to:
  - Google Search Console (domain property)
  - Bing Webmaster Tools (import from Search Console)
  - Yandex Webmaster (check the site-region setting, "Регион сайта")
- Bing and Yandex support IndexNow; Google does not. A ~10-line post-deploy script that POSTs changed URLs is enough, so no module is needed.

### 3.6 Migrating today's Russian URLs

- Today the Russian content sits at the root. After the switch, `/about` becomes English and the Russian page moves to `/ru/about`.
  - Shared slugs need no redirect: the URL survives and hreflang points engines to the Russian version.
  - Expect a temporary Yandex dip for Russian queries, because the Russian home page moves from `/` to `/ru`.
- Blog: rewrite or consolidate the three thin Russian posts.
  - 301-redirect any post that stays Russian-only from `/blog/<slug>` to `/ru/blog/<slug>`.
- Keep `/legal/*` in all three locales. Terms and privacy must be readable in the user's language.

### 3.7 Rendering and Core Web Vitals

Targets at the 75th percentile: **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.**

- **Prerender.** Every marketing page is static, so use `nitro.prerender.crawlLinks` from `/`, `/ru` and `/kk`. HTML is then served from the CDN instead of a function. Today's response is `cache-control: public, max-age=0, must-revalidate`.
- **Fonts:**
  - Delete both CSS `@import`s.
  - Use one family through `@nuxt/fonts` with at most 3 weights. It self-hosts, preloads and generates metric-matched fallbacks (fontaine), which cuts CLS.
  - Drop Product Sans.
- **Images:**
  - Use `<NuxtImg>`/`<NuxtPicture>` with `format="avif,webp"` and explicit `width`/`height`.
  - On the LCP image: `fetchpriority="high"` and `loading="eager"`. Lazy-load everything else.
  - Product screenshots as AVIF, with localized alt text and captions.
- **JavaScript:**
  - Remove `nuxt-booster`.
  - Import GSAP dynamically in `onMounted` only where it is used, and honour `prefers-reduced-motion`.
  - Never animate the LCP headline from `opacity: 0`, because that delays LCP until the animation runs.
- **CLS and INP:**
  - The language banner overlays content instead of pushing it down.
  - Reserve the header height.
  - Build the dropdown and mobile menu from native `<button>`/`<details>` elements with tiny handlers.

---

## 4. Structured data plan

Google's position:
- No special schema is needed for AI features.
- Markup must match visible content.

The remaining value of structured data:
- **Entity disambiguation** for the Knowledge Graph, which LLM pipelines also read.
- Eligibility for **Organization** (logo and knowledge panel), **Breadcrumb** and **Article** features.

| Scope | Types | Notes |
|---|---|---|
| Every page (via `schemaOrg.identity` / `useSchemaOrg` in `app.vue`) | `Organization` with a fixed `@id` `https://adiletai.com/#organization` | Fields: `name: "AdiletAI"`, `alternateName: ["Adilet AI"]`, `legalName` (registered ТОО name), `url`, `logo` (≥112 px, crawlable), `description` (the definitional sentence, per locale), `foundingDate`, `address` (Shymkent, KZ), `taxID` (BIN), `email`, `contactPoint` (`availableLanguage: ["en","ru","kk"]`). `sameAs` lists **only real third-party profiles** (LinkedIn, Instagram, Telegram, Crunchbase, Astana Hub, later Wikidata), never your own subdomains. Google recommends placing this on the home or About page and says it isn't needed on every page; one shared `@id` is fine. |
| Every page | `WebSite` + `WebPage` with `inLanguage` set to the current locale | Nuxt SEO's i18n integration emits a `WebSite` per locale. |
| Home and platform | `SoftwareApplication` | `applicationCategory: "BusinessApplication"` (Google's list has no "LegalApplication") and `operatingSystem: "Web"`. The Software App rich result **requires `offers` plus `aggregateRating` or `review`**. Add `offers` only with a real public price, and never invent ratings. Without them the markup is entity data only, which is acceptable. |
| Product / Offer | Skip | Product and merchant-listing markup targets shopping. For a SaaS sold by demo request, it produces warnings and tempts fake prices or ratings. |
| Inner pages | `BreadcrumbList` | Via `useBreadcrumbItems({ schemaOrg: true })` from nuxt-seo-utils, with localized labels. |
| FAQ sections | `FAQPage` (optional) | Google: "As of May 7, 2026, FAQ rich results are no longer appearing in Google Search." The documentation was removed in June 2026. The markup is still valid schema.org and harmless; no evidence shows it lifts LLM citations. **The visible Q&A is the asset.** If you keep the markup, it must mirror the visible text word for word. |
| Blog posts | `BlogPosting` | `headline`, `description`, `image` (16:9, 4:3 and 1:1), `datePublished`/`dateModified` in ISO 8601 **with timezone** (Kazakhstan is UTC+5, for example `2026-10-12T10:00:00+05:00`), `inLanguage`, `publisher` → Organization `@id`. `author` must be a `Person` with `name` only in the name field, plus `url` → `/authors/<slug>`, `jobTitle` and `sameAs` (LinkedIn). Add `reviewedBy` (a schema.org `WebPage` property) for the lawyer reviewer. |
| Author pages | `ProfilePage` + `Person` | Credentials, bar or chamber membership, LinkedIn. |

**Entity consolidation:**
- Use the same `@id`s and the same `sameAs` list in every locale.
- Spell the brand "AdiletAI" identically on the site, LinkedIn, Telegram, directories and press kits.
- Create a Wikidata item only after independent coverage exists. Wikidata expects "serious public references", and promotional self-created items get deleted.

---

## 5. GEO: being cited by AI answer engines

### 5.1 What the evidence says

**Princeton GEO paper (Aggarwal et al., KDD 2024)**, GEO-bench. Relative change in position-adjusted word count versus no optimization:

| Method | Change |
|---|---|
| Quotation Addition | +41% |
| Statistics Addition | +33% |
| Fluency Optimization | +29% |
| Cite Sources | +28% |
| Keyword Stuffing | −9% |

Further findings from the same paper:
- **Statistics Addition worked best for Law & Government queries.**
- Lower-ranked sources gained most. Cite Sources gave +115% at rank 5 and −30% at rank 1.
- The best pair was Fluency + Statistics.
- The experiments ran on GEO-bench, with a smaller test on Perplexity (up to 37%), not on Google AI Overviews. Treat the numbers as directional.

**Other evidence:**
- **Ahrefs, 75,000 brands (2025):** correlation with AI Overview brand visibility is highest for off-site signals.

  | Signal | Correlation |
  |---|---|
  | Branded web mentions | 0.664 |
  | Branded anchors | 0.527 |
  | Branded search volume | 0.392 |
  | Domain rating | 0.326 |
  | Backlinks | 0.218 |

  These are correlations, not proof of cause.
- **Engines differ:** one vendor analysis of 680M citations found only about 11% of domains cited by both ChatGPT and Perplexity. This is directional.
- **Google's own guide** (Optimizing for generative AI search):
  - No chunking requirement ("There's no requirement to break your content into tiny pieces").
  - No ideal length.
  - llms.txt is not used.
  - Mass-producing pages for AI queries "violates Google's scaled content abuse spam policy".
  - Chasing inauthentic mentions "isn't as helpful as it might seem".
- **Formatting multipliers** in vendor blogs ("2.1× for tables", "3.1× for 40–75-word passages") cite unnamed datasets. A larger 2026 experiment reported that relevance dominates formatting. **Treat structure as hygiene, and content plus facts plus brand as the levers.**

### 5.2 On-page patterns for AdiletAI

1. **Definitional first sentence** on the home and About pages in every locale, reused word for word on LinkedIn, directories and the press kit. For example: *"AdiletAI is a legal AI platform for in-house legal teams and law firms in Kazakhstan that reviews contracts, answers legal questions with citations to Kazakhstan legislation, and automates document work in English, Russian and Kazakh."* The sentence names the entity, category, audience, geography and differentiator.
2. **Disambiguation line** on the About page and in the FAQ: *"AdiletAI is a private company and is not affiliated with the Ministry of Justice of the Republic of Kazakhstan or the Әділет legal information system (adilet.zan.kz)."*
3. **Answer-first sections:** an H2 phrased as the buyer's question ("Does AdiletAI train models on our documents?"), a direct 1–3 sentence answer, then the details.
4. **Statistics with sources:** concrete numbers such as supported formats and limits, number of acts indexed, turnaround times, and benchmark results with a published method. The Princeton results point to statistics as the strongest tactic for legal queries.
5. **Primary-law citations:** name acts precisely ("Law of the Republic of Kazakhstan No. 230-VIII of 17 November 2025 'On Artificial Intelligence'") and link to the article on adilet.zan.kz.
6. **Comparison tables:** "AdiletAI vs general chatbots vs manual review", and "Module → task → output". Keep the rows honest.
7. **Real quotations only:** named clients or advisers with their roles.
8. **Freshness stamps:** "Last reviewed 2026-10-01 by <Name>, advocate" on legal content. Update when the law changes, and never fake dates.
9. **Text, not pictures of text:** feature descriptions in HTML, with screenshots as support. Google asks that important content be "available in textual form".
10. **Glossary blocks** ("What is tabular review?", "What is citation verification?") for definitional prompts.

### 5.3 llms.txt and llms-full.txt

- **Spec:** proposed by Jeremy Howard in September 2024 (llmstxt.org). It is a Markdown file with an H1, a summary blockquote and H2 link lists, including an "Optional" section.
- **Google:** "Google Search itself doesn't use them… neither harm nor help."
- **Ahrefs logs** (137k domains, May 2026): 97% of llms.txt files got **zero** requests; GPTBot made 4.51% and ClaudeBot 0.80% of the AI requests to them.
- **SE Ranking** (300k domains): no correlation between llms.txt and citations.
- **Main readers:** coding agents.
- **Chrome Lighthouse:** an "agentic browsing" audit fails only on server errors. A 404 counts as N/A.

**Recommendation:** P2. Add a static `public/llms.txt` of about 30 lines only if an owner keeps it current. A stale index sends agents to dead pages. Skip `llms-full.txt` and per-page `.md` mirrors. Today `/llms.txt` returns 307 because of the host split, which fixing that resolves. Suggested structure:

```markdown
# AdiletAI
> AdiletAI is a legal AI platform for in-house legal teams and law firms in Kazakhstan (contract review, cited legal research on Kazakhstan law, document workflows; EN/RU/KK).

Not affiliated with the Ministry of Justice "Әділет" systems.

## Product
- [Platform overview](https://adiletai.com/platform): modules and what each produces
- [Security and data handling](https://adiletai.com/security): subprocessors, PII scrubbing, retention
- [How it works](https://adiletai.com/how-it-works)
- [Use cases](https://adiletai.com/use-cases)
- [FAQ](https://adiletai.com/faq)

## Company
- [About](https://adiletai.com/about)
- [Contact / demo](https://adiletai.com/contact)

## Optional
- [Русская версия](https://adiletai.com/ru)
- [Қазақша нұсқа](https://adiletai.com/kk)
- [Blog](https://adiletai.com/blog)
```

### 5.4 robots.txt policy for a company that wants to be cited

Every bot below is **allowed**. One `User-agent: *` group achieves that; add no named groups, because a bot matched by a named group ignores the `*` rules.

| Bot / token | Purpose | Decision | Why |
|---|---|---|---|
| Googlebot | Google Search, AI Overviews, AI Mode | Allow | The only control for Google's AI features. |
| Google-Extended | Token (not a crawler) for Gemini training and grounding in Gemini Apps and Vertex AI | Allow | Blocking removes the site from Gemini grounding and does not affect Search. |
| Bingbot | Bing and Copilot; also feeds DuckDuckGo | Allow | Copilot citations, plus Bing's reach into other engines. |
| OAI-SearchBot | ChatGPT search inclusion | Allow | Opted-out sites "will not be shown in ChatGPT search answers". |
| ChatGPT-User | User-initiated fetches | Allow | "robots.txt rules may not apply" anyway. |
| GPTBot | OpenAI training | Allow | Public promotional content; being in training data improves unprompted brand recall. |
| Claude-SearchBot / Claude-User | Claude search index and user fetches | Allow | Blocking reduces visibility in Claude answers. |
| ClaudeBot | Anthropic training | Allow | Same reasoning as GPTBot. |
| PerplexityBot / Perplexity-User | Perplexity index and user fetches | Allow | Perplexity recommends allowing it; it is not used for training. |
| Applebot / Applebot-Extended | Siri, Spotlight; Apple foundation-model training (token) | Allow | Applebot-Extended "does not crawl" and is "not considered in ranking". |
| CCBot | Common Crawl, used in many open-model training sets | Allow | Broad model exposure at no cost on a static site. |
| Bytespider | ByteDance | Allow (no rule) | Little value in Kazakhstan. If it causes load, block at the Vercel Firewall; a robots.txt rule only stops compliant bots. |
| YandexBot (`Yandex`) | Yandex Search | Allow | About 30% of the search market. |
| YandexAdditional / YandexAdditionalBot | Limits use in Search with Alice quick answers | Allow (no rule) | It ignores the `*` group and makes no fetches of its own, so no rule means allowed. Never disallow it. |

```txt
User-agent: *
Allow: /

Sitemap: https://adiletai.com/sitemap_index.xml
```

Configuration:
- Delete `public/_robots.txt`.
- Keep `robots.blockAiBots` false (the default).
- Check that no "AI bots" block rule is enabled in the Vercel Firewall.
- The product apps (`business.`, `app.`) need their own robots files. Use `noindex` on authenticated routes so the apps don't compete with the landing.

### 5.5 Off-site signals for Kazakhstan, in priority order

1. **LinkedIn** company page, plus founders and the legal adviser posting in English and Russian, all using the same definitional sentence.
2. **Directories:**
   - G2 and Capterra (legal software categories), Product Hunt (English launch), Crunchbase, the Astana Hub participant profile if applicable.
   - **2GIS**, Yandex Business and a Google Business Profile for the Shymkent office. 2GIS and Yandex are the local-trust surfaces in Kazakhstan.
3. **Press with original data:** a public "Kazakhstan legal QA benchmark" (general chatbots vs AdiletAI on N questions, judged by lawyers), or the AI-law explainer.
   - Targets: Forbes.kz, Kursiv, Digital Business, the-tech.kz, Profit.kz, zakon.kz, Tengrinews.
4. **Professional community:** bar associations and chambers of legal consultants, AIFC legal-tech events, university law faculties. Run webinars, publish the recording on YouTube with a transcript, and embed it on the site.
5. **Telegram** channels for legal professionals. They are not crawlable at scale, but they drive branded search, and branded search volume correlates 0.392 with AI Overview visibility.
6. **Habr / vc.ru:** an engineering write-up such as "Building cited RAG over Kazakhstan legislation". These sites rank well in Yandex and Google for Russian queries.
7. **Wikipedia / Wikidata:** only after independent coverage exists. Never self-publish promotional articles.

Do not buy links or mentions.

### 5.6 Measurement

- **Search Console** (domain property, all locales): Performance by page and country, filtered by `/ru/` and `/kk/`, plus the generative-AI impressions report when it reaches this property.
- **Bing Webmaster Tools:** the AI Performance report (citations, cited pages, grounding queries).
- **Yandex Webmaster:** indexing per locale. Trade press reports an "Alice AI visibility" tool since April 2026; I could not verify it in Yandex's documentation.
- **Analytics:** Vercel Web Analytics is already installed.
  - Watch referrers `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai` and the `utm_source=chatgpt.com` parameter.
  - If GA4 is added, create a custom channel group placed **above** Referral, with the source regex `^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|www\.perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai|chat\.deepseek\.com|grok\.com|meta\.ai)$`.
  - Expect undercounting: a lot of AI traffic arrives as "direct".
- **Crawler logs:** filter Vercel logs by user agent to confirm that OAI-SearchBot, Claude-SearchBot, PerplexityBot and YandexBot reach `/ru` and `/kk`.
- **Prompt panel (monthly):** about 30 prompts × 3 languages in ChatGPT, Perplexity, Gemini / AI Mode, Claude and Alice. Record whether AdiletAI is mentioned, which URL is cited, and whether the description is correct. Example prompts: "лучший ИИ для юристов в Казахстане", "AI contract review tool for Kazakhstan law", "Қазақстан заңнамасы бойынша ЖИ көмекші".
- **Conversions:** demo requests per locale and per referrer. This is the metric that matters.

---

## 6. YMYL and E-E-A-T for legal content

**Why the bar is high:**
- Legal topics are YMYL. Quality raters' guidelines have long listed legal issues (divorce, child custody, creating a will) under civics and law. The September 2025 version groups them under Government, Civics & Society.
- In Google's 2026 guide, **trust** is the most important part of E-E-A-T. Expertise means content "written or reviewed by an expert … through clear sourcing, evidence of the expertise involved, and background about the author".

**Requirements for every legal explainer, tool and policy page:**
1. **A named author with a Person page:** education, bar or chamber-of-legal-consultants membership, years of practice, LinkedIn. Plus **"Reviewed by"** a licensed lawyer.
2. **"Last reviewed" date and the legal basis "as of" date**, with links to primary sources on adilet.zan.kz at article level.
3. **A short disclaimer above the fold** on tools and legal posts ("General information, not legal advice"), plus the full `/legal/disclaimer` page in all three locales.
4. **AI disclosure:**
   - Law No. 230-VIII (signed 17 November 2025, in force January 2026) requires informing users when goods or services are provided using AI.
   - It also requires labeling synthetic content that may mislead. This summary comes from news coverage, so have counsel confirm the exact scope for the product and the site.
5. **Editorial policy page:** how content is produced (AI-assisted drafting plus lawyer review), the corrections contact, and the update cadence.
6. **Company transparency:**
   - Legal entity name, BIN, address, team with real roles and named legal advisers.
   - The founders are 16–17-year-old developers (from the press release in `adiletai.txt`). Present that openly, paired with credentialed legal advisers, rather than hiding it or overclaiming.
7. **Claims discipline:**
   - Remove "тысячи юристов" and the "33% more accurate than ChatGPT/Gemini" target unless a method and results are published. Publishing a benchmark would turn that claim into the strongest GEO asset the company could have.
   - Security wording must match the product. The backend calls external model and search APIs (Perplexity, Gemini, Tavily), with a PII scrubber in front (`backend/src/app/core/pii_scrubber.py`).
   - So the security page should list subprocessors, data residency and retention. Use "isolated contour" or "data never leaves your perimeter" only for the deployment option where that is literally true.

---

## 7. Keyword and topic strategy

### 7.1 Principles

- One primary intent per page per locale.
- Russian carries most commercial demand.
- Kazakh pages target Kazakh document work, court practice and law texts.
- English targets international firms, AIFC participants and investors. Prompts to AI engines are often in English even when the subject is Kazakh law.
- Translate the intent, not the words. Native writers should localize headings with the phrasing in the table below.

### 7.2 Page-to-keyword map

Module subpages under `/platform/*` are recommended once each module has enough unique content: Assistant, Vault, Tabular Review, Drafting and Compare, Workflows, Litigation.

| Page | EN | RU | KK |
|---|---|---|---|
| Home `/` | legal AI platform Kazakhstan; AI legal assistant Kazakhstan; Harvey AI alternative Kazakhstan | ии для юристов рк; ии юрист казахстан; нейросеть для юристов; юридический ии казахстан | заңгерлерге арналған жасанды интеллект; ЖИ заң көмекшісі; Қазақстан заңнамасы бойынша ЖИ |
| Platform / features | AI contract review; contract analysis AI; legal research AI Kazakhstan law; AI due diligence document review; compare contract versions | проверка договора ии; нейросеть для проверки договоров; анализ договора нейросетью; нейросеть для составления договоров; сравнение двух договоров онлайн; поиск судебной практики рк | келісім шартты тексеру; құжаттарды талдау; келісім шарт жасау; сот практикасы; құжаттарды салыстыру |
| Security | legal AI data security; confidential AI for law firms; personal data protection Kazakhstan AI | безопасность ии для юристов; конфиденциальность данных ии; адвокатская тайна и ии; персональные данные рк | дербес деректерді қорғау; адвокаттық құпия; деректер қауіпсіздігі |
| Use cases | AI for in-house legal teams; AI for law firms Kazakhstan; due diligence Kazakhstan; legal operations automation | ии для юридического отдела; ии для юридической фирмы; автоматизация юридического отдела; due diligence казахстан | заң бөліміне арналған ЖИ; заң фирмасына арналған ЖИ; заң қызметін автоматтандыру |
| How it works | how legal AI works; RAG for legal research; citation verification | как работает ии юрист; ии со ссылками на законодательство рк | ЖИ қалай жұмыс істейді; нормативтік құқықтық актілерге сілтеме |
| FAQ | is legal AI accurate; can AI replace lawyers; ChatGPT for Kazakhstan law | можно ли доверять ии юристу; chatgpt для юристов; ии заменит юристов | ЖИ заңгерді алмастыра ма; ЖИ жауабына сенуге бола ма |
| About | AdiletAI company; legal tech startup Kazakhstan | AdiletAI компания; legaltech стартап казахстан | AdiletAI компаниясы; қазақстандық легалтех |
| Contact / demo | AdiletAI demo; legal AI pricing Kazakhstan | AdiletAI демо; ии для юристов цена | AdiletAI демо; бағасы |
| Blog hub | Kazakhstan legal AI insights | ии в юриспруденции казахстан | заң саласындағы жасанды интеллект |
| **Tools (new)** | Kazakhstan court fee calculator; limitation period Kazakhstan | калькулятор госпошлины в суд рк; госпошлина в суд рк 2026; калькулятор исковой давности; исковая давность рк; процессуальные сроки гпк рк | сотқа мемлекеттік баж; мемлекеттік баж калькуляторы; талап қою мерзімі |
| **AI-law hub (new)** | Kazakhstan AI law; Law on Artificial Intelligence Kazakhstan 230-VIII | закон об искусственном интеллекте рк; закон рк 230-viii | жасанды интеллект туралы заң; жасанды интеллект туралы ҚР заңы |

### 7.3 Free tools: the growth engine

- **Reuse the existing logic.** `adilet-b2b/backend/src/app/services/litigation_calculators_service.py` already has deterministic `calculate_state_fee`, `calculate_limitation` and `calculate_procedural_deadlines`. Port them to client-side TypeScript.
- **Pages:** `/tools/court-fee-calculator`, `/tools/limitation-period-calculator`, `/tools/procedural-deadlines`, each in three locales.
- **Each page includes:**
  - The calculator, with the legal basis table (Tax Code / Civil Code / Civil Procedure Code articles with links).
  - The current MRP value and "valid as of" date.
  - The reviewer, the disclaimer, and a CTA to the platform.
- **Why tools work:** the queries have clear demand, and tools earn links and AI citations.

### 7.4 Blog topics with high GEO potential

Each post is lawyer-reviewed, answer-first, with tables, statistics and primary-law links.

1. **Kazakhstan's Law on Artificial Intelligence (No. 230-VIII): what law firms and in-house teams must do.** Covers risk classes, the user-disclosure duty, synthetic-content labeling and the new administrative fine article 641-1, with a checklist. Demand exists in all three languages, Kazakh sources are scarce, and Big-4 alerts are the competition.
2. **General chatbots vs specialized legal AI on Kazakhstan law: an open benchmark.** Original statistics with the method published. This is the single best citation magnet.
3. **Limitation periods in Kazakhstan (исковая давность / талап қою мерзімі):** a table of general and special periods by Civil Code article, linked to the calculator.
4. **Court state fee in Kazakhstan, 2026:** rates by claim type and party in MRP, with worked examples, linked to the calculator.
5. **Procedural deadlines under the Civil Procedure Code:** a table plus the calculator.
6. **How to review a supply contract under Kazakh law:** 15 risk clauses (ties to "договор поставки рк").
7. **Employment contracts in Kazakhstan:** mandatory terms under the Labour Code, and bilingual Kazakh/Russian contract practice (ties to "трудовой договор рк образец на казахском и русском").
8. **Bilingual contracts (Kazakh/Russian):** which text prevails, Language Law requirements and drafting tips. This is unique to Kazakhstan and serves the Kazakh audience.
9. **Personal data, attorney secrecy and AI in a law firm:** Kazakhstan's personal data rules and what to ask an AI vendor. This supports the Security page.
10. **AIFC law vs Kazakh civil law for contract work:** in English, for the international audience ("aifc contract law").
11. **Legal AI glossary:** RAG, citation verification, hallucination, tabular review. Definitional content for LLM queries.
12. **"Harvey AI alternatives for Central Asia":** an honest comparison page, with criteria for local law, languages and data residency.

---

## 8. Implementation checklist for this stack

### 8.1 Versions

**Stay on `@nuxtjs/seo` 3.4.x for the rebuild.** It bundles:

| Module | Version |
|---|---|
| robots | 5.7 |
| sitemap | 7.6 |
| og-image | 5.1.13 |
| schema-org | 5.0.10 |
| seo-utils | 7.0.19 |
| link-checker | 4.3.9 |

Its sitemap module accepts `@nuxtjs/i18n` ≥ 8, so add **`@nuxtjs/i18n@10`** (latest 10.6.0).

Upgrade to `@nuxtjs/seo` 5.x (latest 5.3.16) later, as a separate PR. The breaking changes are:
- `site.name` must be set explicitly.
- og-image v6 unbundles its renderers, so you must install `satori` + `@resvg/resvg-js` or `@takumi-rs/core` yourself. Run `npx nuxt-og-image migrate v6`.
- i18n ≥ 10 is required.
- Sitemap options can now be set in `definePageMeta`.

### 8.2 `nuxt.config.ts` sketch

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/seo', '@nuxt/fonts', '@nuxt/image', '@nuxt/eslint'], // nuxt-booster removed
  site: {
    url: 'https://adiletai.com', // must equal the Vercel primary domain
    name: 'AdiletAI',            // short: the title template appends it
  },
  i18n: {
    baseUrl: 'https://adiletai.com',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: false, // banner instead of redirects
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', language: 'ru-KZ', name: 'Русский', file: 'ru.json' },
      { code: 'kk', language: 'kk-KZ', name: 'Қазақша', file: 'kk.json' },
    ],
  },
  fonts: { defaults: { weights: [400, 600, 700] } }, // keep default subsets: they include cyrillic-ext (Kazakh)
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'AdiletAI',
      logo: '/logo.png',
      sameAs: [/* real third-party profiles only */],
    },
  },
  ogImage: { enabled: false },   // static per-locale images in /public/og/
  sitemap: { /* i18n handled automatically; drop strictNuxtContentPaths */ },
  nitro: { prerender: { crawlLinks: true, routes: ['/', '/ru', '/kk'] } },
})
```

Per-locale site name and description go in each locale file as `{ "nuxtSiteConfig": { "name": "AdiletAI", "description": "…" } }`; Site Config picks them up automatically.

### 8.3 `app.vue` head (one place for all locale SEO)

```ts
const { locale, t } = useI18n()
const head = useLocaleHead() // lang, hreflang + x-default, og:locale(+alternates), canonical
useHead(() => ({ htmlAttrs: head.value.htmlAttrs, link: head.value.link, meta: head.value.meta }))
useSeoMeta({
  ogImage: () => `https://adiletai.com/og/${locale.value}.png`,
  ogImageWidth: 1200, ogImageHeight: 630,
  ogImageAlt: () => t('seo.ogAlt'),
  twitterCard: 'summary_large_image',
})
```

Each page then only calls `useSeoMeta({ title: t('seo.x.title'), description: t('seo.x.description') })`. Keep titles to 60 characters or fewer and descriptions to about 150–160. Remove per-page canonical, `lang`, `ogUrl` and `keywords`. Check that the SSR HTML contains exactly one canonical, because nuxt-seo-utils emits canonicals as well.

### 8.4 OG images on Vercel

- **What `nuxt-og-image` v5 needs:** Satori with `@resvg/resvg-js`, both bundled, with a Wasm fallback.
  - It runs on Vercel serverless and on Edge (Wasm).
  - The browser (Playwright) renderer is **not** available on Vercel.
  - The bundled Inter 400/700 covers Russian and all Kazakh letters; I checked the font's character map.
  - Other fonts are downloaded from Google Fonts at build time.
  - Runtime rendering means a function invocation and cold start on the first request per image. Per the module docs, the default Nitro output is 1.6 MB, against 306 KB with `zeroRuntime`.
- **Safer choice now:** three static 1200×630 PNGs (`/public/og/en.png`, `ru.png`, `kk.png`) designed in Figma, set once in `app.vue` as shown, with the module disabled. This carries no runtime risk.
- **Later option, per-page cards:** prerender every route and set `ogImage: { zeroRuntime: true }` with one `components/OgImage/*.vue` template. Images are generated at build time with no server code. Pages that are not prerendered get no `og:image`, so keep the static fallback.

### 8.5 Other modules

- **link-checker:** run it in CI with `linkChecker: { failOnError: true }`. It would have caught the `/contact` 404, the dead `docs.` link and any missing `/kk` pages.
- **Debug endpoints:** `/__sitemap__/debug.json` and `/__robots__/debug.json`. Also validate with the Rich Results Test and validator.schema.org.

---

## 9. Prioritized checklist

### P0: launch blockers (ship with the i18n PR)

1. In Vercel, make `adiletai.com` the primary domain and redirect `www` to it with a 308. Confirm that `curl -I https://adiletai.com/about` returns 200.
2. Add `@nuxtjs/i18n@10` with `prefix_except_default` and the `en-US` / `ru-KZ` / `kk-KZ` locales. Add `useLocaleHead()` in `app.vue`.
3. Remove every hardcoded canonical, `htmlAttrs.lang`, `ogUrl`, `keywords` and `dateModified: new Date()`. Set `site.name: 'AdiletAI'`.
4. Header language dropdown built from crawlable `<a>` links to the equivalent page; a suggestion banner instead of redirects.
5. Complete, natively reviewed RU and KK translations of every page, including `/legal/*`. Never mix languages on one URL.
6. Fix the broken links: create `/contact` and remove or replace `docs.adiletai.com`.
7. Static OG images per locale, and disable the og-image module.
8. Fonts: remove both CSS `@import`s and Product Sans; one family through `@nuxt/fonts` with ≤3 weights and default subsets (keeps `cyrillic-ext`).
9. robots.txt: delete `public/_robots.txt`, keep the single allow-all group and sitemap line, and check the Vercel Firewall for AI-bot blocks.
10. Structured data: Organization with real `sameAs`, legal name and BIN; `BusinessApplication`; locale `inLanguage`; real dates.
11. Make the positioning consistent: rewrite `/features`, the blog layout CTA and the blog posts to the B2B product. Remove unverifiable claims.
12. Prerender all marketing routes, then run a Lighthouse pass with mobile LCP ≤ 2.5 s and CLS ≤ 0.1.

### P1: first 2–4 weeks after launch

13. Search Console, Bing Webmaster Tools and Yandex Webmaster: verify ownership, submit the sitemap index and inspect one URL per locale.
14. 301-redirect Russian-only blog URLs to `/ru/blog/...`, and consolidate the three thin posts into one strong Russian article.
15. Add the definitional sentence and the disambiguation line to the home, About and FAQ pages in all locales, and reuse them on LinkedIn and directories.
16. Author and reviewer Person pages, an editorial policy, and BlogPosting markup with `reviewedBy`.
17. Remove `nuxt-booster` and lazy-load GSAP.
18. Set up the AI-referral tracking view and the monthly prompt panel.
19. Profiles on LinkedIn, Crunchbase, G2, Capterra, Product Hunt, 2GIS, Yandex Business and Google Business Profile, all with identical naming and description.
20. Run link-checker in CI.

### P2: this quarter

21. The three free calculators (court fee, limitation period, procedural deadlines) in EN, RU and KK, reviewed by a lawyer.
22. The AI-law hub (topic 1) and the open benchmark (topic 2), with outreach to Kazakh press.
23. Blog topics 3–12 at a pace of about 2 per month. Each one natively written, not machine-translated.
24. IndexNow ping on deploy for Bing and Yandex.
25. An `llms.txt` with a named owner (optional).
26. Upgrade to `@nuxtjs/seo` 5.x. Optionally move to per-page OG cards with `zeroRuntime`.
27. A Wikidata item once at least two independent press sources exist.

---

## Sources

**Search market and language**
- StatCounter, search engine market share, Kazakhstan: https://gs.statcounter.com/search-engine-market-share/all/kazakhstan ; hosts: https://gs.statcounter.com/search-engine-host-market-share/all/kazakhstan
- Forbes.kz, Yandex Kazakhstan search statistics (Kazakh-language query share): https://forbes.kz/articles/yandeks_kazahstan_predstavil_statistiku_ispolzovaniya_poiska_i_drugih_servisov_v_rk
- Hronika.kz, Latin script timeline (Sept 2026): https://hronika.kz/?p=18619

**Google**
- AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Optimizing for generative AI search: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Top ways to perform well in AI experiences (May 2025): https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search
- 2026 Marketer's Guide to SEO in AI Search (PDF): https://services.google.com/fh/files/misc/2026_seo_in_ai_search_guide_for_marketers.pdf
- Localized versions / hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- FAQPage status: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Software App structured data: https://developers.google.com/search/docs/appearance/structured-data/software-app
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article
- Search gallery: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- Spam policies (scaled content abuse): https://developers.google.com/search/docs/essentials/spam-policies
- Common crawlers (Google-Extended): https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- Simplifying search results (June 2025): https://developers.google.com/search/blog/2025/06/simplifying-search-results
- Core Web Vitals: https://web.dev/articles/vitals
- Lighthouse llms.txt audit: https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt

**Yandex**
- Localized pages: https://yandex.com/support/webmaster/en/yandex-indexing/locale-pages
- Yandex robots: https://yandex.ru/support/webmaster/ru/robot-workings/check-yandex-robots
- Search with Alice: https://yandex.ru/support/webmaster/en/alice
- IndexNow: https://yandex.com/support/webmaster/en/indexing-options/index-now

**AI crawlers and engines**
- OpenAI crawlers: https://developers.openai.com/api/docs/bots ; Publishers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Anthropic crawlers: https://support.claude.com/en/articles/8896518
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md
- Apple Applebot: https://support.apple.com/en-us/119829
- Claude web search via Brave: https://simonwillison.net/2025/Mar/21/anthropic-used-brave ; https://techcrunch.com/2025/03/21/anthropic-appears-to-be-using-brave-to-power-web-searches-for-its-claude-chatbot/
- ChatGPT index study (Peec): https://docs.peec.ai/research/chatgpt-own-search-index-labrador
- Bing AI Performance report (secondary): https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/

**GEO research**
- Aggarwal et al., GEO (KDD 2024): https://arxiv.org/abs/2311.09735 ; full text: https://arxiv.org/html/2311.09735v3
- Ahrefs, AI Overview brand visibility factors (75k brands): https://ahrefs.com/blog/ai-overview-brand-correlation/
- Ahrefs llms.txt log study: https://ahrefs.com/blog/llmstxt-study/ ; SE Ranking: https://seranking.com/blog/llms-txt/ ; summary: https://agentexperience.tech/insights/state-of-llms-txt/
- llms.txt spec: https://llmstxt.org/
- Cross-engine citation differences (vendor, directional): https://quickseo.ai/blog/ai-citation-patterns-chatgpt-claude-gemini-perplexity
- GA4 AI-referral tracking (secondary): https://www.semrush.com/blog/ai-referral-traffic/
- Search Console AI reporting (secondary): https://www.cmswire.com/digital-experience/google-adds-ai-visibility-reports-to-search-console/

**Legal and E-E-A-T context**
- Kazakhstan Law on AI No. 230-VIII: https://bes.media/news/zakon-ob-iskusstvennom-intellekte-nachal-deystvovat-v-kazahstane/ ; EY alert: https://www.ey.com/ru_kz/technical/tax-alerts/2025/12/law-on-artificial-intelligence-kazakhstan ; labeling: https://inbusiness.kz/ru/last/v-rk-vveli-pravila-markirovki-rezultatov-ii
- YMYL legal context (secondary): https://ipullrank.com/eeat-ymyl-ai-search ; https://betterinternet.law.stanford.edu/2022/11/04/legal-help-searches-in-the-your-money-or-your-life-ymyl-framework

**Nuxt stack** (Context7 `/websites/nuxtseo`, `/websites/i18n_nuxtjs`, and the docs below)
- Site Config i18n: https://nuxtseo.com/docs/site-config/guides/i18n
- Nuxt SEO i18n guide: https://nuxtseo.com/docs/nuxt-seo/guides/i18n
- Sitemap i18n: https://nuxtseo.com/docs/sitemap/guides/i18n
- OG Image renderers: https://nuxtseo.com/docs/og-image/renderers ; zero runtime: https://nuxtseo.com/docs/og-image/guides/zero-runtime ; fonts: https://nuxtseo.com/docs/og-image/guides/custom-fonts
- Migration guides: https://nuxtseo.com/docs/nuxt-seo/migration-guide/v3-to-v4 ; https://nuxtseo.com/docs/nuxt-seo/migration-guide/v4-to-v5
- Nuxt i18n SEO: https://i18n.nuxtjs.org/docs/guide/seo ; browser language detection: https://i18n.nuxtjs.org/docs/guide/browser-language-detection

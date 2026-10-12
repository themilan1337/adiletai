# AdiletAI landing: EN / RU / KK glossary and style guide

**Revision 2 (12 October 2026).** Aligned with `claims.md` revision 2: OCR is "tuned for Kazakh and Russian"; name masking is best-effort and the unmasked exceptions are spelled out; 'session tokens' became 'access tokens'; official sources are "prioritised", never "searched first"; tax-mode answers default to Russian; Vault e-mails are "Outlook e-mails (.msg)". The open terminology questions from the run-1 and run-2 QA notes are settled here (section 1 rows marked **rev 2**, rules in section 2).

Owner: terminology lead. Status: authoritative for every writer on the landing (all namespaces, blog, legal pages, mockup captions).
Precedence: `claims.md` (what may be said) > this file (how to say it in each language) > anything else.
If a term you need is missing, use the closest row and the style rules below, and flag it in your summary so it can be added.

Kazakh terms were checked against the Kazakh texts of RK legislation (Civil Procedure Code No. 377-V, Law "Дербес деректер және оларды қорғау туралы" No. 94-V, the AIFC Constitutional Law) and official usage (egov.kz, adilet.zan.kz UI strings). Notes on the checks are in section 6.

---

## REV-2 CHECKLIST

Every page editor runs this over the files they own, replaces each hit with the new wording, and keeps every hedge. The canonical sentences are in section 3.3 (line numbers in the "New wording" column). Copy them from this file: they already contain the U+00A0 and U+2011 characters they need.

**How to run.** Run the `rg -P` patterns from section D over `i18n/locales/<locale>` and `app/components/content/**/<locale>.vue` (use ripgrep with PCRE2; some greps fail on long Cyrillic patterns).

Scope: EN = `i18n/locales/en` + `app/components/content/**/en.vue`; RU and KK the same with `ru` / `kk`. Mockup chrome in `app/components/mock/*` and other shared components is not in scope (it copies the Russian product UI).

### A. Claims fixes (mandatory; a hit is a claims risk)

| ID | Locale | Old wording (pattern) | New wording |
|---|---|---|---|
| C1 | EN | "OCR reads scans in Kazakh, Russian and English", "OCR reads scans in all three" | 3.3 #13 (Assistant) or #14 (Vault): "tuned for Kazakh and Russian". Keep "work with documents in Kazakh, Russian and English" where it is about answers or translation |
| C1 | RU | «…на казахском, русском и английском» after OCR / «распознавание», «на всех трёх языках» | «Встроенное распознавание текста (OCR) … настроено на казахский и русский языки» (#13, #14) |
| C1 | KK | «OCR … ағылшын», «үш тілдегі скандар», «скандарға бейімделген» | «…қазақ және орыс тілдеріне бапталған» (#13, #14). «бапталған», not «бейімделген» |
| C2 | EN | "session tokens" | "access tokens" (#12). Full form where sign-in is explained in detail: "the browser holds only an encrypted, HttpOnly session cookie" |
| C2 | RU | «токены сессии», «сессионные токены» | «токены доступа» (#12) |
| C2 | KK | «сессия токендері», «қолжетімділік токендері» | «қол жеткізу токендері» (#12; why in 6.4) |
| C3 | EN | "…phone numbers, e-mails and personal names"; a bare "Personal names" chip | "…e‑mail addresses and, on a best-effort basis, personal names" (#7); chip "Personal names (best effort)" (#7d) |
| C3 | RU | «…e-mail и имена», «…адреса электронной почты и имена»; chip «Имена» | «…адреса электронной почты, а по возможности и имена» (#7); chip «Имена (по возможности)» |
| C3 | KK | «…мекенжайлары мен адам есімдері» (no hedge); chip «Адам есімдері» | «…мекенжайлары, сондай-ақ мүмкіндігінше адам есімдері» (#7); chip «Адам есімдері (мүмкіндігінше)» |
| C4 | all | Any pseudonymisation explanation (hits: "pseudonymis…", "not masked" / «псевдонимизир…», «не маскиру…» / «бүркемел…») | On security, privacy, disclaimer, FAQ data answers and the how-it-works FAQ: add the exceptions #7a (and the name caveat #7c). In mock footnotes and short scope notes: #7b. Old «Текст приложенных документов не маскируется» / "Attached document text is not masked." alone is no longer enough |
| C5 | EN | "searches official sources first", "official sources first:", "only official" | "prioritises official sources such as adilet.zan.kz…" (#4); court practice: "with official sources ranked first" (#19) is correct and stays |
| C5 | RU | «в первую очередь ищет в официальных источниках», «в первую очередь по официальным», «только … официальн» | «отдаёт приоритет официальным источникам, например…» (#4); court practice «отдавая приоритет официальным источникам» (#19) |
| C5 | KK | «алдымен ресми дереккөздерден іздейді», «(алдымен ресми …)», «тек ресми» | «ресми дереккөздерге басымдық береді» (#4); court practice «ресми дереккөздерге басымдық беріледі» (#19) |
| C6 | EN | "Contract scans, drafts and court practice analyses are produced in Russian by default" | add tax mode: "Contract scans, drafts, tax-mode answers and court practice analyses…" (#5) |
| C6 | RU | «Проверки договоров, проекты документов и анализ судебной практики по умолчанию…» | «Проверки договоров, проекты документов, ответы в режиме «Налоги» и анализ судебной практики по умолчанию готовятся на русском языке» (#5) |
| C6 | KK | «Шарттарды тексеру, құжат жобалары және сот практикасын талдау әдепкі бойынша…» | «…құжат жобалары, «Салық» режиміндегі жауаптар және сот практикасын талдау әдепкі бойынша орыс тілінде дайындалады» (#5) |
| C7 | EN | format lists with generic "e-mails" | "Outlook e‑mails (.msg)" (#15, #16). In chips that drop every extension, "Outlook e‑mails" alone is fine |
| C7 | RU | «письма», «e-mail», «электронные письма» in format lists | «письма Outlook (.msg)» |
| C7 | KK | «хаттар» in format lists | «Outlook хаттары (.msg)» |
| C8 | RU | «налоговый режим», «в налоговом режиме» (about the Assistant) | «режим «Налоги»», «в режиме «Налоги»» (#17). «специальный налоговый режим» as Tax Code content stays |
| C8 | KK | «салық режимі», «Қазақстан салық заңнамасына арналған режим» (about the Assistant) | ««Салық» режимі», ««Салық» режиміне ауысады» (#17) |
| C9 | KK | «ал мүмкін болса, редакция күнін де көрсетеді» / «…редакция күні де көрсетіледі» | «ал редакция күні бар болса, оны да көрсетеді» / «ал редакция күні бар болса, ол да көрсетіледі» (#2). A user's own prompt may keep «мүмкін болса» ("if possible") |
| C10 | RU | «псевдонимизируются до отправки модели ИИ» | «…до передачи сообщения модели ИИ» (#7) |
| C10 | KK | «қайта қалпына келтіріледі» | «қалпына келтіріледі» (#7) |

### B. Terminology fixes (mandatory; one wording site-wide)

| ID | Locale | Old wording (pattern) | New wording |
|---|---|---|---|
| T1 | all | Module-name capitalisation (review list, not replace-all) | Rule 2.1 "Module names". Module lists: RU «Ассистент, хранилища, таблицы…» → «Ассистент, Хранилище, таблицы анализа и анализ судебной практики»; KK «Ассистент, қоймалар…» → «Ассистент, Қойма, талдау кестелері және сот практикасын талдау» |
| T2 | RU | «уровень критичности», «ранжированные по критичности», «риски по критичности» | «степень критичности», «риски, ранжированные по степени критичности» |
| T2 | KK | «қауіптілік деңгейі», «…және деңгейі бойынша сұрыпталған тәуекелдер» | «маңыздылық деңгейі», «маңыздылық деңгейі бойынша сұрыпталған тәуекелдер» |
| T3 | RU | «специально подобранная база», «отобранная база» | «подобранная база кодексов и законов Казахстана» |
| T3 | KK | «арнайы іріктелген базасы» | «Қазақстан кодекстері мен заңдарының іріктелген базасы» |
| T4 | KK | «борышқор»; «пеня», «өсім» (not «өсімпұл»); «дәлел» for an argument | «борышкер»; «өсімпұл»; «уәж» («Бұл уәжге сүйенбес бұрын…»). Verbatim quotes of a statute keep the statute's own word |
| T5 | RU | «приложенных документов / файлов» in claims about AdiletAI | «прикреплённых документов / файлов». A user prompt in a mockup may say «приложенного договора» |
| T6 | RU | «Хранилище браузера», bare «хранилище» for localStorage | «локальное хранилище браузера (localStorage)» |
| T7 | RU | «материалами судов» (memo check) | «официальными текстами судебных актов» |
| T7 | KK | «сот материалдары немесе ресми мәтіндер» | «сот актілерінің және заңнаманың ресми мәтіндері» |
| T8 | RU | «Покупка компании»; «основания расторжения» where EN says "termination rights" | «Приобретение компании»; «право на расторжение» |

### C. Typography (mandatory in display headings; P1 everywhere visible)

| ID | Locale | Find | Do |
|---|---|---|---|
| P1 | EN, RU | "e-mail" with an ASCII hyphen in visible copy | Write «e‑mail» with U+2011 (non-breaking hyphen) so it never splits as "e-" / "mail". Not in `meta.*`, mailto subjects, URLs or JSON-LD. Inside `.vue` templates type the literal U+2011 character (as `legal/privacy/en.vue` already does) |
| P2 | RU | a one-letter word or a short preposition, conjunction or particle followed by a normal space inside `title` / `continuation` / `h1` / `heading` | Replace that space with U+00A0 (rule 2.4 "Display headings"). Skip `meta.title` |
| P3 | RU | «ИИ-» compounds inside display headings | «ИИ‑ассистент», «ИИ‑платформа» with U+2011 in headings only, so «ИИ-» never ends a line |
| P4 | KK | number + suffix hyphen in headings and short labels («500 МБ-қа», «15-бап», «7.2-тармақ») | U+2011 (non-breaking hyphen) instead of "-", as `kk/home.json` already does («500 МБ‑қа»), plus U+00A0 between a number and its unit |
| P5 | all | `node heading-stops.cjs` | Two-tone headings: the title ends with a full stop and the continuation does not; a title alone has none (rule 2.1). Today it flags only `security.principles` and `security.responsible` (continuations end with "." in all three locales) |

Verify the characters after editing: `rg -c '\x{00A0}' <file>` counts no-break spaces and `rg -n '\x{2011}' <file>` lists non-breaking hyphens. In JSON, write the literal characters, as the locale files already do. In `.vue` long-form bodies, keep using `&nbsp;` for U+00A0.

### D. The patterns, as used by the script

```text
C1  EN  OCR[^."]*(English|all three)
C1  RU  (OCR|[Рр]аспозна)[^."]*(английск|всех трёх|трёх язык)
C1  KK  (OCR|тану)[^."]*(ағылшын|үш тіл)|скандарға бейімделген
C2  EN  (?i)session tokens?
C2  RU  (?i)токен\w* сесси|сессионн\w* токен
C2  KK  (?i)сессия токен|қолжетімділік токен
C3  EN  (?i)e[-‑]?mails?(?: addresses)?,? and (?:personal )?names|"Personal names"
C3  RU  (?i)(e[-‑]mail|электронной почты),? и имена|"Имена"
C3  KK  (мекенжайлары|пошта) (мен|және) адам есімдері|"Адам есімдері"
C4  EN  (?i)not masked|pseudonymi[sz]
C4  RU  (?i)не маскиру|псевдонимизир
C4  KK  бүркемел
C5  EN  (?i)search(es|ing)? official sources first|official sources first[:,"]|only official|official sources only
C5  RU  (?i)в первую очередь[^."]{0,40}официальн|официальн[^."]{0,30}в первую очередь|только (в|по|на) официальн
C5  KK  алдымен[^."]{0,40}ресми|ресми[^."]{0,30}алдымен|тек ресми
C6  EN  (?i)scans, drafts and court[- ]practice analyses
C6  RU  проекты документов и анализ судебной практики по умолчанию
C6  KK  құжат жобалары және сот практикасын талдау әдепкі
C7  EN  (?i)PowerPoint[^"]{0,40}(?<!Outlook )\be-?mails\b
C7  RU  (?i)PowerPoint[^"]{0,40}(электронн\w+ письм|(?<!Outlook )e-?mail|письма(?! Outlook))
C7  KK  (?i)PowerPoint[^"]{0,40}(?<!Outlook )\bхаттар
C8  RU  налогов\w* режим
C8  KK  салық режим|салық заңнамасына арналған режим
C9  KK  мүмкін болса, редакция
C10 RU  до отправки модели ИИ
C10 KK  қайта қалпына келтір
T1  EN  \bthe assistant\b|[a-z,;:)]\s+Assistant\b
T1  RU  (^|[^-А-Яа-яЁё])ассистент|[а-яё,;:)»]\s+Ассистент|Ассистент, хранилища
T1  KK  (^|[^-\p{Cyrillic}])ассистент|[\p{Ll},;:)»]\s+Ассистент|Ассистент, қоймалар
T2  RU  уровень критичности|ранжированн\w* по критичности|риски по критичности
T2  KK  қауіптілік деңгей|және деңгейі бойынша
T3  RU  специально подобранн|отобранн
T3  KK  арнайы іріктелген
T4  KK  борышқор|пеня|өсім(?!пұл)|дәлелге сүйен|бұл дәлел
T5  RU  приложенн\w* (документ|файл)
T6  RU  (?<!локальное )[Хх]ранилищ\w* браузера
T7  RU  материал\w* судов
T7  KK  сот материалдары немесе ресми
T8  RU  Покупка компании|основания расторжения
P1  EN  (?i)\be-mails?\b
P1  RU  e-mail
P2  RU  (?i)"(title|continuation|h1|heading)": "[^"]*(?:^|[ «(„"])(?:[вксуоиая]|на|по|за|из|от|до|об|со|во|ко|не|ни|но|для|без|при|про|под|над) 
P3  RU  "(title|continuation|h1|heading)": "[^"]*ИИ-
P4  KK  "(title|continuation|h1|heading|label)": "[^"]*[0-9Б]-\p{Cyrillic}
```

Hit counts on 12 October 2026, before the page editors started: C1 EN 9 / RU 2 / KK 8; C2 EN 3 / KK 2; C3 EN 10 / RU 4 / KK 8; C5 EN 12 / RU 13 / KK 12; C6 EN 8 / RU 7 / KK 8; C8 RU 7 / KK 6; C9 KK 10; C10 RU 9 / KK 8; P1 EN 30 / RU 10; P2 RU 119. T1 is a review list: most hits are correct as they stand.

### E. Kazakh line length

Measured in the site's display font (Source Serif 4) in a 358 px column, which is what a 390 px phone leaves: KK fits about 17 characters per line at display-1 (page H1, CTA band), 20 at display-2 (section H2) and 26 at display-3 (card H3). RU fits 18 / 20 / 27 and EN 20 / 23 / 30. Today KK display headings average 1.14 times the length of their EN source.

- Keep each KK heading within 1.25 times its EN length, and within these budgets: page H1 at most 60 characters (4 lines on a phone, 3 at 1440, where PageHero caps KK at 24ch); section title plus continuation at most 90 characters (5 lines on a phone); card H3 at most 52 characters (2 lines); CTA band title at most 40 characters. Buttons stay at 22 characters or fewer and nav labels at 15 or fewer. Meta titles stay within 60 characters and meta descriptions within 160.
- No word longer than 16 characters in a display-1 or display-2 heading. The site hyphenates only Russian (`main.css`), so a longer Kazakh word gets split mid-word by `overflow-wrap`. Today's longest heading words are 16 characters («Жауапкершіліктен», «платформасындағы»).
- Shorten wording; never make the type smaller. In headings use «ЖИ» and «ҚР» or «Қазақстан» instead of «Қазақстан Республикасының»; avoid stacked possessive and locative suffix chains («-ыңыздағы»); use a finite verb instead of a chain of «-ған/-ген» participles; drop «AdiletAI платформасы» where the page context already names the product.
- Put U+00A0 before « — » and U+2011 in number-suffix hyphens (P4), so a dash or a suffix never starts a line.

---

## 0. Decisions at a glance

| Topic | EN | RU | KK |
|---|---|---|---|
| "AI" in running text | AI | **ИИ** (`ИИ-платформа`, `модель ИИ`). You may spell out «искусственный интеллект (ИИ)» once per page. Latin "AI" only inside a quoted search query (2.1) | **ЖИ** (`ЖИ платформасы`, `ЖИ моделі`). You may spell out «жасанды интеллект (ЖИ)» once per page. Never "AI" or "ИИ" in Kazakh text |
| Brand | **AdiletAI**: one word, Latin script, "AI" in capitals. Never "Adilet AI", "Adilet.ai", "АдилетАИ", "Әділет AI" | Not declined: «в AdiletAI», «с AdiletAI», «команда AdiletAI» | Avoid case endings: write «AdiletAI платформасы», «AdiletAI командасы». If you cannot avoid an ending, use a hyphen and back-vowel endings: AdiletAI-дың, AdiletAI-ға, AdiletAI-да, AdiletAI-ды |
| Address | you (direct, second person) | **вы** (lower case in web copy) | **сіз** with polite verb forms (`-ыңыз/-іңіз`, `жазылыңыз`), lower case mid-sentence |
| Buttons | Imperative, sentence case: "Book a demo" | Infinitive: «Записаться на демо», «Связаться с нами» | Verbal noun: «Демоға жазылу», «Бізбен байланысу» |
| CTA in body text | "Book a demo to see…" | Imperative: «Запишитесь на демо…» | Polite imperative: «Демоға жазылыңыз…» |
| Headings | Sentence case, no final full stop. **rev 2:** in a two-tone heading the title ends with a full stop and the continuation does not (2.1) | Same | Same |
| Quotes | “…” (‘…’ inside) | «…» („…“ inside) | «…» („…“ inside) |
| Dates | 12 October 2026 | 12 октября 2026 г. | 2026 жылғы 12 қазан |
| Module names in text | **rev 2:** "Assistant" and "Vault" capitalised when they name the module; "the assistant" (the AI acting) and "a vault" (one workspace) lower case; "review tables" and "court practice analysis" always lower case (2.1) | Same rule: «Ассистент» / «ассистент», «Хранилище» / «хранилище»; «таблицы анализа», «анализ судебной практики» lower case | Same rule: «Ассистент» / «ассистент», «Қойма» / «қойма»; «талдау кестелері», «сот практикасын талдау» lower case. UI label in parentheses on the first mention |
| Mockup UI chrome | Stays Russian, `lang="ru"` (claims.md "Mockup content rule"; this overrides design-direction.md 7.13) | Same | Same |
| Special characters | — | U+00A0 before « — », after short words in display headings, between a number and its unit; U+2011 in «e‑mail» and in «ИИ‑» inside headings | U+00A0 before « — » and between a number and its unit; U+2011 in number-suffix hyphens («500 МБ‑қа», «15‑бап») in headings and labels |

---

## 1. Terminology table

Notes column: **UI** = the exact Russian label in the product (use it only inside mockups, or in parentheses on a first mention). **Avoid** = wording that is wrong or creates a claims risk. Where a row holds several terms separated by " / ", they correspond in order across the columns. **rev 2** marks a row that is new or changed in this revision.

### 1.1 Brand, positioning, commercial model

| EN | RU | KK | Notes |
|---|---|---|---|
| AdiletAI | AdiletAI | AdiletAI | Never translated or transliterated. See section 0 for case endings |
| AI (artificial intelligence) / AI model | ИИ (искусственный интеллект) / модель ИИ | ЖИ (жасанды интеллект) / ЖИ моделі | RU compounds take a hyphen (ИИ-платформа, ИИ-ассистент); KK compounds do not (ЖИ платформасы). Avoid «нейросеть» in marketing copy |
| legal AI platform / platform | ИИ-платформа для юристов («юридическая ИИ-платформа» in titles and meta) / платформа | заңгерлерге арналған ЖИ платформасы / платформа | Call the product «платформа», not «система» or «сервис». Avoid stacking «юридическая… юридических… юридических» in one sentence |
| legal AI assistant (generic, SEO) **rev 2** | юридический ИИ-помощник / ИИ-ассистент для юриста | ЖИ заң көмекшісі / заңгерге арналған ЖИ көмекшісі | Each pair maps to one blog post's target keyword (`yuridicheskiy-ii-pomoshnik` / `ii-assistent-dlya-yurista`). Generic short form «ИИ-ассистент» / «ЖИ көмекшісі». Never a name for AdiletAI's module, which is «Ассистент» |
| in-house legal team / in-house lawyer | юридический департамент (компании) / корпоративный юрист | компанияның заң департаменті / корпоративтік заңгер | RU variant: «юридическая служба». Add «компании» / «компанияның» when the context does not make "in-house" clear. Avoid «инхаус» |
| law firm | юридическая фирма | заң фирмасы | Not «юрфирма». Use «заң кеңсесі» only for a small practice |
| compliance team / tax team | служба комплаенса / налоговый отдел | комплаенс қызметі / салық бөлімі | RU: not «налоговая служба», which reads as the state tax authority |
| Book a demo / Sign in | Записаться на демо / Войти | Демоға жазылу / Кіру | Primary CTA (CALENDLY_URL), at most 22 characters in any locale. Sign in (APP_URL) is for existing customers |
| invitation-only access / assisted onboarding | доступ по приглашению / подключение с сопровождением | шақыру арқылы кіру / сүйемелдеумен қосу | The practice profile is "set up during onboarding": «настраивается при подключении» / «қосылу кезінде бапталады». Avoid any sign-up or "free" wording (2.2) |
| we set up access **rev 2** | откроем доступ | кіру мүмкіндігін береміз | After a demo: "we set up access for your team" = «откроем доступ вашей команде» / «командаңызға кіру мүмкіндігін береміз». Do not repeat «доступ» twice in one sentence |
| credits / plan | кредиты / тариф | кредиттер / тариф | Never amounts, prices or "unlimited". "Plans are arranged with our team" is line 10 in 3.3 |

### 1.2 Assistant (UI «Ассистент»)

| EN | RU | KK | Notes |
|---|---|---|---|
| Assistant (module) / the assistant (the AI acting) / chat **rev 2** | Ассистент / ассистент / чат | Ассистент / ассистент / чат | Capital letter only when the word names the module; lower case when the assistant is the one acting. Rule and examples in 2.1. Generic: «ИИ-ассистент» / «ЖИ көмекшісі» |
| legal research / legal question | правовое исследование / правовой вопрос | құқықтық зерттеу / құқықтық сұрақ | For the action: «поиск по законодательству» / «заңнама бойынша іздеу» |
| answer with citations / citation / numbered citation [1] | ответ со ссылками на источники / ссылка / номер ссылки | дереккөздерге сілтеме жасалған жауап / сілтеме / сілтеме нөмірі | Avoid «цитирование» in running text (it is only the UI eyebrow «ЦИТИРОВАНИЕ»). Never say each number links to the exact passage |
| Sources panel / source | панель «Источники» / источник | «Дереккөздер» панелі / дереккөз | UI «Источники · 3», sections «Документы / База знаний / Веб» |
| official sources **rev 2** | официальные источники | ресми дереккөздер | Assistant: "prioritises official sources such as…" = «отдаёт приоритет официальным источникам, например…» / «…сияқты ресми дереккөздерге басымдық береді». Court practice: "official sources ranked first" = «отдавая приоритет официальным источникам» / «ресми дереккөздерге басымдық беріледі». **Avoid** "searches official sources first", "only": «в первую очередь ищет», «только», «алдымен іздейді», «тек». Other sites can appear (line 4a) |
| web search **rev 2** | поиск в интернете | интернеттен іздеу | Not «веб-поиск» in running text (the UI group «Веб» stays in mockups) |
| legislation database / curated database of codes and laws / knowledge base **rev 2** | база законодательства / подобранная база кодексов и законов Казахстана / база знаний | заңнама базасы / Қазақстан кодекстері мен заңдарының іріктелген базасы / білім базасы | "Curated" = «подобранная» / «іріктелген». **Avoid** «специально подобранная», «отобранная», «курируемая», «выверенная», «проверенная», «арнайы іріктелген». The database is Russian-language. Avoid «вся база законодательства», «все законы» / «барлық заңнама» |
| progress panel | панель «Ход выполнения» | «Орындалу барысы» панелі | UI «Ход выполнения»; «В работе…» while streaming |
| mode badge; modes: general question / tax / contract analysis / drafting / translation | метка режима; общий вопрос / налоги / анализ договора / подготовка документа / перевод | режим белгісі; жалпы сұрақ / салық / шартты талдау / құжат жобасын дайындау / аударма | UI «Режим: Анализ», «Режим: Налоги», «Режим: Перевод», «Режим: Конструктор». Never present "TaxAI" as a product |
| tax mode **rev 2** | режим «Налоги» | «Салық» режимі | Matches the UI badge «Режим: Налоги». **Avoid** RU «налоговый режим» and KK unquoted «салық режимі»: both are the statutory term for a tax regime («специальный налоговый режим» / «арнаулы салық режимі»). EN "tax mode" or "Kazakhstan tax mode". Tax-mode answers default to Russian (line 5) |
| clarifying questions | уточняющие вопросы | нақтылау сұрақтары | UI «Уточняющие вопросы» |
| attach files / attachment / attached documents **rev 2** | прикрепить файлы / вложение / прикреплённые документы | файл тіркеу / тіркеме / чатқа тіркелген құжаттар | Up to 100 files per chat (line 15). RU: «прикреплённые», not «приложенные», in claims about AdiletAI. KK: add «чатқа» where «тіркелген құжат» could read as "registered document" |
| OCR / scanned document **rev 2** | распознавание текста (OCR) / отсканированный документ, скан | мәтінді тану (OCR) / сканерленген құжат, скан | "Tuned for Kazakh and Russian" = «настроено на казахский и русский языки» / «қазақ және орыс тілдеріне бапталған» (lines 13, 14). **Banned:** OCR "in English", any three-language OCR list, «үш тілдегі скандар». Built-in = «встроенное» / «кірістірілген». Order is Kazakh first (1.8), which is the same claim as claims.md's "Russian and Kazakh" |
| Note for the reviewing lawyer | примечание для проверяющего юриста | тексеретін заңгерге арналған ескертпе | UI «Примечание для проверяющего юриста». It is not on every answer |
| is instructed to **rev 2** | должен | …тиіс / …нұсқауы берілген | Keeps the hedge: an instruction to the model, not a guarantee. Lines 3 and 18. Do not strengthen to «гарантированно», «всегда» / «әрдайым» |
| contract risk scan / risk report | проверка договора на риски / отчёт о рисках | шартты тәуекел тұрғысынан тексеру / тәуекелдер туралы есеп | UI «Сканирование договора на риски», card title «Результат сканирования». Avoid «скоринг» |
| risk score | оценка риска (Risk Score) | тәуекел бағасы (Risk Score) | The UI shows «Risk Score 72/100» in Latin script; keep the Latin label in parentheses |
| deal-breaker | стоп-фактор | стоп-фактор | UI «Стоп-факторы». KK gloss on the first mention: «қол қоюға кедергі болатын талап» |
| risk; severity; levels critical / high / medium / low **rev 2** | риск; степень критичности; критичный / высокий / средний / низкий | тәуекел; маңыздылық деңгейі; критикалық / жоғары / орташа / төмен | "Risks ranked by severity" = «риски, ранжированные по степени критичности» / «маңыздылық деңгейі бойынша сұрыпталған тәуекелдер». **Avoid** «уровень критичности», «по критичности» / «қауіптілік деңгейі». UI «Критично / Высокий / Средний / Низкий» |
| recommendation / quote from the contract | рекомендация / цитата из договора | ұсыным / шарттан үзінді | |
| suggested redline | предлагаемая правка | ұсынылатын түзету | UI «Предлагаемая правка». Avoid «редлайн». Not on every risk: say "where it proposes them" |
| fallback position / counterparty | запасная позиция / контрагент | резервтік ұстаным / контрагент | UI «Если контрагент не согласится» |
| strengths / missing terms | сильные стороны / чего не хватает | күшті жақтары / жетіспейтін талаптар | UI «Сильные стороны», «Не хватает» |
| practice profile (team playbook) | профиль практики | практика профилі | UI «Настроить профиль практики»; badge «Проверено по playbook команды». Applies to the Assistant and the contract scan only |
| positions on key terms / escalation rules / house style | позиции по ключевым условиям / правила эскалации / стиль документов команды | негізгі талаптар бойынша ұстанымдар / эскалация ережелері / команданың құжат стилі | The contents of a practice profile |
| drafting (beta) / first draft / draft panel | подготовка проектов документов (бета) / первый вариант документа / панель с проектом документа | құжат жобаларын дайындау (бета) / құжаттың алғашқы жобасы / құжат жобасының панелі | UI «Черновик документа». No export and no saved drafts |
| translation / requisites | перевод / реквизиты | аударма / деректемелер | Translation "keeps structure, requisites and amounts intact" |

### 1.3 Vault and Review tables

| EN | RU | KK | Notes |
|---|---|---|---|
| Vault (module) / a vault, vaults (workspaces) **rev 2** | Хранилище / хранилище, хранилища | Қойма / қойма, қоймалар | UI «Хранилище». KK on the first mention: «Қойма (қосымшада — «Хранилище»)». Capital only for the module (2.1). Generic: «хранилище документов» / «құжат қоймасы» |
| private document workspace | закрытое рабочее пространство для документов | құжаттарға арналған жабық жұмыс кеңістігі | "One per deal, client or matter": «по одному на сделку, клиента или дело» / «әр мәмілеге, клиентке немесе іске бөлек» |
| nested folders / bulk upload / preview | вложенные папки / массовая загрузка / предпросмотр | ішкі қалталар / топтап жүктеу / алдын ала қарау | |
| supported formats **rev 2** | PDF, Word (.docx), Excel, PowerPoint (.pptx), письма Outlook (.msg), изображения и сканы | PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook хаттары (.msg), суреттер мен скандар | EN "Outlook e‑mails (.msg)". Never generic "e-mails" / «письма» / «хаттар»: .eml is not decoded. Vault: up to 500 MB per file (line 16) |
| search by meaning / passage | поиск по смыслу / фрагмент | мағына бойынша іздеу / үзінді | UI «Семантический поиск». It is not exhaustive |
| review table(s) | таблица анализа / таблицы анализа | талдау кестесі / талдау кестелері | Always lower case in running text, as in EN. UI «Таблицы анализа» only in quotes, parentheses or mockups |
| column (= question) / row (= document) / cell | столбец (вопрос) / строка (документ) / ячейка | баған (сұрақ) / жол (құжат) / ұяшық | |
| answer types: text / number / date / yes-no / currency / verbatim quote | текст / число / дата / да-нет / валюта / дословная цитата | мәтін / сан / күні / иә-жоқ / валюта / сөзбе‑сөз үзінді | UI «Текст / Число / Дата / Да/Нет / Валюта / Дословно» |
| typical columns: parties / contract value / term / governing law / termination rights **rev 2** | стороны / цена договора / срок / применимое право / право на расторжение | тараптар / шарттың бағасы / мерзімі / қолданылатын құқық / шартты бұзу құқығы | RU not «основания расторжения» where EN says "termination rights" |
| confidence score / re-run a cell | оценка уверенности / перезапустить ячейку | сенімділік бағасы / ұяшықты қайта іске қосу | Never present the confidence score as accuracy |
| export to Excel (XLSX), CSV, PDF, Word (DOCX), plain text | экспорт в Excel (XLSX), CSV, PDF, Word (DOCX), TXT | Excel (XLSX), CSV, PDF, Word (DOCX), TXT форматына экспорттау | KK puts the endings on «формат», not on Latin names |

### 1.4 Court practice analysis (UI sidebar «Аналитика»)

| EN | RU | KK | Notes |
|---|---|---|---|
| court practice analysis (module) | анализ судебной практики | сот практикасын талдау | Lower case in running text in all three languages. UI sidebar «Аналитика», modal «Новый анализ судебной практики». RU: avoid the plural «анализы» where a singular or «результаты анализа» works (it can read as medical tests) |
| dispute / dispute category | спор / категория спора | дау / дау санаты | |
| your side (plaintiff / defendant) | ваша сторона (истец / ответчик) | сіздің тарапыңыз (талап қоюшы / жауапкер) | Detected automatically |
| table of relevant decisions | таблица релевантных судебных решений | қатысты сот шешімдерінің кестесі | UI tab «Дела (N)». Fields appear only "where the source states them": «если они указаны в источнике» / «дереккөзде көрсетілсе» |
| public court and legal websites (official sources ranked first) **rev 2** | открытые судебные и правовые сайты (с приоритетом официальных источников) | ашық сот және құқықтық сайттар (ресми дереккөздерге басымдық беріледі) | Line 19. Avoid «база судебных актов», «все решения судов» / «барлық сот шешімдері» |
| court records **rev 2** | официальные тексты судебных актов | сот актілерінің ресми мәтіндері | Used only to say what the memo check does not do: "it does not check them against court records or official texts" = «…не сверяются с официальными текстами судебных актов и законодательства» / «…сот актілерінің және заңнаманың ресми мәтіндерімен салыстырылмайды». Avoid «материалы судов» / «сот материалдары» here |
| court's legal position / applied norms | правовая позиция суда / применённые нормы | соттың құқықтық ұстанымы / қолданылған нормалар | UI «Применённые нормы» |
| winning and losing patterns | факторы выигрыша и проигрыша | жеңіске және жеңіліске әкелген факторлар | UI «Паттерн победы / Паттерн поражения». Never with percentages |
| risk register / basis | реестр рисков / основание | тәуекелдер тізілімі / негіздеме | UI «Основание» |
| hypothesis (label) | гипотеза | гипотеза | UI chip «гипотеза». KK: not «болжам», which also means "forecast" |
| prioritised preparation checklist **rev 2** | план подготовки к делу с приоритетами | басымдықтары белгіленген іске дайындық жоспары | UI «Рекомендации к подготовке дела». KK: when the same sentence already has «белгіленеді» (e.g. «гипотеза» деп белгіленеді), write «басымдық бойынша реттелген іске дайындық жоспары» to avoid the repeat. No other variant |
| one-page summary for a partner | сводка на одну страницу для партнёра | серіктеске арналған бір беттік қысқаша шолу | Avoid «прогноз», «вероятность» / «болжам», «ықтималдық» |
| memorandum | меморандум | меморандум | "Auto-assembled, editable": «собирается автоматически, его можно редактировать» / «автоматты түрде құрастырылады, оны өңдеуге болады». Avoid "AI writes your memo" |
| citation check before export | сверка ссылок перед экспортом | экспорт алдында сілтемелерді салыстыру | It checks against the analysis's own source list. Avoid «проверенные ссылки» / «тексерілген сілтемелер» |
| runs in the background / record the outcome | работает в фоновом режиме / записать исход дела | фондық режимде жұмыс істейді / істің нәтижесін тіркеу | "You can close the tab": «вкладку можно закрыть» / «қойындыны жабуға болады». UI «Записать исход» |

### 1.5 Security and data handling

| EN | RU | KK | Notes |
|---|---|---|---|
| sign-in / identity provider | вход / провайдер идентификации | кіру / сәйкестендіру провайдері | "AdiletAI's own": «собственный» / «AdiletAI-дың өз». **rev 2:** KK without a possessor (tight titles): «меншікті сәйкестендіру провайдері» |
| OpenID Connect with PKCE / access tokens / session cookie **rev 2** | OpenID Connect с PKCE / токены доступа / сессионный cookie-файл | PKCE қолданылатын OpenID Connect / қол жеткізу токендері / сессиялық cookie файлы | "Stay on the server, never in the browser": «хранятся на сервере, а не в браузере» / «браузерде емес, серверде сақталады» (line 12). **Avoid** "session tokens" / «токены сессии» / «сессия токендері», and KK «қолжетімділік токені» (6.4) |
| two-factor authentication (2FA) / authenticator app | двухфакторная аутентификация / приложение-аутентификатор | екі факторлы аутентификация / аутентификатор қосымшасы | 2FA is optional: «по желанию» / «қалауыңыз бойынша»; **rev 2:** KK tight meta copy may use «міндетті емес». Never call it mandatory |
| encrypted at rest / authenticated downloads | шифруются при хранении / скачивание только после авторизации | сақтау кезінде шифрланады / авторизациядан кейін ғана жүктеп алу | Scope: uploaded files only («загруженные файлы» / «жүктелген файлдар»), never "all data" |
| rate limiting | ограничение частоты запросов | сұраныстар жиілігін шектеу | "On sign-in and API endpoints" |
| personal data / personal identifiers | персональные данные / персональные идентификаторы | дербес деректер / жеке сәйкестендіру деректері | «персональные данные» / «дербес деректер» are statutory terms |
| IIN / BIN | ИИН / БИН | ЖСН / БСН | IBAN stays IBAN in all three |
| typed messages / what you type (label) **rev 2** | текст ваших сообщений / Что вы пишете | сіз жазған хабарламалар / Сіз жазған мәтін | The scope of pseudonymisation. KK label: not «Сіз не жазасыз», which reads as a question |
| pseudonymisation (masking) **rev 2** | псевдонимизация (маскирование) | бүркемелеу (псевдонимизация) | Typed messages only, names on a best-effort basis: «а по возможности и имена» / «сондай-ақ мүмкіндігінше адам есімдері» (line 7). On detailed pages add the exceptions (line 7a). Avoid RU «анонимизация», «обезличивание» and KK «иесіздендіру», «анонимдеу»: in RK law they mean irreversible depersonalisation |
| sub-processor | субпроцессор (привлечённый обработчик данных) | қосалқы өңдеуші (деректерді өңдеуге тартылған үшінші тарап) | Gloss on the first mention in running text on each page (2.1) |
| third-party AI and search providers / eyebrow "Third parties" **rev 2** | сторонние поставщики моделей ИИ и поисковых сервисов / «Сторонние поставщики» | ЖИ модельдері мен іздеу сервистерінің бөгде провайдерлері / «Бөгде провайдерлер» | Some of them process data outside Kazakhstan (line 8). A search provider = «поисковый сервис» / «іздеу сервисі» |
| third party (legal sense) **rev 2** | третье лицо | үшінші тұлға | Statutory term (Law 94-V, Art. 1). Use it in the legal pages, not for the providers eyebrow |
| cross-border transfer / data flow | трансграничная передача / схема движения данных | трансшекаралық беру / деректер ағыны | The transfer term is statutory (Personal Data Law, Art. 16) |
| your security team | ваша служба информационной безопасности | ақпараттық қауіпсіздік қызметіңіз | |
| dedicated deployment / data residency terms | выделенное развёртывание / условия размещения данных | бөлек орналастыру / деректерді орналастыру шарттары | Only as "talk to us". Never promise that it exists |
| private to your account / delete | доступны только вам / удалить | тек сіздің есептік жазбаңызға қолжетімді / жою | Kept in rev 2: other users cannot see them; the provider disclosure is a separate line. KK: «есептік жазба», not «аккаунт», in running text |
| browser storage (localStorage) **rev 2** | локальное хранилище браузера (localStorage) | браузердің жергілікті жады (localStorage) | RU: never a bare «хранилище», which is the Vault module. Bullet title «Локальное хранилище браузера» / «Браузер жады» |

### 1.6 Legal terms

| EN | RU | KK | Notes |
|---|---|---|---|
| legislation / Kazakhstan legislation | законодательство / законодательство Республики Казахстан (РК) | заңнама / Қазақстан Республикасының (ҚР) заңнамасы | Full name on the first mention, the abbreviation after that |
| law (act) / code | закон / кодекс | заң / кодекс | |
| Constitution | Конституция РК | ҚР Конституциясы | |
| Civil Code / Tax Code | Гражданский кодекс РК (ГК РК) / Налоговый кодекс РК (НК РК) | ҚР Азаматтық кодексі / ҚР Салық кодексі | KK: write code names in full, because KK abbreviations are not standardised |
| Labour Code / Entrepreneurial Code | Трудовой кодекс РК (ТК РК) / Предпринимательский кодекс РК | ҚР Еңбек кодексі / ҚР Кәсіпкерлік кодексі | |
| Civil Procedure Code | Гражданский процессуальный кодекс РК (ГПК РК) | ҚР Азаматтық процестік кодексі | |
| normative legal act | нормативный правовой акт (НПА) | нормативтік құқықтық акт (НҚА) | |
| bylaws (decrees, resolutions, orders) **rev 2** | подзаконные акты | заңға тәуелді актілер | Coverage cannot be verified (product-assistant.md 4.3). Never claim bylaws are in the database, and never state that they are not. Say "a curated set of codes and laws, not all legislation" |
| article / paragraph (of an article) | статья (ст.) / пункт (п.) | бап / тармақ | KK ordinals: «15‑бап», «Азаматтық кодекстің 15‑бабы», «2‑тармақ» (U+2011 in headings and labels) |
| subparagraph / part (of an article) | подпункт (пп.) / часть | тармақша / бөлік | «3) тармақша», «1‑бөлік» |
| clause (of a contract) | пункт договора | шарттың тармағы | «шарттың 5.2‑тармағы» |
| contract / contract terms | договор / условия договора | шарт / шарт талаптары | KK: not «келісімшарт» in legal copy (the codes use «шарт») |
| edition (revision) / amendments / in force / when available **rev 2** | редакция / изменения и дополнения / действующий / при наличии | редакция / өзгерістер мен толықтырулар / қолданыстағы / бар болса | «в редакции от 18.07.2025» / «2025 жылғы 18 шілдедегі редакциясы». Show the edition only "when available": KK «бар болса» (the date is present in the source), not «мүмкін болса» ("if possible") |
| court / court decision / judicial act | суд / решение суда / судебный акт | сот / сот шешімі / сот актісі | |
| court practice (case law) / Supreme Court | судебная практика / Верховный Суд РК | сот практикасы / ҚР Жоғарғы Соты | «сот практикасы» is the official term (Supreme Court normative resolutions) |
| plaintiff / defendant | истец / ответчик | талап қоюшы / жауапкер | |
| debtor / creditor **rev 2** | должник / кредитор | борышкер / кредитор | KK: «борышкер», the term of the modern codes and laws (bankruptcy, enforcement proceedings, Civil Code Art. 297). The older Civil Code articles still say «борышқор»; keep it only inside a verbatim quote of such an article |
| contractual penalty / fine / late-payment penalty (per day) **rev 2** | неустойка / штраф / пеня | тұрақсыздық айыбы / айыппұл / өсімпұл | KK: «өсімпұл» (Civil Code Art. 297 as amended), not «пеня» or «өсім»; Art. 293 still has the older «айып төлеу (айыппұл, өсім)», so keep that only in a verbatim quote of Art. 293 |
| argument (in a case) **rev 2** | довод | уәж | KK courts use «шағымның уәждері» and «уәждеме бөлігі». **Avoid** «дәлел» here: it reads as proof or evidence («дәлелдемелер») |
| statement of claim | исковое заявление | талап арыз | The KK Civil Procedure Code says «талап қою» (148‑бап). Use «талап арыз» for the document in marketing copy, because it is unambiguous |
| appeal | апелляционная жалоба | апелляциялық шағым | |
| power of attorney / representative | доверенность / представитель | сенімхат / өкіл | |
| party / governing law | сторона / применимое право | тарап / қолданылатын құқық | |
| termination / term (duration) / contract value | расторжение договора / срок / цена договора | шартты бұзу / мерзім / шарттың бағасы | Typical review-table columns. "Termination rights" is in 1.3 |
| real damage / lost profit **rev 2** | реальный ущерб / упущенная выгода | нақты залал / алынбай қалған табыс | Civil Code Art. 9(4). The KK lost-profit term needs a native legal check (section 5). «косвенные убытки» is not an RK Civil Code concept; counsel decides on the Terms |
| intellectual property **rev 2** | интеллектуальная собственность | зияткерлік меншік | Modern statutory and ministry term. Older Civil Code articles say «интеллектуалдық меншік»; do not use it in our copy |
| professional judgement **rev 2** | профессиональное суждение | кәсіби пайымдау | As in the Kazakh IFRS and audit texts. Not the shorter «пайым» |
| acquisition (M&A) **rev 2** | приобретение компании | компанияны сатып алу | Not «покупка компании» |
| due diligence | юридическая проверка (due diligence) | құқықтық тексеру (due diligence) | Keep the English term in parentheses on the first mention in running text (2.1). A list item or label may use the short form |
| compliance | комплаенс | комплаенс | |
| legal opinion / legal advice | правовое заключение / юридическая консультация | құқықтық қорытынды / заң кеңесі | "AdiletAI does not provide legal advice" |
| AIFC / AIFC International Arbitration Centre (IAC) | МФЦА (Международный финансовый центр «Астана») / Международный арбитражный центр МФЦА | АХҚО («Астана» халықаралық қаржы орталығы) / АХҚО Халықаралық төрелік орталығы | **rev 2:** expand once per page, on the first mention in running text: "Astana International Financial Centre (AIFC)" / «Международный финансовый центр «Астана» (МФЦА)» / «"Астана" халықаралық қаржы орталығы (АХҚО)». A domain list (aifc.kz, iac.kz) does not count as a mention |
| Russian Federation law | право РФ | Ресей Федерациясының құқығы | "Relies on Kazakhstan law, not RF law" (line 18) |
| Ministry of Justice / "Әділет" legal information system | Министерство юстиции РК / информационно-правовая система «Әділет» | ҚР Әділет министрлігі / «Әділет» ақпараттық-құқықтық жүйесі | Only in the disambiguation (section 3) |

### 1.7 Roles

| EN | RU | KK | Notes |
|---|---|---|---|
| lawyer / advocate | юрист / адвокат | заңгер / адвокат | |
| head of legal / general counsel | руководитель юридического департамента / директор по правовым вопросам | заң департаментінің басшысы / заң мәселелері жөніндегі директор | |
| managing partner / partner | управляющий партнёр / партнёр | басқарушы серіктес / серіктес | |
| reviewing lawyer | проверяющий юрист | тексеретін заңгер | |
| client | клиент | клиент | |
| vendor (of an AI tool) / vendor due diligence **rev 2** | поставщик / проверка поставщика | жеткізуші / жеткізушіні тексеру | Where a contract example on the same page uses "supplier" (поставщик / жеткізуші), write «поставщик ИИ-решений» / «ЖИ шешімін жеткізуші» |

### 1.8 Site vocabulary

| EN | RU | KK | Notes |
|---|---|---|---|
| Platform / How it works | Платформа / Как это работает | Платформа / Қалай жұмыс істейді | Nav |
| Use cases | Сценарии | Сценарийлер | Nav. The page H1 may expand: «Сценарии работы» / «Қолдану сценарийлері» |
| Security / About / Contact | Безопасность / О компании / Контакты | Қауіпсіздік / Компания туралы / Байланыс | Nav |
| FAQ | Вопросы и ответы | Сұрақ-жауап | The section H2 may be «Частые вопросы» / «Жиі қойылатын сұрақтар» |
| Blog / Contents / Related articles | Блог / Содержание / Читайте также | Блог / Мазмұны / Ұқсас мақалалар | |
| Contact us / Learn more | Связаться с нами / Подробнее | Бізбен байланысу / Толығырақ | |
| Read more / Read the article | Читать далее / Читать статью | Әрі қарай оқу / Мақаланы оқу | |
| {n} min read | {n} мин чтения | Оқу уақыты: {n} мин | The abbreviation «мин» avoids plural forms |
| Published / Last updated | Опубликовано / Последнее обновление | Жарияланған күні / Соңғы жаңарту | «Последнее обновление: 12 октября 2026 г.» / «Соңғы жаңарту: 2026 жылғы 12 қазан» |
| Home / Back to home | Главная / На главную | Басты бет / Басты бетке оралу | |
| Breadcrumb (landmark aria-label) **rev 2** | Навигационная цепочка | Навигациялық тізбек | Kept. «Бет жолы» was considered and rejected: «жол» is also our word for a table row and a line of text, so it can read as "page line" |
| Terms of use / Privacy policy / Disclaimer | Условия использования / Политика конфиденциальности / Отказ от ответственности | Пайдалану шарттары / Құпиялылық саясаты / Жауапкершіліктен бас тарту | |
| beta | бета | бета | Lower case in running text |
| Kazakh, Russian and English | казахский, русский и английский | қазақ, орыс және ағылшын тілдері | Always in this order (KK, RU, EN). **rev 2:** pairs too: "Kazakh and Russian" / «казахский и русский» / «қазақ және орыс» |
| e-mail / Shymkent, Kazakhstan | e‑mail (электронная почта) / Шымкент, Казахстан | электрондық пошта / Шымкент, Қазақстан | **rev 2:** «e‑mail» with U+2011 in visible copy (P1). In identifier lists RU writes «адреса электронной почты» |
| security questionnaire **rev 2** | анкета по информационной безопасности (short: анкета по безопасности) | ақпараттық қауіпсіздік сауалнамасы (short: қауіпсіздік сауалнамасы) | Short forms only in meta and mailto subjects |
| redacted copy **rev 2** | копия со скрытыми данными | деректері жасырылған көшірме | **Avoid** «обезличенная копия» / «иесіздендірілген көшірме» (statutory anonymisation terms) |
| product interface / sample (mockup labels) | интерфейс AdiletAI / пример | AdiletAI интерфейсі / мысал | Mockup aria-labels start «Интерфейс AdiletAI: …» / «AdiletAI интерфейсі: …». Mark sample case numbers and documents as «пример» / «мысал» |

### 1.9 Terms of use: defined terms (rev 2)

Capitalised defined terms appear only in the legal pages. They are already consistent across `app/components/content/legal/terms/{en,ru,kk}.vue`; keep them.

| EN | RU | KK |
|---|---|---|
| Terms | Условия | Пайдалану шарттары |
| Site / Platform | Сайт / Платформа | Сайт / Платформа |
| Agreement | Договор | Шарт (capitalised: the defined term, distinct from lower-case «шарт» = any contract) |
| Customer / Authorised Users | Клиент / Уполномоченные пользователи | Клиент / Уәкілетті пайдаланушылар |
| Output / Customer Content | Результаты / Материалы Клиента | Нәтижелер / Клиент материалдары |
| "as is" / "as available" | «как есть» / «по мере доступности» | «бар күйінде» / «қолжетімділігіне қарай» |

---

## 2. Style guide

### 2.1 Rules for all three languages

- **Claims first.** Every sentence must map to an APPROVED line in `claims.md`. A good translation of an unsupported claim is still a banned claim. When the English source hedges ("where available", "where it proposes them", "is instructed to", "by default", "on a best-effort basis", "prioritises"), the translation keeps the hedge.
- **Answer first.** Open a section with the plain answer or definition, then the detail (see `docs/seo-geo-research.md`). One idea per sentence.
- **Specific over grand.** Name the thing: "cites the act and article", not "powerful research". No adjectives that cannot be proved.
- **No numbers about performance.** No speed, accuracy, savings, customer or user counts, in any language. Product facts are fine: 100 files per chat, 500 MB per file, six answer types.
- **Headings (rev 2).** Sentence case for every heading, button, tab and label. A heading never ends with a full stop. The one exception is the two-tone `SectionHeading` (title plus `continuation` in one `h2`): the title is a sentence and ends with a full stop because the continuation follows in the same heading («Напишите нам. Все вопросы — на один адрес»). The continuation itself has no final full stop, even when it holds two sentences (only the last stop is dropped). The same keys exist in all three locales, so if EN has a continuation, RU and KK put the full stop in the same place. A question mark is fine in FAQ questions. Check with `heading-stops.cjs` (REV-2 checklist, P5).
- **Module names (rev 2).** One rule, all three languages:
  - **Capital letter** when the word names the module as a part of the platform: in a list of modules, in "in the Assistant", in a module card or heading, and on the first mention with the UI label. Test: you could write "the Assistant module" / «модуль «Ассистент»» / «Ассистент модулі» instead.
  - **Lower case** when the assistant is the one acting ("the assistant searches", «ассистент отвечает», «ассистент іздейді»), for a particular vault or several of them ("create a vault per deal", «подключите хранилище к чату», «қоймалар»), and for any generic use («ИИ-ассистент», «хранилище документов», «құжат қоймасы»).
  - **Always lower case** mid-sentence for review tables and court practice analysis («таблицы анализа», «анализ судебной практики», «талдау кестелері», «сот практикасын талдау»), as EN does. Their UI labels («Таблицы анализа», «Аналитика») appear only in quotes, in parentheses or in mockups.
  - A capital at the start of a sentence means nothing.
  - Examples:

    | | EN | RU | KK |
    |---|---|---|---|
    | module list | the Assistant, Vault, review tables and court practice analysis | Ассистент, Хранилище, таблицы анализа и анализ судебной практики | Ассистент, Қойма (қосымшада — «Хранилище»), талдау кестелері және сот практикасын талдау |
    | inside the module | Attach up to 100 files to a chat in the Assistant. | В Ассистенте к одному чату можно прикрепить до 100 файлов. | Ассистентте бір чатқа 100 файлға дейін тіркеуге болады. |
    | the AI acting | If the database has nothing relevant, the assistant is instructed to say so. | Если в базе нет подходящих норм, ассистент должен прямо сказать об этом. | Базада қажетті норма болмаса, ассистент бұл туралы тура айтуға тиіс. |
    | module as subject | Vault takes files of up to 500 MB each. | Хранилище принимает файлы до 500 МБ каждый. | Қойма әрқайсысы 500 МБ‑тан аспайтын файлдарды қабылдайды. |
    | one workspace / several | Create a vault for each deal and attach one or more vaults to a chat. | Создайте хранилище для каждой сделки и подключите к чату одно или несколько хранилищ. | Әр мәмілеге бөлек қойма ашып, чатқа бір немесе бірнеше қойманы қосыңыз. |
- **First-mention glosses (rev 2).** A gloss or expansion goes on the first mention **in running text** on each page: sub-processor «субпроцессор (привлечённый обработчик данных)» / «қосалқы өңдеуші (…)», «юридическая проверка (due diligence)», МФЦА / АХҚО, «распознавание текста (OCR)», «Қойма (қосымшада — «Хранилище»)». Summary boxes, takeaway lists, list items, labels and meta text are exempt.
- **Who checks (rev 2).** The lawyer checks the output; AdiletAI never "verifies" or «проверяет ответы / ссылки» / «жауаптарды тексереді». «Проверка договора на риски» / «шартты тәуекел тұрғысынан тексеру» is the approved name of the contract scan and is fine. The only automatic check is the court-practice memo export («сверка ссылок» / «сілтемелерді салыстыру»).
- **Product UI names.** In mockups, UI chrome stays Russian exactly as in the product, inside `lang="ru"`. On product and how-it-works pages, EN and KK may add the Russian UI label in parentheses on the first mention, e.g. "Review tables («Таблицы анализа» in the app)" / «Талдау кестелері (қосымшада — «Таблицы анализа»)». Translate the Assistant conversation in a mockup into the page locale. Contract-scan output, review-table values, tax-mode answers and court-practice content stay Russian.
- **No emoji, no exclamation marks**, no ALL CAPS sentences (uppercase only for one- or two-word labels).
- **Domains** stay lower case and are never translated: adilet.zan.kz, gov.kz, akorda.kz, parlam.kz, aifc.kz, iac.kz.
- **Code and file formats:** PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook e‑mails (.msg). Never list .doc, .odt, .rtf or .eml as supported.
- **Latin "AI" in RU (rev 2).** Only inside a quoted search query the page targets (for example «юрист AI»), once per page. Everywhere else «ИИ».
- **vue-i18n hygiene** (i18n-tech.md section 11): write `{'@'}` for @, never a bare `{ } |`, and nothing that looks like an HTML tag. «Ёлочки», „…“, “…”, —, –, U+00A0 and U+2011 are safe.

### 2.2 Words to avoid

| EN | RU | KK |
|---|---|---|
| revolutionary, unique, game-changing, cutting-edge, best-in-class, world-class, seamless, effortless, supercharge, unlock, empower, leverage | революционный, уникальный, инновационный, прорывной, лучший, №1, не имеющий аналогов, мощный, умный | революциялық, бірегей, теңдессіз, озық, ең үздік, қуатты, ақылды |
| instantly, in seconds, 10x, save hours | мгновенно, за секунды, в разы быстрее, экономит часы | лезде, бірнеше секундта, әлдеқайда жылдам, уақытты сағаттап үнемдейді |
| accurate, verified answers, error-free, guaranteed, replaces a lawyer | точные/проверенные ответы, без ошибок, гарантирует, заменяет юриста | дәл/тексерілген жауаптар, қатесіз, кепілдік береді, заңгерді алмастырады |
| all laws, every court decision, complete database | все законы, все решения судов, полная база | барлық заңдар, барлық сот шешімдері, толық база |
| prediction, win probability, chance of winning | прогноз исхода, вероятность выигрыша, шансы на победу | нәтиже болжамы, жеңу ықтималдығы |
| anonymised, never leaves Kazakhstan, on-premise, isolated contour | анонимизация, обезличивание, данные не покидают Казахстан, изолированный контур, on-premise | анонимдеу, иесіздендіру, деректер Қазақстаннан шықпайды, оқшауланған контур |
| free, free trial, sign up, start free, no registration | бесплатно, пробный период, регистрация, начать бесплатно, без регистрации | тегін, сынақ мерзімі, тіркелу, тегін бастау, тіркеусіз |
| **rev 2:** searches official sources first, only official sources, session tokens, OCR in English / all three languages, masks all personal data / names | в первую очередь ищет в официальных источниках, только официальные источники, токены сессии, OCR на английском / на трёх языках, маскирует все данные / все имена | алдымен ресми дереккөздерден іздейді, тек ресми дереккөздер, сессия токендері, ағылшын тіліндегі / үш тілдегі OCR, барлық деректерді / есімдерді бүркемелейді |

### 2.3 English

- **Spelling:** British: organisation, pseudonymise, licence (noun), analyse, colour, prioritise. Exceptions: product and protocol names ("OpenID Connect").
- **Sentences:** 12 to 20 words on average, 25 at most. Active voice. Contractions are fine in UI and FAQ copy ("can't"), not in legal pages.
- **Dashes:** em dash with no spaces ("citations—grouped by source") at most once per paragraph. En dash with no spaces for ranges (2019–2025).
- **Numbers:** 1,250; 12,500,000. Currency: "KZT 12,500,000" in text. Dates: "12 October 2026" (`Intl` locale `en-GB`, `{ day: 'numeric', month: 'long', year: 'numeric' }`). Time: 24-hour, 14:30.
- **Legal references:** "Article 9 of the Civil Code of the Republic of Kazakhstan"; short form "Article 9 of the Civil Code". Do not use "RK" in marketing prose. "Kazakhstan law" is fine.
- **rev 2:** "e‑mail" with U+2011 in visible copy (checklist P1).

### 2.4 Russian

- **Register:** formal and professional, addressing «вы» in lower case. Write as a senior Kazakhstan legal-tech editor would: business Russian, not translated English. Russian Federation idioms are fine where they are shared, but use RK terms (ИИН, БИН, МФЦА, ГПК РК, «акимат», etc.) and never RF ones (ИНН, СНИЛС, «арбитражный суд» for state courts).
- **Sentences:** at most 25 words. Do not chain more than three nouns in the genitive («проверка условий договоров поставки компании» is the limit). Prefer verbs to verbal nouns: «проверяет договоры», not «осуществляет проверку договоров». Avoid «является», «данный», «осуществлять», «в рамках», «на сегодняшний день».
- **Headings:** sentence case, no full stop (two-tone exception in 2.1), no colon-separated title formulas copied from English. Prefer a statement («Ответы со ссылками на законодательство РК») to a slogan. A colon in `meta.title` is acceptable when the keyword needs it.
- **Typography:**
  - Quotes: «…», nested „…“.
  - Dash: em dash with spaces « — », with a no-break space (U+00A0) before it so the dash never starts a line: `AdiletAI — ИИ-платформа`. In JSON, write the actual U+00A0 character; in `.vue` bodies, `&nbsp;`.
  - Ranges: en dash with no spaces (2019–2025, 10–15).
  - No-break space after «ст.», «п.», «пп.», «ч.», «№», «г.» and between a number and its unit (500 МБ, 100 файлов).
  - Use «ё» where it changes meaning or reading («всё», «ещё», «развёртывание», «партнёр», «прикреплённый»). Elsewhere it is optional, but be consistent within a page.
- **Display headings (rev 2).** Applies to `h1`, the section title and its continuation, card titles (`h3`), CTA band titles and blog post titles. Not to `meta.*`, eyebrows, buttons (they do not wrap) or body text, where the rules above and the browser's hyphenation are enough.
  - U+00A0 after every one-letter word: а, в, и, к, о, с, у, я (and their capitals): «Работа по праву Казахстана», «Вопросы о безопасности», «Проверка договоров с ИИ».
  - U+00A0 after short prepositions, conjunctions and negations: во, до, за, из, ко, на, не, ни, но, об, от, по, со, без, для, над, под, при, про: «Ответы со ссылками на законодательство», «ИИ для юристов».
  - U+00A0 before the particles «ли», «же», «бы».
  - U+2011 (non-breaking hyphen) inside «ИИ‑» compounds («ИИ‑ассистент», «ИИ‑платформа») so «ИИ-» never ends a line.
  - Find candidates with checklist P2 and P3.
- **Non-breaking hyphen in «e‑mail» (rev 2).** In all visible RU copy, «e‑mail» takes U+2011, never the ASCII hyphen, because «e-» / «mail» across two lines looks broken (QA run 2, how-it-works at 390 px). Exceptions: `meta.*`, mailto subjects, URLs, JSON-LD. In identifier lists prefer «адреса электронной почты» (line 7). Rendering was checked in Chromium (section 6.5).
- **Numbers:** thin or no-break space for thousands (1 250; 12 500 000), decimal comma (0,8). Currency: «12 500 000 ₸» or «12,5 млн тенге». Use `Intl.NumberFormat('ru', { style: 'currency', currency: 'KZT', currencyDisplay: 'narrowSymbol' })`, because the plain currency display prints "KZT".
- **Dates:** «12 октября 2026 г.» (`Intl` locale `ru`, `dateStyle: 'long'`). Numeric dates: 12.10.2026.
- **Legal references:** «ст. 9 ГК РК», «п. 2 ст. 715 ГК РК». Spell out on the first mention in prose: «статья 9 Гражданского кодекса Республики Казахстан».
- **Abbreviations:** «РК» after a first «Республика Казахстан» on the page; «ИИ» always; «МФЦА» (expanded once per page, 1.6).
- **Plurals:** three forms (one, few, many). Prefer wording that avoids them («Файлов: 3», «3 мин чтения»), or use the plural syntax in i18n-tech.md section 11.

### 2.5 Kazakh

- **Register:** formal and polite: «сіз» with polite verb forms (`жазылыңыз`, `жүктеңіз`, `тексеріңіз`), lower case mid-sentence. Write the text natively in Kazakh. It must not read as a word-for-word copy of the Russian. Use Kazakh word order: subject first, verb last, attributes before the noun.
- **Terminology:** use the statutory Kazakh terms in section 1.6 (заң, заңнама, шарт, бап, тармақ, талап қоюшы, жауапкер, борышкер, өсімпұл, уәж, сот практикасы, нормативтік құқықтық акт). Do not use a Russian loanword where a standard Kazakh term exists (not «договор», «статья», «пункт», «иск», «пеня», «суд практикасы»). Accepted international loans: платформа, кодекс, редакция, меморандум, комплаенс, контрагент, фактор, сценарий, токен, OCR.
- **Hedges (rev 2):** "when available" = «бар болса»; "on a best-effort basis" = «мүмкіндігінше»; "is instructed to" = «…тиіс» or «…нұсқауы берілген»; "prioritises" = «басымдық береді».
- **Alphabet:** Cyrillic with the Kazakh letters Ә Ғ Қ Ң Ө Ұ Ү Һ І. Never Latin lookalikes (a, e, o, i) inside Cyrillic words, and never the Latin-based 2021 alphabet. Check with: `rg -nP '\p{Cyrillic}[A-Za-z]|[A-Za-z]\p{Cyrillic}' file.json` (expect hits only in mixed tokens such as «AdiletAI-дың»).
- **Sentences:** at most about 20 words. Avoid long chains of participles and of «-ған/-ген» clauses, and break them into two sentences. Use «болып табылады» rarely (a dash is usually better: «AdiletAI — ЖИ платформасы»). Use «тиіс» for "must" in legal statements, «керек» in UI. Put a comma after an adverbial participle clause («…сілтеме жасай отырып, …»).
- **Headings:** sentence case, no full stop (two-tone exception in 2.1). Kazakh headings run long, so cut words rather than shrink type; budgets and measurements are in REV-2 CHECKLIST E. Calques such as «…үшін шешім» for "solution for" are not allowed.
- **Typography:**
  - Quotes: «…», nested „…“.
  - Dash: spaced em dash « — » with a no-break space before it, as in Russian.
  - Ranges: en dash (2019–2025).
  - **rev 2:** U+2011 in number-suffix hyphens inside headings and short labels («500 МБ‑қа», «15‑бап», «7.2‑тармақ»), and U+00A0 between a number and its unit.
- **Numbers:** spaces for thousands (1 250; 12 500 000), decimal comma. Currency: «12 500 000 ₸» or «12,5 млн теңге» (KK spelling «теңге», RU «тенге»). Ordinals take a hyphen: «15-бап», «2-тармақ», «3-орын».
- **Dates:** «2026 жылғы 12 қазан». Month names are lower case. `Intl` (`kk`, `dateStyle: 'long'`) prints «2026 ж. 12 қазан», so post-process it: `.replace(' ж. ', ' жылғы ')`. Numeric dates: 12.10.2026. "As of": «2026 жылғы 12 қазандағы жағдай бойынша».
- **Plurals:** a noun after a numeral stays singular («100 файл», «6 жауап түрі»), and so does a noun after «көп», «бірнеше».
- **Brand endings:** see section 0. Prefer «AdiletAI платформасы».

---

## 3. Canonical sentences

Use these verbatim on home, about and FAQ, and wherever the same claim appears. Do not paraphrase them; if you must shorten one, keep every hedge. They already contain U+00A0 (before « — » and between numbers and units) and U+2011 (in «e‑mail»), so copy them from this file rather than retyping.

### 3.1 Definitional sentence (unchanged in rev 2)

- **EN:** AdiletAI is a legal AI platform for in-house legal teams and law firms in Kazakhstan. It answers legal questions with citations to Kazakhstan legislation, reviews contracts for risk and turns document sets into structured review tables, working with documents in Kazakh, Russian and English.
- **RU:** AdiletAI — ИИ-платформа для юридических департаментов компаний и юридических фирм Казахстана. Она отвечает на правовые вопросы со ссылками на законодательство Республики Казахстан, проверяет договоры на риски и превращает пакеты документов в структурированные таблицы анализа. Платформа работает с документами на казахском, русском и английском языках.
- **KK:** AdiletAI — Қазақстандағы компаниялардың заң департаменттері мен заң фирмаларына арналған ЖИ платформасы. Ол Қазақстан Республикасының заңнамасына сілтеме жасай отырып, құқықтық сұрақтарға жауап береді, шарттарды тәуекел тұрғысынан тексереді және құжаттар топтамасын құрылымдалған талдау кестелеріне айналдырады. Платформа қазақ, орыс және ағылшын тілдеріндегі құжаттармен жұмыс істейді.

Translation notes. In RU and KK the closing participle clause becomes a sentence of its own: a trailing «работая с…» / «…жұмыс істей отырып» reads as a calque. RU drops «юридическая» before «ИИ-платформа», because it would stack three forms of «юридическ-» in one line; the category phrase «юридический ИИ» belongs in titles and meta. "Working with documents in Kazakh, Russian and English" is about answers and translation, so it stays after rev 2; it says nothing about OCR.

### 3.2 Disambiguation (unchanged in rev 2)

- **EN:** AdiletAI is an independent company and is not affiliated with the Ministry of Justice’s “Әділет” legal information system (adilet.zan.kz). “Әділет” means “justice” in Kazakh.
- **RU:** AdiletAI — независимая компания и не связана с информационно-правовой системой «Әділет» Министерства юстиции Республики Казахстан (adilet.zan.kz). «Әділет» в переводе с казахского — «справедливость».
- **KK:** AdiletAI — тәуелсіз компания. Оның Қазақстан Республикасы Әділет министрлігінің «Әділет» ақпараттық-құқықтық жүйесіне (adilet.zan.kz) қатысы жоқ. Компания атауындағы «Adilet» — қазақтың «әділет» сөзі.

Translation note. A Kazakh reader does not need «әділет» translated, so the KK line explains where the brand name comes from instead.

### 3.3 Reusable claim-safe lines

Each line is the agreed wording of one APPROVED claim. Reuse it as it is, or keep its hedges if you shorten it. New or changed in rev 2: line 2 (KK), 4, 4a, 5, 5a, 7, 7a–7d and 12–19.

| # | EN | RU | KK |
|---|---|---|---|
| 1 | Output must be reviewed by a lawyer. | Результаты должен проверять юрист. | Нәтижелерді заңгер тексеруге тиіс. |
| 2 | It cites the act and article it relied on, and the edition date when available. | Ассистент указывает акт и статью, на которые опирается ответ, а при наличии — дату редакции. | Ассистент жауап негізделген акт пен бапты, ал редакция күні бар болса, оны да көрсетеді. |
| 3 | If the database has nothing relevant, it is instructed to say so rather than answer from memory. | Если в базе нет подходящих норм, ассистент должен прямо сказать об этом, а не отвечать по памяти. | Базада қажетті норма болмаса, ассистент жадынан жауап бермей, бұл туралы тура айтуға тиіс. |
| 4 | When the database is not enough, it runs a web search that prioritises official sources such as adilet.zan.kz, gov.kz, akorda.kz and parlam.kz. For AIFC matters it also prioritises aifc.kz and iac.kz. | Если базы недостаточно, ассистент ищет в интернете и отдаёт приоритет официальным источникам, например adilet.zan.kz, gov.kz, akorda.kz и parlam.kz. По вопросам МФЦА в приоритете также aifc.kz и iac.kz. | База жеткіліксіз болса, ассистент интернеттен іздейді және adilet.zan.kz, gov.kz, akorda.kz, parlam.kz сияқты ресми дереккөздерге басымдық береді. АХҚО мәселелері бойынша aifc.kz және iac.kz сайттарына да басымдық беріледі. |
| 4a | Other sites can also appear in the results. | В результатах могут оказаться и другие сайты. | Нәтижелерде басқа сайттар да болуы мүмкін. |
| 5 | Ask in Kazakh, Russian or English, and general answers come back in your language. Contract scans, drafts, tax-mode answers and court practice analyses are produced in Russian by default. | Задавайте вопросы на казахском, русском или английском: на общие вопросы ассистент отвечает на языке вопроса. Проверки договоров, проекты документов, ответы в режиме «Налоги» и анализ судебной практики по умолчанию готовятся на русском языке. | Сұрақты қазақ, орыс немесе ағылшын тілінде қоя аласыз: жалпы сұрақтарға ассистент сұрақ қойылған тілде жауап береді. Шарттарды тексеру, құжат жобалары, «Салық» режиміндегі жауаптар және сот практикасын талдау әдепкі бойынша орыс тілінде дайындалады. |
| 5a | The legislation database is in Russian. | База законодательства — на русском языке. | Заңнама базасы — орыс тілінде. |
| 6 | The app interface is in Russian. | Интерфейс платформы — на русском языке. | Платформа интерфейсі — орыс тілінде. |
| 7 | Personal identifiers in your typed messages (IIN, BIN, IBAN, phone numbers, e‑mail addresses and, on a best-effort basis, personal names) are pseudonymised before the message reaches the AI model and restored in the answer. | Персональные идентификаторы в тексте ваших сообщений (ИИН, БИН, IBAN, номера телефонов, адреса электронной почты, а по возможности и имена) псевдонимизируются до передачи сообщения модели ИИ и восстанавливаются в ответе. | Сіз жазған хабарламалардағы жеке сәйкестендіру деректері (ЖСН, БСН, IBAN, телефон нөмірлері, электрондық пошта мекенжайлары, сондай-ақ мүмкіндігінше адам есімдері) ЖИ моделіне жіберілмес бұрын бүркемеленеді, ал жауапта қалпына келтіріледі. |
| 7a | Pseudonymisation does not cover the text of attached documents or document text indexed for search. Nor does it cover the web-search queries that court practice analysis builds from your dispute description and sends to its search provider. | Псевдонимизация не применяется к тексту прикреплённых документов и к тексту документов, проиндексированному для поиска. Не маскируются и поисковые запросы, которые анализ судебной практики составляет по описанию спора и передаёт поисковому сервису. | Бүркемелеу чатқа тіркелген құжаттардың мәтініне және іздеу үшін индекстелген құжат мәтініне қолданылмайды. Сот практикасын талдау дау сипаттамасы бойынша құрастырып, іздеу сервисіне жіберетін сұраулар да бүркемеленбейді. |
| 7b | Applies to typed messages only. Attached documents, document text indexed for search and court practice search queries are not masked. | Только для текста сообщений. Прикреплённые документы, текст, проиндексированный для поиска, и поисковые запросы анализа судебной практики не маскируются. | Тек сіз жазған хабарламаларға қолданылады. Чатқа тіркелген құжаттар, іздеу үшін индекстелген мәтін және сот практикасын талдаудағы іздеу сұраулары бүркемеленбейді. |
| 7c | Names are detected automatically, so some may be missed. | Имена распознаются автоматически, поэтому часть из них может быть пропущена. | Есімдер автоматты түрде анықталады, сондықтан кейбірі анықталмай қалуы мүмкін. |
| 7d | Personal names (best effort) | Имена (по возможности) | Адам есімдері (мүмкіндігінше) |
| 8 | AdiletAI uses third-party AI model and search providers; some of them process data outside Kazakhstan. The current list of sub-processors is available on request. | AdiletAI использует сторонних поставщиков моделей ИИ и поисковых сервисов; часть из них обрабатывает данные за пределами Казахстана. Актуальный список субпроцессоров предоставляем по запросу. | AdiletAI ЖИ модельдері мен іздеу сервистерінің бөгде провайдерлерін пайдаланады; олардың кейбірі деректерді Қазақстаннан тыс жерде өңдейді. Қосалқы өңдеушілердің өзекті тізімін сұрау бойынша ұсынамыз. |
| 9 | Uploaded files are encrypted at rest and served only through authenticated downloads. | Загруженные файлы шифруются при хранении и доступны для скачивания только после авторизации. | Жүктелген файлдар сақтау кезінде шифрланады және авторизациядан кейін ғана жүктеп алуға болады. |
| 10 | Usage is metered in credits; plans are arranged with our team. | Использование учитывается в кредитах, а тариф согласуется с нашей командой. | Пайдалану кредиттермен есептеледі, ал тариф біздің командамен келісіледі. |
| 11 | Each answer lists the sources it drew on in a Sources panel. | Источники, на которые опирается ответ, собраны в панели «Источники». | Жауап негізделген дереккөздер «Дереккөздер» панелінде жинақталады. |
| 12 | Sign-in goes through AdiletAI’s own identity provider (OpenID Connect with PKCE). Access tokens stay on the server, never in the browser: the browser holds only an encrypted, HttpOnly session cookie. | Вход выполняется через собственный провайдер идентификации AdiletAI (OpenID Connect с PKCE). Токены доступа хранятся на сервере и не попадают в браузер: в браузере хранится только зашифрованный сессионный cookie-файл с флагом HttpOnly. | Жүйеге AdiletAI-дың өз сәйкестендіру провайдері арқылы кіресіз (PKCE қолданылатын OpenID Connect). Қол жеткізу токендері браузерде емес, серверде сақталады: браузерде тек HttpOnly белгісі бар шифрланған сессиялық cookie файлы болады. |
| 12a | Access tokens stay on the server, never in the browser. | Токены доступа хранятся на сервере, а не в браузере. | Қол жеткізу токендері браузерде емес, серверде сақталады. |
| 13 | Built-in OCR makes scans readable and is tuned for Kazakh and Russian. If a file cannot be read, AdiletAI tells you instead of guessing. | Встроенное распознавание текста (OCR) делает сканы читаемыми и настроено на казахский и русский языки. Если файл не удаётся прочитать, AdiletAI сообщает об этом, а не домысливает содержание. | Кірістірілген мәтінді тану (OCR) скандарды оқылатын етеді; ол қазақ және орыс тілдеріне бапталған. Файлды оқу мүмкін болмаса, AdiletAI мазмұнын ойдан құрастырмай, бұл туралы хабарлайды. |
| 14 | Built-in OCR makes scanned PDFs and photographed documents searchable and is tuned for Kazakh and Russian. Processing runs in the background and retries automatically. | Встроенное распознавание текста (OCR) делает отсканированные PDF и фотографии документов доступными для поиска; оно настроено на казахский и русский языки. Обработка идёт в фоновом режиме и при сбое автоматически повторяется. | Кірістірілген мәтінді тану (OCR) сканерленген PDF файлдар мен суретке түсірілген құжаттардан іздеуге мүмкіндік береді; ол қазақ және орыс тілдеріне бапталған. Өңдеу фондық режимде жүреді, сәтсіз болса, автоматты түрде қайталанады. |
| 15 | Attach up to 100 files per chat: PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook e‑mails (.msg), images and scans. | К одному чату можно прикрепить до 100 файлов: PDF, Word (.docx), Excel, PowerPoint (.pptx), письма Outlook (.msg), изображения и сканы. | Бір чатқа 100 файлға дейін тіркеуге болады: PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook хаттары (.msg), суреттер мен скандар. |
| 16 | A vault takes files of up to 500 MB each: PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook e‑mails (.msg), images and scans. | В хранилище можно загружать файлы размером до 500 МБ каждый: PDF, Word (.docx), Excel, PowerPoint (.pptx), письма Outlook (.msg), изображения и сканы. | Қоймаға әрқайсысы 500 МБ‑тан аспайтын файлдарды жүктеуге болады: PDF, Word (.docx), Excel, PowerPoint (.pptx), Outlook хаттары (.msg), суреттер мен скандар. |
| 17 | Tax questions switch the assistant to a Kazakhstan tax mode that takes rates and articles from the Tax Code in its legislation database. | По налоговым вопросам ассистент переключается в режим «Налоги» и берёт ставки и статьи из Налогового кодекса РК в своей базе законодательства. | Салыққа қатысты сұрақтарда ассистент «Салық» режиміне ауысады: мөлшерлемелер мен баптарды заңнама базасындағы ҚР Салық кодексінен алады. |
| 18 | It is instructed to rely on Kazakhstan law, not Russian Federation law, and to note for the reviewing lawyer what it could not verify. | Ассистент должен опираться на право Казахстана, а не на право РФ, и отмечать в примечании для проверяющего юриста то, что не удалось проверить. | Ассистент Ресей Федерациясының құқығына емес, Қазақстан құқығына сүйенуге және растай алмаған мәселелерді тексеретін заңгерге арналған ескертпеде атап өтуге тиіс. |
| 19 | Court practice analysis searches public Kazakhstan court and legal websites, with official sources ranked first. | Анализ судебной практики ищет решения на открытых судебных и правовых сайтах Казахстана, отдавая приоритет официальным источникам. | Сот практикасын талдау шешімдерді Қазақстанның ашық сот және құқықтық сайттарынан іздейді, бұл ретте ресми дереккөздерге басымдық беріледі. |

Where each line is required:
- Line 7 covers typed messages only. Never extend it to attached documents, vaults or search queries.
- Lines 7a and 7c are required wherever a page explains pseudonymisation in detail: security, privacy policy, disclaimer, the FAQ data answer and the how-it-works FAQ. Elsewhere, line 7 alone is enough, and a mock footnote or short scope note uses 7b.
- Line 12 (full) belongs on security, privacy and FAQ answers about sign-in. Cards and home rows use 12a.
- Lines 13 and 14 replace every OCR sentence. The language list in 3.1 and line 5 is about answers and translation and stays three-language.
- Line 17: RU and KK name the mode after the UI badge; EN keeps "tax mode".

---

## 4. Earlier changes (run 1, kept for history)

Applied in run 1 to `ru/common.json`, `ru/nuxtSiteConfig.json`, `kk/common.json`, `kk/errors.json` and `kk/nuxtSiteConfig.json`: «компаний» added to the RU footer tagline; «системы» changed to «платформы»; KK nav «Сценарийлер»; KK `generic.title` «Қате орын алды»; RU and KK meta descriptions trimmed to 164 and 161 characters. Nothing in rev 2 changes these files, except that any `e-mail` in their visible strings follows P1.

---

## 5. Open points

- The adilet.zan.kz site now titles itself «НЦПС «Әділет»» (Национальная цифровая правовая система). The disambiguation keeps "legal information system" / «информационно-правовая система», as approved in `claims.md` and as the site's own fallback text still says. Revisit this if the product team wants to use the new name.
- KK «Қойма» for Vault and «резервтік ұстаным» for fallback position are editorial choices, because no statutory term exists. If a native-speaker reviewer prefers alternatives («Құжат қоймасы», «балама ұстаным»), change this file first, then the namespaces.
- **rev 2, for the claims owner:** the practice profile (team playbook) is also sent to the AI model without pseudonymisation (platform verifier 3.7, 3.13). `claims.md` does not list it among the exceptions, so line 7a does not mention it. If it should, add it to `claims.md` first, then to 7a.
- **rev 2, for a native legal reviewer:** the KK statutory term for "lost profit" (Civil Code Art. 9(4)). The site uses the descriptive «алынбай қалған табыс»; «айырылып қалған пайда» was a candidate and could not be confirmed, because adilet.zan.kz does not load without JavaScript.
- **rev 2, for counsel:** «косвенные убытки» in the RU Terms (EN "indirect losses") is not an RK Civil Code concept, which uses «реальный ущерб» and «упущенная выгода».
- **rev 2:** U+2011 was checked only in Chromium (section 6.5); Firefox and WebKit are not installed here. If a later check shows a different glyph, write «адрес электронной почты» in RU and "email address" in EN instead.

## 6. Verification notes

1. Kazakh Civil Procedure Code (K1500000377): «148-бап. Талап қоюдың нысаны мен мазмұны». The statement of claim is «талап қою». Also attested: «талап қоюшы», «жауапкер», «өкіл», «сенімхат» (Art. 149), «талап қоюға пікір» (statement of defence, Art. 166).
2. Law No. 94-V on personal data, Art. 1: «дербес деректер», «дербес деректер субъектісі», «оператор», «үшінші тұлға». «иесіздендіру» is defined as actions after which the data can no longer be attributed to the data subject. That is anonymisation, so it is not a term for our reversible masking. «трансшекаралық беру» is in Art. 16.
3. egov.kz uses «екі факторлы аутентификация». Supreme Court acts use «сот практикасы», «нормативтік қаулы», «сот шешімі». The AIFC law is titled «"Астана" халықаралық қаржы орталығы туралы» (АХҚО). The adilet.zan.kz UI uses «ҚР Әділет министрлігі».
4. **rev 2, access tokens.** KK «қол жеткізу токені». «Қол жеткізу» is "to gain access", the term of the Law «Ақпаратқа қол жеткізу туралы» (No. 401-V, the Law on access to information) and of RK information-security texts. «Қолжетімділік» means availability or accessibility («қолжетімді баспана», accessibility for disabled people), so «қолжетімділік токені» would read as "accessibility token". The product facts behind line 12 are in product-platform_security_billing.md, verifier 3.1: the access, refresh and ID tokens stay in Redis on the server, and the browser gets only a sealed (AES-256-GCM), HttpOnly cookie with the session id and profile.
5. **rev 2, special characters.** The served subsets of Geist and Source Serif 4 have no U+2011 glyph. In Chromium (Playwright, against the running dev server), «e‑mail» with U+2011 renders exactly as wide as «e-mail» (121 px at 40 px Source Serif 4, 116 px in Geist), so Chromium substitutes the font's own hyphen, and the word never breaks. With an ASCII hyphen, the same 9.2ch box breaks it as «e-» / «mail». The site already uses U+2011 in `kk/home.json` («500 МБ‑қа»), `MockTranslation.vue` and `legal/privacy/en.vue`.
6. **rev 2, line length.** `glossary-tools/kkmeasure.cjs` measured the characters per 358 px line quoted in checklist E. EN/RU/KK heading averages were computed over all 223 `title` keys that exist in all three locales.
7. **rev 2, legal words (from established usage, not re-checked against the code texts in this run).** «борышкер» is the debtor in the laws on rehabilitation and bankruptcy and on enforcement proceedings («өндіріп алушы», «борышкер») and in Civil Code Art. 297; most older Civil Code articles still say «борышқор». «уәж» is the procedural word for an argument («шағымның уәждері», «шешімнің уәждеме бөлігі»). «өсімпұл» follows the amended Art. 297 («тұрақсыздық айыбы (айыппұл, өсімпұл)»).
8. `Intl` output (Node ICU): en-GB «12 October 2026»; ru «12 октября 2026 г.»; kk «2026 ж. 12 қазан» (needs the post-processing above). With `narrowSymbol`, KZT prints as «12 500 000 ₸» in ru/kk and «₸12,500,000» in en-GB.

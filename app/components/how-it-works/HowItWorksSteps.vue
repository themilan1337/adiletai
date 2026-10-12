<script setup lang="ts">
// The six steps in detail: text left (sticky from lg), a product fragment right. Fragments keep the product's Russian
// chrome (lang="ru"); the typed question, the answer and the reviewer note follow the page locale, as in the product.
// Sources are the penalty scenario used across the site (Civil Code art. 293 and 297, clause 7.2), quoted verbatim.
const { t, tm, rt, locale } = useI18n()
const localePath = useLocalePath()

// ponytail: Object.values accepts both an array and the index-keyed object tm() can return after a locale hot reload.
const strings = (key: string) => Object.values(tm(key) as Record<string, string>).map(s => rt(s))

const STEPS = ['ask', 'mask', 'retrieve', 'write', 'cite', 'review'] as const
const SOURCE_ICONS = ['hugeicons:justice-scale-01', 'hugeicons:global-search', 'hugeicons:files-02']

const sources = computed(() => Object.values(tm('howItWorks.steps.retrieve.sources') as Record<string, { title: string, body: string }>)
  .map((s, i) => ({ title: rt(s.title), body: rt(s.body), icon: SOURCE_ICONS[i]! })))
// "a[3]b" -> ['a', '3', 'b']: odd indexes are citation numbers.
const answer = computed(() => strings('howItWorks.steps.write.answer').map(p => p.split(/\[(\d)\]/)))

const FILE = 'Договор поставки № 14-П.pdf'
const PROGRESS = [
  { title: 'Анализ запроса', icon: 'hugeicons:sparkles', queries: [] },
  { title: 'Поиск в законодательстве РК', icon: 'hugeicons:justice-scale-01', queries: ['уменьшение неустойки', 'понятие неустойки'] },
  { title: 'Поиск по вашим документам', icon: 'hugeicons:file-search', queries: ['пеня без ограничения'], rag: true },
]
// A chat file's card has no subtitle in the product (only Vault documents show the Vault name).
const SOURCE_GROUPS = [
  { group: 'Документы', icon: 'hugeicons:file-01', items: [
    { n: 1, kind: 'doc' as const, label: FILE, subtitle: '', quote: '7.2. За нарушение сроков оплаты Покупатель уплачивает Поставщику пеню за каждый день просрочки без ограничения общей суммы.' },
  ] },
  { group: 'База знаний', icon: 'hugeicons:books-02', items: [
    { n: 2, kind: 'kb' as const, label: 'Статья 297. Уменьшение размера неустойки', subtitle: 'Кодекс · Гражданский кодекс РК (Общая часть)', quote: 'Если подлежащая уплате неустойка (штраф, пеня) чрезмерно велика по сравнению с убытками кредитора, суд по требованию должника вправе уменьшить неустойку (штраф, пеню), учитывая степень выполнения обязательства должником и заслуживающие внимания интересы должника и кредитора.' },
    { n: 3, kind: 'kb' as const, label: 'Статья 293. Понятие неустойки', subtitle: 'Кодекс · Гражданский кодекс РК (Общая часть)', quote: 'По требованию об уплате неустойки кредитор не обязан доказывать причинение ему убытков.' },
  ] },
]
</script>

<template>
  <section aria-labelledby="hiw-steps-title" class="py-20 md:py-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading id="hiw-steps-title" :title="t('howItWorks.steps.title')" :continuation="t('howItWorks.steps.continuation')" />

      <div class="mt-14 md:mt-16">
        <div
          v-for="(key, i) in STEPS"
          :id="`step-${i + 1}`"
          :key="key"
          class="grid scroll-mt-20 gap-10 border-t border-line py-14 last:pb-0 md:py-16 lg:grid-cols-12 lg:gap-12"
        >
          <!-- Text (capped to a reading measure while it spans the full width below lg) -->
          <div class="min-w-0 max-w-copy lg:sticky lg:top-24 lg:col-span-5 lg:max-w-none lg:self-start">
            <span class="flex size-9 items-center justify-center rounded-full border border-line-strong bg-surface text-sm font-semibold text-ink tabular-nums" aria-hidden="true">{{ i + 1 }}</span>
            <h3 class="mt-5 font-display text-display-3 text-balance text-ink">
              {{ t(`howItWorks.steps.${key}.title`) }}
            </h3>
            <p class="mt-4 text-base leading-relaxed text-pretty text-ink-muted">
              {{ t(`howItWorks.steps.${key}.body`) }}
            </p>

            <FeatureList v-if="key === 'ask' || key === 'write'" :items="strings(`howItWorks.steps.${key}.points`)" class="mt-6" />

            <dl v-if="key === 'retrieve'" class="mt-6 divide-y divide-line border-y border-line">
              <!-- dt/dd must be direct children of the group div, so the icon sits absolutely in the dt's gutter. -->
              <div v-for="s in sources" :key="s.title" class="relative py-4 pl-8">
                <dt class="text-sm font-semibold text-ink">
                  <Icon :name="s.icon" class="absolute top-4.5 left-0 size-5! text-accent-600" aria-hidden="true" />
                  {{ s.title }}
                </dt>
                <dd class="mt-1 text-sm leading-relaxed text-ink-muted [overflow-wrap:anywhere]">
                  {{ s.body }}
                </dd>
              </div>
            </dl>

            <p v-if="key === 'cite'" class="mt-4 text-base leading-relaxed text-ink-muted">
              {{ t('howItWorks.steps.cite.reviewer') }}
            </p>

            <p v-if="key === 'mask' || key === 'retrieve'" class="mt-6 flex items-start gap-2.5 rounded-card bg-surface-muted px-4 py-3 text-sm leading-relaxed text-ink-muted">
              <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
              {{ t(key === 'mask' ? 'howItWorks.steps.mask.scope' : 'howItWorks.steps.retrieve.fallback') }}
            </p>

            <div v-if="key === 'write'" class="mt-6 flex items-start gap-2.5 rounded-card bg-surface-muted px-4 py-3 text-sm leading-relaxed text-ink-muted">
              <Icon name="hugeicons:cloud-server" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
              <p>
                {{ t('howItWorks.steps.write.providers') }}
                <NuxtLink :to="localePath('/security')" class="font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600">
                  {{ t('howItWorks.steps.write.providersLink') }}
                </NuxtLink>
              </p>
            </div>
          </div>

          <!-- Fragment -->
          <div class="min-w-0 lg:col-span-7">
            <!-- 1. Composer with a file, a vault and the attach menu -->
            <MockFrame v-if="key === 'ask'" class="reveal" :caption="t('howItWorks.steps.ask.caption')" tile-class="p-3 sm:p-8">
              <div class="bg-white px-4 pt-5 pb-32 text-stone-900 sm:px-7 sm:pt-7">
                <div lang="ru" class="flex flex-wrap gap-2">
                  <span class="flex max-w-full items-center gap-2 rounded-lg border border-stone-200/90 bg-white py-1.5 pr-3 pl-1.5">
                    <span class="flex size-7 shrink-0 items-center justify-center rounded-md bg-red-500 text-white"><Icon name="hugeicons:file-02" class="size-3.5!" /></span>
                    <span class="truncate text-xs font-medium text-stone-800">{{ FILE }}</span>
                    <span class="text-[10px] font-medium text-stone-500 uppercase">PDF</span>
                  </span>
                  <span class="flex max-w-full items-center gap-2 rounded-lg border border-accent-200 bg-accent-50 py-1.5 pr-2.5 pl-2 text-accent-800">
                    <Icon name="hugeicons:folder-01" class="size-4! shrink-0" />
                    <span class="truncate text-xs font-medium">Договоры поставщиков</span>
                    <Icon name="hugeicons:cancel-01" class="size-3! shrink-0 text-accent-600" />
                  </span>
                </div>
                <div class="relative mt-3 rounded-[1.5rem] border border-stone-200 bg-stone-50 px-5 pt-4 pb-14">
                  <p :lang="locale" class="text-sm leading-relaxed text-stone-800">
                    {{ t('howItWorks.steps.ask.question') }}<span class="ml-px inline-block h-4 w-px translate-y-0.5 bg-stone-800 motion-safe:animate-pulse" />
                  </p>
                  <span class="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-stone-200 text-stone-700"><Icon name="hugeicons:attachment-02" class="size-4!" /></span>
                  <span class="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-stone-900 text-white"><Icon name="hugeicons:arrow-up-02" class="size-4!" /></span>
                  <div lang="ru" class="absolute top-full left-3 mt-2 w-52 rounded-2xl border border-stone-200/80 bg-white py-1.5 shadow-xl">
                    <p v-for="item in [{ label: 'Из хранилища', icon: 'hugeicons:folder-01' }, { label: 'С компьютера', icon: 'hugeicons:upload-04' }]" :key="item.label" class="flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-stone-800 first:bg-stone-50">
                      <span class="flex size-7 items-center justify-center rounded-lg bg-stone-100 text-stone-600"><Icon :name="item.icon" class="size-3.5!" /></span>
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
            </MockFrame>

            <!-- 2. Pseudonymisation diagram (shared, accessible) -->
            <MockPseudonymisation v-else-if="key === 'mask'" class="reveal" />

            <!-- 3. Progress panel -->
            <MockFrame v-else-if="key === 'retrieve'" class="reveal" :caption="t('howItWorks.steps.retrieve.caption')" tile-class="p-3 sm:p-8">
              <div lang="ru" class="bg-white px-5 py-5 text-stone-900 sm:px-7 sm:py-6">
                <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600">
                  <Icon name="hugeicons:sparkles" class="size-3! text-stone-500" /> Режим: Ассистент
                </span>
                <!-- While the answer streams the product titles this panel "В работе…" (it reads "Ход выполнения" afterwards). -->
                <p class="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-stone-500">
                  <Icon name="hugeicons:arrow-down-01" class="size-3.5! rotate-180 text-stone-400" /> <span class="hiw-shine">В работе…</span>
                </p>
                <ol class="mt-3">
                  <li v-for="step in PROGRESS" :key="step.title" class="flex gap-3">
                    <div class="flex w-5 shrink-0 flex-col items-center">
                      <span class="flex size-5 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white">
                        <Icon :name="step.icon" class="size-3! text-stone-500" />
                      </span>
                      <span class="w-px flex-1 bg-stone-200" />
                    </div>
                    <div class="min-w-0 flex-1 pb-4">
                      <p class="flex flex-wrap items-center gap-1.5 text-[13px] leading-5 font-medium text-stone-800">
                        {{ step.title }}
                        <span v-if="step.rag" class="rounded bg-stone-100 px-1.5 py-px text-[9px] font-semibold tracking-wide text-stone-500 uppercase">RAG</span>
                      </p>
                      <div v-if="step.queries.length" class="mt-1.5 flex flex-wrap gap-1">
                        <span v-for="q in step.queries" :key="q" class="inline-flex items-center gap-1 rounded-full border border-stone-200/80 bg-stone-50 px-2 py-0.5 text-[11px] text-stone-600">
                          <Icon name="hugeicons:search-01" class="size-3! text-stone-400" /> {{ q }}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="flex gap-3">
                    <span class="flex size-5 shrink-0 items-center justify-center">
                      <span class="size-3.5 rounded-full border-2 border-stone-300 border-t-stone-600 motion-safe:animate-spin" />
                    </span>
                    <p class="hiw-shine min-w-0 text-[13px] leading-5 font-medium">
                      Формулирую ответ с учётом найденного контекста…
                    </p>
                  </li>
                </ol>
              </div>
            </MockFrame>

            <!-- 4. The answer as it is written -->
            <MockFrame v-else-if="key === 'write'" class="reveal" :caption="t('howItWorks.steps.write.caption')" tile-class="p-3 sm:p-8">
              <div class="bg-white px-5 py-5 text-stone-900 sm:px-7 sm:py-6">
                <span lang="ru" class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600">
                  <Icon name="hugeicons:sparkles" class="size-3! text-stone-500" /> Режим: Ассистент
                </span>
                <div :lang="locale" class="mt-4 space-y-3 text-[13.5px] leading-relaxed text-stone-800">
                  <p v-for="(parts, p) in answer" :key="p">
                    <template v-for="(part, j) in parts" :key="j">
                      <sup v-if="j % 2" class="mx-px rounded bg-stone-100 px-1 text-[0.72em] font-semibold text-stone-700 tabular-nums ring-1 ring-stone-300 ring-inset">{{ part }}</sup>
                      <template v-else>
                        {{ part }}
                      </template>
                    </template>
                  </p>
                </div>
                <div lang="ru" class="mt-4 flex items-center gap-1.5">
                  <span class="flex size-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-500"><Icon name="hugeicons:copy-01" class="size-3.5!" /></span>
                  <span class="flex size-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-500"><Icon name="hugeicons:refresh" class="size-3.5!" /></span>
                  <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 text-[11.5px] font-medium text-stone-700">
                    <Icon name="hugeicons:bookmark-02" class="size-3.5! text-stone-500" /> Источники · 3
                  </span>
                </div>
              </div>
            </MockFrame>

            <!-- 5. Reviewer note and the Sources panel opened from citation 2 -->
            <MockFrame v-else-if="key === 'cite'" class="reveal" :caption="t('howItWorks.steps.cite.caption')" tile-class="p-3 sm:p-8">
              <div class="flex flex-col text-stone-900 sm:flex-row">
                <div class="min-w-0 flex-1 bg-white px-5 py-5">
                  <!-- The product's prompts open substantive answers with this note, so it sits above the text. -->
                  <div :lang="locale" class="mb-4 rounded-r-lg border-l-2 border-amber-300 bg-amber-50/60 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-stone-700">
                    <p class="mb-0.5 flex items-start gap-1.5 font-semibold text-stone-800">
                      <Icon name="hugeicons:alert-02" class="mt-0.5 size-3.5! shrink-0 text-amber-600" /> {{ t('howItWorks.steps.cite.noteTitle') }}
                    </p>
                    <p>{{ t('howItWorks.steps.cite.note') }}</p>
                  </div>
                  <div :lang="locale" class="space-y-3 text-[13px] leading-relaxed text-stone-800">
                    <p v-for="(parts, p) in answer" :key="p">
                      <template v-for="(part, j) in parts" :key="j">
                        <sup
                          v-if="j % 2"
                          class="mx-px rounded px-1 text-[0.72em] font-semibold tabular-nums"
                          :class="part === '2' ? 'bg-accent-600 text-white' : 'bg-stone-100 text-stone-700 ring-1 ring-stone-300 ring-inset'"
                        >{{ part }}</sup>
                        <template v-else>
                          {{ part }}
                        </template>
                      </template>
                    </p>
                  </div>
                  <div lang="ru" class="mt-4 flex items-center gap-1.5">
                    <span class="flex size-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-500"><Icon name="hugeicons:copy-01" class="size-3.5!" /></span>
                    <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-900 bg-white px-2.5 text-[11.5px] font-medium text-stone-900">
                      <Icon name="hugeicons:bookmark-02" class="size-3.5! text-stone-500" /> Источники · 3
                    </span>
                  </div>
                </div>
                <div lang="ru" class="w-full shrink-0 border-t border-stone-200 bg-stone-50/60 sm:w-[18rem] sm:border-t-0 sm:border-l">
                  <div class="border-b border-stone-200/80 bg-white px-4 py-3.5">
                    <p class="flex items-center gap-1.5 text-[10px] font-medium tracking-wider text-stone-500 uppercase">
                      <Icon name="hugeicons:bookmark-02" class="size-3!" /> Цитирование
                    </p>
                    <p class="mt-0.5 text-base leading-snug font-semibold">
                      Источники · 3
                    </p>
                  </div>
                  <div class="space-y-4 px-3.5 py-4">
                    <div v-for="g in SOURCE_GROUPS" :key="g.group" class="space-y-2">
                      <p class="flex items-center gap-1.5 px-1 text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
                        <Icon :name="g.icon" class="size-3!" /> {{ g.group }} · {{ g.items.length }}
                      </p>
                      <MockSourceCard v-for="s in g.items" :key="s.n" :index="s.n" :kind="s.kind" :label="s.label" :subtitle="s.subtitle" :quote="s.quote" :highlighted="s.n === 2" />
                    </div>
                  </div>
                </div>
              </div>
            </MockFrame>

            <!-- 6. What the reviewing lawyer checks (not product UI) -->
            <div v-else class="reveal rounded-tile bg-accent-50 p-6 ring-1 ring-accent-100 md:p-8">
              <p class="flex items-center gap-2.5 text-base font-semibold text-ink">
                <Icon name="hugeicons:user-check-01" class="size-5! text-accent-600" aria-hidden="true" />
                {{ t('howItWorks.steps.review.checklistTitle') }}
              </p>
              <FeatureList :items="strings('howItWorks.steps.review.checklist')" class="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* The product's "drafting" shimmer on the last progress line; static grey under reduced motion. */
.hiw-shine {
  color: transparent;
  background: linear-gradient(90deg, #78716c 0%, #78716c 40%, #d6d3d1 50%, #78716c 60%, #78716c 100%) 0 0 / 200% 100%;
  background-clip: text;
}
@media (prefers-reduced-motion: no-preference) {
  .hiw-shine { animation: var(--animate-shine); }
}
</style>

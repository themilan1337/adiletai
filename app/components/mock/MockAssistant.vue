<script setup lang="ts">
// Assistant thread with the Sources drawer open (adilet-b2b: AppSidebar, AssistantMessagesPanel, AssistantAgentSteps,
// AssistantModeBadge, AssistantSourcesDrawer). Chrome, steps and sources stay Russian (lang="ru"); the conversation
// comes in through props and follows the page locale. "[n]" in an answer paragraph renders citation marker n.
// The default (general) mode is the one that answers in the user's language, hence "Режим: Ассистент".
// Breakpoints: thread only below md, + Sources drawer from md, + sidebar from xl. One CSS entrance; SSR = final state.
const props = withDefaults(defineProps<{
  question: string
  answer: string[]
  noteTitle: string
  note: string
  lang: string
  sidebar?: boolean
  drawer?: boolean
}>(), { sidebar: true, drawer: true })

// "a[3]b" -> ['a', '3', 'b']: odd indexes are citation numbers.
const paragraphs = computed(() => props.answer.map(p => p.split(/\[(\d)\]/)))

const FILE = 'Договор поставки № 14-П.pdf'
const ACTIVE_SOURCE = 2
const STEPS = [
  { title: 'Поиск в законодательстве РК', icon: 'hugeicons:justice-scale-01', queries: ['уменьшение неустойки', 'понятие неустойки'] },
  { title: 'Поиск по вашим документам', icon: 'hugeicons:file-search', queries: ['пеня без ограничения'], rag: true },
]
// Quotes are verbatim from the product's legislation corpus (Civil Code, General Part, edition of 12.03.2026).
const SOURCES = [
  { group: 'Документы', icon: 'hugeicons:file-01', items: [
    { n: 1, kind: 'doc' as const, label: FILE, subtitle: 'Файл чата', quote: '7.2. За нарушение сроков оплаты Покупатель уплачивает Поставщику пеню за каждый день просрочки без ограничения общей суммы.' },
  ] },
  { group: 'База знаний', icon: 'hugeicons:books-02', items: [
    { n: 2, kind: 'kb' as const, label: 'Статья 297. Уменьшение размера неустойки', subtitle: 'Кодекс · Гражданский кодекс РК (Общая часть)', quote: 'Если подлежащая уплате неустойка (штраф, пеня) чрезмерно велика по сравнению с убытками кредитора, суд по требованию должника вправе уменьшить неустойку (штраф, пеню), учитывая степень выполнения обязательства должником и заслуживающие внимания интересы должника и кредитора.' },
    { n: 3, kind: 'kb' as const, label: 'Статья 293. Понятие неустойки', subtitle: 'Кодекс · Гражданский кодекс РК (Общая часть)', quote: 'По требованию об уплате неустойки кредитор не обязан доказывать причинение ему убытков.' },
  ] },
]
</script>

<template>
  <!-- min-h, not h: a long KK/RU answer on a phone grows the frame and the host tile crops it, instead of the mock
       clipping its own toolbar inside the frame's rounded bottom. -->
  <div class="flex min-h-[46rem] text-stone-900">
    <MockSidebar v-if="sidebar" active="assistant" class="hidden xl:flex" />

    <!-- Thread -->
    <div class="min-w-0 flex-1 bg-white">
      <div lang="ru" class="flex h-11 items-center justify-end gap-4 px-5 text-xs text-stone-500">
        <span class="flex items-center gap-1.5"><Icon name="hugeicons:clock-01" class="size-3.5!" /> История</span>
        <span class="flex items-center gap-1.5"><Icon name="hugeicons:add-01" class="size-3.5!" /> Новый чат</span>
      </div>

      <div class="mx-auto max-w-[37rem] space-y-4 px-4 pt-2 pb-10 sm:px-7">
        <!-- User turn: attached file chip, then the question -->
        <div class="mock-seq flex flex-col items-end gap-2" style="--d: 100ms">
          <div lang="ru" class="flex max-w-full items-center gap-2 rounded-lg border border-stone-200/90 bg-white py-1.5 pr-3 pl-1.5">
            <span class="flex size-7 shrink-0 items-center justify-center rounded-md bg-red-500 text-white"><Icon name="hugeicons:file-02" class="size-3.5!" /></span>
            <span class="truncate text-xs font-medium text-stone-800">{{ FILE }}</span>
            <span class="text-[10px] font-medium text-stone-500 uppercase">PDF</span>
          </div>
          <p :lang="lang" class="max-w-[88%] rounded-2xl rounded-br-sm bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-white">
            {{ question }}
          </p>
        </div>

        <!-- Assistant turn -->
        <div>
          <span lang="ru" class="mock-seq inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600" style="--d: 300ms">
            <Icon name="hugeicons:sparkles" class="size-3! text-stone-500" /> Режим: Ассистент
          </span>

          <div lang="ru" class="mock-seq mt-3" style="--d: 400ms">
            <!-- Phones show the panel collapsed (the product's default state), so the chevron points down there. -->
            <p class="flex items-center gap-1.5 text-[13px] font-medium text-stone-500">
              <Icon name="hugeicons:arrow-down-01" class="size-3.5! text-stone-400 sm:rotate-180" /> Ход выполнения
            </p>
            <ol class="mt-2.5 max-sm:hidden">
              <li v-for="(step, i) in STEPS" :key="step.title" class="flex gap-3">
                <div class="flex w-5 shrink-0 flex-col items-center">
                  <span class="flex size-5 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white">
                    <Icon :name="step.icon" class="size-3! text-stone-500" />
                  </span>
                  <span v-if="i < STEPS.length - 1" class="w-px flex-1 bg-stone-200" />
                </div>
                <div class="min-w-0 flex-1 pb-3">
                  <p class="flex items-center gap-1.5 text-[13px] leading-5 font-medium text-stone-800">
                    {{ step.title }}
                    <span v-if="step.rag" class="rounded bg-stone-100 px-1.5 py-px text-[9px] font-semibold tracking-wide text-stone-500 uppercase">RAG</span>
                  </p>
                  <div class="mt-1.5 flex flex-wrap gap-1">
                    <span v-for="q in step.queries" :key="q" class="inline-flex items-center gap-1 rounded-full border border-stone-200/80 bg-stone-50 px-2 py-0.5 text-[11px] text-stone-600">
                      <Icon name="hugeicons:search-01" class="size-3! text-stone-400" /> {{ q }}
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div :lang="lang" class="mt-2.5 space-y-3 text-[13.5px] leading-relaxed text-stone-800 sm:mt-1">
            <p v-for="(parts, i) in paragraphs" :key="i" class="mock-seq" :style="{ '--d': `${600 + i * 150}ms` }">
              <template v-for="(part, j) in parts" :key="j">
                <sup
                  v-if="j % 2"
                  class="mx-px rounded px-1 text-[0.72em] font-semibold tabular-nums"
                  :class="Number(part) === ACTIVE_SOURCE ? 'bg-accent-600 text-white' : 'bg-stone-100 text-stone-700 ring-1 ring-stone-300 ring-inset'"
                >{{ part }}</sup>
                <template v-else>
                  {{ part }}
                </template>
              </template>
            </p>
            <div class="mock-seq rounded-r-lg border-l-2 border-amber-300 bg-amber-50/60 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-stone-700" style="--d: 900ms">
              <p class="mb-0.5 flex items-center gap-1.5 font-semibold text-stone-800">
                <Icon name="hugeicons:alert-02" class="size-3.5! shrink-0 text-amber-600" /> {{ noteTitle }}
              </p>
              <p>{{ note }}</p>
            </div>
          </div>

          <div lang="ru" class="mock-seq mt-3 flex items-center gap-1.5" style="--d: 1050ms">
            <span class="flex size-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-500"><Icon name="hugeicons:copy-01" class="size-3.5!" /></span>
            <span class="flex size-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-500"><Icon name="hugeicons:refresh" class="size-3.5!" /></span>
            <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-900 bg-white px-2.5 text-[11.5px] font-medium text-stone-900">
              <Icon name="hugeicons:bookmark-02" class="size-3.5! text-stone-500" /> Источники · 3
              <span class="ml-0.5 flex">
                <span class="flex size-4 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-stone-200"><Icon name="hugeicons:file-02" class="size-2.5!" /></span>
                <span class="-ml-1.5 flex size-4 items-center justify-center rounded-full bg-stone-50 text-stone-600 ring-1 ring-stone-200"><Icon name="hugeicons:books-02" class="size-2.5!" /></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sources drawer, opened from citation 2 -->
    <div v-if="drawer" lang="ru" class="hidden w-[19rem] shrink-0 flex-col border-l border-stone-200 bg-stone-50/60 md:flex xl:w-[21rem]">
      <div class="flex items-start justify-between gap-3 border-b border-stone-200/80 bg-white px-5 py-4">
        <div>
          <p class="flex items-center gap-1.5 text-[10px] font-medium tracking-wider text-stone-500 uppercase">
            <Icon name="hugeicons:bookmark-02" class="size-3!" /> Цитирование
          </p>
          <p class="mt-0.5 text-base leading-snug font-semibold text-stone-900">
            Источники · 3
          </p>
        </div>
        <Icon name="hugeicons:cancel-01" class="size-4! text-stone-400" />
      </div>
      <div class="space-y-5 px-4 py-4">
        <div v-for="group in SOURCES" :key="group.group" class="space-y-2">
          <p class="flex items-center gap-1.5 px-1 text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
            <Icon :name="group.icon" class="size-3!" /> {{ group.group }} · {{ group.items.length }}
          </p>
          <MockSourceCard
            v-for="s in group.items"
            :key="s.n"
            class="mock-seq"
            :style="{ '--d': `${350 + s.n * 100}ms` }"
            :index="s.n"
            :kind="s.kind"
            :label="s.label"
            :subtitle="s.subtitle"
            :quote="s.quote"
            :highlighted="s.n === ACTIVE_SOURCE"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* One scripted pass on load: question, badge, steps, answer, note, toolbar. SSR renders the final state;
   with reduced motion nothing moves. */
@media (prefers-reduced-motion: no-preference) {
  .mock-seq {
    animation: mock-in 0.45s var(--ease-out-quint) both;
    animation-delay: var(--d, 0ms);
  }
}
@keyframes mock-in {
  from { opacity: 0; transform: translateY(6px); }
}
</style>

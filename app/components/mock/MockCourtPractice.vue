<script setup lang="ts">
// Court practice analysis, "Дела" tab (adilet-b2b: pages/litigation/[id]/cases, LitigationRelevantCasesList,
// LitigationCaseDetailDrawer). The "Объяснение релевантности" toggle is drawn off: it is not a case-specific
// explanation. The court's legal position shows in the decision drawer (Ratio decidendi), as in the product.
// Sample decisions: case numbers, parties and dates are illustrative. Numbers follow the current Kazakhstan court format
// (court code-year-00-2/sequence, e.g. the product prompt's 7517-25-00-2/12345); the court codes are not real ones.
// No percentages, forecasts or judge data.
// drawer: the decision detail panel (from lg).
withDefaults(defineProps<{ drawer?: boolean }>(), { drawer: true })

const TABS = ['Анализ', 'Дела (12)', 'Меморандум']
const CASES = [
  {
    id: '№ 7599-25-00-2/1453',
    outcome: { label: 'Удовлетворено частично', cls: 'border-amber-200 bg-amber-50 text-amber-800', dot: 'bg-amber-500' },
    relevance: { label: 'Высокая релевантность', cls: 'bg-emerald-50 text-emerald-700' },
    meta: 'СМЭС г. Шымкента · 14.03.2025',
    summary: 'Поставщик взыскивал пеню за просрочку оплаты. Суд уменьшил неустойку как чрезмерно высокую по сравнению с убытками истца.',
    open: true,
  },
  {
    id: '№ 7527-24-00-2/988',
    outcome: { label: 'Иск удовлетворён', cls: 'border-emerald-200 bg-emerald-50 text-emerald-800', dot: 'bg-emerald-500' },
    relevance: { label: 'Средняя релевантность', cls: 'bg-amber-50 text-amber-700' },
    meta: 'СМЭС г. Алматы · 02.10.2024',
    summary: 'Пеня взыскана в полном объёме: ответчик не заявил о несоразмерности неустойки и не представил доводов о размере убытков.',
  },
  {
    id: '№ 7194-25-00-2/212',
    outcome: { label: 'В иске отказано', cls: 'border-red-200 bg-red-50 text-red-800', dot: 'bg-red-500' },
    relevance: { label: 'Косвенная релевантность', cls: 'bg-stone-100 text-stone-600' },
    meta: 'СМЭС г. Астаны · 21.05.2025',
    summary: 'Во взыскании пени отказано: соглашение о неустойке не было совершено в письменной форме.',
  },
]
</script>

<template>
  <div lang="ru" class="flex bg-stone-50 text-stone-900">
    <div class="min-w-0 flex-1">
      <div class="border-b border-stone-200/90 bg-white px-5 pt-4">
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p class="truncate text-xs text-stone-500">
              Аналитика / Взыскание пени по договору поставки
            </p>
            <p class="mt-1 text-lg font-semibold tracking-tight">
              Взыскание пени по договору поставки
            </p>
            <p class="mt-0.5 text-[11px] text-stone-500">
              Сторона клиента: ответчик · Договоры поставки
            </p>
          </div>
          <div class="hidden shrink-0 gap-2 sm:flex">
            <span class="inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700">
              <Icon name="hugeicons:activity-03" class="size-3.5!" /> События
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-md bg-stone-900 px-3 py-1.5 text-xs font-medium text-white">
              <Icon name="hugeicons:download-04" class="size-3.5!" /> Экспорт
            </span>
          </div>
        </div>
        <div class="mt-3 flex gap-5 text-[13px]">
          <span
            v-for="(tab, i) in TABS"
            :key="tab"
            class="border-b-2 pb-2.5"
            :class="i === 1 ? 'border-stone-900 font-medium text-stone-900' : 'border-transparent text-stone-500'"
          >{{ tab }}</span>
        </div>
      </div>

      <div class="space-y-3 px-4 py-4 sm:px-5">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="inline-flex rounded-lg bg-stone-100 p-0.5 text-[11px] font-medium">
            <span class="rounded-md bg-white px-2.5 py-1 text-stone-900 shadow-sm ring-1 ring-stone-200">Список</span>
            <span class="px-2.5 py-1 text-stone-500">Таблица</span>
          </span>
          <!-- Toggle, off -->
          <span class="inline-flex h-[30px] items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 text-[11px] font-medium text-stone-600">
            <Icon name="hugeicons:link-forward" class="size-3.5!" /> Объяснение релевантности
          </span>
        </div>
        <p class="text-[11px] text-stone-500 tabular-nums">
          Показано 3 из 12 релевантных решений
        </p>

        <div
          v-for="c in CASES"
          :key="c.id"
          class="rounded-xl border bg-white p-4"
          :class="c.open && drawer ? 'border-stone-300 shadow-[0_1px_2px_rgb(28_25_23/0.06)]' : 'border-stone-200/80'"
        >
          <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span class="font-mono text-[13px] font-semibold text-stone-900">{{ c.id }}</span>
            <span class="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap" :class="c.outcome.cls">
              <span class="size-1.5 rounded-full" :class="c.outcome.dot" />{{ c.outcome.label }}
            </span>
            <span class="hidden rounded-full px-2 py-0.5 text-[10.5px] font-medium whitespace-nowrap sm:inline" :class="c.relevance.cls">{{ c.relevance.label }}</span>
            <span class="ml-auto inline-flex items-center gap-1 text-xs text-stone-600">
              <Icon name="hugeicons:link-square-02" class="size-3.5!" /> Источник
            </span>
          </div>
          <p class="mt-1 text-[11px] text-stone-500">
            {{ c.meta }}
          </p>
          <p class="mt-2 line-clamp-2 text-[13px] leading-snug text-stone-700">
            {{ c.summary }}
          </p>
        </div>
      </div>
    </div>

    <!-- Decision drawer -->
    <div v-if="drawer" class="hidden w-[20rem] shrink-0 flex-col border-l border-stone-200 bg-white lg:flex">
      <div class="border-b border-stone-200/90 px-5 py-4">
        <div class="flex items-start justify-between gap-3">
          <p class="text-[10px] font-medium tracking-wider text-stone-500 uppercase">
            Судебный акт · № 7599-25-00-2/1453
          </p>
          <Icon name="hugeicons:cancel-01" class="size-4! text-stone-400" />
        </div>
        <p class="mt-1 text-sm leading-snug font-semibold text-stone-900">
          Неустойка за просрочку оплаты уменьшена судом
        </p>
        <div class="mt-2 flex flex-wrap gap-1">
          <span class="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10.5px] font-medium text-amber-800">Удовлетворено частично</span>
          <span class="rounded-full bg-stone-100 px-2 py-0.5 text-[10.5px] font-medium text-stone-600">СМЭС · Шымкент</span>
          <span class="rounded-full bg-stone-100 px-2 py-0.5 text-[10.5px] font-medium text-stone-600 tabular-nums">14.03.2025</span>
        </div>
      </div>
      <div class="space-y-4 px-5 py-4">
        <div>
          <p class="text-[10px] font-medium tracking-wider text-stone-500 uppercase">
            Стороны
          </p>
          <div class="mt-1.5 grid grid-cols-2 gap-2">
            <div class="rounded-lg border border-stone-200/90 px-2.5 py-2">
              <p class="text-[10px] text-stone-500">
                Истец
              </p>
              <p class="text-[11.5px] font-medium text-stone-800">
                ТОО «Альфа»
              </p>
            </div>
            <div class="rounded-lg border border-stone-200/90 px-2.5 py-2">
              <p class="text-[10px] text-stone-500">
                Ответчик
              </p>
              <p class="text-[11.5px] font-medium text-stone-800">
                ТОО «Бета»
              </p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-[10px] font-medium tracking-wider text-stone-500 uppercase">
            Применённые нормы
          </p>
          <div class="mt-1.5 flex flex-wrap gap-1">
            <span class="rounded-md bg-stone-100 px-1.5 py-0.5 text-[10.5px] font-medium text-stone-600">ст. 297 ГК РК</span>
            <span class="rounded-md bg-stone-100 px-1.5 py-0.5 text-[10.5px] font-medium text-stone-600">ст. 293 ГК РК</span>
          </div>
        </div>
        <div>
          <p class="text-[10px] font-medium tracking-wider text-stone-500 uppercase">
            Ratio decidendi
          </p>
          <p class="mt-1.5 rounded-lg border-l-2 border-stone-700 bg-stone-50 px-3 py-2 text-[11.5px] leading-[1.6] text-stone-700 italic">
            Неустойка может быть уменьшена по требованию должника, если она чрезмерно велика по сравнению с убытками кредитора, с учётом степени выполнения обязательства.
          </p>
        </div>
      </div>
      <div class="mt-auto flex gap-2 border-t border-stone-200/90 px-5 py-3">
        <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-200/90 px-2.5 text-[11.5px] font-medium text-stone-700">
          <Icon name="hugeicons:link-square-02" class="size-3.5!" /> Открыть источник
        </span>
        <span class="inline-flex h-7 items-center rounded-lg bg-stone-900 px-2.5 text-[11.5px] font-medium text-white">Добавить в меморандум</span>
      </div>
    </div>
  </div>
</template>

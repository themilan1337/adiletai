<script setup lang="ts">
// Court practice analysis, "Анализ" tab fragment: the risk register (each risk cites its basis or is labelled
// "гипотеза") and the prioritised preparation checklist ("Рекомендации к подготовке дела"). Russian content, sample data.
// The two cards are top-aligned: the checklist is shorter, and stretching it left an empty block under the list.
const RISKS = [
  { severity: 'Высокий', cls: 'bg-orange-50 text-orange-700', title: 'Без заявления о несоразмерности суд не уменьшит пеню', basis: 'Основание: № 7527-24-00-2/988' },
  { severity: 'Средний', cls: 'bg-amber-50 text-amber-700', hypothesis: true, title: 'Истец может подтвердить убытки, сопоставимые с суммой пени', basis: 'Основание в практике не найдено' },
]
const CHECKLIST = [
  { priority: 'Критично', cls: 'bg-red-50 text-red-700', text: 'Заявить о несоразмерности пени в отзыве на иск' },
  { priority: 'Высокий', cls: 'bg-orange-50 text-orange-700', text: 'Подготовить контррасчёт пени' },
  { priority: 'Средний', cls: 'bg-amber-50 text-amber-700', text: 'Запросить у истца расчёт убытков' },
]
</script>

<template>
  <div lang="ru" class="@container bg-stone-50 p-4 text-stone-900">
    <div class="grid gap-3 @lg:grid-cols-2 @lg:items-start">
      <div class="rounded-xl border border-stone-200/80 bg-white p-4">
        <p class="text-[13px] font-semibold">
          Реестр рисков
        </p>
        <p class="text-[11px] text-stone-500">
          2 риска · 1 гипотеза
        </p>
        <div v-for="r in RISKS" :key="r.title" class="mt-3 rounded-lg border border-stone-200 p-3">
          <div class="flex flex-wrap gap-1">
            <span class="rounded px-1.5 py-0.5 text-[10px] font-semibold" :class="r.cls">{{ r.severity }}</span>
            <span v-if="r.hypothesis" class="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold text-stone-600">гипотеза</span>
          </div>
          <p class="mt-1.5 text-xs leading-5 font-medium text-stone-800">
            {{ r.title }}
          </p>
          <p class="mt-1 text-[11px] text-stone-500">
            {{ r.basis }}
          </p>
        </div>
      </div>
      <div class="rounded-xl border border-stone-200/80 bg-white p-4">
        <p class="text-[13px] font-semibold">
          Рекомендации к подготовке дела
        </p>
        <ol class="mt-3 space-y-2.5">
          <li v-for="(item, i) in CHECKLIST" :key="item.text" class="flex gap-2 text-xs leading-5 text-stone-700">
            <span class="text-stone-500 tabular-nums">{{ i + 1 }}.</span>
            <span class="min-w-0">{{ item.text }} <span class="rounded px-1 py-px text-[10px] font-semibold whitespace-nowrap" :class="item.cls">{{ item.priority }}</span></span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

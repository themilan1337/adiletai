<script setup lang="ts">
// The Assistant's clarifying-questions card ("Уточняющие вопросы"): one multiple-choice question, 1 of 3, with
// Пропустить / Далее. The product generates these questions in Russian. Supply-contract sample.
const OPTIONS = [
  { label: 'Поставщик' },
  { label: 'Покупатель', checked: true },
  { label: 'Другое' },
]
</script>

<template>
  <div lang="ru" class="rounded-lg border border-stone-200 bg-white p-3.5 text-stone-900 shadow-card">
    <div class="flex items-start justify-between gap-3">
      <p class="text-[12.5px] leading-snug font-semibold">
        Кто ваша сторона в договоре поставки?
      </p>
      <span class="flex shrink-0 items-center gap-1 text-[10.5px] text-stone-500 tabular-nums">
        <Icon name="hugeicons:arrow-left-01" class="size-3!" /> 1 / 3 <Icon name="hugeicons:arrow-right-01" class="size-3!" />
      </span>
    </div>
    <p class="mt-0.5 text-[11px] text-stone-500">
      Выберите один вариант
    </p>
    <div class="mt-3 space-y-1.5">
      <div
        v-for="opt in OPTIONS"
        :key="opt.label"
        class="flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[12px]"
        :class="opt.checked ? 'border-stone-900 bg-stone-50 text-stone-900' : 'border-stone-200 text-stone-700'"
      >
        <span class="flex size-3.5 items-center justify-center rounded-full border" :class="opt.checked ? 'border-stone-900' : 'border-stone-300 bg-white'">
          <span v-if="opt.checked" class="size-1.5 rounded-full bg-stone-900" />
        </span>
        {{ opt.label }}
      </div>
    </div>
    <div class="mt-3 flex items-center justify-end gap-3 text-[11.5px] font-medium">
      <span class="text-stone-500">Пропустить</span>
      <span class="flex h-7 items-center gap-1 rounded-lg bg-stone-900 px-2.5 text-white">Далее <Icon name="hugeicons:arrow-right-02" class="size-3!" /></span>
    </div>
  </div>
</template>

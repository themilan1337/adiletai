<script setup lang="ts">
// Tax mode in an Assistant thread (adilet-b2b: AssistantModeBadge "Режим: Налоги", answer with a citation marker,
// the Sources button and one Sources-drawer card). The question follows the page locale; the answer stays Russian on
// every locale, because the tax-mode prompt answers in Russian by default (prompts.py TAX_AI_SYSTEM_PROMPT), and the
// chrome stays Russian. The quote is verbatim from Article 503(1) of the Tax Code in the product corpus (edition of
// 18.07.2025). "[n]" in the answer renders citation marker n.
defineProps<{ question: string, lang: string }>()

const ANSWER = 'Ставку НДС устанавливает ст.\u00A0503 Налогового кодекса РК: если этой статьёй не установлено иное, ставка составляет 16\u00A0процентов и применяется к облагаемому обороту и облагаемому импорту[1]. Пункт 2 той же статьи устанавливает пониженные ставки для лекарственных средств, медицинских изделий и медицинских услуг.'
const parts = ANSWER.split(/\[(\d)\]/)
const QUOTE = '1. Если иное не установлено настоящей статьей, ставка налога на добавленную стоимость составляет 16 процентов и применяется к размеру облагаемого оборота и облагаемого импорта.'
</script>

<template>
  <div class="bg-white px-4 pt-5 pb-6 text-stone-900 sm:px-6">
    <p :lang="lang" class="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-white">
      {{ question }}
    </p>

    <span lang="ru" class="mt-5 inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600">
      <Icon name="hugeicons:taxes" class="size-3! text-stone-500" /> Режим: Налоги
    </span>

    <p lang="ru" class="mt-3 text-[13.5px] leading-relaxed text-stone-800">
      <template v-for="(part, i) in parts" :key="i">
        <sup v-if="i % 2" class="mx-px rounded bg-accent-600 px-1 text-[0.72em] font-semibold text-white tabular-nums">{{ part }}</sup>
        <template v-else>
          {{ part }}
        </template>
      </template>
    </p>

    <div lang="ru" class="mt-3 flex items-center gap-1.5">
      <span class="flex size-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-500"><Icon name="hugeicons:copy-01" class="size-3.5!" /></span>
      <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-900 bg-white px-2.5 text-[11.5px] font-medium text-stone-900">
        <Icon name="hugeicons:bookmark-02" class="size-3.5! text-stone-500" /> Источники · 1
      </span>
    </div>

    <div class="mt-4 rounded-xl bg-stone-50/80 p-3 ring-1 ring-stone-200/80">
      <p lang="ru" class="flex items-center gap-1.5 px-1 pb-2 text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
        <Icon name="hugeicons:books-02" class="size-3!" /> База знаний · 1
      </p>
      <MockSourceCard
        :index="1"
        kind="kb"
        label="Статья 503. Ставки налога на добавленную стоимость"
        subtitle="Кодекс · Налоговый кодекс РК"
        :quote="QUOTE"
        highlighted
      />
    </div>
  </div>
</template>

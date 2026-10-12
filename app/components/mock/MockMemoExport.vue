<script setup lang="ts">
// Court practice analysis: the "Экспорт меморандума" dialog (adilet-b2b MemorandumExportModal). The three real formats;
// before export, case numbers, norms and links in the memo are checked against the analysis' own source list.
// Format names and notes are the product's own strings (MemorandumExportModal FORMATS), "Plain text" included.
// One deliberate change: the product's "Citation check: verified" is shown as a Russian "no mismatches" line, because the
// check only compares the memo with the analysis' own source list and "verified" would overstate it (claims.md).
const FORMATS = [
  { name: 'Markdown (.md)', note: 'Для Notion, GitHub и рабочей переписки', icon: 'hugeicons:document-code', selected: true },
  { name: 'HTML документ', note: 'Открывается в браузере с чистой вёрсткой', icon: 'hugeicons:html-5' },
  { name: 'Plain text', note: 'Текст без форматирования', icon: 'hugeicons:txt-01' },
]
</script>

<template>
  <div lang="ru" class="bg-white px-5 py-5 text-stone-900">
    <div class="flex items-center justify-between">
      <p class="flex items-center gap-2 text-base font-semibold">
        <span class="flex size-7 items-center justify-center rounded-lg bg-stone-900 text-white"><Icon name="hugeicons:download-04" class="size-4!" /></span>
        Экспорт меморандума
      </p>
      <Icon name="hugeicons:cancel-01" class="size-4! text-stone-400" />
    </div>
    <p class="mt-4 text-[11px] font-medium tracking-wider text-stone-500 uppercase">
      Формат
    </p>
    <div class="mt-2 space-y-1.5">
      <div
        v-for="f in FORMATS"
        :key="f.name"
        class="flex items-start gap-3 rounded-lg border px-3 py-2.5"
        :class="f.selected ? 'border-stone-900 bg-stone-50' : 'border-stone-200'"
      >
        <span class="flex size-7 shrink-0 items-center justify-center rounded-md bg-stone-100 text-stone-700"><Icon :name="f.icon" class="size-4!" /></span>
        <div class="min-w-0 flex-1">
          <p class="text-[13px] font-semibold">
            {{ f.name }}
          </p>
          <p class="line-clamp-2 text-[11px] leading-4 text-stone-500">
            {{ f.note }}
          </p>
        </div>
        <span class="mt-1.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border-2" :class="f.selected ? 'border-stone-900 bg-stone-900' : 'border-stone-300'">
          <span v-if="f.selected" class="size-1.5 rounded-full bg-white" />
        </span>
      </div>
    </div>
    <p class="mt-3 flex items-center gap-2 rounded-md border border-stone-200 bg-stone-50 px-3 py-2 text-[11px] text-stone-600">
      <Icon name="hugeicons:file-01" class="size-3.5! text-stone-400" />
      <span class="truncate font-mono">memo-vzyskanie-peni.md</span>
    </p>
    <div class="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-emerald-800">
      <p class="flex items-center gap-1.5 text-xs font-semibold">
        <Icon name="hugeicons:checkmark-circle-02" class="size-4!" /> Проверка цитирования: расхождений нет
      </p>
      <p class="mt-1 text-[11px] leading-5">
        Номера дел, нормы и ссылки сверены с реестром источников анализа.
      </p>
    </div>
    <div class="mt-4 flex justify-end gap-2 text-[13px] font-medium">
      <span class="rounded-lg border border-stone-200 px-3 py-1.5 text-stone-700">Отмена</span>
      <span class="inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-3 py-1.5 text-white"><Icon name="hugeicons:download-04" class="size-4!" /> Скачать</span>
    </div>
  </div>
</template>

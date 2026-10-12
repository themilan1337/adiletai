<script setup lang="ts">
// Translation mode: clause 4.2 of a sample lease in Kazakh, Russian and English, with the clause number kept.
// Each row carries its own lang. Non-breaking hyphens (U+2011) keep "10‑күнінен" and "10‑го" on one line.
// The tags are not product chrome (the product's translation has none): they use the site's own compact language
// labels, the Kazakhstan convention LanguageSwitcher also uses (Қаз / Рус / Eng).
const ROWS = [
  { tag: 'Қаз', lang: 'kk', text: 'Жалға алушы жалдау ақысын әр айдың 10‑күнінен кешіктірмей төлейді.' },
  { tag: 'Рус', lang: 'ru', text: 'Арендатор вносит арендную плату не позднее 10‑го числа каждого месяца.' },
  { tag: 'Eng', lang: 'en', text: 'The tenant pays the rent no later than the 10th day of each month.' },
]
</script>

<template>
  <div class="overflow-hidden rounded-card border border-line bg-white">
    <div lang="ru" class="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
      <span class="text-xs font-medium text-stone-500">Договор аренды · п. 4.2</span>
      <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600">
        <Icon name="hugeicons:language-circle" class="size-3! text-stone-500" /> Режим: Перевод
      </span>
    </div>
    <dl class="divide-y divide-line">
      <div v-for="row in ROWS" :key="row.tag" class="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-3 px-4 py-4">
        <dt :lang="row.lang" class="text-xs font-semibold text-ink-subtle">
          {{ row.tag }}
        </dt>
        <dd :lang="row.lang" class="font-display text-[1.0625rem] leading-snug text-ink">
          <span class="font-sans text-sm font-semibold text-accent-600 tabular-nums">4.2.</span> {{ row.text }}
        </dd>
      </div>
    </dl>
  </div>
</template>

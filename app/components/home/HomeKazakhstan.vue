<script setup lang="ts">
// Built for Kazakhstan: a four-cell bento (5/7 then 6/6), each cell with a small product fragment (decorative:
// aria-hidden + inert; the cell text carries the claim). Chrome stays Russian; the Tax Code article is from the corpus.
const { t } = useI18n()
const OFFICIAL = ['adilet.zan.kz', 'gov.kz', 'akorda.kz', 'parlam.kz']
const AIFC = ['aifc.kz', 'iac.kz']
</script>

<template>
  <section aria-labelledby="home-kz-title" class="py-20 md:py-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading id="home-kz-title" :title="t('home.kazakhstan.title')" :continuation="t('home.kazakhstan.continuation')" />

      <div class="mt-14 grid gap-4 md:mt-16 lg:grid-cols-12">
        <!-- Law: white tile with a tax-mode fragment -->
        <article class="flex min-w-0 flex-col justify-between gap-10 rounded-tile bg-surface p-6 ring-1 ring-line md:p-8 lg:col-span-5">
          <div>
            <h3 class="font-display text-display-3 text-ink">
              {{ t('home.kazakhstan.law.title') }}
            </h3>
            <p class="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-muted">
              {{ t('home.kazakhstan.law.body') }}
            </p>
          </div>
          <div lang="ru" aria-hidden="true" inert class="rounded-card border border-line bg-canvas p-4">
            <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2 py-0.5 text-[11px] font-medium text-stone-600">
              <Icon name="hugeicons:taxes" class="size-3! text-stone-500" /> Режим: Налоги
            </span>
            <p class="mt-3 flex items-center gap-2 text-[13px] font-medium text-stone-800">
              <span class="flex size-5 items-center justify-center rounded-full border border-stone-200 bg-white">
                <Icon name="hugeicons:justice-scale-01" class="size-3! text-stone-500" />
              </span>
              Поиск в законодательстве РК
            </p>
            <MockSourceCard class="mt-3" :index="1" kind="kb" label="Статья 503. Ставки налога на добавленную стоимость" subtitle="Кодекс · Налоговый кодекс РК" />
          </div>
        </article>

        <!-- Languages: accent tile with clause 4.2 in three languages -->
        <article class="flex min-w-0 flex-col justify-between gap-10 rounded-tile bg-accent-50 p-6 ring-1 ring-accent-100 md:p-8 lg:col-span-7">
          <div>
            <h3 class="font-display text-display-3 text-ink">
              {{ t('home.kazakhstan.languages.title') }}
            </h3>
            <p class="mt-3 text-base leading-relaxed text-ink-muted">
              {{ t('home.kazakhstan.languages.body') }}
            </p>
          </div>
          <div aria-hidden="true" inert>
            <MockTranslation />
          </div>
        </article>

        <!-- OCR: muted tile with vault file rows -->
        <article class="flex min-w-0 flex-col justify-between gap-10 rounded-tile bg-surface-muted p-6 ring-1 ring-line md:p-8 lg:col-span-6">
          <div>
            <h3 class="font-display text-display-3 text-ink">
              {{ t('home.kazakhstan.ocr.title') }}
            </h3>
            <p class="mt-3 text-base leading-relaxed text-ink-muted">
              {{ t('home.kazakhstan.ocr.body') }}
            </p>
          </div>
          <div lang="ru" aria-hidden="true" inert class="overflow-hidden rounded-card border border-line bg-white">
            <div class="flex items-center gap-2.5 border-b border-stone-100 px-4 py-3">
              <span class="flex size-5 shrink-0 items-center justify-center rounded bg-stone-500">
                <Icon name="hugeicons:image-02" class="size-2.5! text-white" />
              </span>
              <span lang="kk" class="min-w-0 flex-1 truncate text-[13px] text-stone-800">Сенімхат (скан).jpg</span>
              <span class="inline-flex items-center gap-1 text-[11px] text-stone-500"><span class="size-1.5 rounded-full bg-emerald-500" />Готов</span>
            </div>
            <div class="flex items-center gap-2.5 border-b border-stone-100 px-4 py-3">
              <span class="flex size-5 shrink-0 items-center justify-center rounded bg-red-500">
                <Icon name="hugeicons:file-01" class="size-2.5! text-white" />
              </span>
              <span class="min-w-0 flex-1 truncate text-[13px] text-stone-800">Доверенность (скан).pdf</span>
              <span class="inline-flex items-center gap-1 text-[11px] text-stone-500"><span class="size-1.5 rounded-full bg-emerald-500" />Готов</span>
            </div>
            <div class="flex items-center gap-2.5 px-4 py-3">
              <span class="flex size-5 shrink-0 items-center justify-center rounded bg-red-500">
                <Icon name="hugeicons:file-01" class="size-2.5! text-white" />
              </span>
              <span lang="kk" class="min-w-0 flex-1 truncate text-[13px] text-stone-800">Жалға алу шарты (скан).pdf</span>
              <span class="inline-flex items-center gap-1 text-[11px] text-stone-500"><span class="size-1.5 rounded-full bg-amber-500" />Обработка</span>
            </div>
          </div>
        </article>

        <!-- AIFC: white tile with the source domains -->
        <article class="flex min-w-0 flex-col justify-between gap-10 rounded-tile bg-surface p-6 ring-1 ring-line md:p-8 lg:col-span-6">
          <div>
            <h3 class="font-display text-display-3 text-ink">
              {{ t('home.kazakhstan.aifc.title') }}
            </h3>
            <p class="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-muted">
              {{ t('home.kazakhstan.aifc.body') }}
            </p>
          </div>
          <dl class="divide-y divide-line border-y border-line">
            <div v-for="g in [{ label: t('home.kazakhstan.aifc.official'), domains: OFFICIAL }, { label: t('home.kazakhstan.aifc.aifcLabel'), domains: AIFC, accent: true }]" :key="g.label" class="grid gap-3 py-3.5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center">
              <dt class="text-xs font-medium text-ink-subtle">
                {{ g.label }}
              </dt>
              <dd class="flex flex-wrap gap-2">
                <span
                  v-for="d in g.domains"
                  :key="d"
                  class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs"
                  :class="g.accent ? 'border-accent-200 bg-accent-50 text-accent-700' : 'border-line bg-canvas text-ink-muted'"
                >
                  <Icon name="hugeicons:global" class="size-3.5!" aria-hidden="true" />{{ d }}
                </span>
              </dd>
            </div>
          </dl>
        </article>
      </div>

      <p class="mt-8 flex max-w-[70ch] gap-2.5 text-sm leading-relaxed text-ink-subtle">
        <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0" aria-hidden="true" />
        {{ t('home.kazakhstan.note') }}
      </p>
    </div>
  </section>
</template>

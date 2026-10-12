<script setup lang="ts">
// Data-flow diagram drawn as a sequence diagram: three lifelines (your team, AdiletAI, third-party providers) and one
// row per step, either an arrow between lifelines or a box on one of them. From lg the row's grid span encodes the
// route; below lg it becomes a vertical timeline with route chips. The <ol> is the text alternative: every row has a
// visually hidden route sentence, and lifelines, arrows and chips are aria-hidden.
const { t, tm, rt } = useI18n()

type Lane = 'you' | 'adiletai' | 'provider'
const LANES: Lane[] = ['you', 'adiletai', 'provider']
const LANE_ICON: Record<Lane, string> = { you: 'hugeicons:user-group', adiletai: '', provider: 'hugeicons:cloud-server' }

// Each row's path through the lanes; one lane = a box on that lifeline. Icons are decorative.
const PATHS: { path: Lane[], icon: string }[] = [
  { path: ['you', 'adiletai'], icon: 'hugeicons:bubble-chat' },
  { path: ['adiletai'], icon: 'hugeicons:view-off' },
  { path: ['adiletai'], icon: 'hugeicons:search-list-01' },
  { path: ['adiletai', 'provider'], icon: 'hugeicons:ai-brain-01' },
  { path: ['provider', 'adiletai', 'you'], icon: 'hugeicons:bookmark-02' },
  { path: ['you'], icon: 'hugeicons:user-check-01' },
]
// Six-column grid at lg: lifeline n sits on grid line 2n+2, a box spans the two columns around it.
const BOX = ['lg:col-[1/3]', 'lg:col-[3/5]', 'lg:col-[5/7]']
const ARROW: Record<string, string> = { '0-1': 'lg:col-[2/4]', '1-2': 'lg:col-[4/6]', '0-2': 'lg:col-[2/6]' }

type Row = { title: string, body: string, route: string }
// ponytail: Object.values accepts both an array and the index-keyed object tm() can return after a locale hot reload.
const rows = computed(() => Object.values(tm('howItWorks.overview.rows') as Record<string, Row>).map((r, i) => {
  const { path, icon } = PATHS[i]!
  const idx = path.map(l => LANES.indexOf(l))
  const min = Math.min(...idx)
  const max = Math.max(...idx)
  return {
    title: rt(r.title),
    body: rt(r.body),
    route: rt(r.route),
    icon,
    path,
    box: path.length === 1,
    reverse: idx[0]! > idx[idx.length - 1]!,
    through: path.length === 3,
    span: path.length === 1 ? BOX[min]! : ARROW[`${min}-${max}`]!,
  }
}))
// Retrieval box (row 3) lists the three sources: legislation first, the web when it is not enough, your documents
// alongside. Titles come from the step detail copy.
const sources = computed(() => Object.values(tm('howItWorks.steps.retrieve.sources') as Record<string, { title: string }>).map(s => rt(s.title)))
const SOURCE_ICONS = ['hugeicons:justice-scale-01', 'hugeicons:global-search', 'hugeicons:files-02']
</script>

<template>
  <figure class="min-w-0 rounded-tile bg-surface p-5 ring-1 ring-line sm:p-8 lg:px-6 lg:py-10 [&_p]:hyphens-manual">
    <!-- Lane headers (lg) -->
    <div class="hidden grid-cols-6 lg:grid" aria-hidden="true">
      <div v-for="(lane, i) in LANES" :key="lane" class="flex flex-col items-center text-center" :class="BOX[i]">
        <span
          class="flex size-10 items-center justify-center rounded-card ring-1"
          :class="lane === 'adiletai' ? 'bg-accent-50 ring-accent-100' : 'bg-canvas ring-line'"
        >
          <img v-if="lane === 'adiletai'" src="/logo.png" alt="" width="20" height="20" class="size-5">
          <Icon v-else :name="LANE_ICON[lane]" class="size-5! text-ink-muted" />
        </span>
        <span class="mt-2.5 text-sm font-semibold text-ink">{{ t(`howItWorks.overview.lanes.${lane}.name`) }}</span>
        <span class="mt-0.5 text-xs text-ink-subtle">{{ t(`howItWorks.overview.lanes.${lane}.note`) }}</span>
      </div>
    </div>

    <div class="relative lg:mt-6">
      <!-- Lifelines (lg) -->
      <div aria-hidden="true" class="hidden lg:block">
        <span v-for="(lane, i) in LANES" :key="lane" class="pointer-events-none absolute inset-y-0 w-0 border-l border-dashed" :class="[['left-[16.6667%]', 'left-1/2', 'left-[83.3333%]'][i], lane === 'adiletai' ? 'border-accent-300' : 'border-line-strong']" />
      </div>

      <ol>
        <li v-for="(row, i) in rows" :key="row.title" class="relative flex gap-4 lg:grid lg:grid-cols-6 lg:gap-0 lg:py-4">
          <!-- Timeline rail (below lg) -->
          <div class="flex flex-col items-center lg:hidden" aria-hidden="true">
            <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-sm font-semibold text-ink tabular-nums">{{ i + 1 }}</span>
            <span v-if="i < rows.length - 1" class="w-px flex-1 bg-line-strong" />
          </div>

          <div class="min-w-0 flex-1 pb-8 lg:pb-0" :class="row.span">
            <p class="sr-only">
              {{ row.route }}
            </p>
            <!-- Route chips (below lg) -->
            <p class="mb-2.5 flex flex-wrap items-center gap-1.5 pt-1 lg:hidden" aria-hidden="true">
              <!-- The arrow travels with the chip it points to, so a wrapped route never ends a line on an arrow. -->
              <span v-for="(lane, j) in row.path" :key="lane" class="inline-flex items-center gap-1.5">
                <Icon v-if="j > 0" name="hugeicons:arrow-right-02" class="size-3.5! text-ink-subtle" />
                <span
                  class="rounded-full border px-2 py-0.5 text-xs font-medium"
                  :class="lane === 'adiletai' ? 'border-accent-200 bg-accent-50 text-accent-700' : 'border-line bg-canvas text-ink-muted'"
                >{{ t(`howItWorks.overview.lanes.${lane}.name`) }}</span>
              </span>
            </p>

            <div
              class="relative z-10"
              :class="row.box ? 'lg:mx-3 lg:rounded-card lg:bg-surface lg:p-4 lg:shadow-card lg:ring-1 lg:ring-line' : 'lg:mx-auto lg:w-fit lg:max-w-full lg:bg-surface lg:px-4 lg:text-center'"
            >
              <p class="flex items-start gap-2.5 text-base leading-snug font-semibold text-ink" :class="row.box ? '' : 'lg:justify-center'">
                <span class="hidden size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white tabular-nums lg:flex" aria-hidden="true">{{ i + 1 }}</span>
                <Icon :name="row.icon" class="mt-0.5 size-5! shrink-0 text-accent-600" aria-hidden="true" />
                <span class="min-w-0 lg:pt-px">{{ row.title }}</span>
              </p>
              <p class="mt-1.5 text-sm leading-relaxed text-ink-muted" :class="row.box ? 'lg:pl-8.5' : ''">
                {{ row.body }}
              </p>
              <ul v-if="i === 2" class="mt-3 flex flex-wrap gap-1.5 lg:pl-8.5" aria-hidden="true">
                <li v-for="(s, j) in sources" :key="s" class="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-2 py-0.5 text-xs text-ink-muted">
                  <Icon :name="SOURCE_ICONS[j]!" class="size-3.5! text-accent-600" />{{ s }}
                </li>
              </ul>
            </div>

            <!-- Arrow (lg): from one lifeline to the other; a ring marks the lifeline it passes through -->
            <div v-if="!row.box" class="relative mt-3 hidden h-3 lg:block" aria-hidden="true">
              <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink/70" />
              <span class="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink" :class="row.reverse ? '-right-1' : '-left-1'" />
              <span v-if="row.through" class="absolute top-1/2 left-1/2 size-3 -translate-1/2 rounded-full border-2 border-accent-500 bg-surface" />
              <span
                class="absolute top-1/2 h-3 w-2.5 -translate-y-1/2 bg-ink"
                :class="row.reverse ? '-left-px [clip-path:polygon(100%_0,0_50%,100%_100%)]' : '-right-px [clip-path:polygon(0_0,100%_50%,0_100%)]'"
              />
            </div>
          </div>
        </li>
      </ol>
    </div>

    <figcaption class="mt-2 border-t border-line pt-5 text-xs leading-relaxed text-ink-subtle lg:mt-8">
      {{ t('howItWorks.overview.caption') }}
    </figcaption>
  </figure>
</template>

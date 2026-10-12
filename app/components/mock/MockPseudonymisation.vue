<script setup lang="ts">
// Diagram (not product UI): one typed message as you write it, as the AI model receives it (identifiers replaced by
// <<PII_…>> tokens) and as restored in the answer. Values are obviously fictional. Labels come from home.security.pii.
// Built for the dark block (night background). The highlight keeps only 2px of side padding, so punctuation right after
// a value (":" / ",") does not look detached from it.
const { t } = useI18n()
const VALUES = { iin: '000000000000', phone: '+7 700 000 00 00' }
const TOKENS = { iin: '<<PII_3f0b6d18>>', phone: '<<PII_a91c44e2>>' }
const SLOTS = ['iin', 'phone'] as const
const ROWS = [
  { key: 'typed', msg: 'message', show: 'value' },
  { key: 'sent', msg: 'message', show: 'token' },
  { key: 'restored', msg: 'answer', show: 'restored' },
] as const
</script>

<template>
  <figure class="rounded-tile bg-night-raised p-6 ring-1 ring-white/10 md:p-7">
    <figcaption class="text-base font-medium text-stone-50">
      {{ t('home.security.pii.title') }}
    </figcaption>
    <dl class="mt-6 space-y-5 text-sm leading-relaxed">
      <div v-for="(row, i) in ROWS" :key="row.key">
        <dt class="flex items-center gap-2 text-xs font-medium text-stone-400">
          <Icon v-if="i > 0" name="hugeicons:arrow-down-02" class="size-3.5! text-accent-300" aria-hidden="true" />
          {{ t(`home.security.pii.${row.key}`) }}
        </dt>
        <dd class="mt-2 rounded-card bg-white/5 px-4 py-3 ring-1 ring-white/10" :class="row.show === 'token' ? 'text-stone-300' : 'text-stone-200'">
          <i18n-t :keypath="`home.security.pii.${row.msg}`" scope="global" tag="span">
            <template v-for="slot in SLOTS" :key="slot" #[slot]>
              <span v-if="row.show === 'token'" class="font-mono text-[13px] whitespace-nowrap text-accent-300">{{ TOKENS[slot] }}</span>
              <mark v-else class="rounded px-0.5 whitespace-nowrap" :class="row.show === 'value' ? 'bg-amber-300/15 text-amber-200' : 'bg-emerald-300/15 text-emerald-200'">{{ VALUES[slot] }}</mark>
            </template>
          </i18n-t>
        </dd>
      </div>
    </dl>
    <p class="mt-6 flex gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-stone-400">
      <Icon name="hugeicons:information-circle" class="mt-px size-4! shrink-0" aria-hidden="true" />{{ t('home.security.pii.scope') }}
    </p>
  </figure>
</template>

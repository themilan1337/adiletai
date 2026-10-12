<script setup lang="ts">
// "What AdiletAI is": the canonical definitional sentence set as a standfirst (with a real, visually hidden H2),
// then a strip of verifiable product facts. Facts are product limits and counts, never speed, accuracy or customers.
const { t, tm, rt } = useI18n()
type Fact = { figure: string, label: string, detail: string }
const facts = computed(() => (tm('home.about.facts') as Fact[]).map(f => ({ figure: rt(f.figure), label: rt(f.label), detail: rt(f.detail) })))
</script>

<template>
  <section aria-labelledby="home-about-title" class="pt-20 pb-6 md:pt-28 md:pb-8">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <h2 id="home-about-title" class="sr-only">
        {{ t('home.about.heading') }}
      </h2>
      <p class="max-w-[52rem] font-display hyphens-manual text-[clamp(1.3rem,1.05rem+1.15vw,2.25rem)] leading-[1.3] tracking-[-0.01em] text-ink">
        {{ t('home.about.statement') }}
        <span class="text-ink-subtle">{{ t('home.about.continuation') }}</span>
      </p>

      <ul :aria-label="t('home.about.factsLabel')" class="mt-14 grid grid-cols-2 border-t border-line md:mt-20 lg:grid-cols-4 [&_p]:hyphens-manual">
        <li
          v-for="(fact, i) in facts"
          :key="fact.label"
          class="min-w-0 border-line py-7 pr-4 sm:pr-8 lg:border-b-0 lg:px-8 lg:py-8"
          :class="[
            i % 2 === 1 ? 'border-l pl-4 sm:pl-8' : '',
            i < 2 ? 'border-b' : '',
            i > 0 ? 'lg:border-l' : 'lg:pl-0',
          ]"
        >
          <p class="font-display text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-none tracking-[-0.015em] whitespace-nowrap text-ink tabular-nums">
            {{ fact.figure }}
          </p>
          <p class="mt-3 text-sm font-medium text-ink">
            {{ fact.label }}
          </p>
          <p class="mt-1 text-sm leading-relaxed text-ink-subtle">
            {{ fact.detail }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

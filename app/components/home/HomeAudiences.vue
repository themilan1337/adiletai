<script setup lang="ts">
// Who it is for: two editorial columns split by a hairline. Each has a typical request (drawn as the product's user
// bubble, in the page language) and a list of concrete jobs with the module that does them. Ends with the mid-page CTA.
const { t, tm, rt, locale } = useI18n()
type Audience = { title: string, body: string, prompt: string, jobs: { text: string, module: string }[] }
const ICONS = ['hugeicons:building-06', 'hugeicons:legal-hammer']
const audiences = computed(() => (tm('home.audiences.items') as Audience[]).map((a, i) => ({
  icon: ICONS[i]!,
  title: rt(a.title),
  body: rt(a.body),
  prompt: rt(a.prompt),
  jobs: a.jobs.map(j => ({ text: rt(j.text), module: rt(j.module) })),
})))
</script>

<template>
  <section aria-labelledby="home-aud-title" class="border-t border-line py-20 md:py-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading id="home-aud-title" :title="t('home.audiences.title')" :continuation="t('home.audiences.continuation')" />

      <div class="mt-14 grid md:mt-16 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_1fr]">
        <article
          v-for="(aud, i) in audiences"
          :key="aud.title"
          class="flex min-w-0 flex-col py-2 lg:row-span-4 lg:grid lg:grid-rows-subgrid"
          :class="i === 0 ? 'lg:pr-12' : 'mt-14 lg:mt-0 lg:border-l lg:border-line lg:pl-12'"
        >
          <div class="flex items-start justify-between gap-6">
            <span class="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface">
              <Icon :name="aud.icon" class="size-5! text-accent-600" aria-hidden="true" />
            </span>
            <p :lang="locale" class="max-w-[32ch] rounded-2xl rounded-br-sm bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-white shadow-card hyphens-manual">
              <span class="sr-only">{{ t('home.audiences.promptLabel') }}: </span>{{ aud.prompt }}
            </p>
          </div>
          <h3 class="mt-8 font-display text-display-3 text-ink">
            {{ aud.title }}
          </h3>
          <p class="mt-3 max-w-[48ch] text-base leading-relaxed text-ink-muted">
            {{ aud.body }}
          </p>
          <ul class="mt-8 border-t border-line">
            <li v-for="job in aud.jobs" :key="job.text" class="grid gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
              <span class="text-[15px] leading-relaxed text-ink">{{ job.text }}</span>
              <span class="text-xs font-medium text-ink-subtle sm:max-w-[11rem] sm:pt-1 sm:text-right">{{ job.module }}</span>
            </li>
          </ul>
        </article>
      </div>

      <!-- Mid-page conversion point -->
      <div class="mt-16 flex flex-col gap-6 rounded-tile bg-surface-muted p-6 ring-1 ring-line md:mt-20 md:flex-row md:items-center md:justify-between md:p-8">
        <div class="min-w-0">
          <p class="font-display text-[1.5rem] leading-tight text-ink hyphens-manual">
            {{ t('home.audiences.cta.title') }}
          </p>
          <p class="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
            {{ t('home.audiences.cta.text') }}
          </p>
        </div>
        <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02" class="w-full sm:w-auto sm:self-start md:self-center">
          {{ t('common.cta.demo') }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

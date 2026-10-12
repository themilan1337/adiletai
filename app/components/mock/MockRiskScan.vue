<script setup lang="ts">
// Contract risk scan as it appears in an Assistant thread (adilet-b2b: AssistantModeBadge, the scan step in
// AssistantAgentSteps, ContractScanResultCard). Russian content, as the product outputs it. Labels are the card's own,
// Latin ones included: "Risk Score", the raw severity ("critical", uppercased by CSS) and the "Crit / High / Med" counts.
// Visual-only changes: teal instead of indigo, an icon instead of the no-entry emoji, and the score disc without its
// letter (the product prints the first letter of the English risk level).
// compact: header, deal-breakers and the risk summary row only.
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const SCAN = {
  contract: 'Договор поставки',
  date: 'от 02.03.2026',
  score: '68/100',
  parties: 'ТОО «Альфа» (поставщик) ↔ ТОО «Бета» (покупатель)',
  dealBreakers: [
    'Пеня за просрочку оплаты без ограничения общей суммы (п. 7.2)',
    'Право поставщика отказаться от договора без уведомления (п. 9.4)',
  ],
  findings: 'Порядок приёмки и требования к качеству описаны подробно, но ответственность покупателя не ограничена, а поставщик может выйти из договора в одностороннем порядке.',
  strengths: ['Порядок приёмки по количеству и качеству', 'Гарантийный срок на товар'],
  missing: ['Предел общей суммы неустойки', 'Досудебный порядок урегулирования'],
  risk: {
    title: 'Неограниченная пеня за просрочку оплаты',
    description: 'Пеня начисляется за каждый день просрочки без предельной суммы, поэтому ответственность покупателя не ограничена.',
    quote: '«Покупатель уплачивает Поставщику пеню за каждый день просрочки без ограничения общей суммы»',
    recommendation: 'Установить предел общей суммы пени и срок, после которого она начинает начисляться.',
    redline: 'Общая сумма пени не может превышать стоимости неоплаченного Товара.',
    fallback: 'Согласовать начисление пени только после письменной претензии Поставщика.',
  },
}
</script>

<template>
  <div lang="ru" class="bg-white px-4 pt-5 pb-8 text-stone-900 sm:px-6">
    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600">
      <Icon name="hugeicons:file-search" class="size-3! text-stone-500" /> Режим: Анализ
    </span>

    <div class="mt-3 flex gap-3">
      <span class="flex size-5 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white">
        <Icon name="hugeicons:audit-02" class="size-3! text-stone-500" />
      </span>
      <div class="min-w-0 flex-1">
        <p class="text-[13px] font-medium text-stone-800">
          Сканирование договора на риски
        </p>

        <div class="mt-3 overflow-hidden rounded-lg border border-stone-200 bg-white">
          <div class="border-b border-stone-100 bg-stone-50/50 px-4 py-4 sm:px-5">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="min-w-0">
                <p class="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Icon name="hugeicons:file-search" class="size-5! text-accent-600" /> Результат сканирования
                </p>
                <p class="mt-1 text-[13px] font-medium text-stone-700">
                  {{ SCAN.contract }} <span class="font-normal text-stone-500">{{ SCAN.date }}</span>
                </p>
                <p class="mt-1.5 inline-flex items-center gap-1 rounded bg-accent-50 px-2 py-0.5 text-[10px] font-semibold text-accent-700">
                  <Icon name="hugeicons:checkmark-badge-01" class="size-3!" /> Проверено по playbook команды
                </p>
              </div>
              <div class="flex items-center gap-3 rounded-xl bg-white px-3 py-2 ring-1 ring-stone-200 ring-inset">
                <div class="flex flex-col items-end">
                  <span class="text-[10px] font-bold tracking-wider text-stone-500 uppercase">Risk Score</span>
                  <span class="text-sm font-bold text-orange-700 tabular-nums">{{ SCAN.score }}</span>
                </div>
                <span class="flex size-8 items-center justify-center rounded-full bg-orange-100">
                  <span class="size-2.5 rounded-full bg-orange-500" />
                </span>
              </div>
            </div>
            <p class="mt-3 text-[13px] text-stone-600">
              <span class="font-medium">Стороны:</span> {{ SCAN.parties }}
            </p>
          </div>

          <div class="border-b border-red-100 bg-red-50/70 px-4 py-3.5 sm:px-5">
            <p class="flex items-start gap-2 text-[11px] leading-4 font-bold tracking-wider text-red-800 uppercase">
              <Icon name="hugeicons:alert-02" class="size-4! shrink-0" /> Стоп-факторы — не подписывать без исправления
            </p>
            <ul class="mt-2 space-y-1.5 text-[13px] text-red-900">
              <li v-for="d in SCAN.dealBreakers" :key="d" class="flex items-start gap-2">
                <Icon name="hugeicons:cancel-circle" class="mt-0.5 size-4! shrink-0 text-red-600" />
                <span>{{ d }}</span>
              </li>
            </ul>
          </div>

          <div class="px-4 py-4 sm:px-5">
            <p v-if="!compact" class="text-[13px] leading-relaxed text-stone-700">
              {{ SCAN.findings }}
            </p>

            <div v-if="!compact" class="mt-4 grid gap-3 sm:grid-cols-2">
              <div class="rounded-xl bg-emerald-50/50 p-3.5 ring-1 ring-emerald-100/60 ring-inset">
                <p class="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-emerald-800 uppercase">
                  <Icon name="hugeicons:checkmark-circle-02" class="size-4!" /> Сильные стороны
                </p>
                <ul class="mt-2 space-y-1 text-[13px] text-stone-700">
                  <li v-for="p in SCAN.strengths" :key="p" class="flex gap-2">
                    <span class="text-emerald-500">•</span>{{ p }}
                  </li>
                </ul>
              </div>
              <div class="rounded-xl bg-amber-50/50 p-3.5 ring-1 ring-amber-100/60 ring-inset">
                <p class="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-amber-800 uppercase">
                  <Icon name="hugeicons:alert-square" class="size-4!" /> Не хватает
                </p>
                <ul class="mt-2 space-y-1 text-[13px] text-stone-700">
                  <li v-for="m in SCAN.missing" :key="m" class="flex gap-2">
                    <span class="text-amber-500">•</span>{{ m }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex items-center justify-between rounded-xl bg-stone-50 px-4 py-2.5" :class="{ 'mt-4': !compact }">
              <div class="flex flex-wrap items-center gap-2">
                <p class="text-[13px] font-semibold text-stone-900">
                  Выявленные риски (5)
                </p>
                <span class="rounded bg-red-100 px-1.5 py-0.5 text-[11px] font-medium text-red-700">2 Crit</span>
                <span class="rounded bg-orange-100 px-1.5 py-0.5 text-[11px] font-medium text-orange-700">2 High</span>
                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[11px] font-medium text-amber-700">1 Med</span>
              </div>
              <Icon name="hugeicons:arrow-down-01" class="size-5! rotate-180 text-stone-400" />
            </div>

            <div v-if="!compact" class="relative mt-3 ml-1 rounded-xl border border-stone-200 bg-white p-4">
              <div class="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-red-500" />
              <div class="pl-2">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded bg-red-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-red-700 uppercase">critical</span>
                  <span class="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-stone-600 uppercase">Блокирует сделку</span>
                  <p class="text-[13px] font-semibold text-stone-900">
                    {{ SCAN.risk.title }}
                  </p>
                </div>
                <p class="mt-2 text-[13px] leading-relaxed text-stone-600">
                  {{ SCAN.risk.description }}
                </p>
                <p class="mt-3 rounded-lg border-l-2 border-stone-300 bg-stone-50 px-3 py-2 text-xs text-stone-600 italic">
                  {{ SCAN.risk.quote }}
                </p>
                <div class="mt-3 flex gap-2 rounded-lg bg-accent-50/70 p-3 ring-1 ring-accent-100 ring-inset">
                  <Icon name="hugeicons:idea-01" class="mt-0.5 size-4! shrink-0 text-accent-600" />
                  <p class="text-xs leading-relaxed text-stone-800">
                    {{ SCAN.risk.recommendation }}
                  </p>
                </div>
                <div class="mt-2 rounded-lg bg-emerald-50/50 p-3 ring-1 ring-emerald-100/60 ring-inset">
                  <p class="text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                    Предлагаемая правка
                  </p>
                  <p class="mt-1 text-xs leading-relaxed text-stone-800">
                    {{ SCAN.risk.redline }}
                  </p>
                </div>
                <div class="mt-2 rounded-lg bg-stone-50 p-3 ring-1 ring-stone-200 ring-inset">
                  <p class="text-[10px] font-bold tracking-wider text-stone-500 uppercase">
                    Если контрагент не согласится
                  </p>
                  <p class="mt-1 text-xs leading-relaxed text-stone-700">
                    {{ SCAN.risk.fallback }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

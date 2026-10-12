<script setup lang="ts">
// The team's practice profile ("Профиль практики", adilet-b2b: TeamPracticeProfileForm) filled in with sample
// positions for the fictional buyer from the other mockups. Field labels and the intro are the product's own text.
const FIELDS = [
  { label: 'Кто мы', value: 'ТОО «Бета», дистрибуция оборудования. В договорах поставки чаще всего выступаем покупателем.' },
  { label: 'Позиции по ключевым условиям', value: 'Ответственность ограничиваем ценой договора. Пеня только с пределом общей суммы. Споры рассматриваются в суде по месту нахождения покупателя.' },
  { label: 'Стоп-факторы', value: 'Неустойка без предела общей суммы. Право контрагента отказаться от договора без уведомления.' },
  { label: 'Эскалации', value: 'Договоры на сумму свыше 50 млн тенге согласует директор по правовым вопросам.' },
  { label: 'Стиль работы', value: 'Правки кратко и с обоснованием. Документы готовим на русском языке.' },
]
</script>

<template>
  <div lang="ru" class="bg-white p-5 text-stone-900 sm:p-6">
    <p class="text-base font-semibold">
      Профиль практики
    </p>
    <p class="mt-1 text-[13px] leading-relaxed text-stone-500">
      Playbook команды: позиции по условиям договоров, стоп-факторы, эскалации и стиль. Ассистент и сканер договоров учитывают его при анализе.
    </p>
    <div class="mt-5 space-y-3.5">
      <div v-for="f in FIELDS" :key="f.label">
        <p class="mb-1 text-[13px] font-medium text-stone-700">
          {{ f.label }}
        </p>
        <!-- Field values wrap like a textarea, not with the site-wide text-wrap: pretty -->
        <p class="rounded-lg border border-stone-200 bg-white px-3 py-2 text-[13px] leading-relaxed text-wrap text-stone-800">
          {{ f.value }}
        </p>
      </div>
    </div>
    <span class="mt-5 inline-flex h-9 items-center rounded-lg bg-stone-900 px-3.5 text-[13px] font-medium text-white">Сохранить профиль</span>
  </div>
</template>

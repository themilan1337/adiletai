<script setup lang="ts">
// Review table with the cell detail panel open (adilet-b2b: pages/vault/[id]/review/[tableId], review grid, cell
// detail panel). Cells fill in live, so the last rows are still pending. Russian UI and sample data. The product shows
// confidence as a number; the landing shows the bar only (no percentages in mockups).
// Below sm only the document column and the selected column show; detail: the cell panel (from md).
withDefaults(defineProps<{ detail?: boolean }>(), { detail: true })

const SELECTED = { row: 0, col: 1 }
const COLUMNS = [
  { label: 'Стороны', glyph: 'T' },
  { label: 'Сумма договора', glyph: '₸' },
  { label: 'Срок действия', icon: 'hugeicons:calendar-03' },
  { label: 'Применимое право', glyph: 'T' },
  { label: 'Односторонний отказ', icon: 'hugeicons:checkmark-square-02' },
]
const ROWS = [
  { file: 'Договор поставки № 14-П.pdf', tile: 'bg-red-500', cells: ['ТОО «Альфа», ТОО «Бета»', '48 500 000 KZT', '31.12.2027', 'Право РК', 'Да'] },
  { file: 'Contract_supply_EN.pdf', tile: 'bg-red-500', cells: ['Beta LLP, Delta Ltd', '1 250 000 USD', '31.03.2028', 'Право МФЦА', 'Нет'] },
  { file: 'Договор оказания услуг.docx', tile: 'bg-blue-500', cells: ['ТОО «Бета», ИП «Гамма»', '12 000 000 KZT', '30.06.2027', 'Право РК', 'Нет'] },
  { file: 'Жеткізу шарты № 7.docx', tile: 'bg-blue-500', kk: true, cells: ['ТОО «Бета», ТОО «Дельта»', '', '', '', ''] },
  { file: 'Спецификация к договору.xlsx', tile: 'bg-emerald-500', cells: ['', '', '', '', ''] },
]
const SOURCES = [
  { label: 'Фрагмент 1', text: '3.1. Общая стоимость Товара по настоящему Договору составляет 48 500 000 (сорок восемь миллионов пятьсот тысяч) тенге с учётом НДС.' },
  { label: 'Фрагмент 2', text: '3.4. Оплата производится в тенге путём перечисления денег на банковский счёт Поставщика.' },
]
// Below sm, keep the document column and the selected value column only.
const hideOnPhone = (c: number) => (c === SELECTED.col ? '' : 'max-sm:hidden')
</script>

<template>
  <div lang="ru" class="flex bg-white text-stone-900">
    <div class="min-w-0 flex-1">
      <div class="border-b border-stone-200/90 px-5 pt-4 pb-3.5">
        <p class="truncate text-xs text-stone-500">
          Хранилища / Поставка оборудования 2026 / Анализ
        </p>
        <p class="mt-1 text-lg font-semibold tracking-tight">
          Договоры поставщиков
        </p>
        <p class="mt-0.5 text-xs text-stone-500 tabular-nums">
          5 документов · 5 столбцов · 19 / 25 ячеек обработано
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 text-xs font-medium text-stone-700">
            <Icon name="hugeicons:table-02" class="size-3.5!" /> Конструктор столбцов
          </span>
          <span class="inline-flex h-7 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 text-xs font-medium text-stone-700">
            <Icon name="hugeicons:add-01" class="size-3.5!" /> Добавить файлы
          </span>
        </div>
      </div>
      <div class="h-0.5 bg-stone-200">
        <div class="h-full w-3/4 bg-stone-800" />
      </div>

      <div class="overflow-hidden">
        <table class="w-full border-collapse text-left sm:w-max sm:min-w-full">
          <thead>
            <tr class="border-b border-stone-200 text-xs font-medium text-stone-500">
              <th class="w-10 border-r border-stone-200 px-3 py-2.5 font-medium max-sm:hidden" />
              <th class="border-r border-stone-200 px-3 py-2.5 font-medium max-sm:w-1/2 sm:w-56">
                Документ
              </th>
              <th v-for="(col, c) in COLUMNS" :key="col.label" class="border-r border-stone-200 px-3 py-2.5 font-medium sm:w-44" :class="hideOnPhone(c)">
                <span class="flex items-center gap-1.5 whitespace-nowrap">
                  <Icon v-if="col.icon" :name="col.icon" class="size-3.5! text-stone-300" />
                  <span v-else class="w-3.5 text-center font-mono text-[11px] text-stone-300">{{ col.glyph }}</span>
                  {{ col.label }}
                </span>
              </th>
              <th class="px-3 py-2.5 font-medium whitespace-nowrap text-stone-400 max-sm:hidden">
                <span class="flex items-center gap-1"><Icon name="hugeicons:add-01" class="size-3.5!" /> Добавить столбец</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, r) in ROWS" :key="row.file" class="border-b border-stone-100">
              <td class="border-r border-stone-100 px-3 py-3 text-xs text-stone-400 tabular-nums max-sm:hidden">
                {{ r + 1 }}
              </td>
              <td class="max-w-0 border-r border-stone-100 px-3 py-3 sm:max-w-none">
                <span class="flex items-center gap-2">
                  <span class="flex size-5 shrink-0 items-center justify-center rounded" :class="row.tile">
                    <Icon name="hugeicons:file-01" class="size-2.5! text-white" />
                  </span>
                  <span class="truncate text-[13px] text-stone-800" :lang="row.kk ? 'kk' : undefined">{{ row.file }}</span>
                </span>
              </td>
              <td
                v-for="(cell, c) in row.cells"
                :key="c"
                class="border-r border-stone-100 px-3 py-3 text-[13px] text-stone-700"
                :class="[hideOnPhone(c), { 'bg-accent-50/60 outline-2 -outline-offset-2 outline-accent-500': SELECTED.row === r && SELECTED.col === c }]"
              >
                <span v-if="cell" class="whitespace-nowrap" :class="{ 'tabular-nums': c === 1 || c === 2 }">{{ cell }}</span>
                <span v-else class="block h-2 w-20 animate-pulse rounded bg-stone-200" />
              </td>
              <td class="max-sm:hidden" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Cell detail panel -->
    <div v-if="detail" class="hidden w-[19rem] shrink-0 border-l border-stone-200 bg-white md:block">
      <div class="border-b border-stone-200/80 px-5 py-4">
        <p class="text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
          Сумма договора
        </p>
        <p class="mt-1 truncate text-[13px] font-medium text-stone-900">
          Договор поставки № 14-П.pdf
        </p>
        <span class="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
          <Icon name="hugeicons:checkmark-circle-02" class="size-3!" /> Готово
        </span>
      </div>
      <div class="space-y-4 px-5 py-4">
        <div>
          <p class="text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
            Уверенность
          </p>
          <div class="mt-2 h-1.5 w-full rounded-full bg-stone-100">
            <div class="h-full w-[88%] rounded-full bg-emerald-500" />
          </div>
        </div>
        <div>
          <p class="text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
            Инструкция
          </p>
          <p class="mt-1.5 text-xs leading-relaxed text-stone-700">
            Найди общую сумму договора в тенге
          </p>
        </div>
        <div>
          <p class="text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
            Значение
          </p>
          <p class="mt-1.5 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 font-mono text-xs text-stone-800">
            48 500 000 KZT
          </p>
        </div>
        <div>
          <p class="text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
            Источники ({{ SOURCES.length }})
          </p>
          <div v-for="s in SOURCES" :key="s.label" class="mt-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5">
            <p class="text-[11px] font-medium text-stone-500">
              {{ s.label }}
            </p>
            <p class="mt-1 line-clamp-3 text-xs leading-5 text-stone-700">
              {{ s.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

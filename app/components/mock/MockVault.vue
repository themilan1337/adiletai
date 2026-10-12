<script setup lang="ts">
// Vault detail, "Обзор" tab: files table plus the preview drawer open on a photographed Kazakh letter, which OCR has
// made searchable (adilet-b2b: pages/vault/[id], files table, file preview). Russian chrome, fictional parties.
// Non-working product controls (share, client matter, filters) are left out. preview: show the drawer (beside the
// list once the mock itself is 36rem wide, below it when narrower, with `wide` rows hidden so the Kazakh scan stays in
// view). Container queries, not viewport ones, so it fits whatever column a page gives it.
// Sizes are formatted as the product does: the files table uses toFixed(2) with Б/КБ/МБ and "—" for folders; the
// preview header uses Math.round(x * 100) / 100 with B/KB/MB.
withDefaults(defineProps<{ preview?: boolean }>(), { preview: true })

const TABS = ['Обзор', 'Анализ', 'Поиск', 'Настройки']
const FILES = [
  { name: 'Переписка', type: 'Папка', date: '6 октября 2026 г.', size: '—', folder: true },
  { name: 'Судебные документы', type: 'Папка', date: '2 октября 2026 г.', size: '—', folder: true, wide: true },
  { name: 'Договор поставки № 14-П.pdf', type: 'PDF', date: '2 октября 2026 г.', size: '2.40 МБ', tile: 'bg-red-500' },
  { name: 'Спецификация к договору.xlsx', type: 'XLSX', date: '2 октября 2026 г.', size: '184.50 КБ', tile: 'bg-emerald-500', wide: true },
  { name: 'Протокол разногласий.docx', type: 'DOCX', date: '1 октября 2026 г.', size: '102.40 КБ', tile: 'bg-blue-500', wide: true },
  { name: 'Кепілдік хат (скан).jpg', type: 'JPG', date: '30 сентября 2026 г.', size: '1.20 МБ', tile: 'bg-stone-500', kk: true, selected: true },
  { name: 'Письмо поставщика.msg', type: 'MSG', date: '29 сентября 2026 г.', size: '51.20 КБ', tile: 'bg-stone-500', wide: true },
  { name: 'Презентация проекта.pptx', type: 'PPTX', date: '25 сентября 2026 г.', size: '6.70 МБ', tile: 'bg-orange-500', wide: true },
]
</script>

<template>
  <div lang="ru" class="@container">
    <div class="flex bg-white text-stone-900" :class="preview ? 'flex-col @xl:flex-row' : ''">
      <div class="min-w-0 flex-1">
        <div class="border-b border-stone-200/90 px-5 pt-4">
          <p class="text-xs text-stone-500">
            Хранилища / Поставка оборудования 2026
          </p>
          <p class="mt-1 text-lg font-semibold tracking-tight">
            Поставка оборудования 2026
          </p>
          <div class="mt-3 flex gap-5 text-[13px]">
            <span
              v-for="(tab, i) in TABS"
              :key="tab"
              class="border-b-2 pb-2.5"
              :class="i === 0 ? 'border-stone-900 font-medium text-stone-900' : 'border-transparent text-stone-500'"
            >{{ tab }}</span>
          </div>
        </div>

        <div class="bg-stone-50 px-5 py-5">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-semibold">
              Файлы
            </p>
            <div class="flex gap-2">
              <span class="hidden h-7 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 text-xs font-medium whitespace-nowrap text-stone-700 @md:inline-flex">
                <Icon name="hugeicons:folder-add" class="size-3.5!" /> Создать папку
              </span>
              <span class="inline-flex h-7 items-center gap-1.5 rounded-lg bg-stone-900 px-2.5 text-xs font-medium text-white">
                <Icon name="hugeicons:upload-04" class="size-3.5!" /> Загрузить
              </span>
            </div>
          </div>

          <div class="mt-3 overflow-hidden rounded-xl border border-stone-200/90 bg-white">
            <div
              class="grid items-center gap-3 border-b border-stone-200/90 px-4 py-2.5 text-[11px] font-medium text-stone-500"
              :class="preview ? 'grid-cols-[minmax(0,1fr)_4rem]' : 'grid-cols-[minmax(0,1fr)_4rem] @lg:grid-cols-[minmax(0,1fr)_3rem_8.5rem_4rem]'"
            >
              <span>Имя файла</span>
              <span v-if="!preview" class="hidden @lg:block">Тип</span>
              <span v-if="!preview" class="hidden @lg:block">Изменён</span>
              <span class="text-right">Размер</span>
            </div>
            <div
              v-for="f in FILES"
              :key="f.name"
              class="grid items-center gap-3 border-b border-stone-100 px-4 py-2.5 text-[13px] last:border-b-0"
              :class="[
                preview ? 'grid-cols-[minmax(0,1fr)_4rem]' : 'grid-cols-[minmax(0,1fr)_4rem] @lg:grid-cols-[minmax(0,1fr)_3rem_8.5rem_4rem]',
                f.selected && preview ? 'bg-stone-100/80' : '',
                f.wide && preview ? '@max-xl:hidden' : '',
              ]"
            >
              <span class="flex min-w-0 items-center gap-2.5">
                <Icon v-if="f.folder" name="hugeicons:folder-01" class="size-[18px]! shrink-0 text-stone-400" />
                <span v-else class="flex size-5 shrink-0 items-center justify-center rounded" :class="f.tile">
                  <Icon name="hugeicons:file-01" class="size-2.5! text-white" />
                </span>
                <span class="truncate text-stone-800" :lang="f.kk ? 'kk' : undefined">{{ f.name }}</span>
              </span>
              <span v-if="!preview" class="hidden text-[11px] text-stone-500 uppercase @lg:block">{{ f.type }}</span>
              <span v-if="!preview" class="hidden text-xs text-stone-500 @lg:block">{{ f.date }}</span>
              <span class="text-right text-xs text-stone-500 tabular-nums">{{ f.size }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Preview drawer: a photographed Kazakh letter, processed by OCR -->
      <div v-if="preview" class="flex shrink-0 flex-col border-t border-stone-200 bg-white @xl:w-60 @xl:border-t-0 @xl:border-l">
        <div class="flex items-start gap-2.5 border-b border-stone-200/90 px-4 py-3.5">
          <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-stone-500 text-white"><Icon name="hugeicons:image-01" class="size-4!" /></span>
          <div class="min-w-0 flex-1">
            <p lang="kk" class="truncate text-[12.5px] font-medium text-stone-900">
              Кепілдік хат (скан).jpg
            </p>
            <p class="flex items-center gap-1.5 text-[11px] text-stone-500">
              JPG · 1.2 MB · <span class="size-1.5 rounded-full bg-emerald-500" /> Готов
            </p>
          </div>
          <Icon name="hugeicons:cancel-01" class="size-4! text-stone-400" />
        </div>
        <div class="flex-1 bg-stone-100 p-4">
          <div lang="kk" class="-rotate-[0.6deg] rounded-sm bg-[#fdfdfb] px-4 py-5 font-display text-[10.5px] leading-[1.6] text-stone-700 shadow-[0_1px_3px_rgb(28_25_23/0.12)]">
            <p class="text-right text-[9px] text-stone-500">
              Шымкент қ., 2026 жылғы 29 қыркүйек
            </p>
            <p class="mt-4 text-center text-[11px] font-semibold tracking-wide text-stone-800">
              КЕПІЛДІК ХАТ
            </p>
            <p class="mt-3">
              «Альфа» ЖШС жабдықты 2026 жылғы 30 қарашаға дейін толық көлемде жеткізуге кепілдік береді.
            </p>
            <p class="mt-2">
              Жеткізу мерзімі бұзылған жағдайда серіктестік шарттың 8.1-тармағында көзделген тұрақсыздық айыбын төлейді.
            </p>
            <div class="mt-6 flex items-end justify-between text-[9.5px] text-stone-500">
              <span>Директор</span>
              <span class="h-px w-14 bg-stone-400" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between border-t border-stone-200/90 px-4 py-3">
          <span class="text-[11px] text-stone-500">Загружен 30.09.2026</span>
          <span class="flex h-7 items-center gap-1.5 rounded-lg border border-stone-200/90 px-2.5 text-[11.5px] font-medium text-stone-700">
            <Icon name="hugeicons:download-04" class="size-3.5!" /> Скачать
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

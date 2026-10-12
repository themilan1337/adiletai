<script setup lang="ts">
// Drafting mode: the document panel beside the chat (adilet-b2b: AssistantDocumentCanvasInner, the "Черновик: …"
// step in AssistantAgentSteps). The request follows the page locale; the draft is Russian, as the product produces it.
// The panel's Save and .docx buttons are left out (they are not working features). Panel and chat sit side by side
// when the mock's own container is wide enough, and stack (panel first, as on phones in the product) otherwise.
defineProps<{ prompt: string, lang: string }>()

const TITLE = 'Письмо поставщику об изменении п. 7.2'
const TOOLBAR = ['Ж', 'К', 'H1', 'H2', '•', '1.']
</script>

<template>
  <div class="@container">
    <div class="flex flex-col bg-white text-stone-900 @xl:flex-row">
      <!-- Draft panel -->
      <div lang="ru" class="min-w-0 border-b border-stone-200/90 @xl:w-[60%] @xl:border-r @xl:border-b-0">
        <div class="flex items-center gap-2 border-b border-stone-200/90 px-3 py-2.5">
          <Icon name="hugeicons:document-validation" class="size-4! shrink-0 text-stone-400" />
          <p class="min-w-0 flex-1 truncate text-[13px] font-medium tracking-tight text-stone-800">
            {{ TITLE }}
          </p>
          <Icon name="hugeicons:sidebar-left-01" class="size-4! shrink-0 text-stone-400" />
        </div>
        <div class="flex flex-wrap gap-0.5 border-b border-stone-100 px-2 py-1.5">
          <span v-for="b in TOOLBAR" :key="b" class="rounded-md px-2 py-1 text-[11px] font-medium text-stone-500" :class="{ 'bg-stone-100 text-stone-800': b === 'Ж' }">{{ b }}</span>
        </div>
        <div class="space-y-2.5 px-4 py-4 text-[12.5px] leading-relaxed text-stone-800">
          <p class="text-right text-stone-600">
            ТОО «Альфа»
          </p>
          <p class="pt-1 text-center font-semibold">
            О согласовании изменений в договор поставки № 14‑П
          </p>
          <p>Предлагаем до подписания договора изложить пункт 7.2 в следующей редакции:</p>
          <p class="border-l-2 border-stone-300 pl-3 text-stone-700">
            «7.2. За нарушение сроков оплаты Покупатель уплачивает Поставщику пеню за каждый день просрочки. Общая сумма пени не может превышать стоимости неоплаченного Товара.»
          </p>
          <p>Просим сообщить вашу позицию по предложенной редакции.</p>
        </div>
      </div>

      <!-- Chat column -->
      <div class="min-w-0 flex-1 space-y-3 bg-white px-4 py-4">
        <p :lang="lang" class="ml-auto max-w-[92%] rounded-2xl rounded-br-sm bg-stone-900 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-white">
          {{ prompt }}
        </p>
        <div lang="ru">
          <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600">
            <Icon name="hugeicons:quill-write-02" class="size-3! text-stone-500" /> Режим: Конструктор
          </span>
          <div class="mt-3 flex gap-2.5">
            <span class="flex size-5 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white">
              <Icon name="hugeicons:document-attachment" class="size-3! text-stone-500" />
            </span>
            <p class="min-w-0 text-[12.5px] leading-5 font-medium text-stone-800">
              Черновик: {{ TITLE }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

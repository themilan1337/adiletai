<template>

<header class="w-full max-w-2xl px-4 sm:px-0">
  <h1
   class="text-3xl gs text-center sm:text-left font-bold sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-12 tracking-tight text-zinc-900 lg:text-balance"
  >
    Верните юристам их самый дорогой актив — время
  </h1>
  <p class="text-sm text-center sm:text-left sm:text-base mt-3 sm:mt-4 text-zinc-600 lg:text-balance">
    AdiletAI — корпоративная ИИ-платформа, которая снимает рутину с вашего юридического департамента: анализ договоров, драфтинг документов и мгновенный доступ к внутренней базе знаний. Каждый ответ — со ссылкой на первоисточник.
  </p>
  <nav class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center mt-6 sm:mt-8 gap-3 sm:gap-2" aria-label="Основные действия">
    <a
      :href="CALENDLY_URL"
      target="_blank"
      rel="noopener"
      class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-10 sm:h-9 px-4 text-sm sm:text-sm"
      aria-label="Забронировать демо для вашей компании"
    >
      Забронировать демо для вашей компании
    </a>
    <a
      :href="CALENDLY_URL"
      target="_blank"
      rel="noopener"
      class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 focus-visible:outline-zinc-600 h-10 sm:h-9 px-4 text-sm sm:text-sm"
      aria-label="Запросить аудит автоматизации и пилотный запуск"
    >
      Запросить аудит и пилотный запуск
    </a>
  </nav>
</header>
<figure
  class="relative w-full aspect-[2878/1360] mt-6 sm:mt-8 md:mt-4 overflow-hidden mb-16 sm:mb-20 md:mb-24 rounded-xl sm:rounded-2xl shadow outline outline-zinc-200 mx-4 sm:mx-0"
  itemscope
  itemtype="https://schema.org/ImageObject"
>
  <NuxtImg
    src="/app.png"
    loading="eager"
    decoding="async"
    alt="Интерфейс AdiletAI — юридический AI-помощник с технологией RAG для Казахстана"
    fetchpriority="high"
    width="2878"
    height="1360"
    :placeholder="[50, 25, 75, 5]"
    class="absolute inset-0 object-cover w-full h-full"
    itemprop="contentUrl"
  />
  <meta itemprop="description" content="Скриншот интерфейса приложения AdiletAI показывающий юридический AI помощник в действии" />
  <meta itemprop="name" content="Интерфейс приложения AdiletAI" />
</figure>

</template>

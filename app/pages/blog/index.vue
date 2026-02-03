<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-16 md:mb-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl gs font-bold text-zinc-900 tracking-tight mb-6">
          Блог AdiletAI
        </h1>
        <p class="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Экспертные статьи о праве, искусственном интеллекте и будущем юридической профессии в Казахстане.
        </p>
      </header>

      <!-- Featured Posts -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Post 1 -->
          <article class="group relative flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="aspect-video bg-zinc-100 relative overflow-hidden">
               <div class="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">🛡️</div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Технологии</span>
                <span class="w-1 h-1 bg-zinc-300 rounded-full"></span>
                <time class="text-xs text-zinc-400">3 фев 2026</time>
              </div>
              <h2 class="text-xl font-bold text-zinc-900 mb-3 gs group-hover:text-zinc-700 transition-colors">
                <NuxtLink to="/blog/yuridicheskiy-ii-pomoshnik">
                  Юридический ИИ помощник: Будущее права
                </NuxtLink>
              </h2>
              <p class="text-sm text-zinc-600 mb-6 line-clamp-3">
                Как искусственный интеллект трансформирует работу юристов в Казахстане, повышая точность и скорость анализа документов.
              </p>
              <div class="mt-auto">
                <NuxtLink to="/blog/yuridicheskiy-ii-pomoshnik" class="text-sm font-bold text-zinc-900 inline-flex items-center group/link">
                  Читать далее
                  <span class="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </NuxtLink>
              </div>
            </div>
          </article>

          <!-- Post 2 -->
          <article class="group relative flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="aspect-video bg-zinc-100 relative overflow-hidden">
               <div class="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">⚡</div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Продуктивность</span>
                <span class="w-1 h-1 bg-zinc-300 rounded-full"></span>
                <time class="text-xs text-zinc-400">3 фев 2026</time>
              </div>
              <h2 class="text-xl font-bold text-zinc-900 mb-3 gs group-hover:text-zinc-700 transition-colors">
                <NuxtLink to="/blog/ii-assistent-dlya-yurista">
                  ИИ ассистент для юриста: Гайд
                </NuxtLink>
              </h2>
              <p class="text-sm text-zinc-600 mb-6 line-clamp-3">
                Практическое руководство по автоматизации рутинных задач с помощью ИИ ассистента. Экономим до 80% времени.
              </p>
              <div class="mt-auto">
                <NuxtLink to="/blog/ii-assistent-dlya-yurista" class="text-sm font-bold text-zinc-900 inline-flex items-center group/link">
                  Читать далее
                  <span class="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </NuxtLink>
              </div>
            </div>
          </article>

          <!-- Post 3 -->
          <article class="group relative flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="aspect-video bg-zinc-100 relative overflow-hidden">
               <div class="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">🤖</div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Инновации</span>
                <span class="w-1 h-1 bg-zinc-300 rounded-full"></span>
                <time class="text-xs text-zinc-400">3 фев 2026</time>
              </div>
              <h2 class="text-xl font-bold text-zinc-900 mb-3 gs group-hover:text-zinc-700 transition-colors">
                <NuxtLink to="/blog/yurist-ai">
                  Юрист AI: Миф или Реальность?
                </NuxtLink>
              </h2>
              <p class="text-sm text-zinc-600 mb-6 line-clamp-3">
                Исследуем тренд 2026 года: заменит ли нейросеть человека или станет его главным преимуществом на рынке.
              </p>
              <div class="mt-auto">
                <NuxtLink to="/blog/yurist-ai" class="text-sm font-bold text-zinc-900 inline-flex items-center group/link">
                  Читать далее
                  <span class="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Topics / Categories -->
      <section class="mb-24">
        <h2 class="text-3xl gs font-bold text-zinc-900 mb-12 text-center">
          Популярные темы
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button class="p-6 bg-zinc-50 border border-zinc-200 rounded-xl hover:bg-zinc-100 transition-colors text-center">
            <div class="text-2xl mb-2">⚖️</div>
            <div class="font-medium text-zinc-900">Законодательство</div>
          </button>
          <button class="p-6 bg-zinc-50 border border-zinc-200 rounded-xl hover:bg-zinc-100 transition-colors text-center">
            <div class="text-2xl mb-2">🤖</div>
            <div class="font-medium text-zinc-900">AI технологии</div>
          </button>
          <button class="p-6 bg-zinc-50 border border-zinc-200 rounded-xl hover:bg-zinc-100 transition-colors text-center">
            <div class="text-2xl mb-2">💼</div>
            <div class="font-medium text-zinc-900">Для бизнеса</div>
          </button>
          <button class="p-6 bg-zinc-50 border border-zinc-200 rounded-xl hover:bg-zinc-100 transition-colors text-center">
            <div class="text-2xl mb-2">🎓</div>
            <div class="font-medium text-zinc-900">Обучение</div>
          </button>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="mb-24">
        <div class="bg-zinc-900 rounded-3xl p-8 sm:p-16 text-center">
          <h2 class="text-3xl sm:text-4xl gs font-bold text-white mb-6">
            Подпишитесь на рассылку
          </h2>
          <p class="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Получайте свежие статьи и новости о мире Legal AI прямо на вашу почту раз в неделю.
          </p>

          <form class="max-w-md mx-auto" @submit.prevent="handleSubscribe">
            <div class="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                v-model="email"
                required
                placeholder="Ваш email"
                class="flex-1 px-6 py-4 rounded-xl bg-zinc-800 border-none text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
              />
              <button
                type="submit"
                class="px-8 py-4 rounded-xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-all gs shadow-lg hover:shadow-xl active:scale-95"
              >
                Подписаться
              </button>
            </div>
          </form>
          <p class="text-xs text-zinc-500 mt-6">
            Нажимая "Подписаться", вы соглашаетесь с нашей политикой конфиденциальности.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>


<script setup lang="ts">
const email = ref('')

const handleSubscribe = () => {
  // В реальном проекте здесь будет отправка на сервер
  alert('Спасибо за подписку! Мы уведомим вас о запуске блога.')
  email.value = ''
}

useSeoMeta({
  title: 'Блог AdiletAI - Статьи о праве и AI в Казахстане',
  description: 'Блог AdiletAI: новости AI в юридической сфере, обновления законодательства РК, практические советы, кейсы. Следите за развитием юридических технологий.',
  keywords: 'юридический ии помощник, ии ассистент для юриста, юрист ai, ai право казахстан, юридические новости, обновления законов рк, статьи о праве',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/blog',
  ogTitle: 'Блог AdiletAI - Право и AI',
  ogDescription: 'Статьи о применении искусственного интеллекта в юридической сфере Казахстана',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Блог AdiletAI',
  twitterDescription: 'Новости, статьи и обновления о праве и AI',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/blog#webpage',
    url: 'https://adiletai.com/blog',
    name: 'Блог AdiletAI',
    description: 'Блог о праве, AI технологиях и юридической помощи в Казахстане',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  },
  {
    '@type': 'Blog',
    '@id': 'https://adiletai.com/blog#blog',
    name: 'Блог AdiletAI',
    description: 'Статьи о праве и искусственном интеллекте в Казахстане'
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/blog'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>

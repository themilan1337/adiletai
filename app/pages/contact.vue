<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Свяжитесь с нами
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Мы всегда рады ответить на ваши вопросы и предложения
        </p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        <!-- Contact Form -->
        <section>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Отправить сообщение</h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm gs font-medium text-zinc-900 mb-2">Ваше имя</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <label for="email" class="block text-sm gs font-medium text-zinc-900 mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm gs font-medium text-zinc-900 mb-2">Тема</label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
              >
                <option value="">Выберите тему</option>
                <option value="general">Общий вопрос</option>
                <option value="technical">Техническая поддержка</option>
                <option value="billing">Вопрос по оплате</option>
                <option value="enterprise">Корпоративное решение</option>
                <option value="partnership">Партнерство</option>
                <option value="feedback">Отзыв или предложение</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm gs font-medium text-zinc-900 mb-2">Сообщение</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent resize-none"
                placeholder="Расскажите, чем мы можем помочь..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-12 px-6 text-base"
            >
              Отправить сообщение
            </button>
          </form>
        </section>

        <!-- Contact Information -->
        <section>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Контактная информация</h2>

          <div class="space-y-6 mb-8">
            <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-xl">
                  📧
                </div>
                <div>
                  <h3 class="gs font-medium text-zinc-900 mb-1">Email</h3>
                  <a href="mailto:support@adiletai.com" class="text-zinc-600 hover:text-zinc-900 transition-colors">
                    support@adiletai.com
                  </a>
                </div>
              </div>
            </article>

            <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-xl">
                  🕐
                </div>
                <div>
                  <h3 class="gs font-medium text-zinc-900 mb-1">Время работы</h3>
                  <p class="text-sm text-zinc-600">
                    Понедельник - Пятница: 9:00 - 18:00<br>
                    Выходные: Выходной
                  </p>
                  <p class="text-xs text-zinc-500 mt-2">
                    * AI-помощник доступен 24/7
                  </p>
                </div>
              </div>
            </article>

            <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-xl">
                  🇰🇿
                </div>
                <div>
                  <h3 class="gs font-medium text-zinc-900 mb-1">Местоположение</h3>
                  <p class="text-sm text-zinc-600">
                    Казахстан<br>
                    Работаем удаленно по всей стране
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class="bg-zinc-700 rounded-xl p-6">
            <h3 class="gs font-medium text-white mb-3">Быстрая помощь</h3>
            <p class="text-sm text-zinc-200 mb-4">
              Нужна срочная консультация? Используйте наш AI-помощник прямо сейчас!
            </p>
            <NuxtLink
              to="https://app.adiletai.com/"
              class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-10 px-6 text-sm"
            >
              Начать сейчас
            </NuxtLink>
          </div>
        </section>
      </div>

      <!-- FAQ Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Часто задаваемые вопросы
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Как быстро вы отвечаете?</h3>
            <p class="text-sm text-zinc-600">
              Мы стараемся ответить на все обращения в течение 24 часов в рабочие дни.
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Можно ли записаться на демо?</h3>
            <p class="text-sm text-zinc-600">
              Да, для корпоративных клиентов мы проводим индивидуальные демонстрации платформы.
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Есть ли техподдержка на казахском?</h3>
            <p class="text-sm text-zinc-600">
              Да, мы предоставляем поддержку на русском и казахском языках.
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Как предложить улучшение?</h3>
            <p class="text-sm text-zinc-600">
              Отправьте ваше предложение через форму, выбрав тему "Отзыв или предложение".
            </p>
          </article>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="text-center p-8 sm:p-12 bg-zinc-50 rounded-2xl border border-zinc-200">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-4">
            Не нашли ответ?
          </h2>
          <p class="text-base text-zinc-600 mb-6 max-w-xl mx-auto">
            Посетите наш <NuxtLink to="/support" class="text-zinc-900 underline gs">центр поддержки</NuxtLink> или ознакомьтесь с <NuxtLink to="/faq" class="text-zinc-900 underline gs">FAQ</NuxtLink>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // В реальном проекте здесь будет отправка на сервер
  alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

useSeoMeta({
  title: 'Контакты AdiletAI - Свяжитесь с нами',
  description: 'Свяжитесь с командой AdiletAI по любым вопросам. Email: support@adiletai.com. Форма обратной связи, техподдержка, партнерство.',
  keywords: 'контакты adiletai, support adiletai, связаться с adiletai, техподдержка ai юриста, email adiletai',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/contact',
  ogTitle: 'Контакты AdiletAI - Мы на связи',
  ogDescription: 'Есть вопросы? Свяжитесь с нами любым удобным способом.',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary',
  twitterTitle: 'Контакты AdiletAI',
  twitterDescription: 'Свяжитесь с командой AdiletAI',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/contact#webpage',
    url: 'https://adiletai.com/contact',
    name: 'Контакты AdiletAI',
    description: 'Контактная информация и форма обратной связи AdiletAI',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  },
  {
    '@type': 'ContactPage',
    '@id': 'https://adiletai.com/contact#contactpage',
    name: 'Контакты AdiletAI'
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/contact'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>

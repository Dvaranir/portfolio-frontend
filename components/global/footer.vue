<script lang="ts" setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'mdi:github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { name: 'Telegram', url: 'https://t.me/', icon: 'mdi:telegram' },
  { name: 'Email', url: 'mailto:contact@example.com', icon: 'mdi:email' },
]

const navigationLinks = [
  { name: 'Главная', href: '/' },
  { name: 'Проекты', href: '/projects' },
  { name: 'Контакты', href: '#contacts' },
]

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  if ($ScrollTrigger) {
    $gsap.registerPlugin($ScrollTrigger)
  }

  $gsap.fromTo('.footer-content', { y: 30, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
  })
})
</script>

<template>
  <footer class="footer bg-gray-3 border-t border-gray-4">
    <div class="container mx-auto px-4 py-12">
      <div class="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Логотип и описание -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img
              src="https://avatars.githubusercontent.com/u/87989392?v=4"
              alt="Developer Logo"
              class="w-10 h-10 rounded-full ring-2 ring-green"
            >
            <span class="font-bold text-xl text-gray-12">DevPortfolio</span>
          </div>
          <p class="text-gray-9 text-sm leading-relaxed max-w-sm">
            Фуллстек разработчик, создающий современные веб-приложения,
            Chromium решения и автоматизированные системы.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-gray-4 hover:bg-green flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              :title="social.name"
            >
              <Icon
                :name="social.icon"
                class="w-4 h-4 text-gray-11 group-hover:text-white transition-colors duration-300"
              />
            </a>
          </div>
        </div>

        <!-- Навигация -->
        <div class="space-y-4">
          <h3 class="font-semibold text-gray-12">
            Навигация
          </h3>
          <nav class="space-y-2">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.name"
              :to="link.href"
              class="block text-gray-9 hover:text-green transition-colors duration-300 text-sm"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Контактная информация -->
        <div class="space-y-4">
          <h3 class="font-semibold text-gray-12">
            Контакты
          </h3>
          <div class="space-y-2">
            <a
              href="mailto:your.email@example.com"
              class="block text-gray-9 hover:text-green transition-colors duration-300 text-sm"
            >
              your.email@example.com
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-gray-9 hover:text-green transition-colors duration-300 text-sm"
            >
              @yourusername
            </a>
          </div>
          <p class="text-gray-8 text-xs">
            Открыт для новых проектов и возможностей
          </p>
        </div>
      </div>

      <!-- Разделитель -->
      <div class="border-t border-gray-5 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-8 text-sm">
            © {{ currentYear }} DevPortfolio. Все права защищены.
          </p>
          <div class="flex items-center gap-6 text-xs text-gray-8">
            <span>Сделано с ❤️ на Vue 3 + Nuxt 3</span>
            <button
              class="hover:text-green transition-colors duration-300"
              @click="$router.push('/')"
            >
              Наверх ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

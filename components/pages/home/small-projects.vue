<script lang="ts" setup>
import SwiperComponent from '~/components/ui/swiper-component.vue'

const smallProjects = [
  {
    id: 1,
    title: 'Telegram Bot Assistant',
    description: 'Умный бот для автоматизации бизнес-процессов',
    image: 'https://picsum.photos/400/250?random=1',
    technologies: ['mdi:language-python', 'mdi:telegram', 'mdi:database'],
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Web Scraper Pro',
    description: 'Высокопроизводительный парсер веб-сайтов',
    image: 'https://picsum.photos/400/250?random=2',
    technologies: ['mdi:language-javascript', 'mdi:nodejs', 'mdi:web'],
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Chrome Extension',
    description: 'Расширение для повышения продуктивности',
    image: 'https://picsum.photos/400/250?random=3',
    technologies: ['mdi:google-chrome', 'mdi:language-javascript', 'mdi:puzzle'],
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'API Gateway',
    description: 'Микросервисная архитектура для REST API',
    image: 'https://picsum.photos/400/250?random=4',
    technologies: ['mdi:nodejs', 'mdi:database', 'mdi:api'],
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Data Analyzer',
    description: 'Инструмент для анализа больших данных',
    image: 'https://picsum.photos/400/250?random=5',
    technologies: ['mdi:language-python', 'mdi:chart-line', 'mdi:database'],
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Real-time Chat',
    description: 'Система мгновенных сообщений с WebSocket',
    image: 'https://picsum.photos/400/250?random=6',
    technologies: ['mdi:vuejs', 'mdi:web', 'mdi:chat'],
    github: 'https://github.com',
  },
]

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.fromTo('.small-projects-section', { y: 80, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.small-projects-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  })
})
</script>

<template>
  <section class="small-projects-section py-10 lg:py-16 bg-gray-2">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-12 mb-6">
          Маленькие проекты
        </h2>
        <p class="text-lg text-gray-9 max-w-2xl mx-auto">
          Коллекция компактных, но мощных решений, демонстрирующих мои навыки в различных областях разработки
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <SwiperComponent
          :items="smallProjects"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="true"
          :navigation="true"
          :loop="true"
          :slides-per-view="1"
          :space-between="20"
          container-class="rounded-2xl"
          class-name="rounded-2xl"
        >
          <template #default="{ item }">
            <div class="bg-gray-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div class="grid md:grid-cols-2 gap-0">
                <div class="relative overflow-hidden">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div class="p-8 flex flex-col justify-center">
                  <h3 class="text-2xl font-bold text-gray-12 mb-4">
                    {{ item.title }}
                  </h3>

                  <p class="text-gray-9 mb-6 leading-relaxed">
                    {{ item.description }}
                  </p>

                  <div class="flex items-center gap-3 mb-6">
                    <Icon
                      v-for="tech in item.technologies"
                      :key="tech"
                      :name="tech"
                      class="w-6 h-6 text-gray-8 hover:text-green transition-colors duration-300"
                    />
                  </div>

                  <div class="flex gap-4">
                    <a
                      :href="item.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-2 px-6 py-3 bg-green text-white rounded-lg hover:bg-green/90 transition-all duration-300 hover:scale-105"
                    >
                      <Icon name="mdi:github" class="w-4 h-4" />
                      GitHub
                    </a>
                    <button class="px-6 py-3 border border-green text-green rounded-lg hover:bg-green hover:text-white transition-all duration-300">
                      Детали
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </SwiperComponent>
      </div>

      <div class="text-center mt-12">
        <NuxtLink
          to="/projects?size=small"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gray-1 border-2 border-green text-green rounded-lg font-semibold hover:bg-green hover:text-white transition-all duration-300 hover:scale-105"
        >
          Посмотреть все маленькие проекты
          <Icon name="mdi:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

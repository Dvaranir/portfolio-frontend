<script lang="ts" setup>
const currentSlide = ref(0)

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

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % smallProjects.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? smallProjects.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

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

  setInterval(() => {
    nextSlide()
  }, 5000)
})

watch(currentSlide, (newSlide) => {
  const { $gsap } = useNuxtApp()

  $gsap.to('.slider-container', {
    x: `${-newSlide * 100}%`,
    duration: 0.6,
    ease: 'power2.inOut',
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

      <div class="relative max-w-6xl mx-auto">
        <div class="overflow-hidden rounded-2xl">
          <div class="slider-container flex transition-transform duration-600 ease-in-out">
            <div
              v-for="project in smallProjects"
              :key="project.id"
              class="w-full flex-shrink-0"
            >
              <div class="bg-gray-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div class="grid md:grid-cols-2 gap-0">
                  <div class="relative overflow-hidden">
                    <img
                      :src="project.image"
                      :alt="project.title"
                      class="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div class="p-8 flex flex-col justify-center">
                    <h3 class="text-2xl font-bold text-gray-12 mb-4">
                      {{ project.title }}
                    </h3>

                    <p class="text-gray-9 mb-6 leading-relaxed">
                      {{ project.description }}
                    </p>

                    <div class="flex items-center gap-3 mb-6">
                      <Icon
                        v-for="tech in project.technologies"
                        :key="tech"
                        :name="tech"
                        class="w-6 h-6 text-gray-8 hover:text-green transition-colors duration-300"
                      />
                    </div>

                    <div class="flex gap-4">
                      <a
                        :href="project.github"
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
            </div>
          </div>
        </div>

        <button
          class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-1/80 backdrop-blur-sm border border-gray-4 rounded-full flex items-center justify-center hover:bg-green hover:border-green hover:text-white transition-all duration-300 group"
          @click="previousSlide"
        >
          <Icon name="mdi:chevron-left" class="w-6 h-6 text-gray-11 group-hover:text-white" />
        </button>

        <button
          class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-1/80 backdrop-blur-sm border border-gray-4 rounded-full flex items-center justify-center hover:bg-green hover:border-green hover:text-white transition-all duration-300 group"
          @click="nextSlide"
        >
          <Icon name="mdi:chevron-right" class="w-6 h-6 text-gray-11 group-hover:text-white" />
        </button>

        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(project, index) in smallProjects"
            :key="index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="index === currentSlide ? 'bg-green scale-110' : 'bg-gray-5 hover:bg-gray-7'"
            @click="goToSlide(index)"
          />
        </div>
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

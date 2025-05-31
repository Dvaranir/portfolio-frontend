<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

// Reactive state
const currentPage = ref(1)
const projectsPerPage = 9
const searchQuery = ref('')
const selectedSize = ref(route.query.size as string || 'all')
const selectedSort = ref('newest')
const selectedTechnologies = ref<string[]>([])

// Mock data - заменить на реальные данные из API
const allProjects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    small_description: 'Полнофункциональная платформа электронной коммерции',
    images: ['https://picsum.photos/600/400?random=10'],
    technologies: ['mdi:vuejs', 'mdi:nodejs', 'mdi:database-settings'],
    project_size: 'big',
    github: 'https://github.com',
    demo: 'https://demo.com',
    created_at: '2024-12-01',
  },
  {
    id: 2,
    title: 'Telegram Bot Assistant',
    small_description: 'Умный бот для автоматизации бизнес-процессов',
    images: ['https://picsum.photos/600/400?random=1'],
    technologies: ['mdi:language-python', 'mdi:telegram'],
    project_size: 'small',
    github: 'https://github.com',
    created_at: '2024-11-15',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    small_description: 'Мощный дашборд для аналитики с real-time визуализацией',
    images: ['https://picsum.photos/600/400?random=11'],
    technologies: ['mdi:react', 'mdi:chart-line', 'mdi:database'],
    project_size: 'big',
    github: 'https://github.com',
    demo: 'https://demo.com',
    created_at: '2024-10-20',
  },
  // Добавить больше проектов...
])

const availableTechnologies = [
  { name: 'Vue.js', icon: 'mdi:vuejs', value: 'vuejs' },
  { name: 'React', icon: 'mdi:react', value: 'react' },
  { name: 'Node.js', icon: 'mdi:nodejs', value: 'nodejs' },
  { name: 'Python', icon: 'mdi:language-python', value: 'python' },
  { name: 'JavaScript', icon: 'mdi:language-javascript', value: 'javascript' },
  { name: 'TypeScript', icon: 'mdi:language-typescript', value: 'typescript' },
  { name: 'Database', icon: 'mdi:database', value: 'database' },
  { name: 'Telegram', icon: 'mdi:telegram', value: 'telegram' },
]

// Computed
const filteredProjects = computed(() => {
  let projects = allProjects.value

  // Фильтр по размеру
  if (selectedSize.value !== 'all') {
    projects = projects.filter(p => p.project_size === selectedSize.value)
  }

  // Поиск
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    projects = projects.filter(p =>
      p.title.toLowerCase().includes(query)
      || p.small_description.toLowerCase().includes(query),
    )
  }

  // Фильтр по технологиям
  if (selectedTechnologies.value.length > 0) {
    projects = projects.filter(p =>
      selectedTechnologies.value.some(tech =>
        p.technologies.some(pTech => pTech.includes(tech)),
      ),
    )
  }

  // Сортировка
  if (selectedSort.value === 'newest') {
    projects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  }
  else {
    projects.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
  }

  return projects
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage
  const end = start + projectsPerPage
  return filteredProjects.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / projectsPerPage)
})

const breadcrumbs = computed(() => [
  { name: 'Главная', href: '/' },
  { name: 'Проекты', href: '/projects' },
])

// Methods
const toggleTechnology = (tech: string) => {
  const index = selectedTechnologies.value.indexOf(tech)
  if (index === -1) {
    selectedTechnologies.value.push(tech)
  }
  else {
    selectedTechnologies.value.splice(index, 1)
  }
  currentPage.value = 1
}

const clearFilters = () => {
  selectedSize.value = 'all'
  selectedTechnologies.value = []
  searchQuery.value = ''
  currentPage.value = 1
}

const goToPage = (page: number) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Watch для URL синхронизации
watch([selectedSize, selectedSort, searchQuery, selectedTechnologies], () => {
  const query: any = {}

  if (selectedSize.value !== 'all')
    query.size = selectedSize.value
  if (selectedSort.value !== 'newest')
    query.sort = selectedSort.value
  if (searchQuery.value)
    query.search = searchQuery.value
  if (selectedTechnologies.value.length > 0)
    query.tech = selectedTechnologies.value.join(',')

  router.replace({ query })
  currentPage.value = 1
})

onMounted(() => {
  const { $gsap } = useNuxtApp()

  // Анимация появления
  $gsap.fromTo('.page-header', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
  )

  $gsap.fromTo('.filters-container', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 },
  )

  $gsap.fromTo('.project-grid-item', { y: 50, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.4 },
  )
})

// SEO
useHead({
  title: 'Проекты - DevPortfolio',
  meta: [
    { name: 'description', content: 'Портфолио проектов фуллстек разработчика. Веб-приложения, Chromium расширения, парсеры и Telegram боты.' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gray-1">
    <!-- Page Header -->
    <section class="page-header py-20 bg-gradient-to-b from-gray-2 to-gray-1">
      <div class="container mx-auto px-4">
        <!-- Breadcrumbs -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li v-for="(crumb, index) in breadcrumbs" :key="crumb.name">
              <div class="flex items-center">
                <NuxtLink
                  :to="crumb.href"
                  :class="index === breadcrumbs.length - 1 ? 'text-gray-8' : 'text-green hover:text-green/80'"
                  class="transition-colors duration-300"
                >
                  {{ crumb.name }}
                </NuxtLink>
                <Icon
                  v-if="index < breadcrumbs.length - 1"
                  name="mdi:chevron-right"
                  class="w-4 h-4 text-gray-6 mx-2"
                />
              </div>
            </li>
          </ol>
        </nav>

        <h1 class="text-4xl lg:text-6xl font-bold text-gray-12 mb-6">
          Мои проекты
        </h1>
        <p class="text-lg text-gray-9 max-w-2xl">
          Коллекция проектов, демонстрирующих мой опыт в создании современных веб-приложений,
          автоматизации и инновационных решений
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="filters-container py-8 bg-gray-2 border-b border-gray-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-6">
          <!-- Search -->
          <div class="flex-1">
            <div class="relative">
              <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-8" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Поиск проектов..."
                class="w-full pl-10 pr-4 py-3 bg-gray-1 border border-gray-4 rounded-lg focus:outline-none focus:border-green transition-colors duration-300"
              >
            </div>
          </div>

          <!-- Size Filter -->
          <div>
            <select
              v-model="selectedSize"
              class="px-4 py-3 bg-gray-1 border border-gray-4 rounded-lg focus:outline-none focus:border-green transition-colors duration-300"
            >
              <option value="all">
                Все размеры
              </option>
              <option value="big">
                Большие проекты
              </option>
              <option value="small">
                Маленькие проекты
              </option>
            </select>
          </div>

          <!-- Sort -->
          <div>
            <select
              v-model="selectedSort"
              class="px-4 py-3 bg-gray-1 border border-gray-4 rounded-lg focus:outline-none focus:border-green transition-colors duration-300"
            >
              <option value="newest">
                Сначала новые
              </option>
              <option value="oldest">
                Сначала старые
              </option>
            </select>
          </div>

          <!-- Clear Filters -->
          <button
            v-if="selectedSize !== 'all' || selectedTechnologies.length > 0 || searchQuery"
            class="px-6 py-3 text-green border border-green rounded-lg hover:bg-green hover:text-white transition-all duration-300"
            @click="clearFilters"
          >
            Очистить
          </button>
        </div>

        <!-- Technology Filters -->
        <div class="mt-6">
          <h3 class="text-sm font-semibold text-gray-11 mb-3">
            Технологии:
          </h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tech in availableTechnologies"
              :key="tech.value"
              :class="selectedTechnologies.includes(tech.value) ? 'bg-green text-white' : 'bg-gray-1 text-gray-11 hover:bg-gray-3'"
              class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-4 transition-all duration-300 text-sm"
              @click="toggleTechnology(tech.value)"
            >
              <Icon :name="tech.icon" class="w-4 h-4" />
              {{ tech.name }}
            </button>
          </div>
        </div>

        <!-- Results Count -->
        <div class="mt-4 text-sm text-gray-8">
          Найдено проектов: {{ filteredProjects.length }}
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div v-if="paginatedProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="project in paginatedProjects"
            :key="project.id"
            class="project-grid-item group cursor-pointer"
          >
            <div class="bg-gray-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-4 hover:border-green/50">
              <!-- Image -->
              <div class="relative overflow-hidden">
                <img
                  :src="project.images[0]"
                  :alt="project.title"
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <!-- Project Size Badge -->
                <div class="absolute top-4 left-4">
                  <span
                    :class="project.project_size === 'big' ? 'bg-green' : 'bg-blue-500'"
                    class="px-3 py-1 text-white text-xs font-semibold rounded-full"
                  >
                    {{ project.project_size === 'big' ? 'Большой' : 'Маленький' }}
                  </span>
                </div>

                <!-- Hover Buttons -->
                <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green transition-colors duration-300"
                  >
                    <Icon name="mdi:github" class="w-5 h-5 text-white" />
                  </a>
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green transition-colors duration-300"
                  >
                    <Icon name="mdi:open-in-new" class="w-5 h-5 text-white" />
                  </a>
                  <NuxtLink
                    :to="`/projects/${project.id}`"
                    class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green transition-colors duration-300"
                  >
                    <Icon name="mdi:eye" class="w-5 h-5 text-white" />
                  </NuxtLink>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-12 mb-3 group-hover:text-green transition-colors duration-300">
                  {{ project.title }}
                </h3>

                <p class="text-gray-9 mb-4 leading-relaxed line-clamp-2">
                  {{ project.small_description }}
                </p>

                <!-- Technologies -->
                <div class="flex items-center gap-2 mb-4">
                  <Icon
                    v-for="tech in project.technologies.slice(0, 4)"
                    :key="tech"
                    :name="tech"
                    class="w-5 h-5 text-gray-8 hover:text-green transition-colors duration-300"
                  />
                  <span v-if="project.technologies.length > 4" class="text-xs text-gray-7">
                    +{{ project.technologies.length - 4 }}
                  </span>
                </div>

                <!-- Date -->
                <div class="text-xs text-gray-7">
                  {{ new Date(project.created_at).toLocaleDateString('ru-RU') }}
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <Icon name="mdi:folder-open-outline" class="w-20 h-20 text-gray-6 mx-auto mb-6" />
          <h3 class="text-2xl font-bold text-gray-11 mb-4">
            Проекты не найдены
          </h3>
          <p class="text-gray-8 mb-8">
            Попробуйте изменить критерии поиска или фильтры
          </p>
          <button
            class="px-6 py-3 bg-green text-white rounded-lg hover:bg-green/90 transition-colors duration-300"
            @click="clearFilters"
          >
            Сбросить фильтры
          </button>
        </div>
      </div>
    </section>

    <!-- Pagination -->
    <section v-if="totalPages > 1" class="py-12 border-t border-gray-4">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <nav class="flex items-center gap-2">
            <!-- Previous -->
            <button
              :disabled="currentPage === 1"
              :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green hover:text-white'"
              class="w-10 h-10 rounded-lg border border-gray-4 flex items-center justify-center transition-all duration-300"
              @click="goToPage(currentPage - 1)"
            >
              <Icon name="mdi:chevron-left" class="w-5 h-5" />
            </button>

            <!-- Page Numbers -->
            <button
              v-for="page in totalPages"
              :key="page"
              :class="page === currentPage ? 'bg-green text-white' : 'hover:bg-gray-3'"
              class="w-10 h-10 rounded-lg border border-gray-4 flex items-center justify-center transition-all duration-300 text-sm font-medium"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>

            <!-- Next -->
            <button
              :disabled="currentPage === totalPages"
              :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green hover:text-white'"
              class="w-10 h-10 rounded-lg border border-gray-4 flex items-center justify-center transition-all duration-300"
              @click="goToPage(currentPage + 1)"
            >
              <Icon name="mdi:chevron-right" class="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

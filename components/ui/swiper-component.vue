<script lang="ts" setup>
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

interface SwiperItem {
  id: string | number
  [key: string]: any
}

interface SwiperConfig {
  items: SwiperItem[]
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  autoplay?: boolean | {
    delay?: number
    disableOnInteraction?: boolean
  }
  navigation?: boolean
  pagination?: boolean
  grid?: {
    rows: number
    fill?: 'row' | 'column'
  }
  breakpoints?: {
    [key: number]: {
      slidesPerView?: number | 'auto'
      spaceBetween?: number
      grid?: {
        rows: number
        fill?: 'row' | 'column'
      }
    }
  }
  loop?: boolean
  speed?: number
  className?: string
  containerClass?: string
}

const properties = withDefaults(defineProps<SwiperConfig>(), {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: false,
  navigation: true,
  pagination: true,
  loop: true,
  speed: 600,
  className: '',
  containerClass: '',
})

const emit = defineEmits<{
  slideChange: [swiper: any]
  itemClick: [item: SwiperItem, index: number]
}>()

const swiperReference = ref()

const modules = computed(() => {
  const modulesList = []
  if (properties.navigation)
    modulesList.push(Navigation)
  if (properties.pagination)
    modulesList.push(Pagination)
  if (properties.autoplay)
    modulesList.push(Autoplay)
  if (properties.grid)
    modulesList.push(Grid)
  return modulesList
})

const swiperOptions = computed(() => ({
  modules: modules.value,
  slidesPerView: properties.slidesPerView,
  spaceBetween: properties.spaceBetween,
  autoplay: properties.autoplay,
  navigation: properties.navigation
    ? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    : false,
  pagination: properties.pagination
    ? {
        clickable: true,
        el: '.swiper-pagination',
      }
    : false,
  grid: properties.grid,
  breakpoints: properties.breakpoints,
  loop: properties.loop,
  speed: properties.speed,
}))

const onSlideChange = (swiper: any) => {
  emit('slideChange', swiper)
}

const onItemClick = (item: SwiperItem, index: number) => {
  emit('itemClick', item, index)
}

const nextSlide = () => {
  swiperReference.value?.slideNext()
}

const previousSlide = () => {
  swiperReference.value?.slidePrev()
}

const goToSlide = (index: number) => {
  swiperReference.value?.slideTo(index)
}

defineExpose({
  nextSlide,
  previousSlide,
  goToSlide,
  swiper: swiperReference,
})
</script>

<template>
  <div :class="containerClass" class="swiper-component relative">
    <Swiper
      ref="swiperReference"
      v-bind="swiperOptions"
      :class="className"
      @slide-change="onSlideChange"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="item.id"
        class="cursor-pointer"
        @click="onItemClick(item, index)"
      >
        <slot :item="item" :index="index">
          <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">Slide {{ index + 1 }}</span>
          </div>
        </slot>
      </SwiperSlide>

      <div v-if="navigation" class="swiper-button-prev" />
      <div v-if="navigation" class="swiper-button-next" />
      <div v-if="pagination" class="swiper-pagination" />
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-component :deep(.swiper-button-next),
.swiper-component :deep(.swiper-button-prev) {
  width: 44px;
  height: 44px;
  margin-top: -22px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.swiper-component :deep(.swiper-button-next:hover),
.swiper-component :deep(.swiper-button-prev:hover) {
  background: var(--color-green);
  border-color: var(--color-green);
  transform: scale(1.1);
}

.swiper-component :deep(.swiper-button-next::after),
.swiper-component :deep(.swiper-button-prev::after) {
  font-size: 18px;
  font-weight: bold;
}

.swiper-component :deep(.swiper-pagination) {
  bottom: -40px;
}

.swiper-component :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: var(--color-gray-5);
  opacity: 1;
  transition: all 0.3s ease;
}

.swiper-component :deep(.swiper-pagination-bullet-active) {
  background: var(--color-green);
  transform: scale(1.2);
}

.swiper-component :deep(.swiper-pagination-bullet:hover) {
  background: var(--color-gray-7);
}

.swiper-component :deep(.swiper-pagination-bullet-active:hover) {
  background: var(--color-green);
}

.swiper-component :deep(.swiper-slide) {
  height: auto;
}
</style>

<script lang="ts" setup>
interface SliderItem {
  id: string | number
  [key: string]: any
}

interface Properties {
  items: SliderItem[]
  autoplay?: boolean
  autoplayDelay?: number
  showDots?: boolean
  showArrows?: boolean
  itemsPerView?: number
  spaceBetween?: number
  loop?: boolean
  transition?: 'slide' | 'fade'
  className?: string
  duration?: number
  ease?: string
}

const properties = withDefaults(defineProps<Properties>(), {
  autoplay: false,
  autoplayDelay: 5000,
  showDots: true,
  showArrows: true,
  itemsPerView: 1,
  spaceBetween: 20,
  loop: true,
  transition: 'slide',
  className: '',
  duration: 0.6,
  ease: 'power2.inOut',
})

const emit = defineEmits<{
  slideChange: [index: number]
  itemClick: [item: SliderItem, index: number]
}>()

const currentSlide = ref(0)
const sliderContainer = ref<HTMLElement>()
const autoplayInterval = ref<NodeJS.Timeout>()
const isTransitioning = ref(false)

const totalSlides = computed(() => properties.items.length)
const canGoNext = computed(() => properties.loop || currentSlide.value < totalSlides.value - properties.itemsPerView)
const canGoPrevious = computed(() => properties.loop || currentSlide.value > 0)

const slideWidth = computed(() => {
  return 100 / properties.itemsPerView
})

const translateValue = computed(() => {
  return -(currentSlide.value * slideWidth.value)
})

const goToSlide = (index: number) => {
  if (isTransitioning.value || index === currentSlide.value)
    return

  isTransitioning.value = true
  currentSlide.value = Math.max(0, Math.min(index, totalSlides.value - properties.itemsPerView))

  if (sliderContainer.value) {
    const { $gsap } = useNuxtApp()

    $gsap.to(sliderContainer.value, {
      x: `${translateValue.value}%`,
      duration: properties.duration,
      ease: properties.ease,
      onComplete: () => {
        isTransitioning.value = false
        emit('slideChange', currentSlide.value)
      },
    })
  }
}

const nextSlide = () => {
  if (isTransitioning.value || !canGoNext.value)
    return

  if (properties.loop && currentSlide.value >= totalSlides.value - properties.itemsPerView) {
    goToSlide(0)
  }
  else {
    goToSlide(currentSlide.value + 1)
  }
}

const previousSlide = () => {
  if (isTransitioning.value || !canGoPrevious.value)
    return

  if (properties.loop && currentSlide.value === 0) {
    goToSlide(totalSlides.value - properties.itemsPerView)
  }
  else {
    goToSlide(currentSlide.value - 1)
  }
}

const onItemClick = (item: SliderItem, index: number) => {
  emit('itemClick', item, index)
}

const startAutoplay = () => {
  if (!properties.autoplay)
    return

  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, properties.autoplayDelay)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = undefined
  }
}

const handleMouseEnter = () => {
  if (properties.autoplay)
    stopAutoplay()
}

const handleMouseLeave = () => {
  if (properties.autoplay)
    startAutoplay()
}

watch(currentSlide, (newSlide) => {
  if (!sliderContainer.value)
    return

  const { $gsap } = useNuxtApp()
  isTransitioning.value = true

  if (properties.transition === 'fade') {
    $gsap.to('.slider-item', {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        $gsap.set('.slider-item', { opacity: 0 })
        $gsap.set(`.slider-item:nth-child(${newSlide + 1})`, { opacity: 1 })
        isTransitioning.value = false
      },
    })
  }
  else {
    $gsap.to(sliderContainer.value, {
      x: `${translateValue.value}%`,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        isTransitioning.value = false
      },
    })
  }
})

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

// Expose methods for parent component
defineExpose({
  nextSlide,
  previousSlide,
  goToSlide,
  currentSlide: readonly(currentSlide),
})
</script>

<template>
  <div
    :class="className"
    class="gsap-slider relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Slider Container -->
    <div class="overflow-hidden rounded-lg">
      <div
        ref="sliderContainer"
        class="flex transition-transform duration-600 ease-in-out"
        :class="{ 'opacity-transition': transition === 'fade' }"
        :style="{
          gap: `${spaceBetween}px`,
          transform: transition === 'slide' ? `translateX(${translateValue}%)` : undefined,
        }"
      >
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="slider-item flex-shrink-0 cursor-pointer"
          :style="{ width: `${slideWidth}%` }"
          :class="{ 'opacity-0': transition === 'fade' && index !== currentSlide }"
          @click="onItemClick(item, index)"
        >
          <slot :item="item" :index="index" :is-active="index === currentSlide">
            <!-- Default slot content -->
            <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span class="text-gray-500">Slide {{ index + 1 }}</span>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <template v-if="showArrows && totalSlides > itemsPerView">
      <button
        v-if="canGoPrevious"
        class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group z-10"
        :disabled="isTransitioning"
        @click="previousSlide"
      >
        <Icon name="mdi:chevron-left" class="w-5 h-5 text-white group-hover:text-white" />
      </button>

      <button
        v-if="canGoNext"
        class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group z-10"
        :disabled="isTransitioning"
        @click="nextSlide"
      >
        <Icon name="mdi:chevron-right" class="w-5 h-5 text-white group-hover:text-white" />
      </button>
    </template>

    <!-- Dots Navigation -->
    <div
      v-if="showDots && totalSlides > itemsPerView"
      class="flex justify-center gap-2 mt-6"
    >
      <button
        v-for="(item, index) in Math.ceil(totalSlides / itemsPerView)"
        :key="index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="Math.floor(currentSlide / itemsPerView) === index ? 'bg-green scale-110' : 'bg-gray-5 hover:bg-gray-7'"
        :disabled="isTransitioning"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Loading State -->
    <div v-if="isTransitioning" class="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg z-20">
      <div class="w-8 h-8 border-2 border-green border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
</template>

<style scoped>
.opacity-transition .slider-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.gsap-slider {
  user-select: none;
}
</style>

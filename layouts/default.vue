<script lang="ts" setup>
const coreStore = useCoreStore()

useHead({
  bodyAttrs: {
    class: computed(() => `content ${coreStore.selectedTheme}`),
  },
})

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  if ($ScrollTrigger) {
    $gsap.registerPlugin($ScrollTrigger)
  }

  $gsap.set('body', { autoAlpha: 1 })
})
</script>

<template>
  <div class="min-h-screen bg-gray-1 text-gray-12 transition-colors duration-300">
    <Header />
    <main class="pt-16">
      <slot />
    </main>
    <Footer />
  </div>
</template>

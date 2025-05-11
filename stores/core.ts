import { defineStore } from 'pinia'

export const useCoreStore = defineStore('core', () => {
  const isThemeDark = ref(true)

  const toggleTheme = () => isThemeDark.value = !isThemeDark.value

  const selectedTheme = computed(() => isThemeDark.value ? 'dark' : 'light')

  return {
    isThemeDark,
    toggleTheme,
    selectedTheme,
  }
})

import tailwindcss from '@tailwindcss/vite'

const process = await import ('node:process')

const developmentMode = process.env.NODE_ENV !== 'production'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: developmentMode },
  sourcemap: {
    server: developmentMode,
    client: developmentMode,
  },

  typescript: {
    typeCheck: true,
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxt/icon', ['@hypernym/nuxt-gsap', { composables: true }]],

  eslint: {
    config: {
      standalone: false,
    },
  },
})

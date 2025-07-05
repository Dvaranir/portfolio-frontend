declare module '#app' {
  interface NuxtApp {
    $gsap: typeof import('gsap').gsap
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof import('gsap').gsap
  }
}

export {}

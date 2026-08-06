export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@unocss/nuxt', '@antdv-next/nuxt', '@nuxtjs/color-mode'],
  css: ['antdv-next/dist/reset.css'],
  app: {
    baseURL: '/selicens/',
    buildAssetsDir: '/assets/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  experimental: {
    payloadExtraction: false
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  vite: {
    build: {
      target: 'esnext'
    }
  }
})

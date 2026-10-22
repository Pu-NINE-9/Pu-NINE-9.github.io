export default defineNuxtConfig({
  compatibilityDate: '2026-10-20',
  // 只扫描 .vue 组件，避免 index.ts 和 CardStack.vue 都注册成 UiCardStack
  components: [{ path: '~/components', extensions: ['.vue'] }],
  modules: ['@nuxt/ui'],
  ui: { fonts: false },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  colorMode: { preference: 'dark', fallback: 'dark', classSuffix: '' },
  icon: { clientBundle: { scan: true }, serverBundle: { collections: ['lucide'] } },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      titleTemplate: '%s · NINEの代码space',
      meta: [
        { name: 'theme-color', content: 'NINE 的个人网站' },
        { name: 'description', content: 'NINE 的个人网站' }
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/works',
        '/blog',
        ...Array.from({ length: 4 }, (_, i) => `/works/${i + 1}`),
        ...Array.from({ length: 10 }, (_, i) => `/blog/${i + 1}`)
      ]
    }
  },
  typescript: { strict: true }
})

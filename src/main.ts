import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './locales'
import VueLazyload from 'vue-lazyload'
import 'nes.css/css/nes.min.css'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  throttleWait: 200,
  silent: true
})

app.mount('#app')

// 隐藏初始加载动画
setTimeout(() => {
  const loading = document.getElementById('initial-loading')
  if (loading) {
    loading.classList.add('hidden')
    setTimeout(() => {
      loading.remove()
    }, 500)
  }
}, 300)

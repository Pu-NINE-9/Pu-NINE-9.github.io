import { createI18n } from 'vue-i18n'
import zh from '../locales/zh-CN.json'
import en from '../locales/en-US.json'
import ja from '../locales/ja-JP.json'
import ko from '../locales/ko-KR.json'

export default defineNuxtPlugin((nuxtApp) => {
  const language = useCookie<string>('nine-language', { default: () => 'zh-CN', sameSite: 'lax' })
  const locale = ['zh-CN', 'en-US', 'ja-JP', 'ko-KR'].includes(language.value) ? language.value : 'zh-CN'
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'zh-CN',
    messages: { 'zh-CN': zh, 'en-US': en, 'ja-JP': ja, 'ko-KR': ko }
  })
  nuxtApp.vueApp.use(i18n)
})

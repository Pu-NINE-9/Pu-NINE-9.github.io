import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.json'
import jaJP from './ja-JP.json'
import koKR from './ko-KR.json'
import enUS from './en-US.json'

export type MessageSchema = typeof zhCN

const i18n = createI18n<[MessageSchema], 'zh-CN' | 'ja-JP' | 'ko-KR' | 'en-US'>({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'ja-JP': jaJP,
    'ko-KR': koKR,
    'en-US': enUS
  }
})

export default i18n

export const availableLocales = [
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' }
]
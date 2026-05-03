import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Theme = 'light' | 'dark'

export const useAppStore = defineStore('app', () => {
  const locale = ref('zh-CN')
  const isMobileMenuOpen = ref(false)
  const theme = ref<Theme>('dark')

  function setLocale(newLocale: string) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  function toggleTheme() {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  function applyTheme(t: Theme) {
    document.documentElement.setAttribute('data-theme', t)
  }

  function getThemeByTime(): Theme {
    const hour = new Date().getHours()
    return hour >= 20 || hour < 6 ? 'dark' : 'light'
  }

  function initTheme() {
    const hour = new Date().getHours()
    
    if (hour >= 20 || hour < 6) {
      setTheme('dark')
    } else {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      if (savedTheme) {
        setTheme(savedTheme)
      } else {
        setTheme('light')
      }
    }
  }

  return {
    locale,
    isMobileMenuOpen,
    theme,
    setLocale,
    toggleMobileMenu,
    closeMobileMenu,
    setTheme,
    toggleTheme,
    initTheme,
    getThemeByTime
  }
})

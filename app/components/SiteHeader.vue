<script setup lang="ts">
const { t, locale, copy } = useSiteContent()
const route = useRoute()
const open = ref(false)
const language = useCookie<string>('nine-language', { sameSite: 'lax' })
const locales = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
  { label: '日本語', value: 'ja-JP' },
  { label: '한국어', value: 'ko-KR' }
]
watch(locale, (value) => {
  language.value = value
})
watch(
  () => route.fullPath,
  () => {
    open.value = false
  }
)
useHead(() => ({ htmlAttrs: { lang: locale.value } }))
const links = computed(() => [
  { to: '/', label: t('nav.home'), code: '01' },
  { to: '/works', label: t('nav.works'), code: '02' },
  { to: '/blog', label: t('nav.blog'), code: '03' },
  { to: '/#about', label: copy('关于我', 'About', '私について', '소개'), code: '04' }
])
function active(path: string) {
  return path === '/'
    ? route.path === '/' && !route.hash
    : path.includes('#')
      ? !!route.hash
      : route.path.startsWith(path)
}
</script>

<template>
  <header class="site-header">
    <div class="site-container header-inner">
      <NuxtLink to="/" class="brand" aria-label="NINEの代码space 首页">
        <img src="/logo.png" alt="NINEの代码space" class="brand-logo" width="38" height="38" />
        <span class="brand-name">NINE<span class="brand-space">の代码space</span></span>
      </NuxtLink>
      <nav class="desktop-nav" :aria-label="copy('主导航', 'Main navigation')">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: active(link.to) }">
          <span class="nav-code">{{ link.code }}</span
          >{{ link.label }}<span v-if="active(link.to)" class="nav-dot" />
        </NuxtLink>
      </nav>
      <div class="header-actions">
        <USelect
          v-model="locale"
          :items="locales"
          variant="ghost"
          size="sm"
          icon="i-lucide-languages"
          aria-label="Language / 语言"
          class="language-select"
        />
        <UButton
          to="https://github.com/Pu-NINE-9"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-github"
          color="neutral"
          variant="ghost"
          aria-label="GitHub"
          class="github-link"
        />
        <UButton
          :icon="open ? 'i-lucide-x' : 'i-lucide-menu'"
          color="neutral"
          variant="ghost"
          :aria-label="copy('切换导航菜单', 'Toggle navigation')"
          :aria-expanded="open"
          aria-controls="mobile-navigation"
          class="mobile-toggle"
          @click="open = !open"
        />
      </div>
    </div>
    <nav v-if="open" id="mobile-navigation" class="mobile-nav" :aria-label="copy('移动导航', 'Mobile navigation')">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: active(link.to) }"
        ><span>{{ link.code }}</span
        >{{ link.label }}<UIcon name="i-lucide-arrow-up-right"
      /></NuxtLink>
    </nav>
  </header>
</template>

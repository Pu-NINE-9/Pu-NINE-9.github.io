<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { availableLocales } from '@/locales'
import { useAppStore } from '@/stores/app'

const { locale } = useI18n()
const appStore = useAppStore()

const changeLocale = (code: string) => {
  locale.value = code
  appStore.setLocale(code)
}
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="lang in availableLocales"
      :key="lang.code"
      class="lang-btn"
      :class="{ 'is-active': locale === lang.code }"
      @click="changeLocale(lang.code)"
      :title="lang.name"
    >
      <span class="flag">{{ lang.flag }}</span>
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background: var(--bg-surface);
  border: 2px solid var(--pixel-black);
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.lang-btn:hover {
  background: var(--pixel-blue);
}

.lang-btn.is-active {
  background: var(--pixel-red);
  box-shadow: 2px 2px 0 var(--pixel-black);
}

.flag {
  display: block;
}
</style>
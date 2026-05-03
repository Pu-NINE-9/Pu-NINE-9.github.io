<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <button
    class="theme-toggle"
    @click="appStore.toggleTheme"
    :title="appStore.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <span v-if="appStore.theme === 'dark'" class="icon">☀️</span>
    <span v-else class="icon">🌙</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: var(--bg-surface);
  border: 2px solid var(--pixel-black);
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background: var(--pixel-yellow);
  transform: scale(1.05);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.icon {
  display: block;
}
</style>
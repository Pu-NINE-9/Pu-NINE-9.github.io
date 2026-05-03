<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import { useMusicStore } from './stores/music'
import { useAppStore } from './stores/app'

const musicStore = useMusicStore()
const appStore = useAppStore()

onMounted(() => {
  appStore.initTheme()
  musicStore.initAudio('background-music.mp3')
})
</script>

<template>
  <div class="app-container scanlines">
    <Navigation />
    <main class="page-content">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <footer class="pixel-footer">
      <div class="container">
        <p class="footer-text">
          © 2025 NINEのコードspace | {{ $t('footer.madeWith') }}
        </p>
      </div>
    </footer>
    <MusicPlayer />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.pixel-footer {
  background: var(--bg-darker);
  border-top: 4px solid var(--pixel-black);
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer-text {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
}
</style>
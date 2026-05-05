<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import { useMusicStore } from './stores/music'
import { useAppStore } from './stores/app'

const MusicPlayer = defineAsyncComponent(() => import('./components/MusicPlayer.vue'))

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
        <div class="footer-content">
          <p class="footer-text">
            © 2025 NINEの代码space | {{ $t('footer.madeWith') }}
          </p>
          <p class="footer-views">
            <img :src="'https://visitor-badge.laobi.icu/badge?page_id=pu-nine-9.github.io'" alt="visitor badge" />
          </p>
        </div>
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

@media screen and (max-width: 768px), screen and (max-device-width: 768px) {
  .page-content {
    padding-top: calc(60px + constant(safe-area-inset-top));
    padding-top: calc(60px + env(safe-area-inset-top));
    width: 100%;
    min-width: 320px;
    box-sizing: border-box;
  }
}

.pixel-footer {
  background: var(--bg-darker);
  border-top: 4px solid var(--pixel-black);
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.footer-text {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
}

.footer-views {
  margin: 0;
  display: flex;
  align-items: center;
}

.footer-views img {
  height: 20px;
  border-radius: 4px;
}

@media (min-width: 769px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footer-text {
    text-align: left;
  }
}
</style>
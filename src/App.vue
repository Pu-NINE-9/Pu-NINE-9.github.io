<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import { useMusicStore } from './stores/music'
import { useAppStore } from './stores/app'

const musicStore = useMusicStore()
const appStore = useAppStore()
const pageViews = ref(0)

const updatePageViews = () => {
  const savedViews = localStorage.getItem('pageViews')
  const views = savedViews ? parseInt(savedViews, 10) + 1 : 10000
  pageViews.value = views
  localStorage.setItem('pageViews', views.toString())
}

onMounted(() => {
  appStore.initTheme()
  musicStore.initAudio('background-music.mp3')
  updatePageViews()
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
            © 2025 NINEのコードspace | {{ $t('footer.madeWith') }}
          </p>
          <p class="footer-views">
            <span class="views-icon">👁️</span>
            <span class="views-label">{{ $t('footer.pageviews') }}:</span>
            <span class="views-count">{{ pageViews.toLocaleString() }}</span>
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
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: var(--pixel-yellow);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
}

.views-icon {
  font-size: 0.7rem;
}

.views-label {
  color: var(--text-secondary);
}

.views-count {
  color: var(--pixel-green);
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
<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import { useAppStore } from './stores/app'

const MusicPlayer = defineAsyncComponent(() => import('./components/MusicPlayer.vue'))

const appStore = useAppStore()

onMounted(() => {
  appStore.initTheme()
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
          <div class="footer-views-wrapper">
            <p class="footer-views">
              <img 
                v-lazy="`https://visitor-badge.laobi.icu/badge?page_id=pu-nine-9.github.io`" 
                alt="visitor badge" 
                width="150" 
                height="20"
                class="visitor-badge"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
    <MusicPlayer />
    <Lightbox />
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
  min-height: 100px;
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
  flex-shrink: 0;
}

.footer-views-wrapper {
  flex-shrink: 0;
  width: 150px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-views {
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.footer-views img {
  height: 20px;
  width: 150px;
  border-radius: 4px;
  object-fit: contain;
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
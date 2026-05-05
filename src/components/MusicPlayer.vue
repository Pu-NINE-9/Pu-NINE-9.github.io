<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useMusicStore } from '@/stores/music'
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const { t } = useI18n()
const musicStore = useMusicStore()
const musicPlayer = ref<HTMLElement | null>(null)

const initX = typeof window !== 'undefined' ? window.innerWidth - 200 : 0
const initY = typeof window !== 'undefined' ? window.innerHeight - 100 : 0

const { style } = useDraggable(musicPlayer, {
  initialValue: { x: initX, y: initY },
})
</script>

<template>
  <div ref="musicPlayer" class="music-player" :style="style">
    <button class="music-btn" @click="musicStore.toggle" :title="musicStore.isPlaying ? t('music.pause') : t('music.play')">
      <span v-if="musicStore.isPlaying" class="icon">⏸️</span>
      <span v-else class="icon">▶️</span>
    </button>
    <div class="music-info">
      <span class="music-label pixel-blink" v-if="musicStore.isPlaying">{{ t('music.nowPlaying') }}</span>
      <span class="music-track">🎵 BGM</span>
    </div>
  </div>
</template>

<style scoped>
.music-player {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-darker);
  border: 3px solid var(--pixel-black);
  padding: 0.5rem 1rem;
  box-shadow: 4px 4px 0 var(--pixel-black);
  z-index: 1000;
  cursor: move;
  user-select: none;
  touch-action: none;
}

.music-btn {
  background: var(--pixel-red);
  border: 2px solid var(--pixel-black);
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.music-btn:hover {
  background: var(--pixel-yellow);
  transform: scale(1.05);
}

.music-btn:active {
  transform: scale(0.95);
}

.icon {
  font-size: 1.2rem;
}

.music-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.music-label {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--pixel-green);
}

.music-track {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .music-player {
    padding: 0.4rem 0.75rem;
  }

  .music-info {
    display: none;
  }
}
</style>
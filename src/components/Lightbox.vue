<script setup lang="ts">
import { useLightbox } from '@/composables/useLightbox'

const { currentImage, isOpen, close } = useLightbox()
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="isOpen && currentImage" class="lightbox" @click="close">
        <div class="lightbox-content" @click.stop>
          <img :src="currentImage" alt="Preview" class="lightbox-img" />
          <button class="lightbox-close" @click="close">✕</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: pointer;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
}

.lightbox-img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border: 4px solid var(--pixel-yellow);
  box-shadow: 0 0 30px rgba(242, 183, 5, 0.3);
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: var(--pixel-red);
  border: 2px solid var(--pixel-black);
  color: var(--pixel-white);
  font-size: 1.2rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.lightbox-close:hover {
  transform: scale(1.1);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .lightbox-img {
    max-width: 95vw;
    max-height: 75vh;
  }

  .lightbox-close {
    top: -36px;
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
}
</style>
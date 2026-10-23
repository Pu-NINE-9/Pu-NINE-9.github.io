<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    images: { src: string; alt: string }[]
    label?: string
    accent?: string
    aspect?: 'portrait' | 'landscape'
  }>(),
  { label: 'PHOTO SERIES', accent: '#b394ee', aspect: 'portrait' }
)

const current = ref(0)
const currentImage = computed(() => props.images[current.value])
const paused = ref(false)
const previewImage = ref<{ src: string; alt: string } | null>(null)
const modalOpen = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

function next() {
  current.value = (current.value + 1) % props.images.length
}
function previous() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}
function start() {
  clearInterval(timer)
  if (!paused.value && props.images.length > 1) timer = setInterval(next, 4200)
}
function openPreview(image: { src: string; alt: string }) {
  previewImage.value = image
  modalOpen.value = true
  paused.value = true
}
function closePreview() {
  modalOpen.value = false
  previewImage.value = null
  paused.value = false
}
function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closePreview()
}

watch(paused, start)
onMounted(() => {
  start()
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    class="photo-carousel"
    :class="['photo-' + aspect, { paused }]"
    :style="{ '--accent': accent }"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @keydown.esc="closePreview"
  >
    <div class="photo-frame">
      <TransitionGroup name="photo-fade">
        <img
          v-for="(image, index) in images"
          v-show="index === current"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          decoding="async"
          @click="openPreview(image)"
        />
      </TransitionGroup>
      <button
        type="button"
        class="photo-zoom"
        :aria-label="'Preview ' + props.label"
        @click="currentImage && openPreview(currentImage)"
      >
        <UIcon name="i-lucide-expand" />
      </button>
      <span class="photo-counter"
        >{{ String(current + 1).padStart(2, '0') }} / {{ String(images.length).padStart(2, '0') }}</span
      >
      <div class="photo-controls">
        <button type="button" :aria-label="'Previous ' + props.label" @click="previous">
          <UIcon name="i-lucide-arrow-left" />
        </button>
        <button type="button" :aria-label="'Next ' + props.label" @click="next">
          <UIcon name="i-lucide-arrow-right" />
        </button>
      </div>
    </div>
    <div class="photo-progress" role="tablist" :aria-label="props.label">
      <button
        v-for="(_, index) in images"
        :key="index"
        type="button"
        :class="{ active: index === current }"
        :aria-label="props.label + ' ' + (index + 1)"
        :aria-selected="index === current"
        role="tab"
        @click="current = index"
      />
    </div>
    <AnimatedModal v-model:open="modalOpen" :close-on-esc="true" @close="closePreview">
      <AnimatedModalBody
        class="photo-modal-body"
        content-class="photo-modal-content"
        :close-on-outside="true"
        :lock-scroll="true"
      >
        <AnimatedModalContent v-if="previewImage" class="photo-lightbox-frame" :style="{ '--accent': accent }">
          <img :src="previewImage.src" :alt="previewImage.alt" decoding="async" />
        </AnimatedModalContent>
      </AnimatedModalBody>
    </AnimatedModal>
  </div>
</template>

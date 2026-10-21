<script setup lang="ts">
const { copy } = useSiteContent()
const audio = ref<HTMLAudioElement>()
const playing = ref(false)
const busy = ref(false)
const error = ref('')
const volume = ref(0.3)
// SSR-safe default values — actual values set in onMounted
const position = reactive({ x: 22, y: 400 })
const dragOffset = reactive({ x: 0, y: 0 })
const isDragging = ref(false)
const wasPlaying = ref(false)

onMounted(() => {
  // Restore saved position or use window-aware default
  const saved = localStorage.getItem('music-dock-pos')
  if (saved) {
    try {
      const p = JSON.parse(saved)
      position.x = p.x
      position.y = p.y
    } catch {
      position.y = window.innerHeight - 80
    }
  } else {
    position.y = window.innerHeight - 80
  }
  // Try auto-play
  setTimeout(() => tryAutoPlay(), 600)
})

function tryAutoPlay() {
  if (!audio.value) return
  audio.value.volume = volume.value
  audio.value
    .play()
    .then(() => {
      playing.value = true
    })
    .catch(() => {
      // Autoplay blocked — resume on first user interaction
      const resume = () => {
        audio.value
          ?.play()
          .then(() => {
            playing.value = true
          })
          .catch(() => {})
        document.removeEventListener('click', resume)
        document.removeEventListener('keydown', resume)
        document.removeEventListener('touchstart', resume)
      }
      document.addEventListener('click', resume, { once: true })
      document.addEventListener('keydown', resume, { once: true })
      document.addEventListener('touchstart', resume, { once: true })
    })
}

async function toggle() {
  if (!audio.value || busy.value) return
  error.value = ''
  if (playing.value) {
    audio.value.pause()
    return
  }
  busy.value = true
  try {
    audio.value.volume = volume.value
    await audio.value.play()
  } catch {
    error.value = copy('暂时无法播放，请稍后重试', 'Playback unavailable. Please try again.')
  } finally {
    busy.value = false
  }
}

watch(volume, (value) => {
  if (audio.value) audio.value.volume = value
})

function handleAudioError() {
  playing.value = false
  error.value = copy('音乐加载失败', 'Unable to load music')
}

// Drag handling
function startDrag(e: PointerEvent) {
  if ((e.target as HTMLElement).closest('button, input')) return
  isDragging.value = true
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  dragOffset.x = e.clientX - rect.left
  dragOffset.y = e.clientY - rect.top
  wasPlaying.value = playing.value
  if (playing.value) audio.value?.pause()

  window.addEventListener('pointermove', onDrag)
  window.addEventListener('pointerup', endDrag)
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onDrag(e: PointerEvent) {
  if (!isDragging.value) return
  position.x = Math.max(0, Math.min(window.innerWidth - 200, e.clientX - dragOffset.x))
  position.y = Math.max(0, Math.min(window.innerHeight - 60, e.clientY - dragOffset.y))
}

function endDrag() {
  if (isDragging.value && wasPlaying.value) audio.value?.play().catch(() => {})
  isDragging.value = false
  window.removeEventListener('pointermove', onDrag)
  window.removeEventListener('pointerup', endDrag)
  localStorage.setItem('music-dock-pos', JSON.stringify(position))
}
</script>

<template>
  <aside
    class="music-dock"
    :class="{ playing, dragging: isDragging }"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
    aria-label="背景音乐"
    @pointerdown="startDrag"
  >
    <audio
      ref="audio"
      src="/music/background-music.mp3"
      loop
      preload="none"
      @play="playing = true"
      @pause="playing = false"
      @error="handleAudioError"
    />
    <UButton
      :icon="playing ? 'i-lucide-pause' : 'i-lucide-play'"
      :loading="busy"
      :aria-label="copy(playing ? '暂停音乐' : '播放音乐', playing ? 'Pause music' : 'Play music')"
      color="neutral"
      variant="ghost"
      size="sm"
      @click="toggle"
    />
    <span class="equalizer" aria-hidden="true"><i /><i /><i /><i /></span>
    <span class="music-label">{{ playing ? 'NOW PLAYING' : 'SOUND OFF' }}</span>
    <label class="volume-control"
      ><span class="sr-only">{{ copy('音量', 'Volume') }}</span
      ><input v-model.number="volume" type="range" min="0" max="1" step="0.05" aria-label="音量 / Volume"
    /></label>
    <span v-if="error" class="music-error" role="status">{{ error }}</span>
  </aside>
</template>

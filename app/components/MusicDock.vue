<script setup lang="ts">
const { copy } = useSiteContent()
const audio = ref<HTMLAudioElement>()
const playing = ref(false)
const busy = ref(false)
const error = ref('')
const volume = ref(0.3)
// SSR-safe default values — actual values set in onMounted
// Keep the dock in the viewport even when an older saved position came from
// a different screen size. Coordinates are the top-left corner in pixels.
const position = reactive({ x: 20, y: 0 })
const dragOffset = reactive({ x: 0, y: 0 })
const isDragging = ref(false)
const wasPlaying = ref(false)
let resumeAfterGesture: (() => void) | undefined

onMounted(() => {
  const maxX = () => Math.max(12, window.innerWidth - 260)
  const maxY = () => Math.max(12, window.innerHeight - 78)
  // Restore saved position, clamped to the current viewport. Older versions
  // stored a bottom offset and could leave the player outside the screen.
  const saved = localStorage.getItem('music-dock-pos')
  if (saved) {
    try {
      const p = JSON.parse(saved)
      position.x = Math.min(Math.max(Number(p.x) || 20, 12), maxX())
      position.y = Math.min(Math.max(Number(p.y) || maxY(), 12), maxY())
    } catch {
      position.x = 20
      position.y = maxY()
    }
  } else {
    position.x = 20
    position.y = maxY()
  }
  // Try auto-play
  setTimeout(() => tryAutoPlay(), 120)
  window.addEventListener('resize', keepInViewport, { passive: true })
})

function keepInViewport() {
  if (!import.meta.client) return
  const dockWidth = Math.min(300, Math.max(220, window.innerWidth - 24))
  position.x = Math.min(Math.max(position.x, 12), Math.max(12, window.innerWidth - dockWidth - 12))
  position.y = Math.min(Math.max(position.y, 12), Math.max(12, window.innerHeight - 78))
}

function tryAutoPlay() {
  if (!audio.value) return
  audio.value.volume = volume.value
  audio.value
    .play()
    .then(() => {
      playing.value = true
    })
    .catch(() => {
      const resume = () => {
        resumeAfterGesture = undefined
        audio.value
          ?.play()
          .then(() => {
            playing.value = true
          })
          .catch(() => {})
      }
      resumeAfterGesture = resume
      document.addEventListener('pointerdown', resume, { once: true, passive: true })
      document.addEventListener('keydown', resume, { once: true })
    })
}
async function toggle() {
  if (!audio.value || busy.value) return
  if (resumeAfterGesture) {
    document.removeEventListener('pointerdown', resumeAfterGesture)
    document.removeEventListener('keydown', resumeAfterGesture)
    resumeAfterGesture = undefined
  }
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
  position.x = Math.max(12, Math.min(window.innerWidth - 260, e.clientX - dragOffset.x))
  position.y = Math.max(12, Math.min(window.innerHeight - 78, e.clientY - dragOffset.y))
}

function endDrag() {
  if (isDragging.value && wasPlaying.value) audio.value?.play().catch(() => {})
  isDragging.value = false
  window.removeEventListener('pointermove', onDrag)
  window.removeEventListener('pointerup', endDrag)
  localStorage.setItem('music-dock-pos', JSON.stringify(position))
}

onUnmounted(() => window.removeEventListener('resize', keepInViewport))
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
      autoplay
      playsinline
      preload="auto"
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

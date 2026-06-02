import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('music', () => {
  const isPlaying = ref(false)
  const currentTrack = ref('background-music.mp3')
  const volume = ref(0.3)
  const isInitialized = ref(false)

  const audio = ref<HTMLAudioElement | null>(null)

  function initAudio(src: string) {
    if (audio.value) {
      audio.value.pause()
      audio.value = null
    }
    audio.value = new Audio(`/music/${src}`)
    audio.value.loop = true
    audio.value.volume = volume.value
    isInitialized.value = true
  }

  function play() {
    // 如果还没初始化，先初始化
    if (!isInitialized.value) {
      initAudio(currentTrack.value)
    }
    if (audio.value) {
      audio.value.play()
      isPlaying.value = true
    }
  }

  function pause() {
    if (audio.value) {
      audio.value.pause()
      isPlaying.value = false
    }
  }

  function toggle() {
    if (isPlaying.value) {
      pause()
    } else {
      play()
    }
  }

  function setVolume(newVolume: number) {
    volume.value = newVolume
    if (audio.value) {
      audio.value.volume = newVolume
    }
  }

  return {
    isPlaying,
    currentTrack,
    volume,
    isInitialized,
    initAudio,
    play,
    pause,
    toggle,
    setVolume
  }
})
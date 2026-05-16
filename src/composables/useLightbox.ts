import { ref } from 'vue'

const currentImage = ref<string | null>(null)
const isOpen = ref(false)

export function useLightbox() {
  const open = (src: string) => {
    currentImage.value = src
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
    setTimeout(() => {
      currentImage.value = null
    }, 300)
  }

  return {
    currentImage,
    isOpen,
    open,
    close
  }
}
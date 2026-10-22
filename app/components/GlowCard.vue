<script setup lang="ts">
withDefaults(defineProps<{ accent?: string }>(), { accent: '#a78bfa' })

const tilt = ref<Record<string, string>>({})
const glare = ref(0) // 0~1，控制 glare 透明度

let glareRaf: number | null = null

function move(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const px = event.clientX - rect.left
  const py = event.clientY - rect.top
  tilt.value = {
    '--rx': `${-((event.clientY - rect.top) / rect.height - 0.5) * 5}deg`,
    '--ry': `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`,
    '--mx': `${px}px`,
    '--my': `${py}px`,
    '--glare-x': `${(px / rect.width) * 100}%`,
    '--glare-y': `${(py / rect.height) * 100}%`
  }
  // rAF 平滑淡入 glare
  if (glareRaf != null) cancelAnimationFrame(glareRaf)
  glare.value = 1
}

function leave() {
  tilt.value = {}
  glare.value = 0
}
</script>

<template>
  <div
    class="glow-card"
    :style="{ '--accent': accent, ...tilt, '--glare-opacity': glare }"
    @pointermove="move"
    @pointerleave="leave"
  >
    <slot />
    <div class="glare-overlay" aria-hidden="true" />
  </div>
</template>

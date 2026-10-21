<script setup lang="ts">
const x = ref(-100)
const y = ref(-100)
const visible = ref(false)

function move(event: PointerEvent) {
  x.value = event.clientX
  y.value = event.clientY
  visible.value = true
}

onMounted(() => window.addEventListener('pointermove', move, { passive: true }))
onUnmounted(() => window.removeEventListener('pointermove', move))
</script>

<template>
  <div
    class="fluid-cursor"
    :class="{ visible }"
    :style="{ '--cursor-x': `${x}px`, '--cursor-y': `${y}px` }"
    aria-hidden="true"
  />
</template>

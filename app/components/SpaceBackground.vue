<script setup lang="ts">
const stars = Array.from({ length: 65 }, (_, i) => ({
  left: `${((i * 73.37 + 11) % 100).toFixed(2)}%`,
  top: `${((i * 39.73 + 7) % 100).toFixed(2)}%`,
  animationDelay: `${i % 7}s`,
  animationDuration: `${3 + (i % 5)}s`,
  width: `${i % 4 === 0 ? 2 : 1}px`,
  height: `${i % 4 === 0 ? 2 : 1}px`
}))
</script>

<template>
  <div class="space-background" aria-hidden="true">
    <div class="space-grid" />
    <div class="nebula nebula-purple" />
    <div class="nebula nebula-cyan" />
    <div class="nebula nebula-pink" />
    <span v-for="(star, index) in stars" :key="index" class="star" :style="star" />
  </div>
</template>

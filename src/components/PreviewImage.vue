<script setup lang="ts">
import { useLightbox } from '@/composables/useLightbox'

defineProps<{
  src: string
  alt?: string
  className?: string
}>()

const { open } = useLightbox()
</script>

<template>
  <img
    :src="src"
    :alt="alt || ''"
    :class="className"
    v-lazy="src"
    @click="open(src)"
    style="cursor: pointer;"
  />
</template>
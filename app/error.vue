<script setup lang="ts">
defineProps<{ error: { statusCode?: number; message?: string } }>()
</script>

<template>
  <UApp
    ><div class="error-page">
      <SpaceBackground />
      <div class="error-content">
        <span class="section-eyebrow">LOST IN THE DIGITAL UNIVERSE</span>
        <h1 class="gradient-text">{{ error.statusCode || 500 }}<span>.</span></h1>
        <h2>{{ error.statusCode === 404 ? '这片星域，还未被探索。' : '信号暂时中断。' }}</h2>
        <p>{{ error.statusCode === 404 ? '页面可能已搬迁，回到起点继续探索吧。' : '请稍后再试，或返回首页。' }}</p>
        <UButton class="neon-button" icon="i-lucide-arrow-left" @click="clearError({ redirect: '/' })"
          >返回首页</UButton
        >
      </div>
    </div></UApp
  >
</template>

<script setup lang="ts">
defineProps<{ article: { href: string; title: string }; index: number }>()
const { copy } = useSiteContent()
</script>

<template>
  <a
    :href="article.href"
    target="_blank"
    rel="noopener noreferrer"
    class="blog-card"
    :style="{ '--accent': ['#a78bfa', '#51e0cd', '#f29bd5'][index % 3] }"
  >
    <div class="blog-card-top"><span class="blog-category">CSDN</span><UIcon name="i-lucide-external-link" /></div>
    <h3>{{ article.title }}</h3>
    <div class="blog-card-bottom">
      <span
        >{{ copy('在 CSDN 阅读', 'Read on CSDN', 'CSDNで読む', 'CSDN에서 읽기') }}<UIcon name="i-lucide-arrow-up-right"
      /></span>
    </div>
  </a>
</template>

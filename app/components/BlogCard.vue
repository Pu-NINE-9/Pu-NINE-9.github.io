<script setup lang="ts">
import type { BlogPost } from '../data/blogs'
defineProps<{ post: BlogPost; index: number }>()
const { copy } = useSiteContent()
</script>

<template>
  <NuxtLink
    :to="`/blog/${post.id}`"
    class="blog-card"
    :style="{ '--accent': ['#a78bfa', '#51e0cd', '#f29bd5'][index % 3] }"
  >
    <div class="blog-card-top">
      <span class="blog-category">{{ post.tags[0] }}</span
      ><span class="mono">{{ post.date.replaceAll('-', '.') }}</span>
    </div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.summary }}</p>
    <div class="blog-card-bottom">
      <span>{{ copy('阅读笔记', 'READ STORY', '記事を読む', '글 읽기') }}<UIcon name="i-lucide-arrow-up-right" /></span
      ><small>{{ Math.max(2, Math.ceil(post.content.length / 900)) }} MIN READ</small>
    </div>
  </NuxtLink>
</template>

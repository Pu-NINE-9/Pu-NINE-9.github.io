<script setup lang="ts">
import articles from '~/data/dataset/articles.json'

const route = useRoute()
const { copy } = useSiteContent()
const article = computed(() => articles[Number(route.params.id) - 1])
if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Article not found' })
useSeoMeta({ title: () => article.value?.title, description: () => article.value?.desc })
onMounted(() => {
  if (article.value) window.location.replace(article.value.href)
})
</script>

<template>
  <main v-if="article" class="site-container article-page article-redirect-page">
    <NuxtLink to="/blog" class="text-link back-link"><UIcon name="i-lucide-arrow-left" />{{ copy('返回博客列表', 'Back to blog') }}</NuxtLink>
    <div class="article-redirect-card glow-card" style="--accent: #a78bfa">
      <UIcon name="i-lucide-external-link" class="article-redirect-icon" />
      <p class="section-eyebrow">CSDN / EXTERNAL ARTICLE</p>
      <h1>{{ article.title }}</h1>
      <p>{{ copy('正在打开 CSDN 原文…', 'Opening the original article on CSDN…') }}</p>
      <a :href="article.href" target="_blank" rel="noopener noreferrer" class="text-link">{{ copy('立即打开', 'Open article') }} <UIcon name="i-lucide-arrow-up-right" /></a>
    </div>
  </main>
</template>

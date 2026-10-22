<script setup lang="ts">
import articles from '~/data/dataset/articles.json'

const { copy } = useSiteContent()
const query = ref('')
const shown = ref(6)
const filtered = computed(() =>
  articles.filter((article) => `${article.title} ${article.desc}`.toLowerCase().includes(query.value.trim().toLowerCase()))
)
watch(query, () => {
  shown.value = 6
})
function resetFilters() {
  query.value = ''
}
useSeoMeta({
  title: () => copy('个人博客', 'Blog'),
  description: () => copy('记录技术探索与开发实践，分享学习笔记。', 'Notes on technology, practice, and ideas.')
})
</script>

<template>
  <div class="site-container listing-page">
    <header class="page-heading">
      <p class="section-eyebrow"><span>THINKING OUT LOUD /</span> THE DEV JOURNAL</p>
      <h1>
        <span class="gradient-text">{{ copy('个人博客', 'THE DEV JOURNAL') }}</span>
      </h1>
      <p>
        {{
          copy('更多内容请查看我的 CSDN ~', 'Technology, inspiration, and growth. Read the full articles on CSDN.')
        }}
      </p>
    </header>
    <div class="blog-toolbar">
      <UInput
        v-model="query"
        icon="i-lucide-search"
        :placeholder="copy('搜索文章标题或关键词…', 'Search article titles or keywords…')"
        :aria-label="copy('搜索文章', 'Search articles')"
        size="xl"
        class="blog-search"
      /><span class="result-count" aria-live="polite">{{ filtered.length }} {{ copy('篇文章', 'ARTICLES') }}</span>
    </div>
    <div v-if="filtered.length" class="blog-grid">
      <BlogCard v-for="(article, index) in filtered.slice(0, shown)" :key="article.href" :article="article" :index="index" />
    </div>
    <div v-else class="empty-state">
      <UIcon name="i-lucide-search-x" />
      <h2>{{ copy('还没找到相关文章', 'No matching articles') }}</h2>
      <p>{{ copy('试试其他关键词，或清除搜索条件。', 'Try another keyword or reset the search.') }}</p>
      <UButton color="neutral" variant="outline" @click="resetFilters">{{ copy('清除搜索', 'Reset search') }}</UButton>
    </div>
    <div v-if="filtered.length > shown" class="load-more">
      <UButton color="neutral" variant="outline" trailing-icon="i-lucide-arrow-down" size="xl" @click="shown += 6">{{
        copy('加载更多文章', 'Load more articles')
      }}</UButton>
    </div>
  </div>
</template>

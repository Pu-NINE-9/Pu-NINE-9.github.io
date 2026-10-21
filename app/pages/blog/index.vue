<script setup lang="ts">
const { posts, copy, t } = useSiteContent()
const query = ref('')
const tag = ref('All')
const shown = ref(6)
const tags = ['All', 'Vue.js', 'JavaScript', 'Git', 'TypeScript', 'Dart']
const filtered = computed(() =>
  posts.value.filter(
    (post) =>
      (tag.value === 'All' || post.tags.includes(tag.value)) &&
      `${post.title} ${post.summary} ${post.tags.join(' ')}`.toLowerCase().includes(query.value.trim().toLowerCase())
  )
)
watch([query, tag], () => {
  shown.value = 6
})
function resetFilters() {
  query.value = ''
  tag.value = 'All'
}
useSeoMeta({
  title: () => t('blog.title'),
  description: '记录技术探索与开发实践，分享学习笔记。'
})
</script>

<template>
  <div class="site-container listing-page">
    <header class="page-heading">
      <p class="section-eyebrow"><span>THINKING OUT LOUD /</span> THE DEV JOURNAL</p>
      <h1>
        <span class="gradient-text">{{ copy('个人博客', ' the journey.', '物語に。', '이야기로.') }}</span>
      </h1>
      <p>
        {{
          copy(
            '更多内容请查看我的 CSDN ~',
            'Technology, inspiration, and growth. A growing collection of things I’ve learned.'
          )
        }}
      </p>
    </header>
    <div class="blog-toolbar">
      <UInput
        v-model="query"
        icon="i-lucide-search"
        :placeholder="copy('搜索文章、技术或关键词…', 'Search articles, topics, keywords…')"
        :aria-label="copy('搜索文章', 'Search articles')"
        size="xl"
        class="blog-search"
      /><span class="result-count" aria-live="polite">{{ filtered.length }} {{ copy('篇文章', 'ARTICLES') }}</span>
    </div>
    <div class="filter-bar">
      <div class="filter-options" role="group" :aria-label="copy('文章分类', 'Article categories')">
        <button
          v-for="item in tags"
          :key="item"
          :class="{ selected: tag === item }"
          :aria-pressed="tag === item"
          @click="tag = item"
        >
          {{ item === 'All' ? copy('全部笔记', 'All notes') : item }}
        </button>
      </div>
    </div>
    <div v-if="filtered.length" class="blog-grid">
      <BlogCard v-for="(post, index) in filtered.slice(0, shown)" :key="post.id" :post="post" :index="index" />
    </div>
    <div v-else class="empty-state">
      <UIcon name="i-lucide-search-x" />
      <h2>{{ copy('还没找到相关笔记', 'No matching notes') }}</h2>
      <p>{{ copy('试试其他关键词，或清除筛选条件。', 'Try another keyword or reset your filters.') }}</p>
      <UButton color="neutral" variant="outline" @click="resetFilters">{{ copy('清除筛选', 'Reset filters') }}</UButton>
    </div>
    <div v-if="filtered.length > shown" class="load-more">
      <UButton color="neutral" variant="outline" trailing-icon="i-lucide-arrow-down" size="xl" @click="shown += 6">{{
        copy('加载更多笔记', 'Load more notes')
      }}</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { blogs } from '@/config/blogs'

const { t } = useI18n()

const visibleCount = ref(5)
const isLoading = ref(false)

const sortedBlogs = computed(() => {
  return [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

const visibleBlogs = computed(() => {
  return sortedBlogs.value.slice(0, visibleCount.value)
})

const hasMore = computed(() => {
  return visibleCount.value < sortedBlogs.value.length
})

const loadMore = () => {
  if (hasMore.value && !isLoading.value) {
    isLoading.value = true
    setTimeout(() => {
      visibleCount.value += 5
      isLoading.value = false
    }, 300)
  }
}

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY
  const bodyHeight = document.body.offsetHeight
  
  if (scrollPosition >= bodyHeight - 500) {
    loadMore()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="blog-view">
    <div class="container">
      <header class="page-header">
        <h1 class="pixel-title pixel-float">{{ t('blog.title') }}</h1>
        <p class="pixel-subtitle">{{ t('blog.subtitle') }}</p>
      </header>

      <div class="blogs-list">
        <RouterLink
          v-for="blog in visibleBlogs"
          :key="blog.id"
          :to="`/blog/${blog.id}`"
          class="blog-card pixel-card"
        >
          <div class="blog-date">
            <span class="date-badge">{{ blog.date }}</span>
          </div>

          <div class="blog-content">
            <h2 class="blog-title">{{ t(`blogs.${blog.id}.title`) }}</h2>
            <p class="blog-summary">{{ t(`blogs.${blog.id}.summary`) }}</p>

            <div class="blog-tags">
              <span v-for="tag in blog.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="blog-actions">
              <span class="read-more-btn">{{ t('blog.readMore') }}</span>
              <a
                :href="blog.csdnUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="view-original-btn"
              >
                {{ t('blog.viewOriginal') }}
              </a>
            </div>
          </div>
        </RouterLink>
      </div>

      <div v-if="isLoading" class="load-more-container">
        <div class="loader" />
      </div>

      <div v-else-if="hasMore" class="load-more-container">
        <button class="load-more-btn pixel-btn" @click="loadMore">
          {{ t('blog.loadMore') }}
        </button>
      </div>

      <div v-else class="load-more-container">
        <p class="no-more-text">{{ t('blog.noMoreArticles') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-view {
  padding-bottom: 2rem;
}

.page-header {
  text-align: center;
  padding: 2rem 0;
}

.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.blog-card {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
}

.blog-card:hover {
  transform: translateX(4px);
}

.blog-date {
  flex-shrink: 0;
}

.date-badge {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--pixel-blue);
  padding: 0.5rem;
  border: 2px solid var(--pixel-blue);
  display: inline-block;
}

.blog-content {
  flex: 1;
}

.blog-title {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--pixel-yellow);
  margin-bottom: 0.75rem;
}

.blog-summary {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.45rem;
  padding: 0.2rem 0.4rem;
  background: var(--bg-surface);
  border: 2px solid var(--pixel-green);
  color: var(--pixel-green);
}

.blog-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.read-more-btn {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  padding: 0.5rem 0.8rem;
  background: var(--pixel-red);
  color: white;
  border: 3px solid var(--pixel-black);
  box-shadow: 3px 3px 0 var(--pixel-black);
  text-align: center;
}

.read-more-btn:hover {
  background: #cc0000;
}

.view-original-btn {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  padding: 0.5rem 0.8rem;
  background: transparent;
  color: var(--pixel-yellow);
  border: 3px solid var(--pixel-yellow);
  text-align: center;
  text-decoration: none;
}

.view-original-btn:hover {
  background: var(--pixel-yellow);
  color: var(--pixel-black);
}

.load-more-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.load-more-btn {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  padding: 0.75rem 1.5rem;
}

.no-more-text {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--text-secondary);
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid var(--bg-surface);
  border-top-color: var(--pixel-yellow);
  border-right-color: var(--pixel-yellow);
  border-bottom-color: var(--pixel-yellow);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .blog-card {
    flex-direction: column;
    gap: 1rem;
  }

  .date-badge {
    font-size: 0.45rem;
  }

  .blog-actions {
    flex-direction: column;
  }

  .read-more-btn,
  .view-original-btn {
    width: 100%;
    text-align: center;
  }
}
</style>

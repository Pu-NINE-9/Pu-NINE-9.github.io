<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { blogs } from '@/config/blogs'

const { t } = useI18n()

const sortedBlogs = computed(() => {
  return [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
          v-for="blog in sortedBlogs"
          :key="blog.id"
          :to="`/blog/${blog.id}`"
          class="blog-card pixel-card"
        >
          <div class="blog-date">
            <span class="date-badge">{{ blog.date }}</span>
          </div>

          <div class="blog-content">
            <h2 class="blog-title">{{ blog.title }}</h2>
            <p class="blog-summary">{{ blog.summary }}</p>

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

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'
import { blogs } from '@/config/blogs'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const { t } = useI18n()
const route = useRoute()

const blog = computed(() => {
  return blogs.find(b => b.id === route.params.id)
})

const headings = ref<{ id: string; text: string; level: number }[]>([])
const isSticky = ref(false)
const sidebarOffset = ref(0)
const sidebarHeight = ref(0)
const originalTitle = ref('')

const handleHeadings = (headingList: { id: string; text: string; level: number }[]) => {
  headings.value = headingList
}

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

let scrollTimeout: ReturnType<typeof setTimeout> | null = null
const handleScroll = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  
  scrollTimeout = setTimeout(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const blogContent = document.querySelector('.blog-detail') as HTMLElement
    
    if (blogContent) {
      const contentHeight = blogContent.offsetHeight
      const maxScroll = contentHeight - window.innerHeight + sidebarHeight.value
      
      if (scrollTop > sidebarOffset.value - 32 && scrollTop < maxScroll) {
        isSticky.value = true
      } else {
        isSticky.value = false
      }
    }
  }, 16)
}

onMounted(() => {
  // 设置动态标题
  originalTitle.value = document.title
  if (blog.value) {
    document.title = `${blog.value.title} - NINEの代码space`
  }
  
  setTimeout(() => {
    const sidebar = document.querySelector('.blog-sidebar')
    if (sidebar) {
      const rect = sidebar.getBoundingClientRect()
      sidebarOffset.value = rect.top + window.scrollY
      sidebarHeight.value = rect.height
    }
  }, 100)
  
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  // 恢复原始标题
  document.title = originalTitle.value
  
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="blog-detail-view" v-if="blog">
    <div class="container">
      <RouterLink to="/blog" class="back-link">
        ← {{ t('common.back') }}
      </RouterLink>

      <div class="blog-layout">
        <article class="blog-detail pixel-card">
          <header class="detail-header">
            <div class="date-badge">{{ blog.date }}</div>
            <h1 class="pixel-title">{{ blog.title }}</h1>
            <p class="pixel-subtitle">{{ blog.summary }}</p>
          </header>

          <div class="detail-content">
            <MarkdownRenderer :content="blog.content" @headings="handleHeadings" />
          </div>

          <footer class="detail-footer">
            <div class="blog-tags">
              <span v-for="tag in blog.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <a
              :href="blog.csdnUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="pixel-btn pixel-btn-outline"
            >
              {{ t('blog.viewOriginal') }} →
            </a>
          </footer>
        </article>

        <div class="sidebar-placeholder" v-if="headings.length > 0 && isSticky"></div>
        <aside class="blog-sidebar" v-if="headings.length > 0" :class="{ 'is-sticky': isSticky }">
          <div class="sidebar-card pixel-card">
            <h3 class="sidebar-title">{{ t('blog.tableOfContents') }}</h3>
            <nav class="toc-nav">
              <ul class="toc-list">
                <li v-for="heading in headings" :key="heading.id" :class="'toc-item level-' + heading.level">
                  <button @click="scrollToHeading(heading.id)" class="toc-link">
                    {{ heading.text }}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <div class="pixel-card">
        <h1 class="pixel-title">404</h1>
        <p class="pixel-subtitle">Blog post not found</p>
        <RouterLink to="/blog" class="pixel-btn">
          {{ t('common.back') }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-detail-view {
  padding-bottom: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  color: white;
  background: var(--pixel-red);
  border: 3px solid var(--pixel-black);
  box-shadow: 4px 4px 0 var(--pixel-black);
  padding: 0.6rem 1rem;
  text-decoration: none;
  transition: all 0.2s;
}

.back-link:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--pixel-black);
}

.blog-layout {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  position: relative;
}

.blog-detail {
  flex: 1;
  min-width: 0;
}

.sidebar-placeholder {
  width: 280px;
  flex-shrink: 0;
}

.blog-sidebar {
  width: 280px;
  flex-shrink: 0;
  position: static;
}

.blog-sidebar.is-sticky {
  position: fixed;
  top: 2rem;
  right: calc((100% - 1200px) / 2);
  z-index: 100;
}

.sidebar-card {
  padding: 1rem;
}

.sidebar-title {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--pixel-yellow);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--pixel-gray);
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 0.3rem;
}

.toc-item.level-2 {
  padding-left: 0.75rem;
}

.toc-item.level-3 {
  padding-left: 1.5rem;
}

.toc-item.level-4,
.toc-item.level-5,
.toc-item.level-6 {
  padding-left: 2.25rem;
}

.toc-link {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 0.6rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  padding: 0.3rem 0;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-pixel);
}

.toc-link:hover {
  color: var(--pixel-cyan);
  padding-left: 0.3rem;
}

.detail-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 3px dashed var(--pixel-gray);
}

.date-badge {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--pixel-blue);
  padding: 0.5rem 1rem;
  border: 2px solid var(--pixel-blue);
  display: inline-block;
  margin-bottom: 1rem;
}

.detail-content {
  margin-bottom: 2rem;
}

.detail-footer {
  padding-top: 2rem;
  border-top: 3px dashed var(--pixel-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.45rem;
  padding: 0.3rem 0.6rem;
  background: var(--bg-surface);
  border: 2px solid var(--pixel-green);
  color: var(--pixel-green);
}

.not-found {
  padding: 4rem 0;
  text-align: center;
}

@media (max-width: 1280px) {
  .blog-sidebar.is-sticky {
    right: 1rem;
  }
}

@media (max-width: 1024px) {
  .blog-layout {
    flex-direction: column;
  }

  .sidebar-placeholder {
    display: none;
  }

  .blog-sidebar {
    width: 100%;
    position: static;
    right: auto;
  }

  .blog-sidebar.is-sticky {
    position: static;
    right: auto;
  }
}

@media (max-width: 768px) {
  .back-link {
    font-size: 0.55rem;
    padding: 0.5rem 0.8rem;
  }

  .detail-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .date-badge {
    font-size: 0.5rem;
    padding: 0.4rem 0.8rem;
  }

  .detail-footer {
    padding-top: 1.5rem;
    gap: 1rem;
  }

  .tag {
    font-size: 0.4rem;
    padding: 0.25rem 0.5rem;
  }

  .sidebar-card {
    padding: 0.8rem;
  }

  .sidebar-title {
    font-size: 0.6rem;
    margin-bottom: 0.8rem;
    padding-bottom: 0.4rem;
  }

  .toc-link {
    font-size: 0.5rem;
    padding: 0.25rem 0;
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'
import { blogs } from '@/config/blogs'

const { t } = useI18n()
const route = useRoute()

const blog = computed(() => {
  return blogs.find(b => b.id === route.params.id)
})
</script>

<template>
  <div class="blog-detail-view" v-if="blog">
    <div class="container">
      <RouterLink to="/blog" class="back-link">
        ← {{ t('common.back') }}
      </RouterLink>

      <article class="blog-detail pixel-card">
        <header class="detail-header">
          <div class="date-badge">{{ blog.date }}</div>
          <h1 class="pixel-title">{{ blog.title }}</h1>
          <p class="pixel-subtitle">{{ blog.summary }}</p>
        </header>

        <div class="detail-content">
          <section class="content-section">
            <h2 class="section-title">Overview</h2>
            <p class="section-text">
              {{ blog.summary }}
            </p>
            <p class="section-text">
              This article covers various aspects of the topic, including practical
              examples, best practices, and real-world applications. Whether you're
              a beginner or an experienced developer, you'll find valuable insights
              here.
            </p>
          </section>

          <section class="content-section">
            <h2 class="section-title">Key Points</h2>
            <ul class="points-list">
              <li>Understanding the fundamentals</li>
              <li>Practical implementation strategies</li>
              <li>Common pitfalls and how to avoid them</li>
              <li>Advanced techniques for optimization</li>
            </ul>
          </section>

          <section class="content-section">
            <h2 class="section-title">Conclusion</h2>
            <p class="section-text">
              Programming is a journey of continuous learning. I hope this article
              has provided you with useful knowledge and inspiration for your own
              projects. Feel free to leave comments and share your thoughts!
            </p>
          </section>
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
  display: inline-block;
  margin: 1rem 0;
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--pixel-yellow);
}

.back-link:hover {
  color: var(--pixel-red);
}

.blog-detail {
  margin-top: 1rem;
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

.content-section {
  margin-bottom: 2rem;
}

.section-title {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--pixel-yellow);
  margin-bottom: 1rem;
}

.section-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.points-list {
  color: var(--text-secondary);
  line-height: 2;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.points-list li {
  margin-bottom: 0.5rem;
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
</style>
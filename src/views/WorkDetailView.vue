<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'
import { works } from '@/config/works'

const { t } = useI18n()
const route = useRoute()

const work = computed(() => {
  return works.find(w => w.id === route.params.id)
})
</script>

<template>
  <div class="work-detail-view" v-if="work">
    <div class="container">
      <RouterLink to="/works" class="back-link">
        ← {{ t('common.back') }}
      </RouterLink>

      <article class="work-detail pixel-card">
        <div class="detail-image">
          <img v-if="work.image" v-lazy="work.image" :alt="t(`works.${work.id}.title`)" class="detail-img" />
          <div v-else class="image-placeholder">
            <span class="placeholder-icon">🖥️</span>
          </div>
        </div>

        <header class="detail-header">
          <h1 class="pixel-title">{{ t(`works.${work.id}.title`) }}</h1>
          <p class="pixel-subtitle">{{ t(`works.${work.id}.description`) }}</p>
        </header>

        <div class="detail-content">
          <section class="content-section">
            <h2 class="section-title">{{ t('works.tags') }}</h2>
            <div class="work-tags">
              <span v-for="tag in work.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </section>

          <section class="content-section">
            <h2 class="section-title">About This Project</h2>
            <p v-for="(_, index) in work.content" :key="index" class="section-text">
              {{ t(`works.${work.id}.content${index + 1}`) }}
            </p>
          </section>
        </div>

        <footer class="detail-footer">
          <div class="action-buttons">
            <a
              v-if="work.githubUrl"
              :href="work.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="pixel-btn"
            >
              {{ t('works.viewCode') }}
            </a>
            <a
              v-if="work.demoUrl"
              :href="work.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="pixel-btn pixel-btn-secondary"
            >
              {{ t('works.demo') }}
            </a>
            <span v-if="!work.githubUrl" class="no-source">
              {{ t('works.noSource') }}
            </span>
          </div>
        </footer>
      </article>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <div class="pixel-card">
        <h1 class="pixel-title">404</h1>
        <p class="pixel-subtitle">Project not found</p>
        <RouterLink to="/works" class="pixel-btn">
          {{ t('common.back') }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-detail-view {
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

.work-detail {
  margin-top: 1rem;
}

.detail-image {
  margin-bottom: 2rem;
}

.detail-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border: 4px solid var(--pixel-black);
  display: block;
}

.image-placeholder {
  width: 100%;
  height: 250px;
  background: var(--bg-surface);
  border: 4px solid var(--pixel-black);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  font-size: 5rem;
}

.detail-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 3px dashed var(--pixel-gray);
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

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: var(--bg-surface);
  border: 2px solid var(--pixel-blue);
  color: var(--pixel-blue);
}

.section-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.detail-footer {
  padding-top: 2rem;
  border-top: 3px dashed var(--pixel-gray);
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.no-source {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--pixel-gray);
  padding: 1rem 1.5rem;
  border: 3px solid var(--pixel-gray);
}

.not-found {
  padding: 4rem 0;
  text-align: center;
}

@media (max-width: 768px) {
  .back-link {
    font-size: 0.55rem;
    padding: 0.5rem 0.8rem;
  }

  .detail-image {
    margin-bottom: 1.5rem;
  }

  .detail-img {
    max-height: 250px;
  }

  .image-placeholder {
    height: 180px;
  }

  .placeholder-icon {
    font-size: 3rem;
  }

  .detail-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .detail-content {
    margin-bottom: 1.5rem;
  }

  .content-section {
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 0.6rem;
    margin-bottom: 0.8rem;
  }

  .tag {
    font-size: 0.4rem;
    padding: 0.3rem 0.6rem;
  }

  .section-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .detail-footer {
    padding-top: 1.5rem;
  }

  .action-buttons {
    gap: 0.8rem;
  }

  .no-source {
    font-size: 0.5rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
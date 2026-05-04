<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { works } from '@/config/works'

const { t } = useI18n()
</script>

<template>
  <div class="works-view">
    <div class="container">
      <header class="page-header">
        <h1 class="pixel-title pixel-float">{{ t('works.title') }}</h1>
        <p class="pixel-subtitle">{{ t('works.subtitle') }}</p>
      </header>

      <div class="works-grid">
        <RouterLink
          v-for="work in works"
          :key="work.id"
          :to="`/works/${work.id}`"
          class="work-card pixel-card"
        >
          <div class="work-image">
            <img v-if="work.image" v-lazy="work.image" :alt="t(`works.${work.id}.title`)" class="work-img" />
            <div v-else class="image-placeholder">
              <span class="placeholder-icon">🖥️</span>
            </div>
          </div>

          <div class="work-content">
            <h2 class="work-title">{{ t(`works.${work.id}.title`) }}</h2>
            <p class="work-description">{{ t(`works.${work.id}.description`) }}</p>

            <div class="work-tags">
              <span
                v-for="tag in work.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>

            <div class="work-actions">
              <span class="view-project">{{ t('works.viewProject') }}</span>
              <a
                v-if="work.githubUrl"
                :href="work.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="pixel-btn pixel-btn-secondary"
              >
                {{ t('works.viewCode') }}
              </a>
              <span v-else class="no-source">{{ t('works.noSource') }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.works-view {
  padding-bottom: 2rem;
}

.page-header {
  text-align: center;
  padding: 2rem 0;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.work-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  cursor: pointer;
  text-decoration: none;
}

.work-card:hover {
  transform: translateY(-4px);
}

.work-image {
  margin-bottom: 1rem;
}

.work-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border: 3px solid var(--pixel-black);
  display: block;
}

.image-placeholder {
  width: 100%;
  height: 160px;
  background: var(--bg-surface);
  border: 3px solid var(--pixel-black);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  font-size: 3rem;
}

.work-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.work-title {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--pixel-yellow);
  margin-bottom: 0.75rem;
}

.work-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-surface);
  border: 2px solid var(--pixel-blue);
  color: var(--pixel-blue);
}

.work-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.view-project {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  padding: 0.6rem 1rem;
  background: var(--pixel-red);
  border: 2px solid var(--pixel-black);
  color: white;
  box-shadow: 2px 2px 0 var(--pixel-black);
}

.work-actions .pixel-btn {
  font-size: 0.6rem;
  padding: 0.6rem 1rem;
}

.no-source {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--pixel-gray);
  padding: 0.6rem 1rem;
  border: 2px solid var(--pixel-gray);
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
  }
}
</style>
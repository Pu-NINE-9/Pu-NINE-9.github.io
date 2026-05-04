<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import AuthorInfo from '@/components/AuthorInfo.vue'

const { t } = useI18n()
const selectedImage = ref<string | null>(null)

const openPreview = (src: string) => {
  selectedImage.value = src
}

const closePreview = () => {
  selectedImage.value = null
}
</script>

<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="avatar-container pixel-float">
            <div class="avatar-placeholder">
              <span class="avatar-icon">👾</span>
            </div>
          </div>

          <h1 class="pixel-title">{{ t('home.title') }}</h1>
          <p class="pixel-subtitle">{{ t('home.subtitle') }}</p>

          <div class="welcome-text">
            <p class="description">{{ t('home.description') }}</p>
          </div>

          <div class="hero-buttons">
            <RouterLink to="/works" class="pixel-btn">
              {{ t('home.viewWorks') }}
            </RouterLink>
            <RouterLink to="/blog" class="pixel-btn pixel-btn-secondary">
              {{ t('nav.blog') }}
            </RouterLink>
          </div>
        </div>

        <div class="pixel-decoration">
          <div class="pixel-char">⚔️</div>
          <div class="pixel-char">🎮</div>
          <div class="pixel-char">💻</div>
          <div class="pixel-char">🚀</div>
        </div>
      </div>
    </section>

    <AuthorInfo />

    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card pixel-card">
            <div class="feature-icon pixel-float">💻</div>
            <h3 class="feature-title pixel-float">{{ t('home.featureDevTitle') }}</h3>
            <p class="feature-desc pixel-float">{{ t('home.featureDev') }}</p>
          </div>
          <a href="https://github.com/Pu-NINE-9/Self-introduction" target="_blank" rel="noopener noreferrer" class="feature-card pixel-card">
            <div class="feature-icon pixel-float">🌟</div>
            <h3 class="feature-title pixel-float">{{ t('home.featureAboutTitle') }}</h3>
            <p class="feature-desc pixel-float">{{ t('home.featureAbout') }}</p>
          </a>
          <a href="https://blog.csdn.net/nineeea?type=blog" target="_blank" rel="noopener noreferrer" class="feature-card pixel-card">
            <div class="feature-icon pixel-float">📝</div>
            <h3 class="feature-title pixel-float">{{ t('home.featureBlogTitle') }}</h3>
            <p class="feature-desc pixel-float">{{ t('home.featureBlog') }}</p>
          </a>
          <RouterLink to="/works" class="feature-card pixel-card">
            <div class="feature-icon pixel-float">🚀</div>
            <h3 class="feature-title pixel-float">{{ t('home.featureProjectsTitle') }}</h3>
            <p class="feature-desc pixel-float">{{ t('home.featureProjects') }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <h2 class="gallery-title pixel-title">My Haewon~</h2>
        <p class="gallery-subtitle pixel-subtitle">You're My Super Star</p>

        <div class="gallery-grid">
          <div class="gallery-item">
            <div class="photo-frame" @click="openPreview('/images/photo1.jpg')">
              <img v-lazy="'/images/photo1.jpg'" alt="Photo 1" class="gallery-img" />
            </div>
          </div>
          <div class="gallery-item">
            <div class="photo-frame" @click="openPreview('/images/photo2.jpg')">
              <img v-lazy="'/images/photo2.jpg'" alt="Photo 2" class="gallery-img" />
            </div>
          </div>
          <div class="gallery-item">
            <div class="photo-frame" @click="openPreview('/images/photo3.jpg')">
              <img v-lazy="'/images/photo3.jpg'" alt="Photo 3" class="gallery-img" />
            </div>
          </div>
          <div class="gallery-item">
            <div class="photo-frame" @click="openPreview('/images/photo4.jpg')">
              <img v-lazy="'/images/photo4.jpg'" alt="Photo 4" class="gallery-img" />
            </div>
          </div>
        </div>

        <div v-if="selectedImage" class="lightbox" @click="closePreview">
          <div class="lightbox-content" @click.stop>
            <img :src="selectedImage" alt="Preview" class="lightbox-img" />
            <button class="lightbox-close" @click="closePreview">✕</button>
          </div>
        </div>
      </div>
    </section>

    <section class="enter-section">
      <div class="container">
        <div class="enter-box pixel-card">
          <div class="enter-text">
            <span class="blink-text pixel-blink">▶</span>
            <span class="press-start">{{ t('home.enterSite') }}</span>
          </div>
          <RouterLink to="/works" class="pixel-btn pixel-btn-outline">
            {{ t('home.viewWorks') }} →
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding-bottom: 2rem;
}

.hero-section {
  padding: 3rem 0;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.avatar-container {
  margin-bottom: 1rem;
}

.avatar-placeholder {
  width: 150px;
  height: 150px;
  border: 4px solid var(--pixel-black);
  background: var(--bg-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 8px 0 var(--pixel-black);
}

.avatar-icon {
  font-size: 4rem;
}

.welcome-text {
  max-width: 600px;
}

.description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.pixel-decoration {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.pixel-char {
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;
}

.pixel-char:nth-child(2) {
  animation-delay: 0.25s;
}

.pixel-char:nth-child(3) {
  animation-delay: 0.5s;
}

.pixel-char:nth-child(4) {
  animation-delay: 0.75s;
}

.features-section {
  padding: 3rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-surface);
  border: 4px solid var(--pixel-black);
  box-shadow: 6px 6px 0 var(--pixel-black);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 10px 10px 0 var(--pixel-black);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
  animation: float 2s ease-in-out infinite;
}

.features-grid > :nth-child(1) .pixel-float { animation-delay: 0s; }
.features-grid > :nth-child(2) .pixel-float { animation-delay: 0.2s; }
.features-grid > :nth-child(3) .pixel-float { animation-delay: 0.4s; }
.features-grid > :nth-child(4) .pixel-float { animation-delay: 0.6s; }

.feature-title {
  font-family: var(--font-pixel);
  font-size: 0.9rem;
  color: var(--pixel-yellow);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.gallery-section {
  padding: 3rem 0;
  text-align: center;
}

.gallery-title {
  font-size: 1.2rem;
}

.gallery-subtitle {
  font-size: 0.6rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  justify-items: center;
}

.gallery-item {
  width: 100%;
  max-width: 200px;
}

.photo-frame {
  width: 100%;
  aspect-ratio: 3/4;
  border: 6px solid var(--pixel-black);
  box-shadow: 8px 8px 0 var(--pixel-black);
  overflow: hidden;
  background: var(--bg-surface);
  transition: transform 0.2s;
  cursor: pointer;
}

.photo-frame:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 var(--pixel-black);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.enter-section {
  padding: 2rem 0;
}

.enter-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.enter-text {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.blink-text {
  font-size: 1.5rem;
  color: var(--pixel-red);
}

.press-start {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--pixel-yellow);
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .gallery-item {
    max-width: 180px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }

  .avatar-placeholder {
    width: 120px;
    height: 120px;
  }

  .avatar-icon {
    font-size: 3rem;
  }

  .pixel-decoration {
    gap: 1rem;
  }

  .pixel-char {
    font-size: 1.5rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .gallery-item {
    max-width: 160px;
  }

  .photo-frame {
    border-width: 4px;
    box-shadow: 4px 4px 0 var(--pixel-black);
  }

  .photo-frame:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--pixel-black);
  }

  .gallery-title {
    font-size: 1rem;
  }

  .gallery-subtitle {
    font-size: 0.55rem;
  }

  .enter-box {
    flex-direction: column;
    text-align: center;
  }

  .enter-text {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    gap: 0.75rem;
  }

  .gallery-item {
    max-width: 140px;
  }

  .photo-frame {
    border-width: 3px;
    box-shadow: 3px 3px 0 var(--pixel-black);
  }
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: pointer;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
}

.lightbox-img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border: 4px solid var(--pixel-yellow);
  box-shadow: 0 0 30px rgba(242, 183, 5, 0.3);
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: var(--pixel-red);
  border: 2px solid var(--pixel-black);
  color: var(--pixel-white);
  font-size: 1.2rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.lightbox-close:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .lightbox-img {
    max-width: 95vw;
    max-height: 75vh;
  }

  .lightbox-close {
    top: -36px;
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
}
</style>
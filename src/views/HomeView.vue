<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
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

    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card pixel-card">
            <div class="feature-icon">💻</div>
            <h3 class="feature-title">{{ t('home.featureDevTitle') }}</h3>
            <p class="feature-desc">{{ t('home.featureDev') }}</p>
          </div>
          <a href="https://github.com/Pu-NINE-9/Self-introduction" target="_blank" class="feature-card pixel-card">
            <div class="feature-icon">🌟</div>
            <h3 class="feature-title">{{ t('home.featureAboutTitle') }}</h3>
            <p class="feature-desc">{{ t('home.featureAbout') }}</p>
          </a>
          <a href="https://blog.csdn.net/nineeea?type=blog" target="_blank" class="feature-card pixel-card">
            <div class="feature-icon">📝</div>
            <h3 class="feature-title">{{ t('home.featureBlogTitle') }}</h3>
            <p class="feature-desc">{{ t('home.featureBlog') }}</p>
          </a>
          <RouterLink to="/works" class="feature-card pixel-card">
            <div class="feature-icon">🚀</div>
            <h3 class="feature-title">{{ t('home.featureProjectsTitle') }}</h3>
            <p class="feature-desc">{{ t('home.featureProjects') }}</p>
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
            <div class="photo-frame">
              <img src="/images/photo1.jpg" alt="Photo 1" class="gallery-img" />
            </div>
          </div>
          <div class="gallery-item">
            <div class="photo-frame">
              <img src="/images/photo2.jpg" alt="Photo 2" class="gallery-img" />
            </div>
          </div>
          <div class="gallery-item">
            <div class="photo-frame">
              <img src="/images/photo3.jpg" alt="Photo 3" class="gallery-img" />
            </div>
          </div>
          <div class="gallery-item">
            <div class="photo-frame">
              <img src="/images/photo4.jpg" alt="Photo 4" class="gallery-img" />
            </div>
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
  padding: 2rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--pixel-yellow);
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
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
</style>
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
            <div class="feature-icon">🎨</div>
            <h3 class="feature-title">Pixel Art</h3>
            <p class="feature-desc">8-bit retro style game assets</p>
          </div>
          <div class="feature-card pixel-card">
            <div class="feature-icon">🤖</div>
            <h3 class="feature-title">Discord Bots</h3>
            <p class="feature-desc">Feature-rich Discord utilities</p>
          </div>
          <div class="feature-card pixel-card">
            <div class="feature-icon">🌐</div>
            <h3 class="feature-title">Web Dev</h3>
            <p class="feature-desc">Modern web applications</p>
          </div>
          <div class="feature-card pixel-card">
            <div class="feature-icon">🎵</div>
            <h3 class="feature-title">Chiptune</h3>
            <p class="feature-desc">8-bit music creation</p>
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

  .enter-box {
    flex-direction: column;
    text-align: center;
  }

  .enter-text {
    flex-direction: column;
  }
}
</style>
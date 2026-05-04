<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import PieChart from './PieChart.vue'

const { t } = useI18n()

const interestsData = [
  { name: '编程', value: 25, color: '#ffd700' },
  { name: '和平精英', value: 35, color: '#d92626' },
  { name: '音乐', value: 20, color: '#4ade80' },
  { name: '摄影', value: 10, color: '#f472b6' },
  { name: '电影', value: 10, color: '#60a5fa' },
]

const techTags = [
  'Vue.js', 'Scss', 'TypeScript', 'Vite',
  'TailwindCSS', 'Git', 'Node.js', 'Express.js'
]

const avatarSrc = new URL('../assets/img/avatar.jpg', import.meta.url).href

const slides = [
  { src: new URL('../assets/img/daughter1.jpg', import.meta.url).href, alt: 'Photo 1' },
  { src: new URL('../assets/img/daughter2.jpg', import.meta.url).href, alt: 'Photo 2' },
  { src: new URL('../assets/img/daughter3.jpg', import.meta.url).href, alt: 'Photo 3' },
  { src: new URL('../assets/img/daughter4.jpg', import.meta.url).href, alt: 'Photo 4' },
  { src: new URL('../assets/img/daughter5.jpg', import.meta.url).href, alt: 'Photo 5' },
]

const currentSlide = ref(0)
let intervalTimer: number | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const handleMouseEnter = () => {
  if (intervalTimer !== null) {
    clearInterval(intervalTimer)
    intervalTimer = null
  }
}

const handleMouseLeave = () => {
  intervalTimer = window.setInterval(nextSlide, 4000)
}

onMounted(() => {
  intervalTimer = window.setInterval(nextSlide, 4000)
})

onUnmounted(() => {
  if (intervalTimer !== null) {
    clearInterval(intervalTimer)
  }
})
</script>

<template>
  <section class="author-info">
    <div class="container">
      <div class="author-card">
        <div class="author-avatar">
          <div class="avatar-frame">
            <img :v-lazy="avatarSrc" alt="Author Avatar" class="avatar-img" />
          </div>
        </div>
        
        <div class="author-content">
          <h2 class="author-name">{{ t('author.name') }}</h2>
          <p class="author-title">{{ t('author.title') }}</p>
          <p class="author-bio">
            {{ t('author.bio') }}<br />
            {{ t('author.bio2') }}<br />
            {{ t('author.bio3') }}<br />
            {{ t('author.bio4') }}
          </p>
          
          <div class="author-social">
            <a href="https://github.com/pu-nine-9" target="_blank" rel="noopener noreferrer" class="social-link github">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://blog.csdn.net/nineeea" target="_blank" rel="noopener noreferrer" class="social-link csdn">
              <svg t="1777905122311" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2466" width="16" height="16">
                <path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#2c2c2c" p-id="2467"></path>
              </svg>
              <span>CSDN</span>
            </a>
          </div>
        </div>
        
        <div class="carousel-container">
          <div class="carousel" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <button class="carousel-btn prev" @click="prevSlide">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <div class="carousel-slides">
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="carousel-slide"
                :class="{ active: index === currentSlide }"
              >
                <img v-lazy="slide.src" :alt="slide.alt" class="carousel-img" />
              </div>
            </div>
            
            <button class="carousel-btn next" @click="nextSlide">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
          
          <div class="carousel-dots">
            <button
              v-for="(_, index) in slides"
              :key="index"
              class="carousel-dot"
              :class="{ active: index === currentSlide }"
              @click="goToSlide(index)"
            />
          </div>
        </div>
      </div>
      
      <div class="author-details">
        <div class="interests-section">
          <h3 class="section-title">{{ t('author.interests') }}</h3>
          <PieChart :data="interestsData" title="INTERESTS" />
        </div>
        
        <div class="tech-section">
          <h3 class="section-title">{{ t('author.techStack') }}</h3>
          <div class="tech-tags">
            <span v-for="tag in techTags" :key="tag" class="tech-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.author-info {
  padding: 2rem 0;
}

.author-card {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--bg-surface);
  border: 4px solid var(--pixel-black);
  box-shadow: 4px 4px 0 var(--pixel-black);
  margin-bottom: 1.5rem;
}

.author-avatar {
  flex-shrink: 0;
}

.avatar-frame {
  width: 120px;
  height: 160px;
  aspect-ratio: 3/4;
  border: 4px solid var(--pixel-black);
  box-shadow: 4px 4px 0 var(--pixel-black);
  overflow: hidden;
  background: var(--bg-dark);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: pixelated;
}

.author-content {
  flex: 1;
  min-width: 0;
}

.author-name {
  font-family: var(--font-pixel);
  font-size: 1.3rem;
  color: var(--pixel-yellow);
  text-shadow: 3px 3px 0 var(--pixel-red);
  margin: 0 0 0.35rem 0;
}

.author-title {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  color: var(--text-secondary);
  margin: 0 0 0.75rem 0;
}

.author-bio {
  font-size: 0.85rem;
  color: var(--text-primary);
  line-height: 1.5;
  margin: 0 0 1.25rem 0;
  white-space: pre-line;
}

.author-social {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.875rem;
  background: var(--pixel-yellow);
  color: var(--pixel-black);
  text-decoration: none;
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  border: 3px solid var(--pixel-black);
  box-shadow: 3px 3px 0 var(--pixel-black);
  transition: all 0.2s;
}

.social-link:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--pixel-black);
}

.social-link:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--pixel-black);
}

.social-link.csdn {
  background: #f0912d;
}

.social-icon {
  width: 16px;
  height: 16px;
}

.carousel-container {
  flex-shrink: 0;
  width: 400px;
}

.carousel {
  position: relative;
  border: 4px solid var(--pixel-black);
  box-shadow: 4px 4px 0 var(--pixel-black);
  overflow: hidden;
  background: var(--bg-dark);
}

.carousel-slides {
  position: relative;
  height: 225px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: pixelated;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: var(--bg-surface);
  border: 3px solid var(--pixel-black);
  box-shadow: 3px 3px 0 var(--pixel-black);
  color: var(--pixel-yellow);
  cursor: pointer;
  z-index: 10;
  padding: 8px;
  transition: all 0.2s;
}

.carousel-btn:hover {
  background: var(--bg-dark);
  transform: translate(-2px, -50%);
  box-shadow: 5px 5px 0 var(--pixel-black);
}

.carousel-btn:active {
  transform: translate(2px, -50%);
  box-shadow: 1px 1px 0 var(--pixel-black);
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.carousel-btn svg {
  width: 100%;
  height: 100%;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: var(--bg-dark);
  border-top: 4px solid var(--pixel-black);
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border: 2px solid var(--pixel-black);
  background: var(--bg-surface);
  cursor: pointer;
  transition: all 0.2s;
}

.carousel-dot:hover {
  background: var(--pixel-yellow);
}

.carousel-dot.active {
  background: var(--pixel-yellow);
  box-shadow: 2px 2px 0 var(--pixel-black);
}

.author-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.interests-section,
.tech-section {
  background: var(--bg-surface);
  border: 4px solid var(--pixel-black);
  box-shadow: 4px 4px 0 var(--pixel-black);
  padding: 1.25rem;
}

.section-title {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--pixel-yellow);
  margin: 0 0 1rem 0;
  text-align: center;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-tag {
  padding: 0.375rem 0.75rem;
  background: var(--bg-dark);
  color: var(--pixel-yellow);
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  border: 2px solid var(--pixel-black);
  box-shadow: 2px 2px 0 var(--pixel-black);
}

@media screen and (max-width: 1200px) {
  .carousel-container {
    width: 320px;
  }
  
  .carousel-slides {
    height: 180px;
  }
}

@media screen and (max-width: 900px) {
  .author-card {
    flex-wrap: wrap;
  }
  
  .carousel-container {
    width: 100%;
    order: 3;
    margin-top: 1rem;
  }
  
  .carousel-slides {
    height: 200px;
  }
}

@media screen and (max-width: 768px) {
  .author-info {
    padding: 1.5rem 0;
  }

  .author-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.25rem;
    padding: 1.25rem;
  }

  .avatar-frame {
    width: 90px;
    height: 120px;
    border-width: 3px;
    box-shadow: 3px 3px 0 var(--pixel-black);
  }

  .author-name {
    font-size: 1.1rem;
  }

  .author-title {
    font-size: 0.6rem;
  }

  .author-bio {
    font-size: 0.8rem;
  }

  .author-social {
    justify-content: center;
  }

  .social-link {
    font-size: 0.6rem;
    padding: 0.35rem 0.75rem;
  }

  .carousel-slides {
    height: 180px;
  }

  .carousel-btn {
    width: 32px;
    height: 32px;
  }

  .author-details {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .interests-section,
  .tech-section {
    padding: 1rem;
  }

  .section-title {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 480px) {
  .author-card {
    padding: 1rem;
    gap: 1rem;
  }

  .avatar-frame {
    width: 75px;
    height: 100px;
  }

  .author-name {
    font-size: 1rem;
  }

  .author-bio {
    font-size: 0.75rem;
    line-height: 1.4;
  }

  .carousel-slides {
    height: 150px;
  }

  .tech-tag {
    font-size: 0.55rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>

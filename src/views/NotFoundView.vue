<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = ref(true)

onMounted(() => {
  // 读取localStorage中的主题设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found-container" :class="{ 'light-theme': !isDark }">
    <div class="not-found-content">
      <div class="pixel-404">404</div>
      <div class="not-found-title">PAGE NOT FOUND</div>
      <div class="not-found-desc">The page you are looking for doesn't exist.</div>
      <button class="pixel-btn pixel-btn-primary" @click="goHome">
        GO BACK HOME
      </button>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  transition: background 0.3s ease;
}

.not-found-container.light-theme {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.not-found-content {
  text-align: center;
  padding: 40px;
}

.pixel-404 {
  font-family: 'Press Start 2P', monospace;
  font-size: 8rem;
  color: var(--pixel-red);
  text-shadow: 4px 4px 0 var(--pixel-black), 8px 8px 0 rgba(217, 38, 38, 0.3);
  margin-bottom: 20px;
  animation: glitch 1s ease-in-out infinite;
}

.not-found-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 1.5rem;
  color: var(--pixel-white);
  margin-bottom: 15px;
  text-shadow: 2px 2px 0 var(--pixel-black);
}

.not-found-container.light-theme .not-found-title {
  color: #1a1a2e;
  text-shadow: 2px 2px 0 #ddd;
}

.not-found-desc {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
  color: var(--pixel-gray);
  margin-bottom: 30px;
}

.not-found-container.light-theme .not-found-desc {
  color: #6c757d;
}

@keyframes glitch {
  0%, 90%, 100% {
    transform: translate(0);
  }
  92% {
    transform: translate(-2px, 2px);
  }
  94% {
    transform: translate(2px, -2px);
  }
  96% {
    transform: translate(-2px, -2px);
  }
  98% {
    transform: translate(2px, 2px);
  }
}

@media (max-width: 768px) {
  .pixel-404 {
    font-size: 4rem;
  }
  
  .not-found-title {
    font-size: 1rem;
  }
  
  .not-found-desc {
    font-size: 0.5rem;
  }
}
</style>
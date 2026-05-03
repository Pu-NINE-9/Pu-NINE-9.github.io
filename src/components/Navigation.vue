<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
const route = useRoute()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <header class="pixel-header">
    <div class="container header-content">
      <RouterLink to="/" class="logo" @click="closeMenu">
        <span class="logo-text pixel-float">NINE</span>
      </RouterLink>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span :class="['hamburger', { 'is-active': isMenuOpen }]">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav :class="['nav-menu', { 'is-open': isMenuOpen }]">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ 'is-active': isActive('/') }"
          @click="closeMenu"
        >
          {{ t('nav.home') }}
        </RouterLink>
        <RouterLink
          to="/works"
          class="nav-link"
          :class="{ 'is-active': isActive('/works') || route.path.startsWith('/works/') }"
          @click="closeMenu"
        >
          {{ t('nav.works') }}
        </RouterLink>
        <RouterLink
          to="/blog"
          class="nav-link"
          :class="{ 'is-active': isActive('/blog') || route.path.startsWith('/blog/') }"
          @click="closeMenu"
        >
          {{ t('nav.blog') }}
        </RouterLink>
        <div class="nav-controls">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.pixel-header {
  background: var(--bg-darker);
  border-bottom: 4px solid var(--pixel-black);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
}

.logo-text {
  font-family: var(--font-pixel);
  font-size: 1.2rem;
  color: var(--pixel-yellow);
  text-shadow: 3px 3px 0 var(--pixel-red);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-link {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.nav-link:hover {
  color: var(--pixel-yellow);
  border-color: var(--pixel-yellow);
}

.nav-link.is-active {
  color: var(--pixel-red);
  border-color: var(--pixel-red);
  background: rgba(217, 38, 38, 0.1);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 18px;
  position: relative;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--pixel-yellow);
  position: absolute;
  left: 0;
  transition: all 0.3s;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 7px;
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

.hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg);
  top: 7px;
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 7px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-darker);
    border-bottom: 4px solid var(--pixel-black);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    display: none;
  }

  .nav-menu.is-open {
    display: flex;
  }

  .nav-link {
    width: 100%;
    text-align: center;
  }

  .nav-controls {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
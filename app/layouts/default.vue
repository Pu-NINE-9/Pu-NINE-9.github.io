<script setup lang="ts">
const { copy } = useSiteContent()
const year = new Date().getFullYear()
</script>

<template>
  <div class="site-shell">
    <a href="#main-content" class="skip-link">{{ copy('跳到主要内容', 'Skip to content') }}</a>
    <SpaceBackground />
    <SiteHeader />
    <main id="main-content"><slot /></main>
    <footer class="site-footer site-container">
      <NuxtLink to="/" class="footer-brand"
        ><img src="/logo.png" alt="NINEの代码space" width="32" height="32" /><span>NINEの代码space</span
        ><small>PERSONAL DIGITAL SPACE</small></NuxtLink
      >
      <p>
        © {{ year }} NINEの代码space. <span>{{ copy(
              '沉心沉淀，全力以赴',
              'FOCUSED MIND · FULL COMMITMENT',
              '心を澄ませ、全力を尽くす',
              '마음을 가다듬고 최선을 다하기'
            ) }}</span>
      </p>
      <a href="#main-content" class="back-top">BACK TO TOP <UIcon name="i-lucide-arrow-up-right" /></a>
    </footer>
    <MusicDock />
  </div>
</template>

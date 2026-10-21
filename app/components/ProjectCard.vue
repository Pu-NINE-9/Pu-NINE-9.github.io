<script setup lang="ts">
import type { Work } from '../data/works'
const props = defineProps<{ project: Work; index: number }>()
const { copy } = useSiteContent()
const accents = ['#a78bfa', '#51e0cd', '#f29bd5', '#f8c477']
const icons = ['i-lucide-monitor', 'i-lucide-messages-square', 'i-lucide-scan-search', 'i-lucide-puzzle']
const accent = computed(() => accents[props.index % accents.length])
</script>

<template>
  <GlowCard :accent="accent" class="project-card">
    <NuxtLink :to="`/works/${project.id}`" class="project-link">
      <div class="project-preview" :class="`preview-${index % 4}`">
        <div class="preview-grid" />
        <template v-if="project.id === '1'">
          <div class="mini-app">
            <div class="mini-app-bar"><span /><span /><span /><small>nine.ai — workspace</small></div>
            <div class="mini-app-body">
              <div class="mini-sidebar"><UIcon name="i-lucide-command" /><i /><i /><i /></div>
              <div class="mini-chat">
                <span class="mini-ai-icon"><UIcon name="i-lucide-sparkles" /></span
                ><strong>What will you create?</strong>
                <div class="mini-prompt">Ask anything...<UIcon name="i-lucide-arrow-up" /></div>
                <div class="mini-suggestions"><span>✧ Imagine</span><span>⌘ Build</span><span>↗ Explore</span></div>
              </div>
            </div>
          </div>
          <span class="preview-float"><UIcon name="i-lucide-sparkles" /> AI POWERED</span>
        </template>
        <img
          v-else-if="project.image"
          :src="project.image"
          :alt="project.title + ' 项目预览'"
          loading="lazy"
          width="640"
          height="360"
          class="project-screenshot"
        />
        <div v-else class="plugin-preview">
          <UIcon name="i-lucide-puzzle" /><span>16<span>×</span></span
          ><small>MAKE EVERY SECOND COUNT</small>
        </div>
        <span class="preview-index">0{{ index + 1 }} / SELECTED WORK</span>
        <span class="preview-open"><UIcon name="i-lucide-arrow-up-right" /></span>
      </div>
      <div class="project-information">
        <div class="project-category">
          <UIcon :name="icons[index % 4]" />{{
            project.id === '4' ? 'BROWSER EXTENSION' : project.id === '1' ? 'DESKTOP APPLICATION' : 'WEB APPLICATION'
          }}<span class="project-status">{{ project.githubUrl ? 'OPEN SOURCE' : copy('个人项目', 'PERSONAL') }}</span>
        </div>
        <h3>{{ project.title }}<UIcon name="i-lucide-arrow-up-right" /></h3>
        <p>{{ project.description }}</p>
        <div class="tag-list">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </NuxtLink>
  </GlowCard>
</template>

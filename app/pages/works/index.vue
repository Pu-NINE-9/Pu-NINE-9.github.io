<script setup lang="ts">
const { projects, t, copy } = useSiteContent()
const filter = ref('All')
const filters = ['All', 'Vue.js', 'TypeScript', 'Next.js', 'JavaScript']
const filtered = computed(() =>
  projects.value.filter((project) => filter.value === 'All' || project.tags.includes(filter.value))
)
useSeoMeta({
  title: () => t('works.title'),
  description: '个人作品集的展示 ~'
})
</script>

<template>
  <div class="site-container listing-page">
    <header class="page-heading">
      <p class="section-eyebrow"><span>THE PROJECT ARCHIVE /</span> SELECTED WORK</p>
      <h1>
        <span class="gradient-text">{{
          copy('个人作品集', ' Driven by curiosity.', '想像を形に。', '상상을 현실로.')
        }}</span>
      </h1>
      <p>
        {{
          copy(
            '更多内容请在我 Github 主页上查看',
            'A collection of experiments, side projects, and things I loved building.'
          )
        }}
      </p>
      <div class="page-heading-meta">
        <span class="status-dot" />{{ projects.length }}
        {{ copy('个项目 · 持续更新中', 'PROJECTS · ALWAYS EXPLORING') }}
      </div>
    </header>
    <div class="filter-bar">
      <div class="filter-options" role="group" :aria-label="copy('按技术筛选', 'Filter by technology')">
        <button
          v-for="item in filters"
          :key="item"
          :class="{ selected: filter === item }"
          :aria-pressed="filter === item"
          @click="filter = item"
        >
          {{ item === 'All' ? copy('全部作品', 'All projects') : item
          }}<span v-if="item === 'All'">{{ projects.length }}</span>
        </button>
      </div>
      <span class="result-count">{{ String(filtered.length).padStart(2, '0') }} RESULTS</span>
    </div>
    <div class="project-grid">
      <ProjectCard
        v-for="project in filtered"
        :key="project.id"
        :project="project"
        :index="projects.findIndex((item) => item.id === project.id)"
      />
    </div>
  </div>
</template>

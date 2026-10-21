<script setup lang="ts">
const route = useRoute()
const { projects, copy } = useSiteContent()
const project = computed(() => projects.value.find((work) => work.id === route.params.id))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Project not found' })
const next = computed(
  () => projects.value[(projects.value.findIndex((work) => work.id === route.params.id) + 1) % projects.value.length]
)
useSeoMeta({ title: () => project.value?.title, description: () => project.value?.description })
</script>

<template>
  <article v-if="project" class="site-container detail-page">
    <NuxtLink to="/works" class="text-link back-link">
      <UIcon name="i-lucide-arrow-left" />
      {{ copy('返回全部作品', 'Back to projects') }}
    </NuxtLink>
    <header class="page-heading">
      <p class="section-eyebrow">PROJECT / {{ String(project.id).padStart(2, '0') }}</p>
      <h1 class="gradient-text">{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <div class="tag-list detail-tags">
        <span v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </span>
      </div>
    </header>
    <img
      v-if="project.image"
      :src="project.image"
      :alt="project.title"
      width="1200"
      height="675"
      class="detail-image"
    />
    <div v-else class="detail-placeholder">
      <UIcon :name="project.id === '1' ? 'i-lucide-monitor' : 'i-lucide-puzzle'" /><span>{{ project.title }}</span>
    </div>
    <div class="project-detail-body">
      <section>
        <p class="section-eyebrow">ABOUT THE PROJECT</p>
        <h2>{{ copy('关于这个项目', 'Project overview') }}</h2>
        <p v-for="paragraph in project.content" :key="paragraph">{{ paragraph }}</p>
      </section>
      <aside class="project-links">
        <p class="section-eyebrow">EXPLORE MORE</p>
        <UButton
          v-if="project.githubUrl"
          :to="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-github"
          trailing-icon="i-lucide-arrow-up-right"
          class="neon-button"
          >{{ copy('查看源码', 'View source') }}</UButton
        ><UButton
          v-if="project.demoUrl"
          :to="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          trailing-icon="i-lucide-external-link"
          color="neutral"
          variant="outline"
          >{{ copy('在线演示', 'Live demo') }}</UButton
        ><span v-if="!project.githubUrl && !project.demoUrl" class="muted">{{
          copy('个人项目，暂未公开源码', 'Personal project. Source is currently private.')
        }}</span>
      </aside>
    </div>
    <NuxtLink v-if="next" :to="`/works/${next.id}`" class="next-project"
      ><span class="section-eyebrow">NEXT PROJECT</span>
      <h2>{{ next.title }}<UIcon name="i-lucide-arrow-up-right" /></h2
    ></NuxtLink>
  </article>
</template>

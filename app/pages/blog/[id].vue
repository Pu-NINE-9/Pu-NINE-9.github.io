<script setup lang="ts">
import { renderMarkdown } from '../../utils/markdown'
const route = useRoute()
const { posts, copy } = useSiteContent()
const post = computed(() => posts.value.find((item) => item.id === route.params.id))
if (!post.value) throw createError({ statusCode: 404, statusMessage: 'Article not found' })
const rendered = computed(() => renderMarkdown(post.value?.content ?? ''))
const related = computed(() => posts.value.filter((item) => item.id !== route.params.id).slice(0, 3))
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined
async function share() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    copied.value = true
    timer = setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
  }
}
onUnmounted(() => clearTimeout(timer))
useSeoMeta({ title: () => post.value?.title, description: () => post.value?.summary, ogType: 'article' })
</script>

<template>
  <article v-if="post" class="site-container article-page">
    <NuxtLink to="/blog" class="text-link back-link"
      ><UIcon name="i-lucide-arrow-left" />{{ copy('返回全部笔记', 'Back to notes') }}</NuxtLink
    >
    <header class="article-header">
      <p class="section-eyebrow">
        THE DEV JOURNAL / <span>{{ post.tags[0] }}</span>
      </p>
      <h1>{{ post.title }}</h1>
      <p>{{ post.summary }}</p>
      <div class="article-meta">
        <img src="/imgs/avatar.jpg" alt="NINE" width="36" height="36" /><strong>NINE</strong><span>·</span
        ><time :datetime="post.date">{{ post.date }}</time
        ><span>·</span><span>{{ Math.max(2, Math.ceil(post.content.length / 900)) }} MIN READ</span
        ><UButton
          :icon="copied ? 'i-lucide-check' : 'i-lucide-link'"
          color="neutral"
          variant="ghost"
          :aria-label="copy('复制文章链接', 'Copy article link')"
          @click="share"
        />
      </div>
      <div class="tag-list">
        <span v-for="item in post.tags" :key="item">{{ item }}</span>
      </div>
    </header>
    <div class="article-layout">
      <div>
        <div class="markdown-content" v-html="rendered.html" />
        <div class="article-end">
          <span>✳</span>
          <p>{{ copy('感谢阅读，保持好奇。', 'Thanks for reading. Stay curious.') }}</p>
          <UButton
            :to="post.csdnUrl"
            target="_blank"
            rel="noopener noreferrer"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-up-right"
            >{{ copy('在 CSDN 阅读原文', 'Read original on CSDN') }}</UButton
          >
        </div>
      </div>
      <aside v-if="rendered.headings.length" class="article-toc">
        <p><UIcon name="i-lucide-list" />{{ copy('文章目录', 'ON THIS PAGE') }}</p>
        <nav :aria-label="copy('文章目录', 'Table of contents')">
          <a
            v-for="heading in rendered.headings"
            :key="heading.id"
            :href="`#${heading.id}`"
            :style="{ paddingLeft: `${Math.max(0, heading.level - 1) * 12}px` }"
            >{{ heading.text }}</a
          >
        </nav>
      </aside>
    </div>
    <section class="related-posts">
      <div class="section-heading">
        <div>
          <p class="section-eyebrow">KEEP EXPLORING</p>
          <h2>{{ copy('也许你还想读', 'Continue reading') }}</h2>
        </div>
      </div>
      <div class="blog-grid">
        <BlogCard v-for="(item, index) in related" :key="item.id" :post="item" :index="index" />
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits<{
  (e: 'headings', headings: { id: string; text: string; level: number }[]): void
}>()

const renderedContent = ref('')
const headings = ref<{ id: string; text: string; level: number }[]>([])

const markedInstance = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    }
  })
)

markedInstance.setOptions({
  breaks: true,
  gfm: true
})

markedInstance.use({
  renderer: {
    heading({ tokens, depth }) {
      const text = tokens.map(t => t.raw).join('')
      const id = text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
      return `<h${depth} id="${id}">${text}</h${depth}>`
    }
  }
})

const parseMarkdown = async () => {
  const tokens = markedInstance.lexer(props.content)

  headings.value = tokens
    .filter(token => token.type === 'heading')
    .map(heading => {
      const h = heading as { text: string; depth: number }
      return {
        id: h.text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-'),
        text: h.text,
        level: h.depth
      }
    })

  emit('headings', headings.value)

  renderedContent.value = await markedInstance.parse(props.content) as string
}

onMounted(() => {
  parseMarkdown()
})

watch(() => props.content, () => {
  parseMarkdown()
})
</script>

<template>
  <div class="markdown-content" v-html="renderedContent"></div>
</template>

<style scoped>
.markdown-content {
  color: var(--text-secondary);
  line-height: 1.8;
}

.markdown-content :deep(h1) {
  font-family: var(--font-pixel);
  font-size: 1.2rem;
  color: var(--pixel-yellow);
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--pixel-gray);
}

.markdown-content :deep(h2) {
  font-family: var(--font-pixel);
  font-size: 1rem;
  color: var(--pixel-yellow);
  margin: 1.8rem 0 1rem;
}

.markdown-content :deep(h3) {
  font-family: var(--font-pixel);
  font-size: 0.9rem;
  color: var(--pixel-cyan);
  margin: 1.5rem 0 1rem;
}

.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--pixel-cyan);
  margin: 1.2rem 0 0.8rem;
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(ul) {
  list-style-type: disc;
}

.markdown-content :deep(ol) {
  list-style-type: decimal;
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
}

.markdown-content :deep(blockquote) {
  border-left: 4px solid var(--pixel-yellow);
  padding-left: 1rem;
  margin: 1rem 0;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
}

.markdown-content :deep(pre) {
  background: var(--bg-surface);
  border: 3px solid var(--pixel-black);
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  position: relative;
}

.markdown-content :deep(code) {
  font-family: 'Courier New', Consolas, monospace;
  font-size: 0.85rem;
  background: var(--bg-surface);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: var(--pixel-green);
}

.markdown-content :deep(pre code) {
  background: none;
  border: none;
  padding: 0;
  color: var(--text-secondary);
}

.markdown-content :deep(a) {
  color: var(--pixel-blue);
  text-decoration: none;
}

.markdown-content :deep(a:hover) {
  color: var(--pixel-red);
}

.markdown-content :deep(img) {
  max-width: 100%;
  border: 4px solid var(--pixel-black);
  margin: 1rem 0;
}

.markdown-content :deep(hr) {
  border: none;
  border-top: 3px dashed var(--pixel-gray);
  margin: 2rem 0;
}

.markdown-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
  border: 2px solid var(--pixel-gray);
  padding: 0.5rem;
  text-align: left;
}

.markdown-content :deep(th) {
  background: var(--bg-surface);
  font-family: var(--font-pixel);
  color: var(--pixel-yellow);
}

.markdown-content :deep(strong) {
  color: var(--pixel-yellow);
  font-weight: bold;
}

.markdown-content :deep(em) {
  color: var(--pixel-cyan);
  font-style: italic;
}
</style>

<style>
.hljs {
  background: transparent !important;
  color: var(--text-secondary) !important;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-section,
.hljs-link {
  color: var(--pixel-pink) !important;
}

.hljs-string,
.hljs-title,
.hljs-name,
.hljs-type,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: var(--pixel-green) !important;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: var(--pixel-gray) !important;
}

.hljs-number {
  color: var(--pixel-cyan) !important;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-function,
.hljs-title.function_ {
  color: var(--pixel-blue) !important;
}
</style>

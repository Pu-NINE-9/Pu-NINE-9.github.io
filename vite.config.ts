import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync } from 'fs'

function markdownLoader() {
  return {
    name: 'markdown-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.md')) {
        const content = readFileSync(id, 'utf-8')
        return `export default ${JSON.stringify(content)}`
      }
    }
  }
}

export default defineConfig({
  plugins: [vue(), markdownLoader()],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  },
  server: {
    port: 5173,
    open: true
  }
})

import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import sanitizeHtml from 'sanitize-html'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import dart from 'highlight.js/lib/languages/dart'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('dart', dart)
hljs.registerAliases(['vue'], { languageName: 'html' })

export function renderMarkdown(content: string) {
  const headings: { id: string; text: string; level: number }[] = []
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, language) {
        return hljs.getLanguage(language)
          ? hljs.highlight(code, { language }).value
          : hljs.highlight(code, { language: 'javascript', ignoreIllegals: true }).value
      }
    })
  )
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = tokens.map((token) => token.raw).join('')
        const id = `heading-${headings.length}`
        headings.push({ id, text: text.replace(/[*`_]/g, ''), level: depth })
        return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>`
      }
    }
  })
  const html = sanitizeHtml(marked.parse(content, { async: false }) as string, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img', 'details', 'summary'],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['id', 'class'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading']
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          ...(attribs.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})
        }
      }),
      img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: 'lazy' } })
    }
  })
  return { html, headings }
}

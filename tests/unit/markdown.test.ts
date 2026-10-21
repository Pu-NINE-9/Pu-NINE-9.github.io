import { describe, expect, it } from 'vitest'
import { renderMarkdown } from '../../app/utils/markdown'

describe('article rendering', () => {
  it('removes scripts, event handlers and executable URLs', () => {
    const { html } = renderMarkdown(
      '<script>alert(1)</script>\n\n<img src="x" onerror="alert(1)">\n\n[bad](javascript:alert%281%29)'
    )
    expect(html).not.toContain('<script')
    expect(html).not.toContain('onerror')
    expect(html).not.toContain('javascript:')
  })
  it('creates unique table of contents anchors and retains formatted headings', () => {
    const { html, headings } = renderMarkdown('## **Hello**\n\n## Hello\n\n```js\nconst value = 1\n```')
    expect(headings.map((heading) => heading.id)).toEqual(['heading-0', 'heading-1'])
    expect(html).toContain('<strong>Hello</strong>')
    expect(html).toContain('hljs-keyword')
  })
})

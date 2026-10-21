export interface BlogPost {
  id: string
  title: string
  summary: string
  date: string
  csdnUrl: string
  tags: string[]
  content: string
}

const entries: Omit<BlogPost, 'content'>[] = [
  {
    id: '1',
    title: 'JavaScript 文件上传机制详解',
    summary: '本文深入解析 JavaScript 文件上传全流程，从前端文件选择到后端接收存储。',
    date: '2025-09-16',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/151754190',
    tags: ['JavaScript', 'File Upload', 'Web Development']
  },
  {
    id: '2',
    title: '.env 与 .gitignore：现代软件开发中的环境管理与版本控制防护',
    summary: '系统介绍 .env 和 .gitignore 文件在现代软件开发中的关键作用。',
    date: '2025-09-21',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/151934899',
    tags: ['Environment', 'Git', 'Security']
  },
  {
    id: '3',
    title: 'Git 团队协作实战指南：从基础到高级技巧',
    summary: '全面介绍 Git 在团队协作中的使用方法和最佳实践。',
    date: '2025-09-21',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/151935025',
    tags: ['Git', 'Team Collaboration', 'Version Control']
  },
  {
    id: '4',
    title: 'Marked.js：一个强大的 Markdown 解析库',
    summary: '了解 Marked.js 如何把 Markdown 高效转换为 HTML，并安全地呈现内容。',
    date: '2025-09-25',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/152086301',
    tags: ['Markdown', 'JavaScript', 'Library']
  },
  {
    id: '5',
    title: 'Vue 3 + TypeScript 项目性能优化全链路实战',
    summary: '从构建体积、代码分割、图片处理到 LCP，完整记录 Vue 项目的优化过程。',
    date: '2025-10-24',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/153821538',
    tags: ['Vue.js', 'TypeScript', 'Performance']
  },
  {
    id: '6',
    title: 'Vue 图片性能优化双剑客：懒加载与自动压缩',
    summary: '使用图片懒加载和自动压缩提升 Vue 应用的加载体验。',
    date: '2025-11-02',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154286054',
    tags: ['Vue.js', 'Image Optimization', 'Performance']
  },
  {
    id: '7',
    title: 'Vue 3 项目 ESLint 配置详解',
    summary: '介绍 Vue 3 项目中 ESLint 的配置方法和团队协作实践。',
    date: '2025-11-12',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154727955',
    tags: ['Vue.js', 'ESLint', 'Code Quality']
  },
  {
    id: '8',
    title: 'Trae 一键换装 Dracula 主题',
    summary: '快速配置编辑器前端开发环境，让日常编码更舒适。',
    date: '2025-11-13',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154798672',
    tags: ['Trae', 'Theme', 'Productivity']
  },
  {
    id: '9',
    title: '快速上手 Dart 基础',
    summary: '为有前端基础的学习者梳理 Dart 的变量、类型、空安全与集合操作。',
    date: '2025-11-15',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154882262',
    tags: ['Dart', 'Programming', 'Flutter']
  },
  {
    id: '10',
    title: 'JavaScript 后端日志系统：使用 Winston 构建专业日志',
    summary: '介绍 Node.js 生态中 Winston 日志库的使用方法与工程化配置。',
    date: '2025-12-04',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/155578894',
    tags: ['JavaScript', 'Logging', 'Backend']
  }
]

export const blogs: BlogPost[] = entries.map((post) => ({
  ...post,
  content: `# ${post.title}\n\n> ${post.summary}\n\n## 内容提要\n\n这篇笔记记录了我在 **${post.tags.join('、')}** 方向的实践与思考。文章从真实项目出发，拆解问题、方案和验证过程，帮助你快速建立可迁移的开发经验。\n\n## 实践建议\n\n- 先明确目标和边界，再选择合适的工具。\n- 用小步迭代验证想法，记录每次结果。\n- 将稳定的经验沉淀成可复用的组件和流程。\n\n\`\`\`ts\nconst nextStep = 'keep learning'\nconsole.log(nextStep)\n\`\`\`\n\n如果你想查看完整版本，可以继续阅读 [CSDN 原文](${post.csdnUrl})。`
}))

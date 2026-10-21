export interface Work {
  id: string
  title: string
  description: string
  image: string | null
  githubUrl: string | null
  demoUrl?: string
  tags: string[]
  content?: string[]
}

export const works: Work[] = [
  {
    id: '1',
    title: 'AI-Desktop-Application',
    description: '基于 Electron-Vite、Vue3、Scss、TypeScript 搭建的 AI 集成桌面应用',
    image: null,
    githubUrl: 'https://github.com/Pu-NINE-9/AI-Desktop-Application',
    tags: ['Vue.js', 'Electron-Vite', 'Scss', 'TypeScript'],
    content: [
      'AI Search Tool 的桌面端应用版正式来袭！',
      '项目采用 Electron-Vite 作为底层框架，配合 Vue3 进行界面开发，使用 Scss 管理样式，TypeScript 提供类型安全。'
    ]
  },
  {
    id: '2',
    title: 'Reno-Chatbox',
    description: 'A AI chat application with Vue3 & Dify',
    image: '/images/works/Reno-Chatbox.png',
    githubUrl: null,
    tags: ['Vue.js', 'TailwindCSS', 'TypeScript', 'Dify'],
    content: [
      'Reno-Chatbox 是一个基于 Dify API 的 AI 聊天应用，提供流畅的对话体验。',
      '使用 Vue3 + TypeScript 构建，TaliwindCSS 进行样式开发，科技感十足！',
      '支持自定义 AI 助手配置，可以连接不同的 Dify 应用进行对话。'
    ]
  },
  {
    id: '3',
    title: 'AI-Search-Tool',
    description: 'AI 工具集合站',
    image: '/images/works/ai-search-tool.jpg',
    githubUrl: 'https://github.com/Pu-NINE-9/AI-Search-Tool',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    content: [
      'AI-Search-Tool 是一个聚合多种 AI 网站链接的工具站，帮助用户快速找到所需 AI 工具',
      '使用 Next.js 构建，支持 SSR 渲染，SEO 友好。',
      '界面简洁高效，支持多种 AI 搜索引擎的切换和对比。'
    ]
  },
  {
    id: '4',
    title: 'MOOC-chrome-plugin',
    description: 'mooc刷课浏览器插件，将视频倍速调至16倍速，支持快捷键操作',
    image: null,
    githubUrl: 'https://github.com/Pu-NINE-9/MOOC-chrome-plugin',
    tags: ['JavaScript'],
    content: [
      'MOOC-chrome-plugin 是一个实用的刷课浏览器插件，专注于慕课平台视频加速。',
      '纯 JavaScript 开发，无需后端支持，即装即用。',
      '支持最高 16 倍速播放，配合快捷键操作，让刷课效率大幅提升。'
    ]
  }
]

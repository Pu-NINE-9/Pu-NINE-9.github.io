import blog1 from './dataset/JavaScript 文件上传机制详解.md?raw'
import blog2 from './dataset/.env与.gitignore：现代软件开发中的环境管理与版本控制防护.md?raw'
import blog3 from './dataset/Git团队协作实战指南：从基础到高级技巧.md?raw'
import blog4 from './dataset/Marked.js：一个强大的Markdown解析库.md?raw'
import blog5 from './dataset/Vue 3 + TypeScript 项目性能优化全链路实战：从 2.1MB 到 130KB 的蜕变.md?raw'
import blog6 from './dataset/Vue 图片性能优化双剑客：懒加载与自动压缩实战指南.md?raw'
import blog7 from './dataset/Vue 3 项目 ESLint 配置详解：初始模板的正确配置.md?raw'
import blog8 from './dataset/Trae 一键换装 Dracula 主题 + 改注释颜色 + 去掉 console.log 多余分号.md?raw'
import blog9 from './dataset/快速上手 Dart 基础.md?raw'
import blog10 from './dataset/JavaScript后端日志系统：使用Winston构建专业日志.md?raw'

export interface BlogPost {
  id: string
  title: string
  summary: string
  date: string
  csdnUrl: string
  tags: string[]
  content: string
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'JavaScript 文件上传机制详解',
    summary: '本文深入解析JavaScript文件上传全流程，从前端文件选择到后端接收存储',
    date: '2025-09-16',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/151754190',
    tags: ['JavaScript', 'File Upload', 'Web Development'],
    content: blog1
  },
  {
    id: '2',
    title: '.env 与 .gitignore：现代软件开发中的环境管理与版本控制防护',
    summary: '本文系统介绍了.env和.gitignore文件在现代软件开发中的关键作用',
    date: '2025-09-21',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/151934899',
    tags: ['Environment', 'Git', 'Security'],
    content: blog2
  },
  {
    id: '3',
    title: 'Git 团队协作实战指南：从基础到高级技巧',
    summary: '本文全面介绍了Git在团队协作中的使用方法和最佳实践',
    date: '2025-09-21',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/151935025',
    tags: ['Git', 'Team Collaboration', 'Version Control'],
    content: blog3
  },
  {
    id: '4',
    title: 'Marked.js：一个强大的 Markdown 解析库',
    summary: 'Marked.js是一款高效的Markdown解析库，支持浏览器端和Node.js环境，可将Markdown快速转换为HTML。',
    date: '2025-09-25',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/152086301',
    tags: ['Markdown', 'JavaScript', 'Library'],
    content: blog4
  },
  {
    id: '5',
    title: 'Vue 3 + TypeScript 项目性能优化全链路实战',
    summary:
      '本文详细介绍了Vue3项目的全链路优化方案，通过系统化手段实现了显著的性能提升。基于Vite构建工具，采用CDN外部化、精细化代码分割等策略，使首包体积从2.1MB降至130KB（降幅94%）。同时通过自动化图片压缩、智能预加载等技术，将LCP时间从3.2s缩短至1.8s（提升44%）。全文提供了完整的TypeScript配置代码和优化前后对比数据，包括构建体积减少70%、Lighthouse评分提升30%等具体成果。项目采用Vue3+TypeScript+Composition API技术栈。',
    date: '2025-10-24',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/153821538',
    tags: ['Vue.js', 'TypeScript', 'Performance'],
    content: blog5
  },
  {
    id: '6',
    title: 'Vue 图片性能优化双剑客：懒加载与自动压缩',
    summary: 'Vue图片优化指南：使用vue-lazyload和vite-plugin-imagemin提升应用性能',
    date: '2025-11-02',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154286054',
    tags: ['Vue.js', 'Image Optimization', 'Performance'],
    content: blog6
  },
  {
    id: '7',
    title: 'Vue 3 项目 ESLint 配置详解',
    summary: '本文介绍了在pnpm create vue创建的Vue3项目中配置ESLint的方法',
    date: '2025-11-12',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154727955',
    tags: ['Vue.js', 'ESLint', 'Code Quality'],
    content: blog7
  },
  {
    id: '8',
    title: 'Trae 一键换装 Dracula 主题',
    summary: '本文介绍如何快速配置Trae编辑器的前端开发环境',
    date: '2025-11-13',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154798672',
    tags: ['Trae', 'Theme', 'Productivity'],
    content: blog8
  },
  {
    id: '9',
    title: '快速上手 Dart 基础',
    summary:
      '本文介绍了Dart语言的基础知识，包括变量与常量的声明(var/const/final)、常用数据类型(String/数字/布尔/List/Map/dynamic)及其常用操作方法。同时讲解了Dart的空安全机制(?, ?., !, ??运算符)和运算符使用。内容涵盖字符串拼接、类型转换、列表增删改查、字典操作等基础语法，适合有前端基础的学习者快速掌握Dart核心语法要点',
    date: '2025-11-15',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/154882262',
    tags: ['Dart', 'Programming', 'Flutter'],
    content: blog9
  },
  {
    id: '10',
    title: 'JavaScript 后端日志系统：使用 Winston 构建专业日志',
    summary: '本文介绍了Node.js生态中流行的Winston日志库的使用方法',
    date: '2025-12-04',
    csdnUrl: 'https://blog.csdn.net/nineeea/article/details/155578894',
    tags: ['JavaScript', 'Logging', 'Backend'],
    content: blog10
  }
]

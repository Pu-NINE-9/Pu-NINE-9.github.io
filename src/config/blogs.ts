export interface BlogPost {
  id: string
  title: string
  summary: string
  date: string
  csdnUrl: string
  tags: string[]
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Discord Bot from Scratch',
    summary: 'A comprehensive guide to creating your first Discord bot with discord.js v14.',
    date: '2025-12-15',
    csdnUrl: 'https://blog.csdn.net/example1',
    tags: ['Discord.js', 'JavaScript', 'Tutorial']
  },
  {
    id: '2',
    title: 'Pixel Art Game Development with HTML5 Canvas',
    summary: 'Learn how to create retro-style pixel games using pure JavaScript and Canvas API.',
    date: '2025-11-20',
    csdnUrl: 'https://blog.csdn.net/example2',
    tags: ['HTML5', 'Canvas', 'Game Dev']
  },
  {
    id: '3',
    title: '8-bit Music Synthesis in the Browser',
    summary: 'Creating authentic chiptune sounds using Web Audio API oscillators and filters.',
    date: '2025-10-08',
    csdnUrl: 'https://blog.csdn.net/example3',
    tags: ['Web Audio', 'Music', 'JavaScript']
  },
  {
    id: '4',
    title: 'Vue 3 Composition API Best Practices',
    summary: 'Advanced patterns and best practices for building scalable Vue 3 applications.',
    date: '2025-09-12',
    csdnUrl: 'https://blog.csdn.net/example4',
    tags: ['Vue.js', 'TypeScript', 'Frontend']
  }
]
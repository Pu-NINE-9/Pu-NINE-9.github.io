export interface Work {
  id: string
  title: string
  description: string
  image: string
  githubUrl: string | null
  demoUrl?: string
  tags: string[]
}

export const works: Work[] = [
  {
    id: '1',
    title: 'NineBot Discord Bot',
    description: 'A feature-rich Discord bot with moderation, music, and game commands.',
    image: '/images/works/bot.jpg',
    githubUrl: 'https://github.com/pu-nine-9/NineBot',
    tags: ['Discord.js', 'Node.js', 'TypeScript']
  },
  {
    id: '2',
    title: 'Pixel Engine',
    description: 'A lightweight 2D pixel game engine built with TypeScript and HTML5 Canvas.',
    image: '/images/works/engine.jpg',
    githubUrl: 'https://github.com/pu-nine-9/pixel-engine',
    tags: ['TypeScript', 'Canvas', 'Game Engine']
  },
  {
    id: '3',
    title: 'RetroBlog',
    description: 'A retro-themed blog platform with NES-style UI.',
    image: '/images/works/blog.jpg',
    githubUrl: null,
    tags: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: '4',
    title: 'Chiptune Player',
    description: 'Web-based 8-bit music player with custom sound synthesis.',
    image: '/images/works/player.jpg',
    githubUrl: 'https://github.com/pu-nine-9/chiptune-player',
    demoUrl: 'https://pu-nine-9.github.io/chiptune-player',
    tags: ['Web Audio API', 'React', 'TypeScript']
  }
]
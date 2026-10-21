<script setup lang="ts">
const { projects, posts, t, copy } = useSiteContent()
useSeoMeta({ title: 'NINEの代码space', ogTitle: 'NINEの代码space', description: 'NINE 的个人 Website 啦~ 嘿嘿唔嘿~' })
const stack = [
  { name: 'Vue.js', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z" fill="#41B883"/><path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill="#34495E"/></svg>' },
  { name: 'Nuxt', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M566.656 800h333.088a60.48 60.48 0 0 0 52.192-30.4 61.216 61.216 0 0 0 0-60.8L728.192 317.952a59.84 59.84 0 0 0-104.352 0l-57.216 100-111.808-195.552a59.872 59.872 0 0 0-104.384 0l-278.4 486.4a61.184 61.184 0 0 0 22.08 83.04c9.152 5.344 19.52 8.16 30.112 8.16h209.088c82.848 0 143.936-36.704 185.952-108.32l102.08-178.304 54.656-95.424 164.064 286.624h-218.72L566.624 800z m-236.736-95.52l-145.92-.032 218.752-382.144 109.12 191.04-73.056 127.744c-27.936 46.464-59.648 63.392-108.896 63.392z" fill="#00DC82"/></svg>' },
  { name: 'TypeScript', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M94.208 94.208v835.584h835.584V94.208H94.208z m634.921 405.852c8.012.025 17.119.436 23.968 1.18 27.892 3.017 49.613 15.051 68.092 37.716 9.202 11.291 12.349 16.23 11.68 18.344-.433 1.364-6.747 5.886-26.821 19.21-19.72 13.093-26.071 17.015-27.546 17.015-1.497 0-4.614-3.207-9.105-9.366-8.653-11.856-17.485-17.267-31.14-19.071-14.684-1.945-27.857 2.683-34.308 12.059-5.515 8.012-6.348 20.902-1.966 30.269 5.079 10.849 14.27 16.847 49.494 32.291 40.624 17.814 61.211 30.005 76.204 45.138 16.147 16.294 24.327 35.107 26.84 61.719 1.226 12.972-.273 28.344-3.984 40.843-9.103 30.64-33.669 53.076-69.673 63.635-9.953 2.918-19.214 4.661-28.375 5.333-13.985 1.03-34.002.463-46.051-1.29-30.482-4.442-64.892-22.18-82.051-42.291-8.423-9.873-19.177-26.122-19.177-28.979 0-1.38.684-2.165 3.391-3.885 8.032-5.104 54.055-31.413 54.948-31.413.541 0 2.945 2.832 5.341 6.296 5.43 7.84 18.78 21.313 25.567 25.809 5.544 3.672 12.635 6.619 21.051 8.747 4.821 1.202 7.373 1.417 17.891 1.417 10.748-.004 12.952-.184 17.76-1.477 12.719-3.422 22.645-10.506 26.852-19.157 1.843-3.737 1.88-4.205 1.88-13.271v-9.4l-2.261-4.485c-5.475-10.867-17.271-18.323-54.569-34.478-17.131-7.422-38.113-17.885-46.305-23.091-18.696-11.881-31.654-25.463-40.157-42.088-8.459-16.534-9.718-22.688-9.739-47.549-.02-19.462-.053-19.222 3.976-31.644 3.655-11.272 11.139-23.863 19.4-32.645 16.487-17.524 40.577-28.788 66.368-31.029 3.297-.313 7.717-.434 12.524-.42zM507.208 503.9h.008c49.67.025 78.143.197 78.6.484.861.532.969 4.856.969 32.444v31.828l-49.564.18-49.563.18v140.725c0 77.4-.158 141.185-.373 141.748-.35.949-4.163 1.02-36.413 1.02h-36.018l-.373-1.454c-.24-.799-.416-64.588-.42-141.75l-.012-140.296-49.562-.176-49.566-.18v-31.451c0-24.945.172-31.625.838-32.289.682-.703 25.977-.883 134.967-.991 21.013-.02 39.926-.031 56.484-.02z" fill="#0288D1"/></svg>' },
  { name: 'Vite', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M987.78 116.55L710.356 167.116 758.564 0 373.58 75.436l-5.998 101.28-337.292-60.288C7.06 115.076-6.476 131.758 3.116 154.92l488.112 855.965c10.506 17.15 34.694 17.82 45.3 0l478.622-856.047c10.8-19.352-5.748-42.036-27.37-38.288zM513.78 987.419L35.74 149.112l329.986 58.982-15.556 262.73 135.264-31.216-37.716 184.688 102.748-31.216-50.99 246.794c-2.54 16.138 18.482 24.724 28.88 1.624l300.44-599.583-148.27 28.616 20.172-69.924 281.82-51.368L513.78 987.419z" fill="#FDD835"/></svg>' },
  { name: 'Tailwind CSS', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M277.333 418.133c31.275-125.184 109.525-187.733 234.667-187.733 187.733 0 211.243 140.8 305.109 164.267 62.592 15.659 117.333-7.851 164.267-70.4-31.232 125.141-109.483 187.733-234.667 187.733-187.733 0-211.2-140.8-305.067-164.267-62.635-15.701-117.376 7.808-164.352 70.4zM42.581 699.733c31.275-125.141 109.525-187.733 234.667-187.733 187.776 0 211.2 140.8 305.152 164.267 62.549 15.701 117.333-7.808 164.267-70.4-31.317 125.184-109.525 187.733-234.667 187.733-187.776 0-211.243-140.8-305.152-164.267-62.549-15.659-117.333 7.851-164.267 70.4z" fill="#4DB6AC"/></svg>' },
  { name: 'Node.js', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M875.2 262.3L546.7 72.7c-20.7-11.8-48.3-11.8-69 0L148.8 262.3c-21.5 12.2-34.5 34.9-34.5 59.7v379.2c0 24.8 13.4 47.9 34.5 60.1l86.1 49.5c41.8 20.7 56.8 20.7 75.9 20.7 62.1 0 97.4-37.8 97.4-102.7V354.4c0-5.3-4.1-9.3-9.3-9.3h-41.4c-5.3 0-9.3 4.1-9.3 9.3v374.3c0 28.8-30 57.7-78.8 33.3l-90.1-52c-3.2-2-5.3-5.3-5.3-8.9V321.9c0-3.7 2-7.3 5.3-8.9l328.1-190c3.2-1.6 7.3-1.6 10.2 0l328.5 189.6c3.2 1.6 5.3 5.3 5.3 8.9v379.2c0 3.7-13.4 47.5-34.5 59.6L517.9 899.3c-2.8 1.6-7.3 1.6-10.2 0l-84.4-49.9c-2.4-1.2-5.7-1.6-8.1-.4-23.1 13.4-27.6 15-49.5 22.7-5.7 1.6-13.4 4.9 2.8 14.2l109.6 65c10.6 6.1 22.3 9.3 34.5 9.3 11.8-.4 24-3.2 34.1-9.7l328.5-189.6c21.1-12.2 34.5-34.9 34.5-59.7V321.9c0-24.3-13.4-47.5-34.5-59.6zM614.1 641.1c-86.9 0-106-21.9-112.5-65-.8-4.9-4.5-8.1-9.3-8.1h-42.6c-5.3 0-9.3 4.1-9.3 9.3 0 55.2 30 121.4 173.8 121.4 103.9 0 163.6-41 163.6-112.5 0-70.6-47.9-89.7-149-103.1-101.9-13.4-112.5-20.3-112.5-44.3 0-19.5 8.9-45.9 84.4-45.9 67.8 0 92.6 14.6 102.7 60.1 1.2 4.1 4.9 7.3 9.3 7.3H755c2.4 0 5.3-.8 6.9-2.8 1.6-2 2.8-4.5 2.4-7.3-6.9-78.4-58.9-114.9-164-114.9-93.4 0-149.4 39.4-149.4 105.6 0 71.9 55.6 91.8 145.8 100.7 107.6 10.6 116.1 26.4 116.1 47.5 0 36.5-29.3 52.4-98.7 52.4z" fill="#689F63"/></svg>' },
  { name: 'Git', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M1005.326 442.37L581.602 18.646c-21.17-21.17-55.584-21.17-76.755 0L406.445 116.95l122.174 122.174c22.676-7.678 48.405-2.527 66.128 15.196 17.73 17.723 22.874 43.452 15.196 66.128l117.358 117.358c22.676-7.678 48.405-2.527 66.128 15.196 24.114 24.114 24.114 63.21 0 87.324-24.114 24.114-63.21 24.114-87.324 0-18.121-18.121-22.676-44.538-13.788-66.526L576.75 357.27v279.253c6.734 3.34 13.111 7.897 18.878 13.665 24.114 24.114 24.114 63.21 0 87.324-24.114 24.114-63.21 24.114-87.324 0-24.114-24.114-24.114-63.21 0-87.324 6.67-6.673 14.285-11.898 22.587-15.51V349.894c-8.302-3.612-15.917-8.837-22.587-15.51-18.352-18.353-22.874-45.014-13.614-67.434L351.464 159.607 18.646 492.425c-21.17 21.17-21.17 55.584 0 76.755l423.724 423.724c21.17 21.17 55.584 21.17 76.755 0l486.201-486.201c21.172-21.17 21.172-55.582.001-76.754z" fill="#F05032"/></svg>' },
  { name: 'SCSS', logo: '<svg viewBox="0 0 1024 1024" aria-hidden="true"><path d="M874.1 486.9c-16.3-6.9-35.2-11.4-51-22-3.4 1.3-73 42.1-86.7 50.8-2.6 1.7-5 3.3-7.1 4.8-14.7-11.4-28.2-23.1-41-34.1 45-16.7 104.8-44.6 117.5-71.4 15.9-33.5 14.6-66 7.5-84.5-6.2-16.1-22-35.1-43.1-45.2-53.6-25.7-107.4-12.1-138.9 3.1-57.6 27.7-87.1 69.3-95.8 94.8-1.3 3.8-2.5 7.7-3.5 11.5-11.7-17.1-23.9-34.1-33.9-47.1-29.7-38.5-56.6-70.1-79-65.2-20.5 4.5-29.2 35.1-22.3 65.8 7 31 35.2 66.1 81 104.5 43.9 36.7 102.1 74.4 157.7 108.9-12.5 6.1-25.1 11.6-37.4 16.3-43.7 16.6-83.7 21.8-119.1 18.3-34.5-3.4-61.2-14.3-75-45-7.2-16.1-5-33.3 5.9-47 12.2-15.3 33-24.5 40.2-25.1 2 0 3.8 0 5.4.5 18 4.3 22.3 30.4 9 45.2-9.7 10.8-22.2 15.1-27.8 11.4-5.2-3.4-3.9-12 3.2-20.5 6.8-8.1 18.3-15.1 32.9-15.1 21.5 0 41.3 9.9 52.4 27.9 17.1 27.7 11.5 68.4-14 93.4-25.4 25-67.8 35.1-120.7 29-54-6.2-108.1-31.6-152.4-73.2-47.6-44.7-71.9-96.5-68-134.8 3-29.7 21.5-45.7 37-45.7 4.3 0 8.7.8 12.7 2.6 40.4 16.1 50.6 61.9 27.5 108.7-5 10-5.7 10.3-11.4 13.8 1.3 10.2 7 20.6 12.4 29.1 14.4 22.6 27.5 29.5 48.2 29.5 50.6 0 107.7-62.6 116-163.7.9-10.3 1.5-20.6 1.6-30.9l-77 411.3s-12 6.3-17.4 18.5c-4.3 9.7-2.8 20.5 3.4 25.7 10.1 8.6 27.1 0 35.1-17.6 5.2-11.4 15.3-56.1 19-82.5 21.4-1.6 45.8-3.1 74.4-6.9 51.4-6.8 112.9-16.7 176.6-36 47.4-14.4 88.7-31.3 120.6-51.5 26-16.4 42.2-33.7 53.5-51.5 1.7-2.7 3.3-5.3 4.8-7.9 16.7-29.6 19.4-54.8 10.6-72.8-9.7-19.8-36.5-29.7-71.7-26.9z" fill="#CD6799"/></svg>' },
].filter(Boolean)
const idolPhotos = [1, 2, 3, 4].map((index) => ({ src: `/imgs/photo${index}.jpg`, alt: `家媛思密达: ${index}` }))
const daughterPhotos = [1, 2, 3, 4, 5].map((index) => ({ src: `/imgs/daughter${index}.jpg`, alt: `宝贝女儿 ${index}` }))
</script>

<template>
  <div>
    <section class="hero site-container">
      <div class="hero-copy">
        <div class="hero-eyebrow">
          <span class="status-dot" />{{
            copy(
              '沉心沉淀，全力以赴',
              'FOCUSED MIND · FULL COMMITMENT',
              '心を澄ませ、全力を尽くす',
              '마음을 가다듬고 최선을 다하기'
            )
          }}<span class="eyebrow-line" />
        </div>
        <h1>NINE<br /><span class="gradient-text">Re.design the Wo.rld</span><span class="title-cursor">_</span></h1>
        <p class="hero-description">
          Personal Website Right Here! Let's Gooooo!
        </p>
        <div class="hero-buttons">
          <UButton to="/works" size="xl" class="neon-button" trailing-icon="i-lucide-arrow-up-right">{{
            copy('探索我的作品', 'Explore my work', '作品を見る', '프로젝트 보기')
          }}</UButton
          ><UButton
            to="/blog"
            size="xl"
            color="neutral"
            variant="outline"
            class="outline-button"
            icon="i-lucide-book-open"
            >{{ copy('阅读技术笔记', 'Read my notes', '技術ノートを読む', '기술 노트 읽기') }}</UButton
          >
        </div>
        <div class="hero-socials">
          <span>FIND ME ON</span
          ><a href="https://github.com/Pu-NINE-9" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            ><UIcon name="i-lucide-github" /></a
          ><a
            href="https://blog.csdn.net/nineeea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CSDN"
            class="csdn-social-icon"
            ><svg viewBox="0 0 1024 1024" role="img" aria-label="CSDN">
              <path d="M0 0h1024v1024H0z" fill="#FF6633" />
              <path
                d="M698.9824 42.3936c-158.8736-32.5632-289.536 31.2832-324.9152 48.5888-94.72 46.2848-147.712 108.288-174.4896 140.288-25.9584 31.0272-82.7392 105.9328-108.288 215.8592-21.6576 93.1328-10.752 167.7824-6.0416 194.2528 11.4688 64.3072 33.28 186.88 150.4256 275.2 132.5056 99.8912 293.4784 85.5552 342.9888 80.9472 107.264-10.0352 289.4848-57.2928 300.8512-145.7152 5.1712-39.936-24.4224-89.4464-66.2016-102.5024-65.6384-20.5312-108.3392 63.5392-228.6592 80.9472-8.5504 1.2288-126.5664 16.6912-216.6272-48.5888-105.8816-76.6976-98.9696-211.3024-96.256-264.3968 1.536-30.5664 5.5808-93.5424 48.128-161.8944 14.7968-23.7568 60.3136-94.5664 156.4672-134.912 25.2928-10.5984 76.8512-31.5904 144.4352-26.9824 70.0416 4.7616 120.9856 34.5088 144.4352 48.5888 75.8272 45.4144 86.528 90.0608 120.3712 86.3232 35.8912-3.9424 69.9904-59.2896 66.2016-107.9296-7.424-93.7984-155.5968-158.1056-252.8256-178.0736z"
                fill="#FFFFFF"
              /></svg></a
          ><span class="social-divider" /><span class="hero-location"
            ><UIcon name="i-lucide-globe-2" /> BASED IN CHINA</span
          >
        </div>
      </div>
      <HeroOrbit />
      <div class="hero-bottom">
        <a href="#selected-work" class="scroll-cue"
          ><span class="mouse-scroll"><i /></span>SCROLL TO EXPLORE</a
        ><span class="hero-note">FROM MYSELF IN THE PAST TO THE FUTURE <UIcon name="i-lucide-move-up-right" /></span>
      </div>
    </section>

    <div class="stack-strip">
      <div class="site-container stack-strip-inner">
        <span class="stack-label">MY TOOLKIT <UIcon name="i-lucide-arrow-right" /></span>
        <div class="stack-ticker">
          <div class="stack-track">
            <div v-for="group in 2" :key="group" class="stack-group" :aria-hidden="group === 2">
              <span v-for="tech in stack" :key="tech.name"
                ><span class="stack-tech-logo" v-html="tech.logo"></span
                >{{ tech.name }}<span class="stack-plus">✳</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="selected-work" class="site-container content-section">
      <div class="section-heading">
        <div>
          <p class="section-eyebrow"><span>01 /</span> Project X</p>
          <h2>
            <span class="gradient-text">{{
              copy('个人作品', 'PERSONAL PROJECTS', '個人プロジェクト', '개인 프로젝트')
            }}</span>
          </h2>
        </div>
        <NuxtLink to="/works" class="text-link"
          >{{ copy('全部作品', 'All projects', 'すべての作品', '모든 프로젝트')
          }}<span>{{ String(projects.length).padStart(2, '0') }}</span
          ><UIcon name="i-lucide-arrow-up-right"
        /></NuxtLink>
      </div>
      <div class="project-grid">
        <ProjectCard
          v-for="(project, index) in projects.slice(0, 2)"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
    </section>

    <section id="about" class="site-container about-section">
      <div class="about-intro">
        <p class="section-eyebrow"><span>02 /</span> Self-Introduction</p>
        <h2 class="about-greeting">玖 <span class="gradient-text">Right Here~</span></h2>
        <div class="about-identity">
          <UIcon name="i-lucide-sparkles" class="identity-sparkle" />
          <span>{{
            copy(
              '没毕业的准·码农 思密达。。。',
              'Still in school, junior dev in the making.',
              'まだ卒業していない、駆け出しの開発者。',
              '아직 졸업 안 한 주니어 개발자.'
            )
          }}</span>
          <UIcon name="i-lucide-sparkles" class="identity-sparkle" />
        </div>
        <p class="about-tagline">
          {{
            copy(
              '不定时更新博客内容，还请多多期待！',
              'Notes from the road — stay tuned.',
              '学びの記録を不定期更新中。お楽しみに！',
              '배운 것을 기록합니다. 기대해 주세요!'
            )
          }}
        </p>
        <div class="about-tags">
          <span><UIcon name="i-lucide-code-2" />{{ copy('编程', 'Code', 'コーディング', '코딩') }}</span
          ><span><UIcon name="i-lucide-headphones" />{{ copy('音乐', 'Music', '音楽', '음악') }}</span
          ><span><UIcon name="i-lucide-camera" />{{ copy('摄影', 'Photography', '写真', '사진') }}</span
          ><span><UIcon name="i-lucide-gamepad-2" />{{ copy('游戏', 'Games', 'ゲーム', '게임') }}</span>
        </div>
        <a href="https://github.com/Pu-NINE-9" target="_blank" rel="noopener noreferrer" class="text-link"
          >{{ copy('在 GitHub 和我打个招呼', 'Say hello on GitHub', 'GitHubで挨拶する', 'GitHub에서 인사하기')
          }}<UIcon name="i-lucide-arrow-up-right"
        /></a>
      </div>
      <div class="about-bento">
        <GlowCard class="profile-bento"
          ><img src="/imgs/avatar.jpg" alt="NINE 的头像" loading="lazy" width="64" height="64" />
          <div>
            <span class="mono">THE HUMAN BEHIND THE PIXELS</span>
            <h3>玖 NINE<span class="tiny-dot" /></h3>
            <p>Frontend Developer</p>
          </div>
          <UIcon name="i-lucide-asterisk" class="profile-asterisk" /></GlowCard
        ><GlowCard class="code-bento" accent="#51e0cd"
          ><div class="code-window-head">
            <span /><span /><span /><small>about-me.ts</small><UIcon name="i-lucide-code-2" />
          </div>
          <pre><span class="code-purple">const</span> developer = {
  name: <span class="code-green">'NINE'</span>,
  focus: [<span class="code-green">'Frontend'</span>, <span class="code-green">'AI'</span>],
  mindset: <span class="code-green">'Always learning'</span>,
  cola: <span class="code-orange">Infinity</span>,
  <span class="code-comment">// {{ copy('下一行，由我定义未来', 'The next line defines my future') }}</span>
  next: <span class="code-purple">undefined</span>
}</pre>
          <span class="code-footer"
            ><span class="tiny-dot" />{{ copy('持续构建中', 'WORK IN PROGRESS')
            }}<UIcon name="i-lucide-terminal" /></span
        ></GlowCard>
      </div>
    </section>

    <section class="site-container memories-section" aria-labelledby="memories-title">
      <div class="section-heading">
        <div>
          <p class="section-eyebrow"><span>03 /</span> GALLERY</p>
        </div>
      </div>
      <div class="memories-grid">
        <GlowCard accent="#7ad8cf" class="daughter-gallery"
          ><div class="gallery-heading">
            <span class="gallery-mark"><UIcon name="i-lucide-heart" /></span>
          </div>
          <PhotoCarousel :images="daughterPhotos" accent="#7ad8cf" aspect="landscape" /></GlowCard
        ><GlowCard accent="#ee9edc" class="idol-gallery"
          ><div class="gallery-heading">
            <span class="gallery-mark"><UIcon name="i-lucide-star" /></span>
          </div>
          <PhotoCarousel :images="idolPhotos" accent="#ee9edc" aspect="portrait"
        /></GlowCard>
      </div>
    </section>

    <section class="site-container content-section notes-section">
      <div class="section-heading">
        <div>
          <p class="section-eyebrow"><span>03 /</span> BLOGS</p>
          <h2>
            {{ copy('个人博客，', 'MBLOG', '個人ブログ', '개인 블로그')
            }}<span class="gradient-text">{{
              copy('欢迎阅读', 'WELCOME TO READ', 'どうぞお読みください', '편하게 읽어 주세요')
            }}</span>
          </h2>
          <p>
            {{
              copy(
                '个人学习笔记 & 心得感悟',
                'Personal notes, lessons learned, and reflections from my journey.',
                '学びの記録と気づきを綴っています。',
                '배움의 기록과 생각을 공유합니다.'
              )
            }}
          </p>
        </div>
        <NuxtLink to="/blog" class="text-link"
          >{{ copy('全部文章', 'All notes', 'すべての記事', '모든 글') }}<UIcon name="i-lucide-arrow-up-right"
        /></NuxtLink>
      </div>
      <div class="blog-grid">
        <BlogCard v-for="(post, index) in posts.slice(0, 3)" :key="post.id" :post="post" :index="index" />
      </div>
    </section>

    <section class="site-container">
      <div class="contact-banner">
        <span class="contact-orbit" aria-hidden="true" />
        <div>
          <p class="section-eyebrow">LET’S MAKE SOMETHING GREAT</p>
          <h2>
            {{
              copy(
                '跨越日升月落，',
                'Across every sunrise and sunset,',
                '日の出から月の入りまで、',
                '해가 뜨고 달이 질 때까지'
              )
            }}<span class="gradient-text">{{
              copy('一起开拓未来。', 'let’s build the future.', '一緒に未来を切り拓こう。', '함께 미래를 열어가요.')
            }}</span>
          </h2>
          <p>
            {{
              copy(
                '山回路转不见君，雪上空留马行处',
                'Mountain paths twist, your form is gone — only hoofprints remain in empty snow.',
                '面影は見えなくても、雪の上に馬の足跡を残す。',
                '산길 돌아 모습 보이지 않고, 눈 위에 말발굽 자리만 남네.'
              )
            }}
          </p>
        </div>
        <UButton
          to="https://github.com/Pu-NINE-9"
          target="_blank"
          rel="noopener noreferrer"
          class="neon-button"
          size="xl"
          trailing-icon="i-lucide-arrow-up-right"
          >{{
            copy('来Github和我一起交流吧~', 'Let’s connect', 'GitHubで話しましょう', 'GitHub에서 함께 이야기해요')
          }}</UButton
        >
      </div>
    </section>
  </div>
</template>

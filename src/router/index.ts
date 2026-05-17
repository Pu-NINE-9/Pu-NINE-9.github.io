import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
  speed: 500,
  minimum: 0.1,
  trickleSpeed: 200
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'NINEの代码space' }
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('@/views/WorksView.vue'),
      meta: { title: '作品展示 - NINEの代码space' }
    },
    {
      path: '/works/:id',
      name: 'work-detail',
      component: () => import('@/views/WorkDetailView.vue'),
      meta: { title: '作品详情 - NINEの代码space' }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
      meta: { title: '技术博客 - NINEの代码space' }
    },
    {
      path: '/blog/:id',
      name: 'blog-detail',
      component: () => import('@/views/BlogDetailView.vue'),
      meta: { title: '博客详情 - NINEの代码space' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '404 - 页面未找到' }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _from) => {
  NProgress.start()
  
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  return true
})

router.afterEach(() => {
  NProgress.done()
})

export default router

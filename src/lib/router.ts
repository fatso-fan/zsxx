import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/Overview.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/ListPage.vue'),
    props: {
      infoType: 'news',
    },
  },
  {
    path: '/latest',
    name: 'latest',
    component: () => import('@/views/ListPage.vue'),
    props: {
      infoType: 'latest',
    },
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/ListPage.vue'),
    props: {
      infoType: 'notice',
    },
  },
  {
    path: '/news/:id',
    component: () => import('@/views/DetailPage.vue'),
    props: {
      infoType: 'news',
    },
  },
  {
    path: '/latest/:id',
    component: () => import('@/views/DetailPage.vue'),
    props: {
      infoType: 'latest',
    },
  },
  {
    path: '/notice/:id',
    component: () => import('@/views/DetailPage.vue'),
    props: {
      infoType: 'notice',
    },
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('@/views/StudentCorner2.vue'),
  },
  {
    path: '/swpier/:id',
    name: 'swpier',
    component: () => import('@/views/SwpierDetail.vue'),
  },
  {
    path: '/FeedBackPage',
    name: 'FeedBackPage',
    component: () => import('@/views/FeedBackPage.vue'),
  },
  {
    path: '/Policy',
    name: 'Policy',
    component: () => import('@/views/PolicyList.vue'),
  },
  {
    path: '/Policy/:id',
    name: 'Policys',
    component: () => import('@/views/PolicyDetail.vue'),
  },
]
const router = createRouter({
  history,
  routes,
})
export default router

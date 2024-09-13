export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/projects/TestH5Scan/views/Home/index.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/ScanCodePage',
    name: 'ScanCodePage',
    component: () => import('@/components/ScanCodePage/index.vue'),
    meta: { title: '扫码' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/global/pages/not-found/index.vue')
  }
]

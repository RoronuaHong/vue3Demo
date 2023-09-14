import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/props_pre',
    component: () => import('../views/01_props/PropsTest.vue')
  }
]


// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})


export default router


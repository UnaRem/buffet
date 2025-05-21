import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/App.vue')
    },
    // {
    //   path: '/menu',
    //   name: 'menu',
    //   component: () => import('@/views/MenuView.vue')
    // }
  ]
})

export default router

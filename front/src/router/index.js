import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/Contact.vue'),
    }
  ],
})

export default router
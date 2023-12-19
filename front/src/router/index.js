import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/actualites',
      name: 'actualites',
      component: () => import('../pages/Actualites.vue'),
    },
    {
      path: '/salles-des-fetes',
      name: 'salles-des-fetes',
      component: () => import('../pages/SalleDesFetes.vue'),
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: () => import('../pages/APropos.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/Contact.vue'),
    },
    {
      path: '/plan-du-site',
      name: 'plan-du-site',
      component: () => import('../pages/PlanDuSite.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../pages/MentionsLegales.vue'),
    },
  ],
})

export default router
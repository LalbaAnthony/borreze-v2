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
      component: () => import('../pages/actu/ActualitesPage.vue'),
    },
    {
      path: '/actualites/:slug',
      name: 'actualite',
      component: () => import('../pages/actu/ActualiteDetails.vue'),
    },
    {
      path: '/salle-des-fetes',
      name: 'salle-des-fetes',
      component: () => import('../pages/SalleDesFetesPage.vue'),
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: () => import('../pages/AProposPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
    },
    {
      path: '/plan-du-site',
      name: 'plan-du-site',
      component: () => import('../pages/PlanDuSitePage.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../pages/MentionsLegalesPage.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../pages/error/ErrorNotFound.vue'),
    },
  ],
})

export default router
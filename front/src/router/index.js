import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/actualites',
      name: 'Actualités',
      component: () => import('../pages/actu/ActualitesPage.vue'),
    },
    {
      path: '/actualites/:slug',
      name: 'Actualité',
      component: () => import('../pages/actu/ActualiteDetails.vue'),
    },
    {
      path: '/salle-des-fetes',
      name: 'Salle des fetes',
      component: () => import('../pages/SalleDesFetesPage.vue'),
    },
    {
      path: '/conseil-municipale',
      name: 'Conseil municipale',
      component: () => import('../pages/ConseilMunicipalePage.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../pages/ContactPage.vue'),
    },
    {
      path: '/plan-du-site',
      name: 'Plan du site',
      component: () => import('../pages/PlanDuSitePage.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'Mentions légales',
      component: () => import('../pages/MentionsLegalesPage.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../pages/error/ErrorNotFound.vue'),
    },
  ],
})

export default router
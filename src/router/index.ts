import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/historia',
      name: 'beneficts',
      component: () => import('../views/BenefictsView.vue'),
    },
    {
      path: '/cultura',
      name: 'ingredients',
      component: () => import('../views/IngredientsView.vue'),
    },
    {
      path: '/preguntas',
      name: 'faqs',
      component: () => import ('../views/FaqsView.vue')
    },
    {
      path: '/productos',
      name: 'products',
      component: () => import ('../views/ProductsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router

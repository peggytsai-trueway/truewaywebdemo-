import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Frontend/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Frontend/HomeView.vue')
      },
      {
        path: '/watersports',
        component: () => import('../views/Frontend/WaterSports.vue')
      },
      {
        path: '/outdoorsports',
        component: () => import('../views/Frontend/OutdoorSports.vue')
      },
      {
        path: '/otherenduse',
        component: () => import('../views/Frontend/OtherendUse.vue')
      },
      {
        path: '/trend',
        component: () => import('../views/Frontend/TrendView.vue')
      },
      {
        path: '/technology',
        component: () => import('../views/Frontend/TechView.vue')
      },
      {
        path: '/exhibition',
        component: () => import('../views/Frontend/ExhibView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Dashboard/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'exact-active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

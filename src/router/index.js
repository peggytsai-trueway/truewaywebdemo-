import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/Frontend/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Frontend/HomeView.vue')
      },
      {
        path: 'watersports',
        name: 'WaterSports',
        component: () => import('../views/Frontend/WaterSports.vue')
      },
      {
        path: 'watertest',
        component: () => import('../views/Frontend/WaterSports.vue')
      },
      {
        path: 'outdoorsports',
        name: 'OutdoorSports',
        component: () => import('../views/Frontend/OutdoorSports.vue')
      },
      {
        path: 'outdoortest',
        component: () => import('../views/Frontend/OutdoorSports1.vue')
      },
      {
        path: 'otherenduse',
        name: 'OtherendUse',
        component: () => import('../views/Frontend/OtherendUse.vue')
      },
      {
        path: 'trend',
        name: 'Trend',
        component: () => import('../views/Frontend/TrendView.vue')
      },
      {
        path: 'technology',
        name: 'Tech',
        component: () => import('../views/Frontend/TechView.vue')
      },
      {
        path: 'exhib',
        name: 'Exhib',
        component: () => import('../views/Frontend/ExhibView.vue'),
        children: [
          {
            path: '',
            name: 'Exhibs',
            component: () => import('../components/Frontend/ExhibsView.vue')
          },
          {
            path: 'news/:newsId',
            name: 'News',
            component: () => import('../components/Frontend/NewsView.vue')
          }
        ]
      },
      {
        path: 'exhibcontent/:pageId/:catId',
        name: 'ExhibContent',
        component: () => import('../views/Frontend/ExhibContent.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Dashboard/LoginView.vue')
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

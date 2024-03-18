import {
  createRouter,
  RouteRecordRaw,
  RouterView,
  createWebHistory,
} from 'vue-router'
import { ROUTE_NAMES } from '@/constants/RouteNames'
import { useUserStore } from '@/store'

import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import UserPage from '@/components/pages/UserPage.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/:lang',
    component: RouterView,
    children: [
      {
        path: '',
        name: ROUTE_NAMES.HOME_PAGE,
        component: HomePage,
      },
      {
        path: 'about-page',
        name: ROUTE_NAMES.ABOUT_PAGE,
        component: AboutPage,
      },
      {
        path: 'login-page',
        name: ROUTE_NAMES.LOGIN_PAGE,
        component: LoginPage,
        meta: { requiresAuth: false },
      },
      {
        path: 'user-page',
        name: ROUTE_NAMES.USER_PAGE,
        component: UserPage,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    redirect: localStorage.getItem('lang'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const lang = localStorage.getItem('lang')

  if (lang === 'ru' && !to.fullPath.includes('/ru')) {
    return next(lang)
  }

  const store = useUserStore()
  if ((to.meta.requiresAuth as Boolean) && !store.isLoggedIn) {
    // Если requiresAuth === false, перенаправляем на страницу логина
    next({ name: ROUTE_NAMES.LOGIN_PAGE })
  } else {
    next()
  }
})

export default router

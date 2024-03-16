import {
  createRouter,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
  RouterView,
  createWebHistory,
} from 'vue-router'
import { ROUTE_NAMES } from '@/constants/RouteNames'
import { useUserStore } from '@/store'

import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import UserPage from '@/components/pages/UserPage.vue'
// import LoginPage from '@/components/pages/LoginPage.vue'
// import MoviesPage from '@/components/pages/MoviesPage.vue'
// import DashboardPage from '@/components/pages/DashboardPage.vue'

// import guest from '@/router/middleware/guest'
// import auth from '@/router/middleware/auth'
// import isSubscribed from '@/router/middleware/isSubscribed'
// import middlewarePipeline from '@/router/authMiddleware'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// export interface MiddlewareContext {
//   to: RouteLocationNormalized
//   from: RouteLocationNormalized
//   next: NavigationGuardNext
//   useCounterStore: typeof useCounterStore
// }

// export interface NextMiddleware {
//   nextMiddleware: () => void
// }

// export type UnionMiddlewareContext = NextMiddleware & MiddlewareContext
// export type MiddlewareFunction = (options: UnionMiddlewareContext) => void

router.beforeEach((to, from, next) => {
  const lang = localStorage.getItem('lang')

  // console.log(to.fullPath)

  if (lang === 'ru' && !to.fullPath.includes('/ru')) {
    next(lang)
  } else {
    next()
  }

  const store = useUserStore()
  if ((to.meta.requiresAuth as Boolean) && !store.isLoggedIn) {
    // Если пользователь не авторизован, перенаправляем на страницу логина
    next({ name: ROUTE_NAMES.LOGIN_PAGE })
  } else {
    next()
  }
  // if (!(localStorage.getItem('lang') === 'ru')) {
  //   console.log('ru')
  //   return next({ path: '/ru' })
  // }
  // if (!to.meta.middleware) {
  //   return next()
  // }

  // const middleware = to.meta.middleware as MiddlewareFunction[]
  // const context: MiddlewareContext = {
  //   to,
  //   from,
  //   next,
  //   useCounterStore,
  // }
  // return middleware[0]({
  //   ...context,
  //   nextMiddleware: middlewarePipeline(context, middleware, 1),
  // })
})

export default router

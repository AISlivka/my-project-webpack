import { createRouter, createWebHistory } from "vue-router"
import { ROUTE_NAMES } from "@/constants/RouteNames"
import HomePage from "../components/pages/HomePage.vue"
import AboutPage from "../components/pages/AboutPage.vue"
import TestPage from "../components/pages/TestPage.vue"

const routes = [
  {
    path: "/",
    name: ROUTE_NAMES.HOME_PAGE,
    component: HomePage,
  },
  {
    path: "/about-page",
    name: ROUTE_NAMES.ABOUT_PAGE,
    component: AboutPage,
  },
  {
    path: "/:lang/test-page",
    name: ROUTE_NAMES.TEST_PAGE,
    component: TestPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

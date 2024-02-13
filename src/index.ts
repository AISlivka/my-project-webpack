import { createApp } from "vue"
import "normalize.css"
import "@/assets/styles/index.css"
import App from "./App.vue"
import routes from "./router/routes"
import { createI18n } from "vue-i18n"

const i18n = createI18n({
  locale: "ru",
  legacy: false,
  fallbackLocale: "en",
  messages: {
    ru: require("@/assets/locales/ru.ts"),
    en: require("@/assets/locales/en.ts"),
  },
})

createApp(App).use(routes).use(i18n).mount("#app")

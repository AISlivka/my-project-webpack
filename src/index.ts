import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/styles/index.css'
import App from './App.vue'
import routes from './router/routes'
import { store } from './store'
import I18n from '@/i18n'

// import { createI18n } from "vue-i18n"
// import { I18nLocale } from "@/assets/locales/I18nLocale"
// import { ru } from "@/assets/locales/ru"
// import { en } from "@/assets/locales/en"

// const messages = {
//   ru,
//   en,
// }

// export const localeStorageLang = localStorage.getItem("lang")
// console.log(localeStorageLang)

// export const i18n = createI18n<[I18nLocale], "ru" | "en">({
//   legacy: false,
//   fallbackLocale: "en",
//   locale: localeStorageLang || "en",
//   messages,
// })

const app = createApp(App)
app.use(routes)
app.use(store)
app.use(I18n)
app.mount('#app')

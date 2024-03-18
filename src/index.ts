import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/styles/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/routes'
import I18n from '@/i18n'

const lang = localStorage.getItem('lang')
if (!lang) {
  localStorage.setItem('lang', 'ru')
}

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(I18n)
app.mount('#app')

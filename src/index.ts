import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/styles/index.css'
import App from './App.vue'
import { useUserStore } from '@/store'
import { createPinia } from 'pinia'
import routes from './router/routes'
import I18n from '@/i18n'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(routes)
app.use(I18n)
app.mount('#app')

const userStore = useUserStore()

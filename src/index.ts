import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/styles/index.css'
import App from './App.vue'
import routes from './router/routes'
import I18n from '@/i18n'

const app = createApp(App)
app.use(routes)
app.use(I18n)
app.mount('#app')

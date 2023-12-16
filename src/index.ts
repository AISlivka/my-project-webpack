import { createApp } from 'vue';
import 'normalize.css';
import './assets/styles/index.css';
import App from './App.vue';
import routes from './router/routes';

createApp(App).use(routes).mount('#app');

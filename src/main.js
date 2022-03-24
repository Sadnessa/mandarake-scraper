import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'
import './index.css'

createApp(App).use(router).use(createPinia()).mount('#app')

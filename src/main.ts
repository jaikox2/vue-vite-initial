import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import 'virtual:windi.css'
import i18n from "./i18n"

createApp(App).use(router).use(i18n).mount('#app')

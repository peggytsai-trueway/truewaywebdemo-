import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

//* 滾動視差初始化
AOS.init({ })
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')

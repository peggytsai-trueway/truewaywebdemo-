import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.component('LoadingVue', Loading)
app.mount('#app')

import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
// 載入vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing params or default language
  let language = to.params.lang
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n
  i18n.locale = language
  next()
})

const app = createApp(App)
// globalProperties
app.config.globalProperties.APP_URL = 'http://www.trueway.com.tw/api/news_class.php'
app.use(VueAxios, axios)
app.use(router)
app.use(i18n)
app.component('LoadingVue', Loading)
app.mount('#app')

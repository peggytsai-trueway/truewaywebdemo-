<template>
  <div class="container">
    <div class="row py-md-5 py-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-5">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-primary">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Exhibition</li>
        </ol>
      </nav>
      <div class="col-lg-2 col-md-3 col-12">
        <div class="list-group text-center">
       <a href="#"  tabindex="-1" aria-disabled="true"
            class="fs-6 mb-0  fw-bold py-2 text-light list-group-item  list-group-item-action text-light disabled active"
            aria-current="true">{{ $t("ExhibView.News") }}</a>
           <button v-for="item in newsList" :key="item.id" class="list-group-item list-group-item-action fw-bold text-primary" @click="changePage(item.id)">{{item.class_name}}</button>
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-12 py-3 py-md-0">
        <router-view :key="$route.path"></router-view>
        <!-- <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-7">
            <li class="page-item"><a class="page-link" href="#">Prev</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav> -->
      </div>
    </div>
  </div>
  <VueLoading></VueLoading>
</template>

<script>
import VueLoading from '@/components/VueLoading.vue'
import { useI18n } from 'vue-i18n'
export default {
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale,
      languageOptions: [
        {
          lang: 'zh',
          name: '繁體中文'
        },
        {
          lang: 'en',
          name: 'English'
        }
      ]
    }
  },
  data () {
    return {
      newsList: [],
      defaultId: '',
      defaultLang: ''
    }
  },
  components: {
    VueLoading
  },
  watch: {
    locale: 'showNewsCate'
  },
  methods: {
    showNewsCate () {
      const url = this.APP_URL + `news_class.php?lang=${this.locale}`
      this.$http.get(url)
        .then((res) => {
          this.newsList = Object.values(res.data.result_data.data_list)
          console.log(this.newsList)
          this.defaultLang = this.locale
          this.defaultId = this.newsList[0].id
          console.log(this.defaultLang, this.defaultId)
          this.displayDefaultData(this.defaultLang, this.defaultId)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    displayDefaultData (lang, id) {
      const defaultDataUrl = this.APP_URL + `news_class_list.php?lang=${lang}&catid=${id}`
      console.log(defaultDataUrl)
    },
    changePage (pageid) {
      this.$router.push({ path: `/exhib/news/${pageid}` })
    }
  },
  mounted () {
    this.showNewsCate()
  }
}
</script>

<style lang="scss">
.list-group-item :visited {
  background-color: #355070;
}
</style>

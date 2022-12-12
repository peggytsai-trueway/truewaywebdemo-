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
          <a href="#" tabindex="-1" aria-disabled="true"
            class="fs-6 mb-0  fw-bold py-2 text-light list-group-item  list-group-item-action text-light disabled active"
            aria-current="true">{{ $t("ExhibView.News") }}</a>
          <button v-for="item in newsList" :key="item.id"
            class="list-group-item list-group-item-action fw-bold text-primary"
            @click="changePage(item.id)">{{ item.class_name }}</button>
        </div>
            </div>
            <div class="col-lg-10 col-md-9 col-12 py-3 py-md-0">
                <div class="border border-1"  v-for="item in newsContent" :key="item.id">
                    <div class="bg-success"><h2 class="fs-6 fw-bold px-3 py-3 text-white">{{item.news_title}}</h2></div>
                    <div class="p-3">
                        <p>{{item.news_desc}}</p>
                    </div>
                </div>
                <button class="btn btn-primary float-end mt-3 rounded-0" @click="goBack">Back to list</button>
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
      pageId: '',
      catId: '',
      newsContent: []
    }
  },
  components: {
    VueLoading
  },
  methods: {
    goBack () {
      this.$router.push('/exhib')
    },
    showNewsCate () {
      const url = this.APP_URL + `news_class.php?lang=${this.locale}`
      this.$http.get(url)
        .then((res) => {
          this.newsList = Object.values(res.data.result_data.data_list)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getData () {
      const url = this.APP_URL + `news_class_detailed.php?lang=${this.locale}&catid=${this.catId}&id=${this.pageId}`
      this.$http.get(url)
        .then((res) => {
          this.newsContent = Object.values(res.data.result_data.data_list)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changePage (pageid) {
      this.$router.push({ path: `/exhib/news/${pageid}` })
    }
  },
  mounted () {
    this.showNewsCate()
    this.pageId = this.$route.params.pageId
    this.catId = this.$route.params.catId
    this.getData()
  }
}
</script>

<style lang="scss">
.btn-primary {
  color: white;
}

.btn-primary:hover {
  color: rgba(0, 165, 224, 0.5);
  font-weight: 900;
  background-color: #FFF;
  border-color: #00A3E0;
}
</style>

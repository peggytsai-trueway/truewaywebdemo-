<template>
  <table class="table table-hover">
    <tbody>
      <tr v-for="item in news" :key="item.id" @click="goToPage(item.id, item.catid)">
        <td class="col-md-3 col-4"><img :src="item.img_name_ori"  @error="imgError(item)" alt="exhibition icon" class="img-fluid"></td>
        <td class="col-md-9 col-8">
          <h2 class="fs-6 fw-bold">{{ item.news_title }}</h2>
          <hr>
          <p>{{ item.news_desc }}</p>
        </td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center mt-7">
      <li class="page-item" v-show="this.totalPages > 1"><a class="page-link" href="#" @click.prevent="goPrePage(this.currentPage)">Prev</a></li>
      <li class="page-item" v-for="page in totalPages" :key="page+'page'" :class="{active: page === this.currentPage }" ><a class="page-link" href="#" @click.prevent="changePage(page)" >{{page}}</a></li>
      <li class="page-item" v-show="this.totalPages > 1"><a class="page-link" href="#" @click.prevent="goNextPage(this.currentPage)">Next</a></li>
    </ul>
  </nav>
</template>

<script>
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
      news: [],
      newsContent: [],
      newsId: '',
      totalPages: '',
      currentPage: 1
    }
  },
  watch: {
    newsId: 'getAllNews'
  },
  methods: {
    getAllNews () {
      const url = this.APP_URL + `news_class_list.php?lang=${this.locale}&catid=${this.newsId}`
      this.$http.get(url).then((res) => {
        this.news = Object.values(res.data.result_data.data_list)
        this.totalPages = res.data.total_page
      })
    },
    goToPage (pageid, catid) {
      this.$router.push(`/exhibcontent/${pageid}/${catid}`)
    },
    changePage (pageNum) {
      this.currentPage = pageNum
      const url = this.APP_URL + `news_class_list.php?lang=${this.locale}&catid=${this.newsId}&page=${this.currentPage}`
      this.$http.get(url)
        .then((res) => {
          this.news = Object.values(res.data.result_data.data_list)
        })
    },
    goPrePage (currentPage) {
      let preNum
      if (currentPage > 1) {
        preNum = currentPage - 1
        const url = this.APP_URL + `news_class_list.php?lang=${this.locale}&catid=${this.newsId}&page=${preNum}`
        this.$http.get(url)
          .then((res) => {
            this.news = Object.values(res.data.result_data.data_list)
            this.currentPage = preNum
          })
      }
    },
    goNextPage (currentPage) {
      let nextNum
      if (currentPage === this.totalPages) {
        return
      }
      if (currentPage < this.totalPages) {
        nextNum = this.currentPage + 1
        const url = this.APP_URL + `news_class_list.php?lang=${this.locale}&catid=${this.newsId}&page=${nextNum}`
        this.$http.get(url)
          .then((res) => {
            this.news = Object.values(res.data.result_data.data_list)
            this.currentPage = nextNum
          })
      }
    },
    imgError (item) {
      item.img_name_ori = require('@/assets/images/Frontend/Home/home-bg.jpg')
    }
  },
  mounted () {
    this.newsId = this.$route.params.newsId
    this.getAllNews()
  }
}
</script>

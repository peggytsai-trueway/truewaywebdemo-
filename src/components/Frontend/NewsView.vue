<template>
    <table class="table table-hover">
        <tbody>
            <tr v-for="item in news" :key="item.id">
                <td class="col-md-3 col-4"><img src="@/assets/images/Frontend/pday.png" alt="exhibition icon"
                        class="img-fluid"></td>
                <td class="col-md-9 col-8">
                    <h2 class="fs-6 fw-bold">{{item.news_title}}</h2>
                    <hr>
                    <p>{{item.news_desc}}</p>
                </td>
            </tr>
        </tbody>
    </table>
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
      newsId: ''
    }
  },
  watch: {
    newsId: 'getAllNews'
  },
  methods: {
    // 取得Exhibitions或Awards新聞
    getAllNews () {
      const url = this.APP_URL + `news_class_list.php?lang=${this.locale}&catid=${this.newsId}`
      this.$http.get(url).then((res) => {
        this.news = Object.values(res.data.result_data.data_list)
      })
    }
  },
  mounted () {
    // 把路由上的newsId存到data的newsId內
    this.newsId = this.$route.params.newsId
    this.getAllNews()
  }
}
</script>

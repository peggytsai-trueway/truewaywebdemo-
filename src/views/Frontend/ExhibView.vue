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
                    <router-link to="/exhibition/news" class="fs-6 mb-0  fw-bold py-2 text-light list-group-item  list-group-item-action text-light active"  aria-current="true" >{{ $t("ExhibView.News") }}</router-link>
                    <router-link class="list-group-item list-group-item-action  fw-bold  text-primary" to="/exhibition/exhibs">{{ $t("ExhibView.Exhibitions") }}</router-link>
                    <router-link class="list-group-item list-group-item-action  fw-bold  text-primary" to="/exhibition/awards">{{ $t("ExhibView.Awards") }}</router-link>
              </div>
          </div>
          <div class="col-lg-10 col-md-9 col-12 py-3 py-md-0">
              <router-view></router-view>
              <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center mt-7">
                      <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
              </nav>
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
      locale
    }
  },
  components: {
    VueLoading
  },
  methods: {
    showLang () {
      // const lang = i18n.locale
      // console.log(`http://www.trueway.com.tw/api/news_class.php?lang=${lang}`)
      // 點擊會帶入語系en或zh以判斷撈出新聞的語言

    }
  }
}
</script>

<style lang="scss">
.list-group-item :visited{
  background-color: #355070;
}
</style>

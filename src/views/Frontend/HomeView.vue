<template>
  <div class="home">
    <div class="container banner-hg">
      <div class="banner-bg bg-position-center bg-cover"></div>
    </div>
    <!-- marquee begin -->
    <HomeMarquee></HomeMarquee>
    <!-- marguee end -->
  </div>
  <!-- about begin -->
  <AboutModal></AboutModal>
  <!-- about end-->
  <section class="products-bg" id="product">
    <div class="container overflow-hidden">
      <div class="row py-6 gx-0">
        <div class="col-md-6">
          <div class="products-desc bg-cover">
            <h2 class="p-3 text-white fst-italic fw-bold">{{ $t("products.title") }}</h2>
          </div>
        </div>
        <div class="col-md-6 bg-secondary">
          <p class="p-4 text-white fw-bold"> {{ $t("products.desc-1") }} <br>{{ $t("products.desc-2") }}</p>
        </div>
        <div class="col-md-4 pt-4">
          <router-link to="/watersports" class="card mx-md-2 h-100 text-dark">
            <img src="@/assets/images/Frontend/Home/Products-3.jpg" class="card-img-top products-cardHeight"
              alt="products image for water sports">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ $t("products.producttype.watersports.title") }}</h5>
              <p class="card-text">{{ $t("products.producttype.watersports.desc") }}</p>
              <a href="#" class="btn btn-primary float-end">{{ $t("button.findoutmore") }}</a>
            </div>
          </router-link>
        </div>
        <div class="col-md-4 pt-4">
          <router-link to="/outdoorsports" class="card mx-md-2 h-100 text-dark">
            <img src="@/assets/images/Frontend/Home/Products-2.jpg" class="card-img-top products-cardHeight"
              alt="products image for outdoor sports">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ $t("products.producttype.outdoorsports.title") }}</h5>
              <p class="card-text">{{ $t("products.producttype.outdoorsports.desc") }}</p>
              <a href="#" class="btn btn-primary float-end">{{ $t("button.findoutmore") }}</a>
            </div>
          </router-link>
        </div>
        <div class="col-md-4 pt-4">
          <router-link to="/otherenduse" class="card mx-md-2 h-100 text-dark">
            <img src="@/assets/images/Frontend/Home/outdoor-nexttoskin.jpg" class="card-img-top products-cardHeight"
              alt="products image for other end use">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ $t("products.producttype.otherenduse.title") }}</h5>
              <p class="card-text">{{ $t("products.producttype.otherenduse.desc") }}</p>
              <a href="#" class="btn btn-primary float-end">{{ $t("button.findoutmore") }}</a>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- certification begin -->
  <HomeCert></HomeCert>
  <!-- certification end -->
  <section class="trend-bg bg-success">
    <div class="container">
      <div class="row py-6 py-md-9">
        <div class="offset-md-7 col-md-5">
          <h2 class=" shadow-lg bg-dark px-3 py-2 d-inline-block text-white fw-bold fst-italic">{{ $t("trend.title") }}</h2>
          <p class=" shadow-lg bg-dark px-3 py-2 text-white fw-bold">{{ $t("trend.desc") }}</p>
          <router-link to="/trend" class="btn btn-primary float-end">{{ $t("button.findoutmore") }}</router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="technology bg-secondary">
    <div class="container overflow-hidden">
      <div class="row align-items-end pt-3">
        <div class="col-md-6">
          <img src="@/assets/images/Frontend/Home/tech-bg.png" class="img-fluid" alt="technology image">
        </div>
        <div class="col-md-6">
          <div class="tech-bg">
            <h2 class="text-white fw-bold fst-italic">{{ $t("technology.title") }}</h2>
            <p class="text-white fw-bold">{{ $t("technology.desc") }}</p>
            <router-link to="/technology" class="btn btn-primary  float-end mb-3">{{ t("button.findoutmore") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-success">
    <div class="container overflow-hidden">
      <div class="row py-5 align-items-center">
        <div class="col-md-7 order-md-1 order-2">
          <h2 class="text-white fw-bold fst-italic">{{ $t("visitus.title") }}</h2>
          <p class="text-white fw-bold">{{ $t("visitus.desc") }} <br />
            {{ $t("visitus.desc-1") }}
            <br />{{ $t("visitus.desc-2") }}
          </p>
          <router-link to="/exhib" class="btn btn-primary float-end ">{{ $t("button.findoutmore") }}
          </router-link>
          <div class="text-white mt-9 ms-md-3 me-md-7 ms-0 shadow-lg bg-notification p-3">
            <h3 class="fs-6 fw-bold">Recent Exhibition:</h3>
            <ul>
              <li>
                <router-link  to="/exhib" class="text-white latest-update"><span>2022 ISPO (Munich)</span></router-link>
              </li>
              <li>
                <router-link to="/exhib" class="text-white latest-update"><span>2023 Performance Day (Functional Fabric Fair, Munich)</span></router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-5 order-md-2 order-1">
          <img class="img-fluid" src="@/assets/images/Frontend/Home/visit-1.png" alt="exhibition image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import AboutModal from '@/components/Frontend/AboutModal.vue'
import HomeMarquee from '@/components/Frontend/HomeMarquee.vue'
import HomeCert from '@/components/Frontend/HomeCert.vue'
export default {
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  },
  components: {
    AboutModal,
    HomeMarquee,
    HomeCert
  }
}
</script>

<style lang="scss">
.banner-hg {
  height: 75vh;
}

.banner-bg {
  background-image: url(@/assets/images/Frontend/Home/home-bg.jpg);
  max-width: 2017px;
  height: 100%;
  margin-top: 57.6px;
}

.products-bg {
  background-color: #355070;
  height: auto;
}

.products-desc {
  background-image: url(@/assets/images/Frontend/Home/product.jpg);
  height: 200px;
  background-repeat: no-repeat;
}

.products-cardHeight {
  max-height: 200px;
}

.btn-primary {
  color: white;
}

.btn-primary:hover {
  color: rgba(0, 165, 224, 0.5);
  font-weight: 900;
  background-color: #FFF;
  border-color: #00A3E0;
}

.card-body:hover {
  background-color: #0c0d0d;
  color: #fff;
  border-radius: 0  0 6px 6px;
}

.bg-notification{
  background-color:  rgba(69,173,173,.55);
}
.trend-bg{
  background-image: url(@/assets/images/Frontend/Home/trend-bg.jpg);
  height:450px;
  background-position: left bottom;
  background-size: cover;
}

.latest-update :hover{
  color:#355070;
  text-decoration: underline;
  font-weight: 900;
  background-color: #fff;
}
</style>

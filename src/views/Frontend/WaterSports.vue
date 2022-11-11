<template>
  <section class="watersports-bg bg-cover container-fluid">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-6">
          <div class="text-white fw-bold ">
            <h2 class="mb-3">For Water Sports</h2>
            <p class="mb-0">Trueway produces a wide range of fabrics for water sports, such as surfing, sailing, waterskiing,caving and swimming.</p>
              <p>Most of the fabrics are suitable to laminate with neoprene. Fabrics for water sports extend varied features and performance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
     <div class="row py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb  mb-5">
          <li class="breadcrumb-item"><router-link class="text-primary" to="/">Home</router-link></li>
          <li class="breadcrumb-item "><router-link class="text-primary" to="/">Products</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">For Water Sports</li>
        </ol>
      </nav>
      <div class="col-lg-4 col-6 mb-3">
        <div>
         <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
         <h3 class="fs-6 text-center py-1">ECO Qdry Fleece</h3>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">ECO Polyester Stretch</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
        <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
        <h3 class="fs-6 text-center py-1">ECO Nylon Stretch</h3>
      </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
        <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
        <h3 class="fs-6 text-center py-1">Qdry Fleece</h3>
      </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">ECO Polyester</h3>
        </div>
        </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">ECO Nylon</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">Finex</h3>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/polyester-stretch.jpeg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">Polyester Stretch</h3>
        </div>
        </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/nylon-stretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
           <h3 class="fs-6 text-center py-1">Nylon Stretch</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/qubicfic.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">Qubicfit & Functional</h3>
        </div>
        </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">Polyester</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/products-nylonstretch.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">Nylon</h3>
        </div>
       </div>
     </div>
    </div>
  </section>
  <VueLoading></VueLoading>
</template>

<script>
import { useI18n } from 'vue-i18n'
import VueLoading from '@/components/VueLoading.vue'
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
  }
}
</script>

<style lang="scss">
 .watersports-bg{
    background-image: url(@/assets/images/Frontend/city-of-gold-coast-yZDcQgD00fI-unsplash.jpg);
    height: 400px;
    width:100%;
    background-position: 40% center;
    filter: contrast(80%);
    h2, p{
        text-shadow: 2px 2px 5px #00A3E0;
        font-weight: 900;
    }
  }
</style>

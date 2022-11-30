<template>
  <section>
    <div class="container">
      <div class="row py-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb  mb-5">
            <li class="breadcrumb-item"><router-link class="text-primary" to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Trend</li>
          </ol>
        </nav>
        <div class="col-md-7">
          <h3 class="fs-5 fw-bold">2022 Functional Fabric Fair// Performance Days: The Journey to Carbon Neutrality</h3>
            <p>
              Some past topics recently included The Sustainable Future of Nylon, addressing a historically difficult polymer to recycle, Still Physical, addressing need to stay active despite our increasingly dependability on the Digital underscored by the Covid pandemic, and Closing the Loop, discussing the recyclability of apparel and the tools being used to achieve this……
            </p>
        </div>
        <div class="col-md-5">
          <div class="d-flex  flex-column">
            <img src="@/assets/images/Frontend/trend-1.png"  style="height:200px;"/>
            <a class=" btn btn-secondary  text-white mt-3" :href="`${publicPath}FFF_2022-The_Journey_to_Carbon_Neutrality.pdf`" download>
              Download the PDF
            </a>
          </div>
        </div>
        <div class="col-md-7 mt-5">
          <h3 class="fs-5 fw-bold">General Information. Textile Trends for Fall/Winter 2024/25
            </h3>
            <p>
              For designers and product managers, the search for new and innovative materials seems to be just as time consuming and elaborate as the proverbial search for the needle in a haystack. Simplifying this task, reducing the expenditure of time and yet improving the results – this is the aim of the presentation platform for performance textiles and components.
              <br>(Information from ISPO Textrends)
            </p>
        </div>
        <div class="col-md-5 mt-5">
          <div class="d-flex  flex-column">
            <img src="@/assets/images/Frontend/trend-2.png"  style="height:200px;"/>
            <a class=" btn btn-secondary  text-white mt-3" :href="`${publicPath}ispo-tt-fall-winter-24-25-digital-hd.pdf`" download >
              Download the PDF
            </a>
          </div>
        </div>
        </div>
      </div>
  </section>
  <VueLoading></VueLoading>
</template>

<script>
import VueLoading from '@/components/VueLoading.vue'
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    VueLoading
  }
}
</script>

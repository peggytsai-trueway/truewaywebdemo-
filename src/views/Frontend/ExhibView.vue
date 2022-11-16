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
              <ul class="list-group text-center">
                  <li class="list-group-item bg-primary bg-gradient text-light">
                      <h2 class="fs-6 mb-0  fw-bold py-1">NEWS</h2>
                  </li>
                  <li class="list-group-item"><a href="#">Exhibitions</a></li>
                  <li class="list-group-item"><a href="#">Awards</a></li>
              </ul>
          </div>
          <div class="col-lg-10 col-md-9 col-12 py-3 py-md-0">
              <table class="table table-hover">
                  <tbody>
                      <tr>
                          <td class="col-md-3 col-4"><img src="@/assets/images/Frontend/pday.png"
                                  alt="exhibition icon" class="img-fluid"></td>
                          <td class="col-md-9 col-8">
                              <h2 class="fs-6 fw-bold">2023 Performance Day (Functional Fabric Fair, Munich)</h2>
                              <hr>
                              <p>We would like to invite you to visit Trueway's booth in March Performance Days in
                                  Portland.
                                  Trueway's team will be showing Trueway's latest developments in focusing on
                                  structured knitting of
                                  Spring / Summer 25 and Autumn / Winter 25 collection.</p>
                          </td>
                      </tr>
                      <tr>
                          <td class="col-md-3 col-4"><img src="@/assets/images/Frontend/ispo.png" alt=""
                                  class="img-fluid">
                          </td>
                          <td class="col-md-9 col-8">
                              <h2 class="fs-6 fw-bold">2022 ISPO(Munich)</h2>
                              <hr>
                              <p>We would like to invite you to visit Trueway's booth on 28th - 30th November
                                  Performance Days in
                                  Portland. Trueway's team will be showing Trueway's latest developments in focusing
                                  on structured
                                  knitting of Spring/Summer24 and Autumn/Winter24 collection.</p>
                          </td>
                      </tr>
                      <tr>
                          <td class="col-3"><img src="@/assets/images/Frontend/pday.png" alt="exhibition icon"
                                  class="img-fluid"></td>
                          <td class="col-9">
                              <h2 class="fs-6 fw-bold">2022 Performance Day(Functional Fabric Fair, Portland)</h2>
                              <hr>
                              <p>We would like to invite you to visit Trueway's booth on 26th - 27th October
                                  Performanace Days
                                  in Portland. Trueway's team will be showing Trueway's latest developments in
                                  focusing on structured knitting of Spring/Summer 24 and Autumn/inter24 collection.
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td class="col-md-3 col-4"><img src="@/assets/images/Frontend/pday.png"
                                  alt="exhibition icon" class="img-fluid"></td>
                          <td class="col-md-9 col-8">
                              <h2 class="fs-6 fw-bold">2021 Performance Days- Digital Fair Week</h2>
                              <hr>
                              <p>We cordially invite you to visit us at the coming Performance days functional fabric
                                  fair in Munich.</p>
                          </td>
                      </tr>
                      <tr>
                          <td class="col-md-3 col-4"><img src="@/assets/images/Frontend/ispo.png"
                                  alt="exhibition icon" class="img-fluid"></td>
                          <td class="col-md-9 col-8">
                              <h2 class="fs-6 fw-bold">2019 ISPO</h2>
                              <hr>
                              <p>Dear Customer, We cordially invite you to visit us at the 2019 ISPO in Munich. You
                                  can find us at Hall C5 / Booth No.408. On Feb. 3rd- 6th, 2019,we will be featuring
                                  new collections for Winter 2019/20 + Summer 2020.</p>
                          </td>
                      </tr>
                  </tbody>
              </table>
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
export default {
  components: {
    VueLoading
  }
}
</script>

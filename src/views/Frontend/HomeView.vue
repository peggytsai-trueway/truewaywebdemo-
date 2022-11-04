<template>
  <div class="home">
    <div class="container banner-hg">
      <div class="banner-bg"></div>
    </div>
    <div class="marquee-bg bg-secondary">
      <div class="container text-white">
        <div>
          <p class="pt-2 mb-0 fw-bold">Latest Update</p>
          <ul>
            <li><router-link to="/exhibition" class="text-white"><span class="fw-bold">2022/09/30 </span>  2023 Performanace Day(Functional Fabric Fair, Munich)</router-link></li>
            <li><router-link to="/exhibition" class="text-white"><span class="fw-bold">2022/09/26</span>2022 ISPO(Munich)...</router-link></li>
            <li><router-link to="/" class="text-white"><span class="fw-bold">2022/09/21</span>2022 Functional Fabric Fair// Performance Days: The Journey to Carbon Neutrality</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section class="about-bg" id="about">
    <div class="container py-3" >
      <h2 class="text-center pt-7 mb-3"   >'From Fabric to Future'</h2>
      <div class="row justify-content-md-center flex-md-row flex-column">
        <div class="col mb-sm-3 text-center text-lg-end">
          <!-- Button trigger modal (Our Story)-->
          <button  type="button" class="btn btn-outline-light btn-primary mb-3 fw-bold "
            data-bs-toggle="modal" data-bs-target="#exampleModal">
             {{$t("about.buttons.ourstory")}}
            <svg class="ms-1 bi bi-arrow-up-right-circle" xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
            </svg>
          </button>
          <!-- Modal (Our Story)-->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header  bg-success text-white">
                  <h3 class="modal-title" id="exampleModalLabel">{{$t("about.modals.ourstory.title")}}</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start text-success">
                  <h4 class="fw-bold">{{$t("about.modals.ourstory.subtitle")}}</h4>
                  <p>
                    {{$t("about.modals.ourstory.p1")}}
                  </p>
                  <p>
                    {{$t("about.modals.ourstory.p2")}}
                  </p>
                  <p>
                    {{t("about.modals.ourstory.p3")}}
                  </p>
                  <p>
                    {{$t("about.modals.ourstory.p4")}}
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-sm-3 text-center">
          <!-- Button trigger modal (History)-->
          <button type="button" class="btn btn-outline-light btn-primary  mb-3 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            {{$t("about.buttons.history")}}<svg class="ms-1 bi bi-arrow-up-right-circle" xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
            </svg>
          </button>
          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header bg-success text-white">
                  <h3 class="modal-title" id="exampleModalLabel">{{$t("about.modals.history.title")}}</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body  text-start text-success">
                  <h4 class="fw-bold">{{$t("about.modals.history.subtitle")}}</h4>
                  <p>{{$t("about.modals.history.p1")}}</p>
                  <p>{{$t("about.modals.history.p2")}}</p>
                  <p>{{$t("about.modals.history.p3")}}</p>
                  <h4 class="fw-bold mt-6">{{$t("about.modals.history.subtitle2")}}</h4>
                   <ul>
                    <li>
                      <h5 class="fw-bold">2014</h5>
                      <p>{{$t("about.modals.history.timeline.2014")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2013</h5>
                      <p>{{$t("about.modals.history.timeline.2013")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2012</h5>
                      <p>{{$t("about.modals.history.timeline.2012")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2011</h5>
                      <p>{{$t("about.modals.history.timeline.2011")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2010</h5>
                      <p>{{$t("about.modals.history.timeline.2010")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2009</h5>
                      <p>{{$t("about.modals.history.timeline.2009")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2008</h5>
                      <p>{{$t("about.modals.history.timeline.2008")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2007</h5>
                      <p>{{$t("about.modals.history.timeline.2007")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2006</h5>
                      <p>{{$t("about.modals.history.timeline.2006")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2005</h5>
                      <p>{{$t("about.modals.history.timeline.2005")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2003</h5>
                      <p>{{$t("about.modals.history.timeline.2003")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">2001</h5>
                      <p>{{$t("about.modals.history.timeline.2001")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">1999</h5>
                      <p>{{$t("about.modals.history.timeline.1999")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">1992</h5>
                      <p>{{$t("about.modals.history.timeline.1992")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">1986</h5>
                      <p>{{$t("about.modals.history.timeline.1986")}}</p>
                    </li>
                    <li>
                      <h5 class="fw-bold">1980</h5>
                      <p>{{$t("about.modals.history.timeline.1980")}}</p>
                    </li>
                   </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col text-center text-lg-start text-success">
          <button type="button" class="btn btn-outline-light btn-primary mb-3 fw-bold"
            data-bs-toggle="modal" data-bs-target="#exampleModal2">
            {{$t("about.buttons.vision")}}<svg class="ms-1 bi bi-arrow-up-right-circle" xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
            </svg>
          </button>
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header bg-success text-white ">
                  <h3 class="modal-title" id="exampleModalLabe2">{{$t("about.modals.vision.title")}}</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                  <h4 class="fw-bold">From Fabric to Future</h4>
                  <p>{{$t("about.modals.vision.p1")}}</p>
                  <h4 class="fw-bold">{{ $t("about.modals.vision.subtitles.tech")}}</h4>
                  <p>{{ $t("about.modals.vision.p2")}}</p>
                  <h4 class="fw-bold">{{ $t("about.modals.vision.subtitles.client")}}</h4>
                  <p>{{ $t("about.modals.vision.p3")}}</p>
                  <h4 class="fw-bold">{{ $t("about.modals.vision.subtitles.eco")}}</h4>
                  <p>{{ $t("about.modals.vision.p4")}}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="products-bg" id="product">
    <div class="container overflow-hidden">
      <div class="row py-6 gx-0">
        <div class="col-md-6" >
          <div class="products-desc" >
            <h2 class="p-3 text-white">{{$t("products.title")}}</h2>
          </div>
        </div>
        <div class="col-md-6 bg-secondary">
          <p class="p-4 text-white fw-bold"> {{ $t("products.desc-1")}} <br>{{$t("products.desc-2")}}</p>
        </div>
        <div class="col-md-4 pt-4">
          <router-link to="/watersports" class="card mx-md-2 h-100 text-dark" >
            <img src="@/assets/images/Frontend/Products-3.jpg" class="card-img-top products-cardHeight"
              alt="products image for water sports">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ $t("products.producttype.watersports.title")}}</h5>
              <p class="card-text">{{ $t("products.producttype.watersports.desc")}}</p>
              <a href="#" class="btn btn-primary float-end">{{$t("button.findoutmore")}}</a>
            </div>
          </router-link>
        </div>
        <div class="col-md-4 pt-4">
          <router-link to="/outdoorsports" class="card mx-md-2 h-100 text-dark">
            <img src="@/assets/images/Frontend/Products-2.jpg" class="card-img-top products-cardHeight"
              alt="products image for outdoor sports" >
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ $t("products.producttype.outdoorsports.title")}}</h5>
              <p class="card-text">{{ $t("products.producttype.outdoorsports.desc")}}</p>
              <a href="#" class="btn btn-primary float-end">{{ $t("button.findoutmore")}}</a>
            </div>
          </router-link>
        </div>
        <div class="col-md-4 pt-4">
          <router-link to="/otherenduse" class="card mx-md-2 h-100 text-dark" >
            <img src="https://picsum.photos/200/300?random=1" class="card-img-top products-cardHeight"
              alt="products image for other end use">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ $t("products.producttype.otherenduse.title")}}</h5>
              <p class="card-text">{{ $t("products.producttype.otherenduse.desc")}}</p>
              <a href="#" class="btn btn-primary float-end">{{ $t("button.findoutmore")}}</a>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="certifications-bg" id="certifications">
    <div class="container overflow-hidden">
      <div class="row py-5 align-items-md-center">
        <div class="col-md-6">
          <div class="certification-desc">
            <div class="certification-txt text-white">
              <h2 class="fw-bold">{{ $t("certifications.title")}}</h2>
              <p class="fw-bold">{{ $t("certifications.desc")}}</p>
            </div>
            <img src="@/assets/images/Frontend/m2.png" class="img-fluid" alt="certifications image">
          </div>
        </div>
        <div class="col-md-6 pt-3 pt-md-0">
          <div class="row">
            <div class="col-4 mb-3">
              <div class="certification-card" >
                <img src="@/assets/images/Frontend/certification-1.png" alt="ISO 17025 image">
                <h3 class="text-center text-white pt-1">ISO 17025</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card" >
                <img src="@/assets/images/Frontend/certification-2.png" alt="ISO 17025 image"
                  style="background-color: white; background-size:cover;">
                <h3 class=" text-center text-white pt-1">GRS</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card" >
                <img src="@/assets/images/Frontend/certificaiton-3.jpg" alt="Bluesign Image">
                <h3 class=" text-center text-white pt-1">BLUESIGN</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card" >
                <img src="@/assets/images/Frontend/certifications-04.jpg" alt="ISO 9001 Image">
                <h3 class="text-center text-white pt-1">ISO 9001</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/certifications-05.jpg" alt="Carbon Footprint Image">
                <h3 class=" text-center text-white">CARBON FOOTPRINT</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/certificaitons-06.jpg" alt="EN471 STANDARD">
                <h3 class=" text-center text-white">EN471 STANDARD</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="certification-card" >
                <img src="@/assets/images/Frontend/certifications-07.png" alt="OEKO-TEX Standard Image">
                <h3 class=" text-center text-white">OEKO-TEX STANDARD 100</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <p class="text-white fw-bold mb-3">{{ $t("certifications.desc-1")}}</p>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex bg-success align-items-center" >
                <img src="@/assets/images/Frontend/certification-gas.jpg" style="max-width:500px; height:100px;"
                  alt="gas replaces petroleum image">
                <h3 class="fs-6 text-white ps-3">Advanced Eco-Friendly System: <br>Fuel: Gas replaces petroleum</h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex bg-success align-items-center mt-3 mt-md-0">
                <!-- 圖片要更換 目前用假圖 -->
                <img src="https://picsum.photos/300/400?random=2" style="max-width:500px; height:100px;"
                  alt="gas replaces petroleum image">
                <h3 class="fs-6 text-white ps-3">Planning Eco-Friendly System: <br>Sewage treatment system</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="trend-bg bg-success">
    <div class="container overflow-hidden">
      <div class="row py-3 align-items-md-center">
        <div class="col-md-7">
          <h2 class="text-white fw-bold fst-italic" >{{$t("trend.title")}}</h2>
          <p class="text-white fw-bold" >{{ $t("trend.desc")}}</p>
          <router-link to="/trend" class="btn btn-primary float-end">{{ $t("button.findoutmore")}}</router-link>
        </div>
        <div class="col-md-5">
          <img src="@/assets/images/Frontend/sergey-mikheev-EIniaP1qCRs-unsplash.jpg"
            class="img-fluid rounded-circle mt-3" alt="trend image" style="max-height:400px;">
        </div>
      </div>
    </div>
  </section>
  <section class="technology bg-secondary">
    <div class="container overflow-hidden">
      <div class="row align-items-end pt-3">
        <div class="col-md-6">
          <img src="@/assets/images/Frontend/tech-bg.png" class="img-fluid" alt="technology image">
        </div>
        <div class="col-md-6">
          <div class="tech-bg">
            <h2 class="text-white fw-bold fst-italic" >{{$t("technology.title")}}</h2>
            <p class="text-white fw-bold">{{$t("technology.desc")}}</p>
            <router-link to="/technology" class="btn btn-primary  float-end mb-3">{{t("button.findoutmore")}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-success">
    <div class="container overflow-hidden">
      <div class="row py-5 align-items-center">
        <div class="col-md-7 order-md-1 order-2">
          <h2 class="text-white fw-bold fst-italic">{{$t("visitus.title")}}</h2>
          <p class="text-white fw-bold" >{{$t("visitus.desc")}}
            <br/>{{ $t("visitus.desc-1")}}
          </p>
          <router-link to="/exhibition" class="btn btn-primary  float-end mb-3">{{ $t("button.findoutmore")}}
          </router-link>
        </div>
        <div class="col-md-5 order-md-2 order-1">
          <img class="img-fluid" src="@/assets/images/Frontend/visit-1.png" alt="exhibition image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  }
}
</script>

<style lang="scss">
.banner-hg {
  height: 75vh;
}

.banner-bg {
  background-image: url(@/assets/images/Frontend/home-bg.jpg);
  background-position: center;
  background-size: cover;
  max-width: 2017px;
  height: 100%;
  margin-top: 57.6px;
}

.marquee-bg {
  height: calc(100vh - 75vh - 57.6px);
}

.about {
  &-bg {
    background-image: url(@/assets/images/Frontend/About-us.jpg);
    height: 450px;
    background-position: center;
    background-size: cover;
    h2 {
      color: white;//rgba(0, 165, 224, 0.5);
      font-size: 30px;
      font-style: italic;
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 48px;
       }
    }
  }
}

.products-bg {
  background-color: #355070;
  height: auto;
}

.products-desc {
  background-image: url(@/assets/images/Frontend/product.jpg);
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    font-style: italic;
    font-weight: bold;
  }
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
}

.certifications-bg {
  background-color: #45ADAD;
  height: auto;

  h2 {
    font-weight: bold;
    font-style: italic;
  }
}

.certification-card {
  height: auto;
  background-color: #355070;
  width: 100%;

  img {
    height: 65px;
    width: 100%;
  }

  h3 {
    font-size: 14px;
  }
}

</style>

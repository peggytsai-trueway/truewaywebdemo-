<template>
  <section class="about-bg bg-position-center bg-cover" id="about">
    <div class="container py-3" >
      <h2 class="text-center pt-7 mb-3 fst-italic fw-bold text-light" >'From Fabric to Future'</h2>
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
                    {{$t("about.modals.ourstory.p3")}}
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
</template>

<style lang="scss">
.about {
  &-bg {
    background-image: url(@/assets/images/Frontend/About-us.jpg);
    height: 450px;
    h2 {
      font-size: 30px;
      @media (min-width: 768px) {
        font-size: 48px;
       }
    }
  }
}
</style>

<template>
  <section>
    <div class="container">
      <div class="row py-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-primary">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Exhibition</li>
          </ol>
        </nav>
        <div class="col-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Exhibition</a>
            </li>
            <li class="nav-item">
              <a class="nav-link border border-1 " href="#">Award</a>
            </li>
          </ul>
          <table class="table table-light table-striped">
            <tbody>
              <tr>
                <td width="150"><img src="@/assets/images/Frontend/pday.png" alt="exhibition icon" class="img-fluid"></td>
                <td>
                  <h2 class="fs-6 fw-bold">2023 Performance Day (Functional Fabric Fair, Munich)</h2>
                  <p>We would like to invite you to visit Trueway's booth in March Performance Days in Portland.
                    Trueway's team will be showing Trueway's latest developments in focusing on structured knitting of
                    Spring / Summer 25 and Autumn / Winter 25 collection.</p>
                </td>
              </tr>
              <tr>
                <td max-width="150"><img src="@/assets/images/Frontend/ispo.png" alt="" class="img-fluid"></td>
                <td>
                  <h2 class="fs-6 fw-bold">2022 ISPO(Munich)</h2>
                  <p>We would like to invite you to visit Trueway's booth on 28th - 30th November Performance Days in
                    Portland. Trueway's team will be showing Trueway's latest developments in focusing on structured
                    knitting of Spring/Summer24 and Autumn/Winter24 collection.</p>
                </td>
              </tr>
              <tr>
                <td width="150"><img src="@/assets/images/Frontend/pday.png" alt="exhibition icon" class="img-fluid"></td>
                <td>
                  <h2 class="fs-6 fw-bold">2021 Performance Days- Digital Fair Week</h2>
                  <p>We cordially invite you to visit us at the coming Performance days functional fabric fair in
                    Munich.</p>
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
  </section>
</template>

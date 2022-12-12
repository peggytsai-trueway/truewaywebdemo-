<template>
  <section class="certifications-bg" id="certifications">
    <div class="container overflow-hidden">
      <div class="row py-5 align-items-md-center">
        <div class="col-md-6">
          <div class="certification-desc">
            <div class="certification-txt text-white">
              <h2 class="fw-bold fst-italic fw-bold">{{ $t("certifications.title") }}</h2>
              <p class="fw-bold">{{ $t("certifications.desc") }}</p>
            </div>
            <img src="@/assets/images/Frontend/Home/m2.png" class="img-fluid" alt="certifications image">
          </div>
        </div>
        <div class="col-md-6 pt-3 pt-md-0">
          <div class="row">
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certification-1.png" alt="ISO 17025 image">
                <h3 class="text-center text-white py-1">ISO 17025</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certification-2.png" alt="ISO 17025 image"
                  style="background-color: white; background-size:cover;">
                <h3 class=" text-center text-white py-1">GRS</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certificaiton-3.jpg" alt="Bluesign Image">
                <h3 class=" text-center text-white py-1">BLUESIGN</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certifications-04.jpg" alt="ISO 9001 Image">
                <h3 class="text-center text-white py-1">ISO 9001</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certifications-05.jpg" alt="Carbon Footprint Image">
                <h3 class=" text-center text-white py-1">CARBON FOOTPRINT</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certificaitons-06.jpg" alt="EN471 STANDARD">
                <h3 class=" text-center text-white py-1">EN471 STANDARD</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certification-7.png" alt="OEKO-TEX Standard Image">
                <h3 class=" text-center text-white py-1">OEKO-TEX <br />STANDARD 100</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certification-8.png" alt="OEKO-TEX RECYCLED Standard Image">
                <h3 class=" text-center text-white py-1">OEKO-TEX <br/>RECYCLED<br>STANDARD 100</h3>
              </div>
            </div>
            <div class="col-4 mb-3">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certification-9.png" alt="HIGG COMPLETION OF SELF-ASSESSMENT Image">
                <h3 class=" text-center text-white py-1">HIGG <br/>COMPLETION OF<br>SELF-ASSESSMENT</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="certification-card">
                <img src="@/assets/images/Frontend/Home/certification-10.png" alt="ZDHC Image">
                <h3 class=" text-center text-white py-1">ZDHC</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <p class="text-white fw-bold mb-3">{{ $t("certifications.desc-1") }}</p>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex bg-success align-items-center">
                <div class="w-25">
                  <img src="@/assets/images/Frontend/Home/certification-gas.jpg" alt="gas replaces petroleum image"
                    style="width:100%; height:100px;">
                </div>
                <h3 class="fs-6 text-white ps-3">Advanced Eco-Friendly System: <br>Fuel: Gas replaces petroleum</h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex bg-success align-items-center mt-3 mt-md-0">
                <div class="w-25">
                  <img src="@/assets/images/Frontend/Home/sewage-pic.jpg"
                    alt="gas replaces petroleum image" style="width:100%; height:100px;">
                </div>
                <h3 class="fs-6 text-white ps-3">Planning Eco-Friendly System: <br>Sewage treatment system</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.certifications-bg {
  background-color: #45ADAD;
  height: auto;
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
    font-size: 16px;
  }
}
</style>

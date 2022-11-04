<template>
    <section class="outdoorsports-bg container-fluid">
        <div class="container">
            <div class="row py-5">
                <div class="col-md-6">
                    <div class="text-white fw-bold">
                        <h2 class="mb-3 ">For Outdoor Sports</h2>
                        <p class="mb-0">Trueway believe that only the vast and eternal nature is the driving force for
                            innovation in fabrics. </p>
                        <p>We insist that our product manufacturing process must comply with the norms of ecological
                            protection, it can be in the field of outdoor sports and nature, more close.
                        </p>
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
          <li class="breadcrumb-item"><router-link class="text-primary" to="/">Products</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">For Outdoor Sports</li>
        </ol>
      </nav>
      <div class="col-lg-4 col-6 mb-3">
        <div>
         <img src="@/assets/images/Frontend/outdoor-nexttoskin.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
         <h3 class="fs-6 text-center py-2 mb-0 ">ECO Next to Skin</h3>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/outdoor-nexttoskin.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-2 mb-0 ">ECO Midlayer</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
        <img src="@/assets/images/Frontend/outdoor-nexttoskin.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
        <h3 class="fs-6 text-center py-2 mb-0 ">ECO Softshell</h3>
      </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
        <img src="@/assets/images/Frontend/nexttoskin.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
        <h3 class="fs-6 text-center py-2 mb-0 ">Next to Skin</h3>
      </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/Midlayer.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-2 mb-0 ">Midlayer</h3>
        </div>
        </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/softshell.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-2 mb-0 ">Softshell</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/truewayfit.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-2 mb-0 ">Trueway Fit</h3>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div >
          <img src="@/assets/images/Frontend/fabric-lamination.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-2 mb-0 ">Fabric for Lamination</h3>
        </div>
        </div>
     </div>
    </div>
  </section>
</template>

<style lang="scss">
  .outdoorsports-bg{
    background-image: url(@/assets/images/Frontend/outdoor-bg.jpg);
    height: 400px;
    width:100%;
    background-position: 40% center;
    background-size: cover;
    filter: contrast(80%);
    h2, p{
        text-shadow: 3px 3px 5px  #00A3E0;;
        font-weight: 900;
    }
  }
</style>

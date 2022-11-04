<template>
  <section class="otherenduse-bg container-fluid">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-6">
          <div class="text-white fw-bold ">
            <h2 class="mb-3">Other End Use</h2>
            <p class="mb-0">Besides water and outdoor sports fabrics ,the knitted fabrics we elaborately developed can also be used for shoe lining ,shock- absorbing pad of bags , knee and elbow supports …and many other uses. Custom development is our strength, feel free to tell us your needs!</p>
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
          <li class="breadcrumb-item active" aria-current="page">Other End Use</li>
        </ol>
      </nav>
      <div class="col-lg-4 col-6 mb-3">
        <div>
         <img src="@/assets/images/Frontend/snowbg.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
         <h3 class="fs-6 text-center py-1">NEXT TO SKIN</h3>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
          <img src="@/assets/images/Frontend/snowbg.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
          <h3 class="fs-6 text-center py-1">CUBIC FABRIC</h3>
        </div>
       </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
        <img src="@/assets/images/Frontend/snowbg.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
        <h3 class="fs-6 text-center py-1">PLUSH/TERRY</h3>
      </div>
      </div>
      <div class="col-lg-4 col-6 mb-3">
        <div>
        <img src="@/assets/images/Frontend/snowbg.jpg"  class="img-fluid rounded" alt="ECO Nylon Stretch">
        <h3 class="fs-6 text-center py-1">STRETCH</h3>
      </div>
      </div>
     </div>
    </div>
  </section>
</template>

<style lang="scss">
 .otherenduse-bg{
    background-image: url(@/assets/images/Frontend/david-marcu-VfUN94cUy4o-unsplash.jpg);
    height: 400px;
    width:100%;
    background-position:  bottom;
    background-size: cover;
    filter: contrast(80%);
    h2, p{
        text-shadow: 2px 2px 5px #00A3E0;
        font-weight: 900;
    }
  }
</style>

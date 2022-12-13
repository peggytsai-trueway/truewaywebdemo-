<template>
  <section class="otherenduse-bg bg-cover container-fluid">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-6">
          <div class="text-white fw-bold">
            <h2 class="mb-3">Other End Use</h2>
            <p class="mb-0">Besides water and outdoor sports fabrics ,the knitted fabrics we elaborately developed can also be used for shoe lining ,shock- absorbing pad of bags , knee and elbow supports …and many other uses. Custom development is our strength, feel free to tell us your needs!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-otherend">
    <div class="container">
     <div class="row py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-5">
          <li class="breadcrumb-item"><router-link class="text-primary" to="/">Home</router-link></li>
          <li class="breadcrumb-item "><router-link class="text-primary" to="/">Products</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Other End Use</li>
        </ol>
      </nav>
      <div class=" row py-4 rounded bg-otherproduct align-items-stretch">
                    <div class="col-12 col-md-4 mb-3 mb-md-0">
                        <div class="pic-effect">
                            <img src="@/assets/images/Frontend/Products/OtherEndUse/Products-other-end-use.jpg" class="w-100 h-100" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-1 mb-md-0">
                        <button type="button" class="btn border-0 btn-title px-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            <h2 class="text-center fs-4 fw-bold">Medi/Sport Protective Gear</h2>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-centered">
                                <div class="modal-content ">
                                    <div class="modal-header text-dark">
                                        <h3 class="modal-title fs-5" id="staticBackdropLabelA">Medi/Sport Protective Gear</h3>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-light">
                                        <h4 class="fs-5">Features</h4>
                                        <p>Keep warm, quick dry or flash dry with good elongation and soft hand feel.
                                            Jacquard and function
                                            yarn are available. e.g. logo, concept image, graphene yarn, Oceanya, etc.
                                        </p>
                                        <hr>
                                        <h4 class="fs-5">Application</h4>
                                        <p>diving suits, surfing suits, athletic appliances, medical supports.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-2 mb-md-0">
                        <button type="button" class="btn btn-title border-0  px-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            <h2 class="text-center fs-4 fw-bold ">Cart/Medi Cover</h2>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-centered">
                                <div class="modal-content modal-bg">
                                    <div class="modal-header text-light">
                                        <h3 class="modal-title fs-5" id="staticBackdropLabelA">Cart/Medi Cover</h3>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-light">
                                        <h4 class="fs-5">Features</h4>
                                        <p>Keep warm, quick dry or flash dry with good elongation and soft hand feel.
                                            Jacquard and function
                                            yarn are available. e.g. logo, concept image, graphene yarn, Oceanya, etc.
                                        </p>
                                        <hr>
                                        <h4 class="fs-5">Application</h4>
                                        <p>diving suits, surfing suits, athletic appliances, medical supports.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
  components: {
    VueLoading
  }
}
</script>

<style lang="scss">
 .otherenduse-bg{
    background-color: gray;
    height: 400px;
    width:100%;
    background-position:center;
    h2, p{
        text-shadow: 2px 2px 5px #00A3E0;
        font-weight: 900;
    }
  }
  .bg-otherend{
    background-color: #96939a4b;
  }

  .bg-otherproduct{
    background-color: #45adad49;
  }

.pic-effect {
    max-height: 200px;
    overflow: hidden;
    border-radius: 6px;
}

@media screen and (max-width: 992px) {
    .pic-effect {
        height: 175px;
    }
}

@media screen and (max-width: 767px) {
    .pic-effect {
        height: auto;
    }
}

.pic-effect img {
    transform: scale(1, 1);
    transition: all 1s ease-out;
}

.pic-effect img:hover {
    transform: scale(1.2, 1.2);
}

.pic-effect img:focus {
    transform: scale(1.2, 1.2);
}

 .btn-title {
    background-color: #49607d8b;
    color: rgba(255, 255, 255, .85);
}

.btn-title:hover {
    background-color: rgba(20, 21, 21, 0.377);
    color: rgba(0, 0, 0, .85);
    h2{
        background-color: transparent;
    }
}
</style>

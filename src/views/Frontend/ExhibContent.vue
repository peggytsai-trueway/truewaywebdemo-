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
                    <li class="list-group-item bg-success"><a href="#" class="text-white text-decoration-underline">Exhibitions</a></li>
                    <li class="list-group-item"><a href="#">Awards</a></li>
                </ul>
            </div>
            <div class="col-lg-10 col-md-9 col-12 py-3 py-md-0">
                <div class="border border-1">
                    <div class="bg-success"><h2 class="fs-6 fw-bold px-3 py-3 text-white">2023 Performance Day (Functional Fabric Fair, Munich)</h2></div>
                    <div class="p-3">
                        <p>We would like to invite you to visit Trueway's booth in March Performance Days in
                                    Portland.
                                    Trueway's team will be showing Trueway's latest developments in focusing on
                                    structured knitting of
                                    Spring / Summer 25 and Autumn / Winter 25 collection.</p>
                    </div>
                </div>
                <button class="btn btn-primary float-end mt-3 rounded-0">Back to list</button>
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

<style lang="scss">
.btn-primary {
  color: white;
}

.btn-primary:hover {
  color: rgba(0, 165, 224, 0.5);
  font-weight: 900;
  background-color: #FFF;
  border-color: #00A3E0;
}
</style>

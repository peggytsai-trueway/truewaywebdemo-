<template>
  <!-- content begin -->
  <section>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb pt-5 mb-5">
          <li class="breadcrumb-item">
            <router-link class="text-primary" to="/">{{ $t("nav.home") }}</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t("nav.tech") }}</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-4 col-12 mb-5">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="315"
              src="https://www.youtube.com/embed/rZ_KatO4sJg?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/rZ_KatO4sJg?autoplay=1>
              <img src=https://img.youtube.com/vi/rZ_KatO4sJg/hqdefault.jpg alt='Waterproof Breathable Fabric 防水透濕布料 '><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Waterproof Breathable Fabric 防水透濕布料 "></iframe>
          </div>
          <button @click="isOpenA=!isOpenA" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenA }">
            <div class="d-flex justify-content-between"><p class="mb-0 fw-bold">{{ $t("TechView.waterproof_breathable.title") }}</p> <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i></div>
          </button>
          <Transition>
            <div v-if="isOpenA" class="bg-secondary text-white p-3 rounded-bottom">
            <p  class="fw-bold">{{ $t("TechView.waterproof_breathable.desc") }}</p>
          </div>
          </Transition>
        </div>
        <div class=" col-md-4 col-12 mb-5">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="315"
              src="https://www.youtube.com/embed/zzfLdR6ZFGc?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/zzfLdR6ZFGc?autoplay=1>
              <img src=https://img.youtube.com/vi/zzfLdR6ZFGc/hqdefault.jpg alt='Water Repellency treatment 防潑水加工'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Water Repellency treatment 防潑水加工"></iframe>
          </div>
          <button @click="isOpenB = !isOpenB" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenB }">
            <div class="d-flex justify-content-between"><p class="mb-0 fw-bold">{{ $t("TechView.water_repellency.title") }}</p> <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i></div>
          </button>
          <Transition>
            <div v-show="isOpenB" class="bg-secondary text-white p-3 rounded-bottom">
            <p  class="fw-bold">
              {{ $t("TechView.water_repellency.desc") }}
            </p>
          </div>
          </Transition>
        </div>
        <div class=" col-md-4 col-12 mb-5">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/sQLJnxsjIWU?autoplay=1"
            srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/sQLJnxsjIWU?autoplay=1>
              <img src=https://img.youtube.com/vi/sQLJnxsjIWU/hqdefault.jpg alt='Sun Protection 抗紫外線機能 '><span>▶</span></a>" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            title="Sun Protection 抗紫外線機能"></iframe>
          <button @click="isOpenC = !isOpenC" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenC }">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.sun_protection.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
          <div v-show="isOpenC" class="bg-secondary text-white p-3 rounded-bottom">
            <p  class="fw-bold">
              {{ $t("TechView.sun_protection.desc") }}
            </p>
          </div>
          </Transition>
        </div>
        <div class=" col-md-4 col-12 mb-5">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/DRF7vzjS85g?autoplay=1"
            srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/DRF7vzjS85g?autoplay=1>
              <img src=https://img.youtube.com/vi/DRF7vzjS85g/hqdefault.jpg alt='Antibacterial Finish 抗菌處理'><span>▶</span></a>" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            title="Antibacterial Finish 抗菌處理"></iframe>
          <button @click="isOpenD = !isOpenD" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenD }">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.antibacterial.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
          <div v-show="isOpenD" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">
              {{ $t("TechView.antibacterial.desc") }}
            </p>
          </div>
          </Transition>
        </div>
        <div class="col-md-4 col-12 mb-5">
            <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/gR9MTDiX5xs?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/gR9MTDiX5xs?autoplay=1>
              <img src=https://img.youtube.com/vi/gR9MTDiX5xs/hqdefault.jpg alt='Chlorine-Resistant treatment 耐氯處理'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Chlorine-Resistant treatment 耐氯處理"></iframe>
              <button @click="isOpenE = !isOpenE" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenE }">
             <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.chlorine_resistant.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
          <div v-show="isOpenE" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">
              {{ $t("TechView.chlorine_resistant.desc") }}
            </p>
          </div>
          </Transition>
        </div>
        <div class="col-md-4 col-12 mb-5">
            <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/ddvQmdMdEmE?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/ddvQmdMdEmE?autoplay=1>
              <img src=https://img.youtube.com/vi/ddvQmdMdEmE/hqdefault.jpg alt='Anti-Static treatment 抗靜電處理'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Anti-Static treatment 抗靜電處理"></iframe>
              <button @click="isOpenF = !isOpenF" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenF }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.anti_static.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
            <div v-show="isOpenF" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{ $t("TechView.anti_static.desc") }}</p>
          </div>
          </Transition>
        </div>
        <div class="col-md-4 col-12 mb-5">
            <iframe  width="100%" height="315"
              src="https://www.youtube.com/embed/dnodIbMul3M?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/dnodIbMul3M?autoplay=1>
              <img src=https://img.youtube.com/vi/dnodIbMul3M/hqdefault.jpg alt='Anti-Odor Fabric 消臭布料'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Anti-Odor Fabric 消臭布料"></iframe>
              <button @click="isOpenG = !isOpenG" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenG }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.anti_odor.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
          <div v-show="isOpenG" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{ $t("TechView.anti_odor.desc") }}</p>
          </div>
          </Transition>
        </div>
        <div class=" col-md-4 col-12 mb-5">
            <iframe  width="100%" height="315"
              src="https://www.youtube.com/embed/cwt-egajp70?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/cwt-egajp70?autoplay=1>
              <img src=https://img.youtube.com/vi/cwt-egajp70/hqdefault.jpg alt='Fleece Finish 磨刷毛處理'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Fleece Finish 磨刷毛處理"></iframe>
              <button @click="isOpenH = !isOpenH" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenH }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.fleece_finish.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
            <div v-show="isOpenH" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{ $t("TechView.fleece_finish.desc") }}</p>
          </div>
          </Transition>
        </div>
        <div class=" col-md-4 col-12 mb-5">
            <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/iOu5BP53iSw?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/iOu5BP53iSw?autoplay=1>
              <img src=https://img.youtube.com/vi/iOu5BP53iSw/hqdefault.jpg alt='Cooling Effect ” finish 涼感加工'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Cooling Effect ” finish 涼感加工"></iframe>
              <button @click="isOpenI = !isOpenI" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenI }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.cooling_effect.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
            <div v-show="isOpenI" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{ $t("TechView.cooling_effect.desc") }}</p>
          </div>
          </Transition>
        </div>
        <div class=" col-md-4 col-12 mb-5">
            <iframe  width="100%" height="315"
              src="https://www.youtube.com/embed/3E7jE16K6L8?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/3E7jE16K6L8?autoplay=1>
              <img src=https://img.youtube.com/vi/3E7jE16K6L8/hqdefault.jpg alt='Flame Retardant Fabric 難燃布料'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Flame Retardant Fabric 難燃布料"></iframe>
              <button @click="isOpenJ = !isOpenJ" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenJ }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.flame_retardant.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
            <div v-show="isOpenJ" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{ $t("TechView.flame_retardant.desc") }}</p>
          </div>
          </Transition>
        </div>
        <div class="col-md-4 col-12 mb-5">
            <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/2pHO-7jj7DU?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/2pHO-7jj7DU?autoplay=1>
              <img src=https://img.youtube.com/vi/2pHO-7jj7DU/hqdefault.jpg alt='True-Ti by Trueway 液化鈦紗'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="True-Ti by Trueway 液化鈦紗"></iframe>
              <button @click="isOpenK = !isOpenK" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenK }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.true_ti.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
            </div>
          </button>
          <Transition>
            <div v-show="isOpenK" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{$t("TechView.true_ti.desc")}}</p>
          </div>
          </Transition>
        </div>
        <div class="col-md-4 col-12 mb-5">
            <iframe  width="100%" height="315"
              src="https://www.youtube.com/embed/zx_HQpnP2gg?autoplay=1"
              srcdoc="<style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
              </style>
              <a href=https://www.youtube.com/embed/zx_HQpnP2gg?autoplay=1>
              <img src=https://img.youtube.com/vi/zx_HQpnP2gg/hqdefault.jpg alt='Moisture Wicking Finish 排汗快乾加工'><span>▶</span></a>" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              title="Moisture Wicking Finish 排汗快乾加工"></iframe>
              <button @click="isOpenL = !isOpenL" class="border-0 w-100 btn btn-success text-white py-3 px-4" :class="{'roundedTop': isOpenL }">
              <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ $t("TechView.moisture_wicking.title") }}</p>
              <i class="ms-3 bi bi-caret-down fs-5 align-middle"></i>
              </div>
          </button>
          <Transition>
            <div v-show="isOpenL" class="bg-secondary text-white p-3 rounded-bottom">
            <p class="fw-bold">{{ $t("TechView.moisture_wicking.desc") }}</p>
          </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
  <!-- content end -->
  <VueLoading></VueLoading>
</template>

<script>
import { useI18n } from 'vue-i18n'
import VueLoading from '@/components/VueLoading.vue'
export default {
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  },
  data () {
    return {
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
      isOpenD: false,
      isOpenE: false,
      isOpenF: false,
      isOpenG: false,
      isOpenH: false,
      isOpenI: false,
      isOpenJ: false,
      isOpenK: false,
      isOpenL: false
    }
  },
  components: {
    VueLoading
  }
}
</script>

<style lang="scss">
.roundedTop{
  border-radius: 6px 6px 0px 0px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

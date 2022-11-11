<template>
     <div class="marquee-bg bg-secondary overflow-auto">
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
</template>

<style lang="scss">
.marquee-bg {
  height: calc(100vh - 75vh - 57.6px);
}
@media screen and (max-width: 996px){
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #355070;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #00A3E0;
  border-radius: 5px;
}
}
</style>

<template>
     <div class="marquee-bg bg-secondary overflow-auto">
      <div class="container text-white">
        <div class="row flex-column py-3 py-md-0">
          <p class="pt-2 mb-0 fw-bolder fs-6">Latest Update</p>
          <ul>
            <li><router-link to="/exhib" class="text-white latest-update"><span>2023 Performanace Day(Functional Fabric Fair, Munich)</span></router-link></li>
            <li><router-link to="/trend" class="text-white latest-update"><span>General Information. Textile Trends for Fall/Winter 2024/25</span></router-link></li>
            <li><router-link to="/trend" class="text-white latest-update"><span>2022 Functional Fabric Fair// Performance Days: The Journey to Carbon Neutrality</span></router-link></li>
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
.latest-update :hover{
  color:#355070;
  text-decoration: underline;
  font-weight: 900;
  background-color: #fff;
}
</style>

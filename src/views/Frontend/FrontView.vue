<template>
  <div class="fixed-margin">
    <FrontNavbar></FrontNavbar>
    <router-view></router-view>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from '@/components/Frontend/FrontNavbar.vue'
import FrontFooter from '@/components/Frontend/FrontFooter.vue'
export default {
  components: {
    FrontNavbar,
    FrontFooter
  }
}
</script>

<style lang="scss">
.fixed-margin{
  margin-top: 57.6px;
}
</style>

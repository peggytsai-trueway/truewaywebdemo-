<template>
    <FrontNavbar></FrontNavbar>
    <router-view></router-view>
    <FrontFooter></FrontFooter>
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

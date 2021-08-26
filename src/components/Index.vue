<template>
  <div>
    <Header/>
    <NavMenu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './index/Header.vue'
import NavMenu from './index/NavMenu.vue'
import Footer from "./index/Footer";

export default {
  components: {Footer, Header,NavMenu },
  name: "Index",
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
</style>

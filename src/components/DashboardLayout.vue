<template>
    <!-- This is Dashboard -->
  <Header />
  <Slider></Slider>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Slider from "./Slider.vue";


</script>

<style></style>

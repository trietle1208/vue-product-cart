<template>
    <!-- This is Dashboard -->
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "dashboard",
  components: {
    Header,
  },
};
</script>

<style></style>

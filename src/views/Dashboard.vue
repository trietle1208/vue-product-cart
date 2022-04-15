<template>
  <div class="container">
    <!-- <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
          <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">
              your visitors deserve to see
            </div>
            <p class="mt-0 mb-4 text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
          </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
          <img
            src="https://s3.amazonaws.com/fullstackfeed/images/vuejs-4.jpg"
            alt="Image"
            class="md:ml-auto block md:h-full"
            style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
          />
        </div>
    </div> -->
    <hr />
    <div class="row">
      <ProductCart v-for="(product, index) in products" :key="index" :product="product" />
    </div>
    <ProgressSpinner v-if="isLoading" style="width:30px;height:30px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
  </div>
</template>

<script setup> 
import { useI18n } from "vue-i18n";
import ProductCart from "./carts/ProductCart.vue";
import Header from "../components/Header.vue";

import { useStore } from "vuex"
import { computed } from "vue"

const store = useStore()
const {t} = useI18n()
store.dispatch('getProducts')

const products = computed(() => store.state.products)
const isLoading = computed(() => store.state.isLoading)
</script>

<style></style>

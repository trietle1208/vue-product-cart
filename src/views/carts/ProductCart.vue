<template>
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <Card>
      <template #header>
        <img :src="product.image" alt="smartphone image" />
      </template>
      <template #title>
        {{ product.name }}
      </template>
      <template #content>
        <div class="content--decs">{{ product.description }}</div>
        <br />
        <div class="content--price">${{ product.price }}</div>
        <Rating v-model="val" :cancel="false" :readonly="true" />
      </template>
      <template #footer>
        <router-link :to="{name: 'product.detail', params: { id: product.id } }">
          <Button icon="pi pi-eye" label="Detail" class="btn-detail" />
        </router-link>
        <Button
          icon="pi pi-shopping-cart"
          class="btn-add-cart"
          label="Add to cart"
          @click="addCart()"
        />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Swal from 'sweetalert2/dist/sweetalert2.js';
const { product } = defineProps({
  product: Object,
});
const val = 2;
const store = useStore();
function addCart() {
  store.dispatch("addToCart", { cartItem: product, qty: 1 }).then(() => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add to cart success',
      showConfirmButton: false,
      timer: 1500
    })
  });
}
</script>

<style scoped>
.p-card {
  margin-bottom: 12px;
  height: 640px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.p-card-header img {
  margin-top: 12px;
  padding: 12px;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 60%;
  height: 200px;
  object-fit: cover;
  text-align: center;
  position: relative;
}

.p-card-header img:hover {
  /* position: relative; */
  width: 80%;
  padding: 4px;
  height: 220px;
  transition: 0.5s ease;
}

.p-card-title {
  text-align: center;
  color: crimson;
}

.p-card-title:hover {
  color: rgb(250, 213, 52);
  cursor: pointer;
  transition: 0.5s ease;
  /* text-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  text-shadow: 2px 2px 4px #969292;
}

.content--price {
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  color: #445dde;
}

.content--decs {
  font-weight: 500;
  overflow: auto;
  text-align: left;
  height: 150px;
  color: rgb(211, 208, 208);
  cursor: pointer;
}

.p-rating {
  text-align: center;
  margin-top: 8px;
}

.pi-star-fill {
  color: rgb(251, 251, 73) !important;
}

.btn-detail {
  margin-right: 5px;
  width: 40%;
}

.btn-add-cart {
  background-color: #e76134;
  border-color: #e76134;
  opacity: 0.9;
}

.btn-add-cart:hover {
  cursor: pointer;
  background-color: #e76134 !important;
  border-color: #e76134 !important;
  opacity: 1;
}

/* width */
::-webkit-scrollbar {
  width: 0.1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

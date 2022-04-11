<template>
  <div class="col-sm-12 col-md-6 col-lg-3">
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
        <Button icon="pi pi-eye" label="Detail" class="btn-detail" />
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

<style>
.p-card {
  margin-bottom: 12px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.p-card-header img {
  margin-top: 12px;
  padding: 12px;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 60%;
  height: 200px;
  object-fit: cover;
}

.p-card-header img:hover {
  width: 80%;
  padding: 4px;
  height: 220px;
  transition: 0.5s ease;
}

.p-card-title {
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
  font-weight: 700;
  font-size: 28px;
  color: #445dde;
}

.content--decs {
  font-weight: 500;
  color: rgb(211, 208, 208);
}

.p-rating {
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
}

/* .btn-add-cart:hover {
  cursor: pointer;
  background-color: #7fdd32 !important;
  border-color: #7fdd32 !important;
} */
</style>

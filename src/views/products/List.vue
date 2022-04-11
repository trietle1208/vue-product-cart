<template>
  <div class="container">
    <h3 class="p-3 mt-4 mb-4 bg-primary text-white rounded-pill">List Product</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td class="product_name">{{ product.name }}</td>
          <td>
            <img
              :src="product.image"
              alt=""
              style="width: 150px; height: 100px; object-fit: cover"
            />
          </td>
          <td>${{ product.price }}&nbsp;<i class="fa-solid fa-coins"></i></td>
          <td>{{ product.description }}</td>
          <td>
            <router-link :to="{ name: 'product.edit', params: { id: product.id } }">
              <button class="btn btn-primary mx-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </router-link>
            <button class="btn btn-danger" @click="onDeleteProduct(product.id)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { computed  } from "vue"
import { useStore } from "vuex" 
import Swal from 'sweetalert2/dist/sweetalert2.js';
const store = useStore()

store.dispatch('getProducts')

async function onDeleteProduct(id) {
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch('deleteProduct',id).then((res) => {
        if(res.data.success) {
          store.dispatch('getProducts')
        }
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
const products = computed(() => store.state.products)
</script>
<style scoped>
h3 {
  text-shadow: 2px 2px 12px #000000;
}

.table th {
  color: #fff;
  border-radius: 12px;
  text-shadow: 2px 2px 8px #000000;
}

.product_name {
  text-transform: uppercase;
  font-weight: 700;
}

.fa-coins {
  color: rgb(245, 245, 65);
  text-shadow: 2px 2px 8px #000000;
}
</style>

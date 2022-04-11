<template>
  <div class="container">
    <h3 class="p-3 mt-4 mb-4 bg-primary text-white rounded-pill title">Add New Product</h3>
    <div class="form">
      <form @submit.prevent="saveProduct()" enctype="multipart/form-data">
        <div class="row">
          <div class="col-3">
            <label for="exampleInputEmail1" class="form-label">Product Name</label>
          </div>
          <div class="col-9">
            <input
              type="text"
              v-model="product.name"
              :class="{ 'is-invalid': errors.name }"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div class="invalid-feedback" v-if="errors.name">{{ errors.name.toString() }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="exampleInputPassword1" class="form-label">Product Price</label>
          </div>
          <div class="col-9">
            <input
              type="text"
              class="form-control"
              v-model="product.price"
              :class="{ 'is-invalid': errors.price }"
              id="exampleInputPassword1"
            />
            <div class="invalid-feedback" v-if="errors.price">{{ errors.price.toString() }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="exampleInputPassword1" class="form-label">Image</label>
          </div>
          <div class="col-9">
            <input
              type="file"
              class="form-control"
              id="image"
              v-on:change="onImageChange"
            />
            <img
              v-if="product.image"
              :src="product.image"
              alt=""
              style="width: 300px; height: 250px; object-fit: cover"
            />
            <!-- <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div> -->
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="exampleInputPassword2" class="form-label">Product Desc</label>
          </div>
          <div class="col-9">
            <textarea
              type="text"
              v-model="product.description"
              :class="{ 'is-invalid': errors.description }"
              class="form-control"
              id="exampleInputPassword2"
            />
            <div class="invalid-feedback" v-if="errors.description">
              {{ errors.description.toString() }}
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-success" v-if="product.id">
          Save for Edit
        </button>
        <button type="submit" class="btn btn-primary" v-else>Save for Create</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router"
import Swal from 'sweetalert2/dist/sweetalert2.js';

const store = useStore()
const router = useRouter()
const route = useRoute()

let product = ref({
  name: "",
  price: "",
  description: "",
  image: "",
  image_url: null,
})

const id = route.params.id
if(id) {
  store.dispatch('getProduct', id).then(() => {
    product.value = store.state.product.data
    product.value.image = store.state.product.image
    product.value.image_url = store.state.product.image
  })
}

let errors = ref({});

function onImageChange(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    product.value.image = reader.result;
    product.value.image_url = reader.result;
  };
  reader.readAsDataURL(file);
}

function saveProduct() {
  store.dispatch('saveProduct', product.value).then((res) => {
  if(res.data.success) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      router.push({
        name: 'product.list'
      })
    }
  }).catch((err) => {
      if(err.response.status === 422){
        errors.value = err.response.data.errors;
      }
  })
}
</script>
<style scoped>
.row {
  margin-bottom: 20px;
}

.form {
  border: 4px solid #ced4da;
}

.form form {
  margin: 20px;
}
h3 { 
  text-shadow: 2px 2px 12px #000000;
}
.form label {
  background-color: #0d6efd;
  padding: 10px;
  color: #fff;
  border-radius: 12px;
  text-shadow: 2px 2px 8px #000000;
}
</style>

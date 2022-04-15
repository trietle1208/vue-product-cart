<template>
  <ProgressSpinner v-if="isLoading" style="width:30px;height:30px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
  <div class="container">
    <div class="row">
      <div class="col product__img">
        <img :src="product.image" alt="">
      </div>
      <div class="col product__content">
        <div class="product__content--name">{{ product.name }}</div>
        <div class="product__content--price"><i class="pi pi-dollar" style="font-size: 1.5rem; color: #1E90FF"></i>{{ product.price }}</div>
        <div class="product__content--rating"><Rating v-model="product.rating" :cancel="false" :readonly="true" /></div>
        <div class="product__content--decs">{{ product.description }}</div>
        <div class="product__content--btn">
          <div class="btn__addCart"><Button icon="pi pi-shopping-cart" label="Add to Cart" @click="onAddToCart"/></div>
          <div class="btn__addReview">
            <Button label="Review" icon="pi pi-pencil" @click="onToggleReview" />
            <Dialog header="Your Review" v-model:visible="displayReview" :style="{width: '50vw'}">
                <div class="review__star">
                  <p>Your Rating</p>
                  <Rating v-model="valReview" :cancel="false" />
                </div>
                <div class="review__textarea">
                  <p>Your Comment</p>
                  <Textarea v-model="comment" :autoResize="true" rows="5" cols="75" class="p-invalid"/>
                </div>
                <template #footer>
                    <Button label="Cancel" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                    <Button label="Submit" icon="pi pi-comment" @click="onAddReview" />
                </template>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <Review v-for="(review,index) in reviews" :key="index" :review="review"></Review>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Review from "@/views/products/Review.vue"
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { computed, ref } from "vue"

const store = useStore()
const route = useRoute()
const isLoading = computed(() => store.state.isLoading)

const id = route.params.id
const displayReview = ref(false)

const valReview = ref(0);
const comment = ref('');

const product = ref({
  name: "",
  price: "",
  description: "",
  image: "",
  rating: 0,
  image_url: null,
})

//Get value of product
store.dispatch('getProduct', id).then((res) => {
  product.value = store.state.product.data
  product.value.image = store.state.product.image
  product.value.image_url = store.state.product.image
  if(store.state.product.sum_rating === 0 || store.state.product.sum_review === 0) {
    product.value.rating = 0
  }else{
    product.value.rating = (store.state.product.sum_rating/store.state.product.sum_review).toFixed()
  }
})

// Get reviews of product
store.dispatch('getReviews',id)
const reviews = computed(() => store.state.ratings)


function onToggleReview() {
  displayReview.value = true
}
function closeBasic() {
  displayReview.value = false
}
//add product to cart
function onAddToCart() {
  store.dispatch('addToCart',{cartItem: product.value, qty: 1}).then(() => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add to cart success',
      showConfirmButton: false,
      timer: 1500
    })
  })
}

//add review
function onAddReview() {
  store.dispatch('addReview',{rating: valReview.value, comment: comment.value, productId: id}).then((response) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add review success',
      showConfirmButton: false,
      timer: 1500
    })
    displayReview.value = false
  }).catch((err) => {
    if(err.response.status === 422) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Add review fail',
        showConfirmButton: false,
        timer: 1500
      })
      displayReview.value = false
    }
  })
}

</script>

<style scoped>
.container {
  margin-top: 56px;
}

.product__img img{
  height: 500px;
  width: 600px;
  object-fit: cover;
  border-radius: 12px ;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.product__content {
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 12px;
  padding: 16px 20px;
}


.product__content--name {
  font-size: 56px;
  font-weight: 600;
  color: crimson;
  margin-bottom: 12px;
  float: left;
}

.product__content--price {
  clear: both;
  float: left;
  font-size: 40px;
  margin-bottom: 12px;
  font-weight: 400;
  color: burlywood;
}

.product__content--rating {
  clear: both;
  float: left;
  font-size: 32px;
  margin-bottom: 12px;
}

.p-rating .p-rating-icon.pi-star-fill {
  color: rgb(251, 251, 73) !important;
}

.product__content--decs {
  clear: both;
  float: left;
  color: darkgrey;
  margin-bottom: 44px;
  text-align: left;
}

.product__content--btn {
  clear: both;
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.btn__addCart .p-button{
  margin-right: 12px;
  background-color: #e76134;
  border-color: #e76134;
  opacity: 0.9;
}

.btn__addCart .p-button:hover{
  background-color: #e76134;
  border-color: #e76134;
  opacity: 1 ;
}

.p-rating {
  text-align: left;
  margin-bottom: 12px;
}

.review__star p {
  font-size: 20px;
  font-weight: 500;
  background: #2196F3;
  display: inline-block;
  border-radius: 12px;
  padding: 8px 12px;
  color: white;
}

.review__textarea textarea{
  border: none
}

.review__textarea p{
  font-size: 20px;
  font-weight: 500;
  display: inline-block;
  background: #2196F3;
  border-radius: 12px;
  padding: 8px 12px;
  color: white;
}

.p-inputtextarea {
  box-shadow: 12px 24px 36px 0 rgba(61, 136, 223, 0.2), 0 6px 20px 0 rgba(76, 146, 204, 0.19);
  border-radius: 12px;
}
</style>

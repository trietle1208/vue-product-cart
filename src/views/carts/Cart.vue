<template>
  <div class="container">
    <div class="grid grid-nogutter surface-section text-800">
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
    </div>
    <div id="cart_container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Desc</th>
            <th scope="col">Qty</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.cartItem.id">
            <th scope="row">1</th>
            <td><b>{{ item.cartItem.name }}</b></td>
            <td>
              <img
                :src="item.cartItem.image"
                alt=""
                style="height: 160px; width: 120px"
              />
            </td>
            <td>${{ item.cartItem.price }}&nbsp;<i class="fa-solid fa-coins"></i></td>
            <td>{{ item.cartItem.description }}</td>
            <td>
              <button
                class="btn btn-sm btn-primary"
                @click="decrementsCartItem(item.cartItem.id)"
              >
                -
              </button>
              {{ item.qty }}
              <button
                class="btn btn-sm btn-primary"
                @click="incrementsCartItem(item.cartItem.id)"
              >
                +
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="DeleteItemCart(item.cartItem)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="cart_bottom">
      <div class="row">
        <div class="total col-6">
          <h5>CART TOTAL</h5>
          <div class="total_item">
            <h6>Subtoal</h6>
            <p class="price_subtotal">${{ getTotalCart }}&nbsp;<i class="fa-solid fa-coins"></i></p>
          </div>
          <div class="total_item">
            <h6>Count Item</h6>
            <p class="price_subtotal">{{ cartItemCount }}</p>
          </div>
          <hr />
          <div class="total_item">
            <h6>Total</h6>
            <p class="price_total">${{ getTotalCart }}&nbsp;<i class="fa-solid fa-coins"></i></p>
          </div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
const store = useStore()

const cart = computed(() => store.state.cart)
const cartItemCount = computed(() => store.getters.cartItemCount)
const getTotalCart = computed(() => store.getters.getTotalCart)

function incrementsCartItem(id) {
  store.dispatch('incrementsCartItem', id)
}

function decrementsCartItem(id) {
  store.dispatch('decrementsCartItem', id)
}

function DeleteItemCart(id) {
  store.dispatch('onDeleteItemCart', id)
}
</script>

<style>
#cart_container {
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 100px;
}

#cart_container table thead {
  font-weight: 700;
}

#cart_container table thead th {
  background-color: #fd8c66;
  color: #fff;
  border: none;
  padding: 6px 0;
}

#cart_bottom .coupon {
}

#cart_bottom .coupon h5 {
  background-color: #fd8c66;
  color: #fff;
  padding: 6px 6px;
  font-weight: 700;
}

#cart_bottom .coupon p,
#cart_bottom .coupon input {
  padding: 0 12px;
}

#cart_bottom .coupon input {
  height: 40px;
}

#cart_bottom .coupon button {
  height: 40px;
  margin-left: 5px;
  background: #fd8c66;
  color: #fff;
  border: none;
}

#cart_bottom .total {
}

#cart_bottom .total h5 {
  border: none;
  background-color: #fd8c66;
  color: #fff;
  padding: 6px 12px;
  font-weight: 700;
}

#cart_bottom .total .total_item {
  display: flex;
  justify-content: space-between;
}

#cart_bottom .total .total_item h6 {
  font-weight: 700;
}

#cart_bottom .total button {
  height: 40px;
  margin-bottom: 5px;
  background: #fd8c66;
  color: #fff;
  border: none;
}

.fa-coins {
  color: rgb(243, 243, 72);
  text-shadow: 2px 2px 4px #000000;
}

.price_subtotal {
  font-weight: bold;
  color: rgb(113, 113, 249)
}

.price_total {
  font-weight: bold;
  color: rgb(215, 59, 83)
}
</style>

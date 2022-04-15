<template>
  <div class="container">
    <div class="cart">
      <div class="cart__header">
        <h3>Your cart total is $82.00</h3>
        <p>FREE SHIPPING AND RETURN</p>
        <Button label="Checkout" class="p-button-success" @click="onToPageCheckout" />
      </div>
      <hr />
      <div class="cart__content">
        <div class="cart_content--row" v-for="item in cart" :key="item.cartItem.id">
          <div class="image">
            <img :src="item.cartItem.image" alt="" style="height: 160px; width: 160px" />
          </div>
          <div class="title">
            {{ item.cartItem.name }}
          </div>
          <div class="qty">
            <InputNumber
              id="minmax-buttons"
              v-model="item.qty"
              mode="decimal"
              showButtons
              :min="1"
              :max="100"
            />
          </div>
          <div class="price">
            ${{ item.cartItem.price }}
            <Button
              label="Remove"
              icon="pi pi-trash"
              class="p-button-sm p-button-danger"
              @click="DeleteItemCart(item.cartItem)"
            />
          </div>
        </div>
        <hr />
      </div>
      <div class="cart__footer">
        <div class="subtotal">
          <p>Subtotal</p>
          <p>${{ getTotalCart }}</p>
        </div>
        <hr />
        <div class="shipping">
          <p>Shipping</p>
          <p>0.0</p>
        </div>
        <hr />
        <div class="vat">
          <p>Vat</p>
          <p>0.0</p>
        </div>
        <hr />
        <div class="total">
          <p>Total</p>
          <p>${{ getTotalCart }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const cart = computed(() => store.state.cart);
const cartItemCount = computed(() => store.getters.cartItemCount);
const getTotalCart = computed(() => store.getters.getTotalCart);

// function incrementsCartItem(id) {
//   store.dispatch('incrementsCartItem', id)
// }

// function decrementsCartItem(id) {
//   store.dispatch('decrementsCartItem', id)
// }

function DeleteItemCart(id) {
  store.dispatch("onDeleteItemCart", id);
}

function onToPageCheckout() {
  alert("comming soon ....");
}
</script>

<style scoped>
.cart {
  margin: 40px 0;
  padding: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.cart__header h3 {
  font-size: 40px;
  font-weight: 600;
}

.cart__header p {
  color: rgb(221, 115, 54);
  opacity: 0.9;
}

.cart_content--row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
}
.image {
  flex-basis: 20%;
  object-fit: cover;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
  border-radius: 50%;
}
.title {
  flex-basis: 40%;
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  color: crimson;
}
.qty {
  flex-basis: 20%;
}

.price {
  flex-basis: 20%;
  font-size: 24px;
}
.price .p-button {
  width: 45%;
}

.cart__footer {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 40%;
  /* float: right; */
}

.subtotal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
}

.subtotal p {
  font-size: 20px;
  font-weight: 500;
}

.shipping {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
}

.shipping p {
  font-size: 20px;
  font-weight: 500;
}

.vat {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
}

.vat p {
  font-size: 20px;
  font-weight: 500;
}

.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
}

.total p {
  font-size: 24px;
  font-weight: 700;
}
</style>

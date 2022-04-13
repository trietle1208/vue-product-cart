<template>
  <!-- <Sidebar v-model:visible="visibleLeft">
    <router-link :to="{ name: 'Dashboard' }">
      <Button :label="t('message')" icon="pi pi-palette" class="w-full" />
    </router-link>
    <hr />
    <router-link :to="{ name: 'product.create' }">
      <Button
        :label="t('sidebar.product.create')"
        icon="pi pi-pencil"
        class="w-full p-button-secondary"
      />
    </router-link>
    <hr />
    <router-link :to="{ name: 'product.list' }">
      <Button :label="t('sidebar.product.list')" icon="pi pi-list" class="w-full p-button-secondary" />
    </router-link>
    <hr />
    <router-link :to="{ name: 'cart' }">
      <Button
        :label="t('sidebar.cart')"
        icon="pi pi-shopping-cart"
        class="w-full p-button-warning"
        :badge="cartItemCount"
        badgeClass="p-badge-danger"
      />
    </router-link>
    <hr />
    <Button
      :label="t('sidebar.logout')"
      @click.prevent="logout"
      icon="pi pi-user"
      class="w-full p-button-danger"
    />
  </Sidebar> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Button icon="pi pi-arrow-right" @click="toggleSidebar" />
    </div>
  </nav>
</template>

<script setup>
// import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const visibleLeft = ref(false);

const store = useStore()
const router = useRouter()
// const { t } = useI18n()

const cartItemCount = computed(() => store.getters.cartItemCount)
function toggleSidebar() {
  visibleLeft.value = !visibleLeft.value;
}

function logout() {
  store.dispatch("logout").then(() => {
    router.push({
      name: "Login",
    });
  });
}
</script>

<style></style>

<template>
   <div class="container">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Hello</div>
        <span class="text-600 font-medium line-height-3">You have an account?</span>
        <router-link :to="{name: 'Login'}" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >Login now!
        </router-link>
      </div>

      <div>
        <form @submit.prevent="registerAccount">
          <label for="email1" class="block text-900 font-medium mb-2">Name</label>
          <InputText id="email1" type="text" class="w-full mb-3" v-model="user.name" :class="{ 'p-invalid': errors.name }"/>
          <div v-if="errors.name" class="p-error">{{ errors.email.toString() }}</div>

          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <InputText id="email1" type="text" class="w-full mb-3" v-model="user.email" :class="{ 'p-invalid': errors.email }"/>
          <div v-if="errors.email" class="p-error">{{ errors.email.toString() }}</div>
          
          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <InputText id="password1" type="password" class="w-full mb-3" v-model="user.password" :class="{ 'p-invalid': errors.password }"/>
          <div v-if="errors.password" class="p-error">{{ errors.email.toString() }}</div>

          <label for="password1" class="block text-900 font-medium mb-2">Confirm Password</label>
          <InputText id="password1" type="password" class="w-full mb-3" v-model="user.password_confirmation" :class="{ 'p-invalid': errors.password }"/>

          <ProgressSpinner v-if="isLoading" style="width:30px;height:30px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
          <Button type="submit" label="Sign Up" icon="pi pi-user" class="w-full" :class="{ 'p-disabled': isLoading }"></Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore()
const router = useRouter()

const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
}

const isLoading = ref(false)
const errors = ref({})

function registerAccount() {
  store.dispatch('register', user).then(() => {
    isLoading.value = true;
    router.push({
      name: 'Dashboard',
    })
  }).catch((err) => {
    if(err.response.status === 422) {
      errors.value = err.response.data.errors
    }
  })
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.surface-card {
  margin: 0 auto;
}
</style>

<template>
  <div class="container">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <router-link
          :to="{ name: 'Register' }"
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >Create now!
        </router-link>
      </div>

      <div>
        <form @submit.prevent="loginAccount">
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <InputText
            id="email1"
            type="text"
            class="w-full mb-3"
            v-model="user.email"
            :class="{ 'p-invalid': errors.email }"
          />
            

          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <InputText
            id="password1"
            type="password"
            class="w-full mb-3"
            v-model="user.password"
            :class="{ 'p-invalid': errors.password }"
          />
          <small v-if="errors.password" class="p-error">
            {{ errors.password.toString() }}
          </small>
          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <Checkbox
                id="rememberme1"
                :binary="true"
                v-model="checked"
                class="mr-2"
              ></Checkbox>
              <label for="rememberme1">Remember me</label>
            </div>
            <a
              class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
              >Forgot password?</a
            >
          </div>
          
          <Button
            type="submit"
            label="Sign In"
            icon="pi pi-user"
            class="w-full"
            :class="{ 'p-disabled': isLoading }"
          >
          <ProgressSpinner
            v-if="isLoading"
            style="width: 30px; height: 30px"
            strokeWidth="2"
            fill="var(--blue-100)"
            animationDuration=".8s"
          />
          </Button>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { watch, ref } from "vue";
const router = useRouter();
const store = useStore();

const user = {
  email: "",
  password: "",
};
const isLoading = ref(false);
const errors = ref({});

function loginAccount() {
  store
    .dispatch("login", user)
    .then(() => {
      isLoading.value = true;
      router.push({
        name: "Dashboard",
      });
    })
    .catch((err) => {
      if (err.response.status === 422) {
        errors.value = err.response.data.errors;
      }
    });
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

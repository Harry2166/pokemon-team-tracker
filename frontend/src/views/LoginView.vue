<script>
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    }
  },
  methods: {
    async login() {
      await this.authStore.login(this.email, this.password, this.$router)
      if (!this.authStore.isAuthenticated) {
        this.error = 'Login failed. Please check your credentials.'
      }
    },
    resetError() {
      this.error = ""
    }
  }
}
</script>

<template>
  <div class="login flex flex-col items-center">
    <h1 class="text-5xl text-white">Login</h1>
    <form @submit.prevent="login">
      <div class="flex flex-row justify-center text-white px-3 py-3">
        <label for="email" class="px-2 py-1">Email:</label>
        <input
          v-model="email"
          id="email"
          type="text"
          required
          @input="resetError"
          class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1"
        />
      </div>
      <div class="flex flex-row justify-center text-white px-3 py-3">
        <label for="password" class="px-2 py-1">Password:</label>
        <input
          v-model="password"
          id="password"
          type="password"
          required
          @input="resetError"
          class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1"
        />
      </div>
      <button type="submit" class="hover:text-black hover:bg-white bg-black/50 text-white rounded-3xl
        text-3xl px-3 py-1">Login</button>
      <br>
      <br>
      <RouterLink to="/register" class="hover:text-black hover:bg-white bg-black/50 text-white
      rounded-3xl text-3xl px-3 py-1">Register</RouterLink>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

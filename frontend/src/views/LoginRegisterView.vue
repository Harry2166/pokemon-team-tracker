<script>
import { useAuthStore, getCSRFToken } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  },
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      loginError: "",
      registerEmail: "",
      registerPassword: "",
      registerError: "",
      success: ""
    }
  },
  methods: {
    async login() {
      await this.authStore.login(this.loginEmail, this.loginPassword, this.$router)
      if (!this.authStore.isAuthenticated) {
        this.loginError = 'Login failed. Please check your credentials.'
      }
    },
    resetError() {
      this.loginError = ""
    },
    async register() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
          },
          body: JSON.stringify({
            email: this.registerEmail,
            password: this.registerPassword
          }),
          credentials: 'include'
        })

        const data = await response.json()

        if (response.ok) {
          this.success = ''
          this.registerError = ''
        } else {
          this.registerError = data.error || 'Registration failed'
          this.success = ''
        }
      } catch (err) {
        this.registerError = 'An error occurred during registration: ' + err.message
        this.success = ''
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-row justify-center m-10 px-5">
    <div class="login flex flex-col items-center">
      <h1 class="text-5xl text-white">Login</h1>
      <form @submit.prevent="login">
        <div class="flex flex-row justify-center text-white px-3 py-3">
          <label for="email" class="px-2 py-1">Email:</label>
          <input
            v-model="loginEmail"
            id="email"
            type="text"
            required
            @input="resetError"
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1"
          />
        </div>
        <div class="flex flex-row justify-center text-white px-3 py-3">
          <label for="loginPassword" class="px-2 py-1">Password:</label>
          <input
            v-model="loginPassword"
            id="password"
            type="password"
            required
            @input="resetError"
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1"
          />
        </div>
        <button type="submit" class="hover:text-black hover:bg-white bg-black/50 text-white rounded-3xl
          text-5xl px-3 py-1 absolute right-11/21">Login</button>
        <br>
      </form>
      <p v-if="error" class="error">{{ loginError }}</p>
    </div>
    <div class="register flex flex-col items-center">
    <h1 class="text-5xl text-white">Register</h1>
      <form @submit.prevent="register">
        <div class="flex flex-row justify-center text-white px-3 py-3">
          <label for="registerEmail" class="px-2 py-1">Email:</label>
          <input v-model="registerEmail" id="registerEmail" type="email" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1" required />
        </div>
        <div class="flex flex-row justify-center text-white px-3 py-3">
          <label for="registerPassword px-2 py-1">Password:</label>
          <input
          v-model="registerPassword"
          id="registerPassword" type="password"
          class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1" required />
        </div>
        <button type="submit" class="hover:text-black hover:bg-white bg-black/50 text-white
          rounded-3xl text-5xl px-3 py-1">Register</button>
        <br>
        <br>
      </form>
      <p v-if="registerError" class="text-3xl bg-black/50 rounded-3xl text-white">Error: {{ registerError }}</p>
    </div>
  </div>
</template>

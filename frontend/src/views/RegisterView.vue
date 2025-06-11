<script>
import { getCSRFToken } from '@/stores/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      success: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          }),
          credentials: 'include'
        })

        const data = await response.json()

        if (response.ok) {
          this.success = 'Registration successful! Please log in.'
          this.error = ''
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        } else {
          this.error = data.error || 'Registration failed'
          this.success = ''
        }
      } catch (err) {
        this.error = 'An error occurred during registration: ' + err.message
        this.success = ''
      }
    }
  }
}
</script>

<template>
  <div class="login flex flex-col items-center">
  <h1 class="text-5xl text-white">Register</h1>
    <form @submit.prevent="register">
      <div class="flex flex-row justify-center text-white px-3 py-3">
        <label for="email" class="px-2 py-1">Email:</label>
        <input v-model="email" id="email" type="email" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1" required />
      </div>
      <div class="flex flex-row justify-center text-white px-3 py-3">
        <label for="password">Password:</label>
        <input v-model="password" id="password" type="password" class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1" required />
      </div>
      <button type="submit" class="hover:text-black hover:bg-white bg-black/50 text-white rounded-3xl text-3xl px-3 py-1">Register</button>
      <br>
      <br>
      <RouterLink to="/login" class="hover:text-black hover:bg-white bg-black/50 text-white rounded-3xl text-3xl px-3 py-1">Login</RouterLink>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">{{ success }}</p>
  </div>
</template>


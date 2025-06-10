
<script setup>
  import { useRouter, RouterLink, RouterView } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  import { onMounted } from 'vue'

  const authStore = useAuthStore()
  const router = useRouter()

  const logout = async () => {
    try {
      await authStore.logout(router)
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(async () => {
    await authStore.fetchUser()
  })
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-red-500 text-black p-4 z-50 shadow opacity-75">
      <div class="flex flex-row justify-center">
        <RouterLink to="/" class="px-5 font-medium hover:text-red-800 absolute left-5">Home</RouterLink>
        <RouterLink to="/pokemon" class="px-5 font-medium hover:text-red-800">Catch Pokemon</RouterLink>
        <RouterLink to="/profile" class="px-5 font-medium hover:text-red-800">Profile</RouterLink>
        <div class="absolute right-5">
          <button @click='logout' class="hover:text-red-800">Logout</button>
        </div>
      </div>
    </header>
</template>

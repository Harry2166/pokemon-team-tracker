
<script setup>
  import { useRouter, RouterLink, RouterView } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  import { ownedPokemonStore, availablePokemonStore, pokemonGenerationStore } from '@/stores/pokemon'
  import { onMounted } from 'vue'

  const authStore = useAuthStore()
  const ownedPokemon = ownedPokemonStore()
  const availablePokemon = availablePokemonStore()
  const generationPokemon = pokemonGenerationStore()
  const router = useRouter()

  const logout = async () => {
    try {
      await authStore.logout(router)
      await ownedPokemon.resetOwnedPokemonList()
      await availablePokemon.resetAvailablePokemonList()
      await generationPokemon.resetGeneration()
      setTimeout(() => {
        router.push('loginandregister')
      }, 1000)
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(async () => {
    await authStore.fetchUser()
  })
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-red-500 text-black p-4 z-50 shadow opacity-100">
      <div class="flex flex-row justify-center">
        <RouterLink to="/" class="px-5 font-medium hover:text-red-800 absolute left-5">Home</RouterLink>
        <RouterLink to="/pokemon" class="px-5 font-medium hover:text-red-800">Catch Pokemon</RouterLink>
        <RouterLink to="/profile" class="px-5 font-medium hover:text-red-800">Profile</RouterLink>
        <div class="absolute right-5" v-if="!authStore.isAuthenticated">
          <RouterLink to='/loginandregister' class="hover:text-red-800 px-5 font-semibold">Login/Register</RouterLink>
        </div>
        <div class="absolute right-5" v-else>
          <button @click='logout' class="hover:text-red-800 font-semibold">Logout</button>
        </div>
      </div>
    </header>
</template>

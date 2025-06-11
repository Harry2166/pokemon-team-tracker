<script setup>
  import Title from '@/components/Title.vue'
  import Carousel from '@/components/Carousel.vue'
  import { useAuthStore } from '@/stores/auth'
  import { RouterLink, RouterView } from 'vue-router'
  const authStore = useAuthStore();
</script>

<template>
  <Title>
    <h1 class="flex flex-col items-center font-bold text-5xl text-gray-200 text-shadow-accent
      rounded-3xl px-3 py-3 bg-black/50">Pokemon Tracker</h1>
  </Title>
  <div v-if="!authStore.isAuthenticated">
    <div class="flex flex-row justify-center">
      <RouterLink to="/loginandregister" class="px-3 font-bold text-5xl hover:text-black hover:bg-white rounded-3xl
      py-3 bg-black/50 text-white m-3">Login/Register</RouterLink>
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col items-center">
      <h2 class="text-gray-200 font-semibold text-3xl text-center rounded-3xl bg-black/50 px-3
        py-3">Check your Pokemon!</h2>
      <Carousel class="scale-150 py-10"/>
    </div>
    <hr>
    </div>
  <div class="flex flex-col items-center">
      <h2 class="text-white font-semibold text-3xl rounded-3xl text-center bg-black/50 py-3 px-3
        m-3">What is this?</h2>
      <p class="text-gray-200 bg-black/50 rounded-3xl text-center px-5 py-5 text-2xl">
        Pokemon Tracker is a project that lets you track the pokemon that you have caught, right on
        the web!

        <br>

        Think of it as your own pokedex that will NEVER die on you and will live forever on
        the internet (or until the server that hosts this dies).

        <br>
        This project was done by: <a href="https://github.com/Harry2166"
          class="hover:text-blue-400" target="_blank">Harry2166</a>
      </p>
    </div>
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-red-500 text-black p-4 z-50 shadow">
      <div class="flex flex-row justify-center">
        <RouterLink to="/" class="px-5 font-medium hover:text-red-800">Home</RouterLink>
        <RouterLink to="/pokemon" class="px-5 font-medium hover:text-red-800">Catch Pokemon</RouterLink>
        <RouterLink to="/profile" class="px-5 font-medium hover:text-red-800">Profile</RouterLink>
      </div>
    </header>
</template>

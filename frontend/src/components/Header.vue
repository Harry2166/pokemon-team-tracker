
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-red-500 text-black p-4 z-50 shadow opacity-75">
      <div class="flex flex-row justify-center">
        <RouterLink to="/" class="px-5 font-medium hover:text-red-800 absolute left-5">Home</RouterLink>
        <RouterLink to="/pokemon" class="px-5 font-medium hover:text-red-800">Catch Pokemon</RouterLink>
        <RouterLink to="/profile" class="px-5 font-medium hover:text-red-800">Profile</RouterLink>
        <div class="absolute right-5">
          Made by <a href="https://github.com/Harry2166" target="_blank" class="underline"> Harry2166</a>
        </div>
      </div>
    </header>
</template>

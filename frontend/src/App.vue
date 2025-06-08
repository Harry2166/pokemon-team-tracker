<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/components/NavBar.vue'

</script>

<template>
  <div>
    <div class="absolute inset-0">
      <img src="@/assets/images/background.jpg" alt="background" class="w-full h-full object-cover" />
    </div>
    <div class="absolute inset-0 bg-white/85"></div>
    <div class="relative z-10 items-center justify-center w-full">
      <NavBar/>
    </div>
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <RouterView/>
    </div>
  </div>
</template>


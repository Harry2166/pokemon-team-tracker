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
    <div class="relative z-10 items-center w-full flex flex-col">
      <NavBar/>
    </div>
    <div class="relative z-10 min-h-screen">
      <RouterView/>
    </div>
  </div>
</template>


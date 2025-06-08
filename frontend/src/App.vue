<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Layout from '@/components/Layout.vue'

</script>

<template>
  <div>
    <div class="absolute inset-0">
      <img src="@/assets/images/background.png" alt="background" class="w-full h-full object-cover" />
    </div>
     <div class="relative z-10 min-h-screen">
       <Layout>
          <RouterView/>
        </Layout>
      </div>
  </div>
</template>


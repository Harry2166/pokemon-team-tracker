<script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <Header/>

    <main class="absolute top-16 bottom-16 left-0 right-0 overflow-y-auto px-4">
      <div class="max-w-7xl mx-auto space-y-4">
        <slot />
      </div>
    </main>

    <Footer/>
  </div>

</template>


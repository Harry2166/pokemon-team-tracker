<script setup>
  import axios from 'axios';
  import { onMounted } from 'vue';
  onMounted(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/pokemon/get_all/');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  })
</script>

<template>
  <h1>Profile!</h1>
</template>

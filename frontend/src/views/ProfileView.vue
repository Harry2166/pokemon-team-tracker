<script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';

  const allPokemon = ref([]);

  onMounted(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/pokemon/get_all/');
      allPokemon.value = response.data;
    } catch (error) {
      console.error(error);
    }
  })
</script>

<template>
  <h1>Profile!</h1>
  <ul>
    <li v-for="pokemon in allPokemon" :key="pokemon.id">
      {{pokemon.nickname}}
      <img :src=pokemon.image_url>
    </li>
  </ul>
</template>

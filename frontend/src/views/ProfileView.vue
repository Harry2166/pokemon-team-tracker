<script setup>
  import { onMounted } from 'vue';
  import { ownedPokemonStore } from '@/stores/pokemon'
  const ownedPokemon = ownedPokemonStore();


  onMounted(async () => {
      if(!ownedPokemon.pokemonList.length) {
        ownedPokemon.fetchPokemon();
      }
    }
  )

</script>

<template>
  <h1>Profile!</h1>
  <ul>
    <li v-for="pokemon in ownedPokemon.pokemonList" :key="pokemon.id">
      {{pokemon.nickname}}
      <img :src=pokemon.image_url>
    </li>
  </ul>
</template>

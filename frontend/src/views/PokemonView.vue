<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { availablePokemonStore } from '@/stores/pokemon'
  const availablePokemon = availablePokemonStore();

  const generationTracker = ref(1);
  const generationRanges = {
    1: [0, 151],
    2: [151, 100],
    3: [251, 135],
    4: [386, 107],
    5: [493,156],
    6: [649,72],
  }

  const increaseGeneration = () => { if (generationTracker.value < 7) generationTracker.value += 1 }

  const decreaseGeneration = () => { if (generationTracker.value > 1) generationTracker.value -= 1 }

  const fetchGenerationPokemon = async () => {
    availablePokemon.fetchPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${generationRanges[generationTracker.value][0]}&limit=${generationRanges[generationTracker.value][1]}`);
  }

  onMounted(fetchGenerationPokemon)
  watch(generationTracker, fetchGenerationPokemon);
</script>

<template>
  <button @click="increaseGeneration">+</button>
  <h1>Generation {{generationTracker}}</h1>
  <button @click="decreaseGeneration">-</button>
  <ul>
    <li v-for="pokemon in availablePokemon.pokemonList">
      {{pokemon.name}}
    </li>
  </ul>
</template>

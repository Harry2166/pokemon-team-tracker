<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { availablePokemonStore, ownedPokemonStore, pokemonGenerationStore } from '@/stores/pokemon'
  import axios from 'axios'

  const ownedPokemon = ownedPokemonStore();
  const availablePokemon = availablePokemonStore();
  const pokemonGeneration = pokemonGenerationStore();

  const generationRanges = {
    1: [0, 151],
    2: [151, 100],
    3: [251, 135],
    4: [386, 107],
    5: [493,156],
    6: [649,72],
  }


  const fetchGenerationPokemon = async () => {
    availablePokemon.fetchPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${generationRanges[pokemonGeneration.generation][0]}&limit=${generationRanges[pokemonGeneration.generation][1]}`);
  }

  const postPokemonToDB = async (URL) => {
    const pokeapi_ID = URL.split("/").filter(Boolean).pop();
    const postData = {
      pokeapi_id: pokeapi_ID,
      image_url:
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeapi_ID}.png`,
      nickname: "Rick Roll",
      gender: true
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/pokemon/insert/', postData)
      ownedPokemon.fetchPokemon();
    } catch {
      console.error(error)
    }
  }

  onMounted(fetchGenerationPokemon)
  watch(() => pokemonGeneration.generation, fetchGenerationPokemon);
</script>

<template>
  <button @click="pokemonGeneration.increaseGeneration">+</button>
  <h1>Generation {{pokemonGeneration.generation}}</h1>
  <button @click="pokemonGeneration.decreaseGeneration">-</button>
  <ul>
    <li v-for="pokemon in availablePokemon.pokemonList">
      {{pokemon.name}}
      <button @click="postPokemonToDB(pokemon.url)">Catch {{pokemon.name}}</button>
    </li>
  </ul>
</template>

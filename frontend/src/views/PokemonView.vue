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

  const pokemonNicknames = ref({})
  const fetchGenerationPokemon = async () => {
    availablePokemon.fetchPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${generationRanges[pokemonGeneration.generation][0]}&limit=${generationRanges[pokemonGeneration.generation][1]}`);
  }

  const getPokemonAPIID = (URL) => { return URL.split("/").filter(Boolean).pop(); }

  const postPokemonToDB = async (URL, pokeAPI_ID) => {
    const postData = {
      pokeapi_id: pokeAPI_ID,
      image_url:
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeAPI_ID}.png`,
      nickname: pokemonNicknames.value[URL],
      gender: true
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/pokemon/insert/', postData)
      ownedPokemon.fetchPokemon();
      pokemonNicknames.value[URL] = ""
      console.log("Pokemon added!")
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
    <li v-for="pokemon in availablePokemon.pokemonList" :id="pokemon.name">
      <label for="pokemonURL" class="block text-sm font-semibold text-gray-700">{{pokemon.name}}</label>
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonAPIID(pokemon.url)}.png`"/>
      <form @submit.prevent="postPokemonToDB(pokemon.url, getPokemonAPIID(pokemon.url))">
        <input
          type="text"
          id="newPokemon"
          name="newPokemon"
          v-model="pokemonNicknames[pokemon.url]"
          class="mt-1 block w-half rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
        />
        <br>
        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow">Catch {{pokemon.name}}</button>
      </form>
    </li>
  </ul>
</template>

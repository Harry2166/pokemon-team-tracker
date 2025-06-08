<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { availablePokemonStore, ownedPokemonStore, pokemonGenerationStore } from '@/stores/pokemon'
  import PokemonCard from '@/components/PokemonCard.vue'
  import Title from '@/components/Title.vue'
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
    7: [721,88],
    8: [809,96],
    9: [905,120],
  }

  const fetchGenerationPokemon = async () => {
    availablePokemon.fetchPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${generationRanges[pokemonGeneration.generation][0]}&limit=${generationRanges[pokemonGeneration.generation][1]}`);
  }

  const getPokemonAPIID = (URL) => { return URL.split("/").filter(Boolean).pop(); }

  const handleCardClick = (pokemon) => {
    const nickname = window.prompt(`Place a nickname for ${pokemon.name}`, "")
    if (nickname == "" || nickname  == null) {
      console.log("no name given")
    } else {
      postPokemonToDB(pokemon.url, getPokemonAPIID(pokemon.url), nickname);
    }
  };

  const postPokemonToDB = async (URL, pokeAPI_ID, nickname) => {
    const postData = {
      pokeapi_id: pokeAPI_ID,
      image_url:
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeAPI_ID}.png`,
      nickname: nickname,
      gender: true
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/pokemon/insert/', postData)
      ownedPokemon.fetchPokemon();
      pokemonNicknames.value[URL] = ""
      window.alert("Pokemon added!")
    } catch {
      console.error(error)
      window.alert("Pokemon not added!")
    }
  }

  onMounted(fetchGenerationPokemon)
  watch(() => pokemonGeneration.generation, fetchGenerationPokemon);
</script>

<template>
  <Title>
    <button @click="pokemonGeneration.decreaseGeneration" class="bg-gray-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow">-</button>
    <h1 class="text-5xl font-bold">Generation {{pokemonGeneration.generation}}</h1>
    <button @click="pokemonGeneration.increaseGeneration" class="bg-red-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow">+</button>
  </Title>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-25">
    <div
      v-for="pokemon in availablePokemon.pokemonList"
      :id="pokemon.name"
      >
      <PokemonCard :name=pokemon.name
      :image_url="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonAPIID(pokemon.url)}.png`"
      @click="handleCardClick(pokemon)"
      />
    </div>
  </div>
</template>

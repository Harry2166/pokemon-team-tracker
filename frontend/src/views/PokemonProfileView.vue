<script setup>
  import { ref, onMounted } from 'vue';
  import {defineProps, defineEmits, computed} from 'vue';
  import PokemonCard from '@/components/PokemonCard.vue'
  import Title from '@/components/Title.vue'
  import { profilePokemonStore } from '@/stores/pokemon'
  import axios from 'axios'

  const props = defineProps({
    pokemon_id: String
  });

  const profilePokemon = profilePokemonStore();
  const allEnglishPokedexEntries = ref([]);
  const entry = ref("")
  const entryGeneration = ref("")

  const getRandomEntry = () => {
    if (allEnglishPokedexEntries.value.length === 0) return;
    const entryIndex = Math.floor(Math.random() * allEnglishPokedexEntries.value.length);
    entry.value = allEnglishPokedexEntries.value[entryIndex].flavor_text
    entryGeneration.value = allEnglishPokedexEntries.value[entryIndex].version.name
    console.log(entryGeneration.value)
  }

  const getPokedexEntry = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${profilePokemon.species_name}`)
      allEnglishPokedexEntries.value = res.data.flavor_text_entries.filter(entry => entry.language.name === "en")
      getRandomEntry()
    } catch (err) {
      console.log(err)
    }
  }

  onMounted(() => {
    getPokedexEntry();
  });

</script>

<template>
  <div v-if="props.pokemon_id != profilePokemon.id">
    <Title>
      <h1 class="text-5xl font-bold gap-4 text-gray-200 rounded-3xl bg-black/50 px-3 py-3">Error</h1>
    </Title>
    <h2 class="text-3xl font-semibold text-gray-200 rounded-3xl bg-black/50 px-3 py-3 flex flex-col
      items-center">Go back to your profile!</h2>
  </div>
  <div v-else class="flex flex-col items-center">
    <h2 class="text-3xl font-semibold text-gray-200 rounded-3xl bg-black/50 px-3 py-3 flex flex-col
    items-center">{{profilePokemon.nickname}}</h2>
    <div class="flex flex-col items-center">
      <div class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 scale-250">
      <PokemonCard :name=profilePokemon.name
      :image_url=profilePokemon.image_url
      :can_click=false
      />
      </div>
      <div class="flex flex-col items-center right-1/3 top-1/6">
        <div class="text-3xl absolute top-1/6 right-1/3 bg-black/50 text-gray-200 rounded-3xl
          font-semibold px-3 py-3 flex flex-col items-center">Stats:</div>
        <div class="bg-black/50 rounded-3xl px-3 py-3 absolute top-1/3 right-1/5 flex flex-col
          items-center m-5">
          <div v-if="profilePokemon.shiny" class="absolute top-5 right-5 scale-150">✨</div>
          <div class="text-white text-2xl">Species: {{profilePokemon.species_name}}</div>
          <div class="text-white text-2xl" v-if="profilePokemon.gender">Gender: ♂️</div>
          <div class="text-white text-2xl" v-else>Gender: ♀️</div>
          <br>
          <div class="text-white text-2xl max-w-sm md:max-w-md lg:max-w-lg text-center">{{entry}}</div>
          <div class="text-white text-xs py-1">Pokedex Entry from Pokemon {{entryGeneration}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


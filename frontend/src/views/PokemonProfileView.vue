<script setup>
  import { onMounted } from 'vue';
  import {defineProps, defineEmits, computed} from 'vue';
  import PokemonCard from '@/components/PokemonCard.vue'
  import Title from '@/components/Title.vue'
  import { profilePokemonStore } from '@/stores/pokemon'

  const props = defineProps({
    pokemon_id: String
  });

  const profilePokemon = profilePokemonStore();

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
          items-center">
          <div v-if="profilePokemon.shiny" class="absolute top-5 right-5 scale-150">✨</div>
          <div class="text-white text-2xl">Species: {{profilePokemon.species_name}}</div>
          <div class="text-white text-2xl" v-if="profilePokemon.gender">Gender: ♂️</div>
          <div class="text-white text-2xl" v-else>Gender: ♀️</div>
          <div class="text-white max-w-sm md:max-w-md lg:max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    </div>
  </div>
</template>

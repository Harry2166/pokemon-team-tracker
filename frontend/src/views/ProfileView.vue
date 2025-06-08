<script setup> import { onMounted } from 'vue';
  import { ownedPokemonStore } from '@/stores/pokemon'
  import PokemonCard from '@/components/PokemonCard.vue'
  import Title from '@/components/Title.vue'
  const ownedPokemon = ownedPokemonStore();

  onMounted(async () => {
      if(!ownedPokemon.pokemonList.length) {
        ownedPokemon.fetchPokemon();
      }
    }
  )

</script>

<template>
  <Title>
    <h1 class="text-5xl font-bold gap-4 text-gray-200">Your Pokemon!</h1>
  </Title>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-25">
    <div
      v-for="pokemon in ownedPokemon.pokemonList"
      :key="pokemon.id"
    >
    <PokemonCard :name=pokemon.nickname :image_url=pokemon.image_url :will_capitalize=false />
    </div>
  </div>
</template>

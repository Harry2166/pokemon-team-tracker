<script setup> import { onMounted } from 'vue';
  import { ownedPokemonStore } from '@/stores/pokemon'
  import PokemonCard from '@/components/PokemonCard.vue'
  const ownedPokemon = ownedPokemonStore();

  onMounted(async () => {
      if(!ownedPokemon.pokemonList.length) {
        ownedPokemon.fetchPokemon();
      }
    }
  )

</script>

<template>
  <h1 class="text-5xl">Your Pokemon!</h1>
  <div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
    <div
      v-for="pokemon in ownedPokemon.pokemonList"
      :key="pokemon.id"
    >
    <PokemonCard :name=pokemon.nickname :image_url=pokemon.image_url />
    </div>
  </div>
</template>

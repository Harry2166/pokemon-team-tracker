<script setup> import { onMounted } from 'vue';
  import { ownedPokemonStore } from '@/stores/pokemon'
  import PokemonCard from '@/components/PokemonCard.vue'
  import Header from '@/components/Header.vue'
  const ownedPokemon = ownedPokemonStore();

  onMounted(async () => {
      if(!ownedPokemon.pokemonList.length) {
        ownedPokemon.fetchPokemon();
      }
    }
  )

</script>

<template>
  <Header class="text-5xl font-bold gap-4 py-5 ">
    <h1>Your Pokemon!</h1>
  </Header>
  <div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 px-5">
    <div
      v-for="pokemon in ownedPokemon.pokemonList"
      :key="pokemon.id"
    >
    <PokemonCard :name=pokemon.nickname :image_url=pokemon.image_url />
    </div>
  </div>
</template>

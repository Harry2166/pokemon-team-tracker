<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { profilePokemonStore, ownedPokemonStore } from '@/stores/pokemon'
  import PokemonCard from '@/components/PokemonCard.vue'
  import Title from '@/components/Title.vue'
  const ownedPokemon = ownedPokemonStore();
  const profilePokemon = profilePokemonStore();

  onMounted(async () => {
      if(!ownedPokemon.pokemonList.length) {
        ownedPokemon.fetchPokemon();
      }
    }
  )

  const router = useRouter();
  const goToPokemonProfile = (pokemon) => {
    profilePokemon.placePokemon(pokemon.id, pokemon.nickname, pokemon.species_name, pokemon.gender,
    pokemon.shiny, pokemon.image_url)
    router.push(`/profile/${pokemon.id}`)
  }

</script>

<template>
  <Title>
    <h1 class="text-5xl font-bold gap-4 text-gray-200 rounded-3xl bg-black/50 px-3 py-3">Your Pokemon!</h1>
  </Title>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-25">
    <div
      v-for="pokemon in ownedPokemon.pokemonList"
      :key="pokemon.id"
    >
    <PokemonCard :name=pokemon.nickname :image_url=pokemon.image_url :will_capitalize=false
    @click="goToPokemonProfile(pokemon)" />
    </div>
  </div>
</template>


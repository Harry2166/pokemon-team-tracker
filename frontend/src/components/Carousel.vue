<script setup lang="ts">
  import { onMounted } from 'vue';
  import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
  import { ownedPokemonStore } from '@/stores/pokemon'
  import axios from 'axios'
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
  <Carousel class="relative w-full max-w-xs">
    <CarouselContent>
      <CarouselItem
        v-for="pokemon in ownedPokemon.pokemonList"
        :key="pokemon.id"
        >
        <div class="p-1">
          <PokemonCard :name=pokemon.name :image_url=pokemon.image_url :will_capitalize=false
          :can_click=false />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

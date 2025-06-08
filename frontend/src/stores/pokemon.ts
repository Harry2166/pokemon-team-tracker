
import { defineStore } from 'pinia'
import axios from 'axios'

export const ownedPokemonStore = defineStore('ownedPokemon', {
  state: () => ({
    pokemonList: [],
    loading: false,
  }),

  actions: {
    async fetchPokemon() {
      this.loading = true
      try {
        const res = await axios.get('http://127.0.0.1:8000/pokemon/get_all/')
        this.pokemonList = res.data
      } catch (err) {
        console.error('Failed to fetch Pokémon:', err)
      } finally {
        this.loading = false
      }
    }
  }
})

export const availablePokemonStore = defineStore('availablePokemon',{
  state: () => ({
    pokemonList: [],
    loading: false
  }),

  actions: {
    async fetchPokemon(URL: string) {
      this.loading = true
      try {
        const res = await axios.get(URL)
        this.pokemonList = res.data.results
      } catch (err) {
        console.error('Failed to fetch Pokémon:', err)
      } finally {
        this.loading = false
      }
    }
  }

})

export const pokemonGenerationStore = defineStore('pokemonGeneration',{
  state: () => ({
    generation : 1
  }),

  actions: {
    increaseGeneration () {
      if (this.generation < 10) { this.generation += 1 }
    },
    decreaseGeneration () {
     if (this.generation > 1) { this.generation -= 1 }
    }
  }
})


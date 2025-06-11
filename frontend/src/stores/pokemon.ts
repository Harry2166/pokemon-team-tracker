
import { defineStore } from 'pinia'
import axios from 'axios'

export const profilePokemonStore = defineStore('profilePokemon', {
  state: () => ({
    id: "",
    nickname: "",
    species_name: "",
    gender: false,
    shiny: false,
    image_url: ""
  }),

  actions: {
    placePokemon(id: string, nickname: string, species_name: string, gender: boolean, shiny: boolean, image_url: string) {
      this.id = id
      this.nickname = nickname
      this.species_name = species_name
      this.gender = gender
      this.shiny = shiny
      this.image_url = image_url
    },
  },
    persist: true
})

export const ownedPokemonStore = defineStore('ownedPokemon', {
  state: () => ({
    pokemonList: [],
    loading: false,
  }),

  actions: {
    async fetchPokemon() {
      this.loading = true
      try {
        const res = await axios.get('http://127.0.0.1:8000/pokemon/get_all/', {
          withCredentials: true
        })
        this.pokemonList = res.data
      } catch (err) {
        console.error('Failed to fetch Pokémon:', err)
      } finally {
        this.loading = false
      }
    },
    resetOwnedPokemonList() {
      this.pokemonList = []
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
    },
    resetAvailablePokemonList() {
      this.pokemonList = []
    }
  }

})

export const pokemonGenerationStore = defineStore('pokemonGeneration',{
  state: () => ({
    generation : 1
  }),

  actions: {
    increaseGeneration () {
      if (this.generation < 9) { this.generation += 1 }
    },
    decreaseGeneration () {
     if (this.generation > 1) { this.generation -= 1 }
    },
    resetGeneration () {
      this.generation = 1;
    }
  },
  persist: true
})


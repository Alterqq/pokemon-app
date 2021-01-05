import * as axios from "axios";

export const pokemonAPI = {
  getPokemonsUrl(offset = 0) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
  },

  getPokemon(url) {
    return axios.get(url)
  },

  setPokemonProfile(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  },
}


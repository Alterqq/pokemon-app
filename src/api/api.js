import * as axios from "axios";

export const pokemonAPI = {
  getPokemonsUrl() {
    return axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => response.data.results.map(pokemon => pokemon.url))
  },

  getPokemon(url) {
    return axios.get(url)
  },

  setPokemonProfile(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}


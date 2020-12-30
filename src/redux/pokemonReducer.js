import {pokemonAPI} from "../api/api";

const SET_POKEMONS = 'pokemon/SET_POKEMONS'
const SET_POKEMON_PROFILE = 'pokemon/SET_POKEMON_PROFILE'
const TOGGLE_IS_FETCHING = 'pokemon/TOGGLE_IS_FETCHING'
const SET_IS_LOADING = 'pokemon/IS_LOADING'

const initialState = {
  pokemons: [],
  profile: null,
  isFetching: false,
  isLoading: true
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {...state, pokemons: [...state.pokemons, ...action.payload]}
    case SET_POKEMON_PROFILE:
      return {...state, profile: action.payload}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.payload}
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}

const setPokemons = (pokemons) => ({type: SET_POKEMONS, payload: pokemons})
const setPokemonProfileSuccess = (profile) => ({type: SET_POKEMON_PROFILE, payload: profile})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching})
const setIsLoading = (loading) => ({type: SET_IS_LOADING, payload: loading})

export const getPokemons = (offset) => async (dispatch) => {
  try {
    const urls = await pokemonAPI.getPokemonsUrl(offset)
    const promises = await urls.map(url => pokemonAPI.getPokemon(url).then(response => response.data))
    dispatch(toggleIsFetching(true))
    await Promise.all(promises).then(response => dispatch(setPokemons(response)))
    dispatch(toggleIsFetching(false))
  } catch (error) {
    dispatch(setIsLoading(false))
  }

}
export const setPokemonProfile = (id) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const response = await pokemonAPI.setPokemonProfile(id)
  dispatch(setPokemonProfileSuccess(response.data))
  dispatch(toggleIsFetching(false))
}

export default pokemonReducer
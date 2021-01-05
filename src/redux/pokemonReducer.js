import {pokemonAPI} from "../api/api";

const SET_POKEMONS = 'pokemon/SET_POKEMONS'
const SET_POKEMON_PROFILE = 'pokemon/SET_POKEMON_PROFILE'
const TOGGLE_IS_FETCHING = 'pokemon/TOGGLE_IS_FETCHING'
const SET_IS_LOADING = 'pokemon/IS_LOADING'
const SET_BUTTON_DISABLED = 'pokemon/SET_BUTTON_DISABLED'

const initialState = {
  pokemons: [],
  profile: null,
  isFetching: false,
  isLoading: true,
  hasNextUrl: true
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
      return {...state, isLoading: false}
    case SET_BUTTON_DISABLED:
      return {...state, hasNextUrl: false}
    default:
      return state
  }
}

const setPokemons = (pokemons) => ({type: SET_POKEMONS, payload: pokemons})
const setPokemonProfileSuccess = (profile) => ({type: SET_POKEMON_PROFILE, payload: profile})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching})
const setIsLoading = () => ({type: SET_IS_LOADING})
const setButtonDisabled = () => ({type: SET_BUTTON_DISABLED})


export const getPokemons = (offset) => async (dispatch) => {
  try {
    const pokemons = await pokemonAPI.getPokemonsUrl(offset)
    const urls = pokemons.data.results.map(pokemon => pokemon.url)
    const promises = await urls.map(url => pokemonAPI.getPokemon(url).then(response => response.data))
    dispatch(toggleIsFetching(true))
    await Promise.all(promises).then(response => dispatch(setPokemons(response)))
    dispatch(toggleIsFetching(false))
    if (pokemons.data.next === null) dispatch(setButtonDisabled())
  } catch (error) {
    dispatch(setIsLoading())
  }
}


export const setPokemonProfile = (id) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const response = await pokemonAPI.setPokemonProfile(id)
  dispatch(setPokemonProfileSuccess(response.data))
  dispatch(toggleIsFetching(false))
}

export default pokemonReducer
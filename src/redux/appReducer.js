import {getPokemons} from "./pokemonReducer";

const INIT_SUCCESS = 'app/INIT_SUCCESS'

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {...state, initialized: true}
    default:
      return state
  }
}

const initializedSuccess = () => ({type: INIT_SUCCESS})

export const initializeApp = () => async (dispatch) => {
  await dispatch(getPokemons())
  dispatch(initializedSuccess())
}

export default appReducer
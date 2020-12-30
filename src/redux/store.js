import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import pokemonReducer from "./pokemonReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  poke: pokemonReducer,
  app: appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store

export default store
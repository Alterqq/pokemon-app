import React from 'react'
import styles from './PokemonList.module.css'
import PokemonCard from "./PokemonCard/PokemonCard";
import {connect} from "react-redux";
import {getPokemons} from "../../redux/pokemonReducer";
import {NavLink} from "react-router-dom";
import Alert from "../../common/Alert/Alert";

const PokemonList = ({pokemons, isLoading, ...props}) => {
  return (
      <div>
        {!isLoading
            ? <Alert/>
            : <div>
              <h1 className={styles.title}>Pokemons List</h1>
              <div className={styles.list}>
                {pokemons.map(pokemon => {
                  return <NavLink key={pokemon.id} className={styles.card} to={`/pokemon/${pokemon.id}`}><PokemonCard
                      pokemon={pokemon} key={pokemon.id} getName={props.getName}/></NavLink>
                })}
              </div>
            </div>}
      </div>

  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.poke.pokemons,
    isLoading: state.poke.isLoading
  }
}

export default connect(mapStateToProps, {getPokemons})(PokemonList)
import React, {useEffect} from 'react'
import styles from './Sidrebar.module.css'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {getPokemons} from "../../redux/pokemonReducer";

const Sidebar = ({pokemons, getName}) => {


  return (
      <aside className={styles.sidebar}>
        <h1 className={styles.title}>Pokemons:</h1>
        <div className={styles.list}>
          {pokemons.map(pokemon => <NavLink to={`/pokemon/${pokemon.id}`} className={styles.pokemonName} key={pokemon.id}>{getName(pokemon.name)}</NavLink>)}
        </div>
      </aside>
  )
}

const mapStateToProps = state => {
  return {
    pokemons: state.poke.pokemons
  }
}

export default connect(mapStateToProps, {})(Sidebar)

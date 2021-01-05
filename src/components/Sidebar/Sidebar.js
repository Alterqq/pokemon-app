import React from 'react'
import styles from './Sidrebar.module.css'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {getPokemons} from "../../redux/pokemonReducer";

const Sidebar = ({pokemons, getName}) => {
  return (
      <aside className={styles.sidebar}>
        <h1 className={styles.title}>Pokemons:</h1>
        <div className={styles.list}>
          {pokemons.map(pokemon => <NavLink to={`/pokemon/${pokemon.id}`} className={styles.pokemonName} key={pokemon.id}>
            <span>{getName(pokemon.name)}</span>
            <img className={styles.avatar} src={pokemon.sprites.front_default} alt="sprite"/></NavLink>)}
        </div>
      </aside>
  )
}

const mapStateToProps = state => {
  return {
    pokemons: state.poke.pokemons,
  }
}

export default connect(mapStateToProps, {getPokemons})(Sidebar)

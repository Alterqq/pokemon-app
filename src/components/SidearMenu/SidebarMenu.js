import React from 'react';
import styles from './SidebarMenu.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";



const SidebarMenu = ({pokemons, getName, setActiveMenu}) => {
  return (
      <div className={styles.sidebarMenu}>
        <span onClick={() => setActiveMenu(false)} className={styles.closeBtn}/>
        <div className={styles.sidebar}>
          <h1 className={styles.title}>Pokemons:</h1>
          <div className={styles.list}>
            {pokemons.map(pokemon => <NavLink to={`/pokemon/${pokemon.id}`} className={styles.pokemonName} key={pokemon.id}>
              <span>{getName(pokemon.name)}</span>
              <img className={styles.avatar} src={pokemon.sprites.front_default} alt="sprite"/></NavLink>)}
          </div>
        </div>
      </div>
  )
}
const mapStateToProps = state => {
  return {
    pokemons: state.poke.pokemons,
  }
}

export default connect(mapStateToProps, {})(SidebarMenu)
import React, {useEffect, useRef, useState} from 'react'
import styles from './PokemonList.module.css'
import PokemonCard from "./PokemonCard/PokemonCard";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Alert from "../../common/Alert/Alert";
import {getPokemons} from "../../redux/pokemonReducer";
import SidebarMenu from "../SidearMenu/SidebarMenu";

const PokemonList = ({pokemons, isLoading, getPokemons, isFetching, hasNextUrl, ...props}) => {

  const [offset, setOffset] = useState(0)
  const [activeMenu, setActiveMenu] = useState(false)
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      getPokemons(offset)
    }
  }, [getPokemons, offset]);

  return (
      <div>
        {!isLoading
            ? <Alert/>
            : <div>
              {activeMenu
                  ? <SidebarMenu pokemons={pokemons} getName={props.getName} setActiveMenu={setActiveMenu}/>
                  : <div>
                    <div className={styles.titleWrapper}>
                      <h1 className={styles.title}>Pokemons List</h1>
                      <div onClick={() => setActiveMenu(true)} className={styles.burgerBtn}><span/></div>
                    </div>
                    <div className={styles.list}>
                      {pokemons.map(pokemon => {
                        return <NavLink key={pokemon.id} className={styles.card} to={`/pokemon/${pokemon.id}`}>
                          <PokemonCard pokemon={pokemon} key={pokemon.id} getName={props.getName}/></NavLink>
                      })}
                    </div>
                    <button disabled={isFetching || !hasNextUrl}
                            className={styles.showMoreBtn}
                            onClick={() => setOffset(prev => prev + 20)}>Show more</button>
                  </div>}
            </div>}
      </div>

  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.poke.pokemons,
    isLoading: state.poke.isLoading,
    isFetching: state.poke.isFetching,
    hasNextUrl: state.poke.hasNextUrl,
  }
}

export default connect(mapStateToProps, {getPokemons})(PokemonList)
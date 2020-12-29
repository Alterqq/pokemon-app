import React from 'react'
import styles from './PokemonCard.module.css'
import unknownPokemon from '../../../assets/unknown-pokemon.jpg'

const PokemonCard = ({pokemon, getName}) => {
  return(
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img src={pokemon.sprites.other['official-artwork'].front_default || unknownPokemon} alt="" className={styles.pokemonImage}/>
          <div>{getName(pokemon.name)}</div>
        </div>
      </div>
  )
}

export default PokemonCard
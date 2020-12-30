import React, {useEffect} from 'react'
import styles from './PokemonPage.module.css'
import unknownPokemon from '../../assets/unknown-pokemon.jpg'
import {connect} from "react-redux";
import {setPokemonProfile} from "../../redux/pokemonReducer";
import Loader from "../../common/Loader/Loader";
import Params from "./Params/Params";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";

const PokemonPage = ({profile, setPokemonProfile, getName, isFetching, ...props}) => {

  useEffect(() => {
    const pokeId = props.match.params.pokeId
    setPokemonProfile(pokeId)

  }, [setPokemonProfile, props.match.params.pokeId])

  if (!profile) {
    return <Loader/>
  }

  return (
      <div>
        {isFetching
            ? <Loader/>
            : <div>
              <ScrollToTop/>
              <h1 className={styles.title}>{getName(profile.name)}</h1>
              <div className={styles.info}>
                <img className={styles.pokemonImage}
                     src={profile.sprites.other['official-artwork'].front_default || unknownPokemon} alt="pokeimage"/>
                <Params profile={profile} getName={getName}/>
              </div>
            </div>
        }
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.poke.profile,
    isFetching: state.poke.isFetching,
  }
}

export default compose(
    connect(mapStateToProps, {setPokemonProfile}),
    withRouter
)(PokemonPage)
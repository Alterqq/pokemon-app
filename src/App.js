import React, {useEffect, useState} from 'react'
import styles from "./App.module.css"
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PokemonList from "./components/PokemonList/PokemonList";
import {Redirect, Route, Switch} from "react-router-dom";
import PokemonPage from "./components/PokemonPage/PokemonPage";
import {connect} from "react-redux";
import {getPokemons} from "./redux/pokemonReducer";
import PageNotFound from "./common/PageNotFound/PageNotFound";

const App = ({getPokemons}) => {

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  const getName = (name) => {
    return name[0].toUpperCase()+name.slice(1)
  }
  return (
      <div className={styles.appWrapper}>
        <Header />
        <Sidebar getName={getName}/>
        <main className={styles.contentWrapper}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/list"/>}/>
            <Route path="/list" render={() => <PokemonList getName={getName}/>}/>
            <Route path="/pokemon/:pokeId" render={() => <PokemonPage getName={getName}/>}/>
            <Route path="*" render={() => <PageNotFound/>}/>
          </Switch>
        </main>
      </div>
  )
}

export default connect(null, {getPokemons})(App)

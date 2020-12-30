import React from 'react'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
      <header className={styles.header}>
        <NavLink className={styles.link} to="/list"><img src={logo} className={styles.logo} alt="logo"/></NavLink>
        <NavLink to="/list" className={styles.homeBtn}>Home</NavLink>
      </header>
  )
}

export default Header
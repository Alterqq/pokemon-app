import React from 'react'
import styles from './PageNotFound.module.css'
import notFound from '../../assets/notFound.png'

const PageNotFound = () => {
  return(
      <div className={styles.container}>
        <img className={styles.imageNotFound} src={notFound} alt="404 not found"/>
        <p className={styles.error}>404 Error. Page not found :(</p>
      </div>
  )
}

export default PageNotFound
import React from 'react'
import styles from './Alert.module.css'

const Alert = () => {
  return (
      <div className={styles.alert}>
          Oops... An error has occurred. Please reload the page or try again later.
      </div>
  )
}

export default Alert
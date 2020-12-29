import React from 'react'
import styles from './Alert.module.css'

const Alert = () => {
  return (
      <div className={styles.alert}>
        <div className={styles.content}>
          Oops... An error has occurred. Please reload the page or try again later.
        </div>
      </div>
  )
}

export default Alert
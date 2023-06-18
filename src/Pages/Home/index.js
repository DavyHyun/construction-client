import React from 'react'
import styles from './index.module.scss'
import background from '../../images/construction.png'

function index() {
  return (
    <div className={styles.wrapper}>
      <div style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", height: 1500, width: '100%', marginTop: -150}}> // 854, 853

      </div>
    </div>
  )
}

export default index
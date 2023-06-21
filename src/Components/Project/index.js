import React from 'react'
import styles from './index.module.scss'
import {MdNavigateNext}  from 'react-icons/md'


function index(props) {
  
    const {title, text} = props;
  return (
    <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h1>COMING SOON</h1>
          <div className={styles.line}></div>
          <div className={styles.endButton}>
            <p>View Now</p>
            <MdNavigateNext size={'2.2vw'} color='white'/>
          </div>
        </div>
    </div>
  )
}

export default index
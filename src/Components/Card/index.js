import React from 'react'
import styles from './index.module.scss'


function index(props) {
  
    const {icon, title, text, bulletPoints} = props;
  return (
    <div className={styles.wrapper}>
        <div className={styles.spacer}></div>
        {icon}
        <h1>{title}</h1>
        <div className={styles.line}></div>
        <p>{text}</p>
        {
            bulletPoints.map((item, i) => <div style={{width: '70%', textAlign: 'left'}}><li className={styles.listItem}>{item}</li></div>)
        }
    </div>
  )
}

export default index
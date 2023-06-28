import React from 'react'
import styles from './index.module.scss'
import { MdNavigateNext } from 'react-icons/md'


const Demo = (props) => {

  const { title, text } = props;
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{text}</p>
      <button className={styles.button}>
        COMING SOON
        {/* <MdNavigateNext size={20} color='black'/> */}
      </button>
    </div>
  )
}

export default Demo
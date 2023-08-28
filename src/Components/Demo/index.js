import React from 'react'
import styles from './index.module.scss'
import { MdNavigateNext } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'


const Demo = (props) => {

  const { title, text, img } = props;
  let navigation = useNavigate();

  const nav = () => {
    if (title === 'Residential Construction') {
      navigation('/RESIDENTIAL')
    } else {
      navigation('/COMMERCIAL')
    }
  }
  return (
    <div className={styles.wrapper} style={{ backgroundImage: img ? `url(${img})` : 'none', backgroundSize: img ? 'cover' : 'auto', // Use 'cover' if image exists, otherwise 'auto'
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',}}>
      <h1>{title}</h1>
      <p>{text}</p>
      {
          img != null ? 

          <button className={styles.button} onClick={nav}>
            VIEW NOW
            
            <MdNavigateNext size={20} color='black'/>
          </button>

          :

          <button className={styles.button}>
            COMING SOON
            
            {/* <MdNavigateNext size={20} color='black'/> */}
          </button>

      }
      
    </div>
  )
}

export default Demo
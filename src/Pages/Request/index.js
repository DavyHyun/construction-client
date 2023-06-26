import emailjs from '@emailjs/browser';
import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import Bottom from '../../Components/BottomInfo/index.js'
import { MdNavigateNext } from 'react-icons/md'

function index() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '33vw', width: '100%', marginTop: 10 }}>
        <h1>Request an Estimate</h1>
        <div className={styles.line}></div>
        <p>Fill out this short form, and a Jericho Foundation LLC. representative will contact you to provide you a FREE estimate. If you need immediate assistance, please call (708) 466-2533</p>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.eachInfo}>
          <h1>Form for Requesting an Estimate</h1>
          <p>Please fill out the form and we will get back to you soon</p>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.nameWrapper}>
          <input className={styles.nameInputLeft}/>
          <input className={styles.nameInputRight}/>
        </div>
        <input className={styles.normalInput}/>
        <input className={styles.normalInput}/>
        <input className={styles.normalInput}/>
        <input className={styles.messageInput}/>
      </div>

      <Bottom />

    </div>
  )
}

export default index
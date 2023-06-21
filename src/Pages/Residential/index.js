import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import Bottom from '../../Components/BottomInfo/index.js'
import {MdNavigateNext}  from 'react-icons/md'

function index() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", height: '33vw', width: '100%', marginTop: 10}}> 
        <h1>Residential Construction</h1>
        <div className={styles.line}></div>
        <p>Home / Residential</p>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.eachInfo}>
          <h1>What we do</h1>
          <p>We are a licensed general contracting company, license # JERICFL772LZ. Our license includes commercial construction and residential construction.</p>
        </div>
        <div className={styles.eachInfo}>
          <h1>The insurance claim process</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia purus non diam viverra aliquam. Fusce auctor eget sapien quis eleifend. Mauris facilisis nibh vitae justo tincidunt viverra. Donec iaculis maximus velit. Praesent volutpat pretium turpis non pellentesque. Maecenas pellentesque odio eu quam placerat, at faucibus libero gravida. Donec est velit, eleifend ac aliquam ut, gravida at justo. Curabitur ullamcorper sem in felis fringilla blandit. </p>
        </div>
      </div>
      <h1 style={{
        fontFamily: 'Merri-Bold',
        fontSize: '2vw',
        color: '#14364B',
        marginTop: '8%',
        textAlign: 'left',
        width: '87%',
        marginBottom: '3%'
      }}>What we've done</h1>
      <div className={styles.projectWrapper}>
        <Project title='COMING SOON'/>
        <Project title='COMING SOON'/>
      </div>
      <button className={styles.button}>
        VIEW ALL PROJECTS
        <MdNavigateNext size={20} color='#fff'/>
      </button>
      <Bottom />

    </div>
  )
}

export default index
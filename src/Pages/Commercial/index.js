import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import Bottom from '../../Components/BottomInfo/index.js'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '33vw', width: '100%', marginTop: 10 }}>
        <h1>Commercial Construction</h1>
        <div className={styles.line}></div>
        {/* <p>Home / Residential</p> */}
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.eachInfo}>
          <h1>What we do</h1>
          <p>Bathroom Remodeling
            <br /> Kitchen Remodeling
            <br /> Demolition
            <br /> Siding
            <br /> Painting
            <br /> Concrete Work
            <br /> Concrete masoning
            <br /> Concrete Finishing and Repair
            <br /> Extension building
            <br /> Flooring/ Hardwood
            <br /> Tiling
          </p>
        </div>
        <div className={styles.eachInfo}>
          <h1>Our certification</h1>
          <p>We are a licensed general contracting company, license # JERICFL772LZ. Our license
            includes commercial construction and residential construction.</p>
        </div>
      </div>
      <h1 style={{
        fontFamily: 'Merri-Bold',
        fontSize: '2vw',
        color: '#14364B',
        marginTop: '8%',
        textAlign: 'left',
        width: '87%',
        marginBottom: '3%',
        paddingLeft: '8%',
      }}>What we've done</h1>
      <div className={styles.projectWrapper}>
        <Project title='COMING SOON' />
        <Project title='COMING SOON' />
      </div>
      <button className={styles.button}>
        <Link to={'/ABOUT'} style={{ textDecoration: 'none', color: 'white', fontSize: '1.2vw', fontFamily: 'Inter-Regular', width: '100%', }}>
          VIEW OUR PROJECTS
          <MdNavigateNext size={20} color='#fff' />
        </Link>
      </button>
      <Bottom />

    </div>
  )
}

export default index
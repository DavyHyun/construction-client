import React from 'react'
import styles from './index.module.scss'
import background from '../../images/MainImage.jpg'
import Card from '../../Components/Card/index.js'
import { MdApartment } from 'react-icons/md'
import { MdHouse } from 'react-icons/md'
import { MdConstruction } from 'react-icons/md'
import { MdNavigateNext } from 'react-icons/md'
import MiddleImage from '../../images/infoImage.jpg'
import Demo from '../../Components/Demo/index.js'
import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar'


// const services = 'We provide services that include:';
const services = '';
const commercial = [
  'Bathroom Remodeling',
  'Kitchen Remodeling',
  'Demolition',
  'Siding',
  'Painting',
  'Concrete Work',
  'Concrete masoning',
  'Concrete Finishing and Repair',
  'Extension building'
];

const residential = [
  'Bathroom Remodeling',
  'Kitchen Remodeling',
  'Demolition',
  'Siding',
  'Painting',
  'Concrete Work',
  'Concrete masoning',
  'Concrete Finishing and Repair',
  'Extension building'
]

function index() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: '90vw', width: '100%', marginTop: -150 }}>
        <p>JERICHO FOUNDATION LLC.</p>
        <h1>
          RESIDENTIAL AND COMMERCIAL CONSTRUCTION MANAGEMENT
        </h1>
        <div className={styles.cardWrapper}>
          <Card icon={<MdApartment size={50} color='#14364B' />} title={'Commercial Construction'} text={services} bulletPoints={commercial} />
          <Card icon={<MdHouse size={50} color='#14364B' />} title={'Residential Construction'} text={services} bulletPoints={residential} />
        </div>
      </div>
      {/* <text className={styles.middleText}>The fusion of professionals skilled in both construction and architectural fields.</text> */}
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <h1>Trust in Jericho Foundation LLC for reliable results</h1>
          <p>Happy to introduce our new construction company, a dream finally came true for an-18 years- experienced construction worker, he proved that working hard and dedication will lead to success. Our mission is to show the same dedication to you and to work hard to deliver your dream home, office, restaurant, or store to life, and to be a part of your success.</p>
          <li>We strive to create a positive, collaborative work environment</li>
          <li>Safety is our top priority</li>
          <li>We always prioritize honesty and kindness in all of our interactions with our customers</li>
          <button className={styles.button}>
            <Link to={'/ABOUT'} style={{ textDecoration: 'none', color: 'white', fontSize: '1.2vw', fontFamily: 'Inter-Regular', width: '100%', }}>
              VIEW OUR PROJECTS &nbsp;<b>{'>'}</b>
              {/* <MdNavigateNext size={20} color='#fff' /> */}
            </Link>
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={MiddleImage} width='90%' height="100%" />
        </div>
      </div>
      <div className={styles.demoWrapper}>
        <Demo title='Residential Construction' text='View our projects related to residential constructions' />
        <Demo title='Commercial Construction' text='View our projects related to commercial constructions' />
      </div>
      <BottomBar />
    </div>
  )
}

export default index
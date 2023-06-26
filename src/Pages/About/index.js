import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import Bottom from '../../Components/BottomInfo/index.js'
import Card from '../../Components/Card/index.js'
import { MdNavigateNext } from 'react-icons/md'
import { MdApartment } from 'react-icons/md'
import { MdHouse } from 'react-icons/md'
import { MdConstruction } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsClockFill, BsFillTelephoneFill } from 'react-icons/bs'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";

const services = 'We provide services that include:';
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
  'Painting'
]

const images = [
  {
    original: require('../../images/gallery1.jpg'),
    thumbnail: require('../../images/gallery1_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery2.jpg'),
    thumbnail: require('../../images/gallery2_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery3.jpg'),
    thumbnail: require('../../images/gallery3_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery4.jpg'),
    thumbnail: require('../../images/gallery4_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery5.jpg'),
    thumbnail: require('../../images/gallery5_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery6.jpg'),
    thumbnail: require('../../images/gallery6_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery7.jpg'),
    thumbnail: require('../../images/gallery7_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery8.jpg'),
    thumbnail: require('../../images/gallery8_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery9.jpg'),
    thumbnail: require('../../images/gallery9_thumbnail_720x720.jpg')
  },
  {
    original: require('../../images/gallery10.jpg'),
    thumbnail: require('../../images/gallery10_thumbnail_720x720.jpg')
  },
]

function index() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '33vw', width: '100%', marginTop: 10 }}>
        <h1>Our soultions are unparalleled in quality</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.infoWrapper}>
          <div className={styles.eachInfo}>
            <h1>About Us</h1>
            <p>Our construction company is a General Contracting firm with 18 years of experience in Dubai, UAE, and Jordan. We have now established ourselves in Seattle, Washington State, to become a part of this beautiful community. We are grateful to be here and look forward to giving back to the community that has welcomed us with open arms. The services will be from our family to yours.</p>
          </div>
        </div>
        <div className={styles.images}>


          <ImageGallery items={images} />
        </div>
      </div>


      {/* <h1 style={{
        fontFamily: 'Merri-Bold',
        fontSize: '2vw',
        color: '#14364B',
        marginTop: '6%',
        textAlign: 'left',
        width: '87%',
        marginBottom: '3%'
      }}>Services</h1>
      <div className={styles.cardWrapper}>
        <Card icon={<MdApartment size={35} color='#14364B' />} title={'Commercial Construction'} text={services} bulletPoints={commercial} />
        <Card icon={<MdHouse size={35} color='#14364B' />} title={'Rediential Construction'} text={services} bulletPoints={residential} />
        <Card icon={<MdConstruction size={35} color='#14364B' />} title={'Construction Management'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia purus non diam viverra aliquam. Fusce auctor eget sapien quis eleifend. Mauris facilisis nibh vitae justo tincidunt viverra."} bulletPoints={[]} />
      </div> */}
      {/* <h1 style={{
        fontFamily: 'Merri-Bold',
        fontSize: '2vw',
        color: '#14364B',
        marginTop: '8%',
        textAlign: 'left',
        width: '87%',
      }}>Hours</h1>
      <div className={styles.hoursWrapper}>
        <div className={styles.eachRow}>
          <BsClockFill size={25} color='#14364B' />
          <h1>Mon - Fri:  8am - 5pm</h1>
        </div>
        <div className={styles.eachRow}>
          <BsClockFill size={25} color='#14364B' />
          <h1>Sat - Sun: Closed </h1>
        </div>
      </div> */}

      <Bottom />

    </div>
  )
}

export default index
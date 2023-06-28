import React from 'react'
import styles from './index.module.scss'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";
import PageHeader from '../../Components/PageHeader/index.js';
import BottomBar from '../../Components/BottomBar/index.js'
import EachInfo from '../../Components/EachInfo';

const hardcodedH1 = "Our soultions are unparalleled in quality";
const hardcodedH2 = "About Us"
const hardcodedP1 = "Our construction company is a General Contracting firm with 18 years of experience in Dubai, UAE, and Jordan. We have now established ourselves in Seattle, Washington State, to become a part of this beautiful community. We are grateful to be here and look forward to giving back to the community that has welcomed us with open arms. The services will be from our family to yours.";
const hardcodedImages = [
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

const About = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader hardcodedH1={hardcodedH1}/>

      <div className={styles.contentWrapper}>
        <div className={styles.infoWrapper}>
          <EachInfo hardcodedH1={hardcodedH2} hardcodedP1={hardcodedP1}/>
        </div>
        <div className={styles.images}>
          <ImageGallery items={hardcodedImages} />
        </div>
      </div>
      
      <BottomBar />
    </div>
  )
}

export default About
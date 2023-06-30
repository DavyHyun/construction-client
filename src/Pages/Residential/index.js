import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";

const Residential = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  const hardcodedImages = [
    {
      original: require('../../images/gallery19.png'),
      thumbnail: require('../../images/gallery19_thumbnail_720x720.jpg'),
      renderItem: (item) => (
        <div className="image-gallery-image">
          {item.embedUrl && (
            <iframe
              width="100%"
              height="500vh"
              src={item.embedUrl}
              title={item.original}
              allowFullScreen
            />
          )}
        </div>
      ),

      embedUrl: 'https://www.youtube.com/embed/RdjEAdHXGR4',
    },
    {
      original: require('../../images/gallery15.jpg'),
      thumbnail: require('../../images/gallery15_thumbnail_720x720.jpg')
    },
    {
      original: require('../../images/gallery16.jpg'),
      thumbnail: require('../../images/gallery16_thumbnail_720x720.jpg')
    },
    {
      original: require('../../images/gallery17.jpg'),
      thumbnail: require('../../images/gallery17_thumbnail_720x720.jpg')
    },
    {
      original: require('../../images/gallery18.jpg'),
      thumbnail: require('../../images/gallery18_thumbnail_720x720.jpg')
    },
  ]

  const getFontSize = () => {
    if (width > 900) {
      return '1.2vw'
    } else {
      return '3.15vw'
    }
  }
  //https://www.youtube.com/embed/PR9WGwoL1iE
  //https://www.youtube.com/embed/Ayl3tqxvzvA


  return (
    <div className={styles.wrapper}>

      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '33vw', width: '100%', marginTop: 10 }}>
        <h1>Residential Construction</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.eachInfo}>
          <div className={styles.eachInfoSub}>
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
              <br /> Drywall Repair
              <br /> Patios
            </p>
          </div>
          <div className={styles.eachInfoSub}>
            <h1>Our certification</h1>
            <p>We are a licensed general contracting company, license # JERICFL772LZ. Our license
              includes commercial construction and residential construction.</p>
          </div>
        </div>
        <div className={styles.image}>
          <ImageGallery items={hardcodedImages} />
        </div>
      </div>
      <h1>What we've done</h1>
      <div className={styles.projectWrapper}>
        <Project title='COMING SOON' />
        <Project title='COMING SOON' />
      </div>
      <button className={styles.button}>
        <Link to={'/ABOUT'} style={{ textDecoration: 'none', color: 'white', fontSize: getFontSize(), fontFamily: 'Inter-Regular', width: '100%', }}>
          VIEW OUR PROJECTS &nbsp;<b>{'>'}</b>
          {/* <MdNavigateNext size={20} color='#fff' /> */}
        </Link>
      </button>
      <BottomBar />

    </div>
  )
}

export default Residential;
// import React from 'react'
// import styles from './index.module.scss'
// import background from '../../images/topBackground.jpg'
// import Project from '../../Components/Project/index.js'
// import { Link } from 'react-router-dom'
// import BottomBar from '../../Components/BottomBar/index.js'
// import PageHeader from '../../Components/PageHeader'
// import EachInfo from '../../Components/EachInfo'
// import NavButton from '../../Components/NavButton'

// const Commercial = () =>  {
//   const hardcodedH1 = "Commercial Construction";
//   const hardcodedH2 = "What we do";
//   const hardcodedP1 = ["Bathroom Remodeling", "Kitchen Remodeling", "Demolition", "Siding", "Painting", "Concrete Work", "Concrete Masoning", "Concrete Finishing and Repair", "Extension Building", "Flooring/Hardwood", "Tiling"];
//   const hardcodedH3 = "Our certification";
//   const hardcodedP2 = "We are a licensed general contracting company, license # JERICFL772LZ. Our license includes commercial construction and residential construction.";
//   const hardcodedH4 = "What we've done";
//   const hardcodedProjTitle1 = "COMING SOON";
//   const hardcodedProjTitle2 = "COMING SOON";
//   const hardcodedNavRoute1 = "/ABOUT";
//   const hardcodedButtonText1 = "VIEW OUR PROJECTS";

//   return (
//     <div className={styles.wrapper}>
//       <PageHeader hardcodedH1={hardcodedH1} />
//       <div className={styles.contentWrapper}>
//         <EachInfo hardcodedH1={hardcodedH2} hardcodedP1={hardcodedP1} />
//         <EachInfo hardcodedH1={hardcodedH3} hardcodedP1={hardcodedP2} />
//       </div>
//       <h1>{hardcodedH4}</h1>
//       <div className={styles.contentWrapper}>
//         <Project title={hardcodedProjTitle1} />
//         <Project title={hardcodedProjTitle2} />
//       </div>
//       <NavButton route={hardcodedNavRoute1} hardcodedButtonText1={hardcodedButtonText1}/>
//       <BottomBar />
//     </div>
//   )
// }

// export default Commercial

import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";

const Commercial = () => {
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
      original: require('../../images/gallery20.png'),
      thumbnail: require('../../images/gallery20_thumbnail_720x720.jpg'),
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
      
      embedUrl: 'https://www.youtube.com/embed/Ayl3tqxvzvA',
    },
    {
      original: require('../../images/gallery11.jpg'),
      thumbnail: require('../../images/gallery11_thumbnail_720x720.jpg')
    },
    {
      original: require('../../images/gallery12.jpg'),
      thumbnail: require('../../images/gallery12_thumbnail_720x720.jpg')
    },
    {
      original: require('../../images/gallery13.jpg'),
      thumbnail: require('../../images/gallery13_thumbnail_720x720.jpg')
    },
    {
      original: require('../../images/gallery14.jpg'),
      thumbnail: require('../../images/gallery14_thumbnail_720x720.jpg')
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
        <h1>Commercial Construction</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.eachInfo}>
          <div className={styles.eachInfoSub}>
            <h1>What we do</h1>
            <p>Bathroom Remodeling
            <br /> Kitchen Remodeling
            <br /> Demolition
            <br /> Painting
            <br /> Concrete Work
            <br /> Concrete masoning
            <br /> Concrete Finishing and Repair
            <br /> Flooring/ Hardwood
            <br /> Tiling
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

export default Commercial;
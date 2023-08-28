import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'

import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";
import { useLocation } from 'react-router-dom';

import { ConstructionOutlined } from '@mui/icons-material'
import { typographyClasses } from '@mui/material'

const ProjectPage = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const location = useLocation();
  const receivedData = location.state.project;



  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
      window.scrollTo(0, 0);
  

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);


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
        <h2 style={{fontSize: '1.4vw', color: '#14364B', fontFamily: 'Inter-Light', marginTop: '1.5%'}}>{receivedData.location}</h2>
      </div>
      <div className={styles.main}>

        <div className={styles.projectInfo}>
            <ImageGallery items={receivedData.photos} additionalClass={styles.image} />
            <div className={styles.infoText}>
              <h1 style={{fontFamily:'Inter-Regular', fontSize: '2vw'}}>{receivedData.location}</h1>
              <h2 style={{fontFamily: 'Inter-Light', fontSize: '1vw' }}>{receivedData.description}</h2>
            </div>

            <div className={styles.infoCategory}>
              
              <div className={styles.category}>
                <h1>Property Type</h1>
                <h1>Year</h1>
                <h1>Category</h1>
              </div>
              <div className={styles.categoryAns}>
                <h1>{receivedData.type}</h1>
                <h1>{receivedData.year}</h1>
                <h1>{receivedData.category}</h1>
              </div>

            </div>

        </div>

        <div className={styles.more}>
          <h1>View Similar Projects</h1>
          
          <h2>More Coming Soon!</h2>
        </div>
      </div>

      <BottomBar />

    </div>
  )
}

export default ProjectPage;
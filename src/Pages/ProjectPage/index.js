import React, { useState } from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import './index.css';

import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar'
import ImageGallery from 'react-image-gallery'
// import "react-image-gallery/styles/scss/image-gallery.scss";
import { useLocation } from 'react-router-dom';

import { ConstructionOutlined } from '@mui/icons-material'
import { typographyClasses } from '@mui/material'

const ProjectPage = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const location = useLocation();
  const receivedData = location.state.project;
  let photos = receivedData.photos;
  photos.forEach(photo => {
    if (photo.embedUrl) {
      // Add the renderItem function to the photo object
      photo.renderItem = (item) => (
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
      );
    }
    return photo;
  });

  

  const [fontSize, setFontSize] = useState('1.2vw');
  const [fontSizeLocation, setFontSizeLocation] = useState('2vw');
  const [fontSizeDesc, setFontSizeDesc] = useState('1vw');



  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    getFontSize();
    window.scrollTo(0, 0);


    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, [width]);


  const getFontSize = () => {
    if (width > 500) {
      setFontSize('1.2vw');
      setFontSizeDesc('1vw');
      setFontSizeLocation('2vw');
    } else {
      setFontSize('3.4vw');
      setFontSizeDesc('3.5vw');
      setFontSizeLocation('5vw');
    }
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", height: '33vw', width: '110vw', marginTop: 10, marginLeft: 15 }}>
        <h1>{receivedData.category} Construction</h1>
        <div className={styles.line}></div>
        <h2 style={{ fontSize: `${fontSize}`, color: '#14364B', fontFamily: 'Inter-Light', marginTop: '1.5%' }}>{receivedData.location}</h2>
      </div>
      <div className={styles.main}>

        <div className={styles.projectInfo}>
          <div className={styles.image}>
          <ImageGallery items={receivedData.photos} />
          </div>
          <div className={styles.infoText}>
            <h1 style={{ fontFamily: 'Inter-Regular', fontSize: `${fontSizeLocation}` }}>{receivedData.location}</h1>
            <h2 style={{ fontFamily: 'Inter-Light', fontSize: `${fontSizeDesc}` }}>{receivedData.description}</h2>
          </div>

          <div className={styles.infoCategory}>

            <div className={styles.category} >
              <h1 style={{ fontSize: `${fontSizeDesc}` }}>Property Type</h1>
              <h1 style={{ fontSize: `${fontSizeDesc}` }}>Year</h1>
              <h1 style={{ fontSize: `${fontSizeDesc}` }}>Category</h1>
            </div>
            <div className={styles.categoryAns}>
              <h1 style={{ fontSize: `${fontSizeDesc}` }}>{receivedData.type}</h1>
              <h1 style={{ fontSize: `${fontSizeDesc}` }}>{receivedData.year}</h1>
              <h1 style={{ fontSize: `${fontSizeDesc}` }}>{receivedData.category}</h1>
            </div>

          </div>

        </div>
      </div>

      <BottomBar />

    </div>
  )
}

export default ProjectPage;
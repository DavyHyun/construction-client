import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'

import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss";

const projects = [
  {
    id:1,
    title: 'Fireplace Rennovations',
    location: 'Greater Seattle WA Area',
    type: 'House',
    year: '2023',
    category: 'Residential',
    description: 'Multiple fire place renovations done around the greater Seattle area.',
    photos: [
      {
        original: require('../../images/residential_fireplace_1.jpg'),
        thumbnail: require('../../images/residential_fireplace_1_720x720.jpg'),
      },
      {
        original: require('../../images/residential_fireplace_2.jpg'),
        thumbnail: require('../../images/residential_fireplace_2_720x720.jpg'),
      },
      {
        original: require('../../images/residential_fireplace_3.jpg'),
        thumbnail: require('../../images/residential_fireplace_3_720x720.jpg'),
      },
      {
        original: require('../../images/residential_fireplace_4.jpg'),
        thumbnail: require('../../images/residential_fireplace_4_720x720.jpg'),
      },
      {
        original: require('../../images/residential_fireplace_5.jpg'),
        thumbnail: require('../../images/residential_fireplace_5_720x720.jpg'),
      },
      {
        original: require('../../images/residential_fireplace_6.jpg'),
        thumbnail: require('../../images/residential_fireplace_6_720x720.jpg'),
      },
    ],
  },
  {
    id: 2,
    title: 'Bathroom Renovation',
    location: 'Shoreline WA',
    type: 'Residential Single Family',
    year: '2023',
    category: 'Residential',
    description: 'Remodeling the bathtub bathroom to a shower box.',
    photos: [
      {
        original: require('../../images/residential_bathroom_1_1.jpg'),
        thumbnail: require('../../images/residential_bathroom_1_1_720x720.jpg'),
      },
      {
        original: require('../../images/residential_bathroom_1_2.jpg'),
        thumbnail: require('../../images/residential_bathroom_1_2_720x720.jpg'),
      },
      {
        original: require('../../images/residential_bathroom_1_3.jpg'),
        thumbnail: require('../../images/residential_bathroom_1_3_720x720.jpg'),
      },
      {
        original: require('../../images/residential_bathroom_1_4.jpg'),
        thumbnail: require('../../images/residential_bathroom_1_4_720x720.jpg'),
      },
      {
        original: require('../../images/residential_bathroom_1_5.jpg'),
        thumbnail: require('../../images/residential_bathroom_1_5_720x720.jpg'),
      },
    ],
  },
  {
    id: 3,
    title: 'Patio Renovation',
    location: 'Shoreline WA',
    type: 'Residential Single Family',
    year: '2023',
    category: 'Residential',
    description: 'Remodeling the patio enclosure to a sunroom.',
    photos: [
      {
        original: require('../../images/residential_patio_1_1.jpg'),
        thumbnail: require('../../images/residential_patio_1_1_720x720.jpg'),
      },
      {
        original: require('../../images/residential_patio_1_2.jpg'),
        thumbnail: require('../../images/residential_patio_1_2_720x720.jpg'),
      },
      {
        original: require('../../images/residential_patio_1_3.jpg'),
        thumbnail: require('../../images/residential_patio_1_3_720x720.jpg'),
      },
      {
        original: require('../../images/residential_patio_1_4.jpg'),
        thumbnail: require('../../images/residential_patio_1_4_720x720.jpg'),
      },
      {
        original: require('../../images/residential_patio_1_5.webp'),
        thumbnail: require('../../images/residential_patio_1_5_720x720.webp'),
      },
      {
        original: require('../../images/residential_patio_1_6.webp'),
        thumbnail: require('../../images/residential_patio_1_6_720x720.webp'),
      },
      {
        original: require('../../images/residential_patio_1_7.webp'),
        thumbnail: require('../../images/residential_patio_1_7_720x720.webp'),
      },
      {
        original: require('../../images/residential_patio_1_8.webp'),
        thumbnail: require('../../images/residential_patio_1_8_720x720.webp'),
      },
      {
        original: require('../../images/residential_patio_1_9.webp'),
        thumbnail: require('../../images/residential_patio_1_9_720x720.webp'),
      },
      {
        original: require('../../images/residential_patio_1_10.webp'),
        thumbnail: require('../../images/residential_patio_1_10_720x720.webp'),
      },
      {
        original: require('../../images/residential_patio_1_11.webp'),
        thumbnail: require('../../images/residential_patio_1_11_720x720.webp'),
      },
    ],
  },
  {
    id: 4,
    title: 'Flooring Renovation',
    location: 'Shoreline WA',
    type: 'Residential Single Family',
    year: '2023',
    category: 'Residential',
    description: 'Demolishing the old floor to renovate the hardwood floors.',
    photos: [
      {
        original: require('../../images/residential_flooring_thumbnail.png'),
        thumbnail: require('../../images/residential_flooring_thumbnail_720x720.png'),        
        embedUrl: 'https://www.youtube.com/embed/KJYjFrq9x3g',
      },
      {
        original: require('../../images/residential_flooring_1.jpeg'),
        thumbnail: require('../../images/residential_flooring_1_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_2.jpeg'),
        thumbnail: require('../../images/residential_flooring_2_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_3.jpeg'),
        thumbnail: require('../../images/residential_flooring_3_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_4.jpeg'),
        thumbnail: require('../../images/residential_flooring_4_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_5.jpeg'),
        thumbnail: require('../../images/residential_flooring_5_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_6.jpeg'),
        thumbnail: require('../../images/residential_flooring_6_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_7.jpg'),
        thumbnail: require('../../images/residential_flooring_7_720x720.jpeg'),
      },
      {
        original: require('../../images/residential_flooring_8.webp'),
        thumbnail: require('../../images/residential_flooring_8_720x720.webp'),
      },
      {
        original: require('../../images/residential_flooring_9.webp'),
        thumbnail: require('../../images/residential_flooring_9_720x720.webp'),
      },
      {
        original: require('../../images/residential_flooring_10.webp'),
        thumbnail: require('../../images/residential_flooring_10_720x720.webp'),
      },
      {
        original: require('../../images/residential_flooring_11.webp'),
        thumbnail: require('../../images/residential_flooring_11_720x720.webp'),
      },
      {
        original: require('../../images/residential_flooring_12.webp'),
        thumbnail: require('../../images/residential_flooring_12_720x720.webp'),
      },
      {
        original: require('../../images/residential_flooring_13.webp'),
        thumbnail: require('../../images/residential_flooring_13_720x720.webp'),
      },
    ],
  },

]

const Residential = () => {
  const [width, setWidth] = React.useState(window.innerWidth);


  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.scrollTo(0, 0);

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
    {
      original: require('../../images/gallery22.jpg'),
      thumbnail: require('../../images/gallery22.jpg')
    },
  ]
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
        <Project title={projects[0].title} img={projects[0].photos[0].original} project={projects[0]}/>
        <Project title={projects[1].title} img={projects[1].photos[4].original} project={projects[1]}/>
      </div>
      <div className={styles.projectWrapper}>
        <Project title={projects[2].title} img={projects[2].photos[0].original} project={projects[2]}/>
        <Project title={projects[3].title} img={projects[3].photos[5].original} project={projects[3]}/>
      </div>
      <BottomBar />

    </div>
  )
}

export default Residential;
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

  const projects = [
    {
      id: 1,
      title: 'Restaurant Rennovations',
      location: 'Colombia Way, Seattle, WA',
      type: 'Restaurant',
      year: '2023',
      category: 'Commercial',
      description: 'Restaurant preparation from scratch, bar design, kitchen, walk in cooler, hood installation.',
      photos: [
        {
          original: require('../../images/commercial_restaurant_1_1.png'),
          thumbnail: require('../../images/commercial_restaurant_1_1_720x720.png'),
          embedUrl: 'https://www.youtube.com/embed/6KInYOESll0',
        },
        {
          original: require('../../images/commercial_restaurant_1_2.png'),
          thumbnail: require('../../images/commercial_restaurant_1_2_720x720.png'),          
          embedUrl: 'https://www.youtube.com/embed/g8pTanZpVeo',
        },
        {
          original: require('../../images/commercial_restaurant_1_3.png'),
          thumbnail: require('../../images/commercial_restaurant_1_3_720x720.png'),
          embedUrl: 'https://www.youtube.com/embed/cPcwZsIqWXo',
        },
        {
          original: require('../../images/commercial_restaurant_1_4.png'),
          thumbnail: require('../../images/commercial_restaurant_1_4_720x720.png'),
        },
        {
          original: require('../../images/commercial_restaurant_1_5.png'),
          thumbnail: require('../../images/commercial_restaurant_1_5_720x720.png'),
        },
      ],
    },  
    {
      id: 2,
      title: 'The Port Of Peri Peri',
      location: '22612 Bothell Everett Hwy Bothell, WA',
      type: 'Restaurant',
      year: '2024 (Feb - Aug)',
      category: 'Commercial',
      description: 'Grand Openeing is September 2nd, 2024! Walls, floors, bathrooms, full kitchen/hood. \n Plumbing, electrical work, ceiling / countertops / bricks / paint / full renovations, inspection pass guaranteed.',
      photos: [
        {
          original: require('../../images/commericalP2/FCC2D6E1-BCEE-434A-AC0F-550C48FF2BAD.jpg'),
          thumbnail: require('../../images/commericalP2/FCC2D6E1-BCEE-434A-AC0F-550C48FF2BAD.jpg'),
        },
        {
          original: require('../../images/commericalP2/06E82F23-C4E6-40C1-A934-C40E03895880.jpg'),
          thumbnail: require('../../images/commericalP2/06E82F23-C4E6-40C1-A934-C40E03895880.jpg'),          
        },
        {
          original: require('../../images/commericalP2/CFF22FC9-B5C6-434A-AE46-0423748A5317.jpg'),
          thumbnail: require('../../images/commericalP2/CFF22FC9-B5C6-434A-AE46-0423748A5317.jpg'),
        },
        {
          original: require('../../images/commericalP2/C922F5EF-9B8C-4BC9-B751-60234E4B6256.jpg'),
          thumbnail: require('../../images/commericalP2/C922F5EF-9B8C-4BC9-B751-60234E4B6256.jpg'),
        },
        {
          original: require('../../images/commericalP2/B5F8A3D4-C608-437F-98DF-825F560E53B5.jpg'),
          thumbnail: require('../../images/commericalP2/B5F8A3D4-C608-437F-98DF-825F560E53B5.jpg'),
        },
        {
          original: require('../../images/commericalP2/377359D1-3EB9-4CF8-ACDC-CC531E6F1F40.jpg'),
          thumbnail: require('../../images/commericalP2/377359D1-3EB9-4CF8-ACDC-CC531E6F1F40.jpg'),
        },
        {
          original: require('../../images/commericalP2/75510ADE-4781-46D5-9C30-6AB822CD39A1.jpg'),
          thumbnail: require('../../images/commericalP2/75510ADE-4781-46D5-9C30-6AB822CD39A1.jpg'),
        },
        {
          original: require('../../images/commericalP2/17509BB0-85C3-4F28-B264-7859E89AD95F.jpg'),
          thumbnail: require('../../images/commericalP2/17509BB0-85C3-4F28-B264-7859E89AD95F.jpg'),
        },
        {
          original: require('../../images/commericalP2/5808DA3D-9305-4E89-9A2D-CB9355CF2D0A.jpg'),
          thumbnail: require('../../images/commericalP2/5808DA3D-9305-4E89-9A2D-CB9355CF2D0A.jpg'),
        },
        {
          original: require('../../images/commericalP2/512F630D-B173-4C6E-B071-4A156461D063.jpg'),
          thumbnail: require('../../images/commericalP2/512F630D-B173-4C6E-B071-4A156461D063.jpg'),
        },
        {
          original: require('../../images/commericalP2/159E1865-4922-4D6B-B465-9D38D75B7AEA.jpg'),
          thumbnail: require('../../images/commericalP2/159E1865-4922-4D6B-B465-9D38D75B7AEA.jpg'),
        },
        {
          original: require('../../images/commericalP2/127E538F-58BA-4896-8E96-E14E84DEE582.jpg'),
          thumbnail: require('../../images/commericalP2/127E538F-58BA-4896-8E96-E14E84DEE582.jpg'),
        },
        {
          original: require('../../images/commericalP2/94CA3DC8-5E69-4DF8-B85F-133051C445C9.jpg'),
          thumbnail: require('../../images/commericalP2/94CA3DC8-5E69-4DF8-B85F-133051C445C9.jpg'),
        },
        {
          original: require('../../images/commericalP2/08D15FF6-D3C5-4056-B5B3-C660278FBB84.jpg'),
          thumbnail: require('../../images/commericalP2/08D15FF6-D3C5-4056-B5B3-C660278FBB84.jpg'),
        },
        {
          original: require('../../images/commericalP2/06E82F23-C4E6-40C1-A934-C40E03895880.jpg'),
          thumbnail:require('../../images/commericalP2/06E82F23-C4E6-40C1-A934-C40E03895880.jpg'),
        },
        {
          original: require('../../images/commericalP2/1B9C8086-5932-4D91-B608-2A1A6BEFF11B.jpg'),
          thumbnail:require('../../images/commericalP2/1B9C8086-5932-4D91-B608-2A1A6BEFF11B.jpg'),
        },
      ],
    },  
  ]

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
      
      embedUrl: 'https://www.youtube.com/embed/hW6iV3_RfeQ',
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
      <Project title={projects[0].title} img={projects[0].photos[0].original} project={projects[0]}/>
      <Project title={projects[1].title} img={projects[1].photos[0].original} project={projects[1]}/>
      </div>
      {/* <button className={styles.button}>
        <Link to={'/ABOUT'} style={{ textDecoration: 'none', color: 'white', fontSize: getFontSize(), fontFamily: 'Inter-Regular', width: '100%', }}>
          VIEW OUR PROJECTS &nbsp;<b>{'>'}</b>
        </Link>
      </button> */}
      <BottomBar />

    </div>
  )
}

export default Commercial;
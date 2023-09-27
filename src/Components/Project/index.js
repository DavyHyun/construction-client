import React, {useState} from 'react'
import styles from './index.module.scss'
import { MdNavigateNext } from 'react-icons/md'
import {useNavigate } from 'react-router-dom'


const Project = (props) => {

  const { title, img, project } = props;
  let navigate = useNavigate();
  const [fontSize, setFontSize] = useState('1.2vw');
  const [width, setWidth] = React.useState(window.innerWidth);
  
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
    } else {
      setFontSize('3.4vw');
    }
  }
  const navToProject = () => {
    navigate(`/RESIDENTIAL/${project.id}`, { state: {project: project}})
  }

  return (
    <div className={styles.wrapper} style={{ backgroundImage: img ? `url(${img})` : 'none', backgroundSize: img ? 'cover' : 'auto', // Use 'cover' if image exists, otherwise 'auto'
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',}}>
      <div className={styles.inner}>
        {
          img != null ?
          <h1>{title}</h1>
          :
          <h1>COMING SOON</h1>
        }
        <div className={styles.line}></div>
        <div className={styles.endButton}>
          {
            img != null ?
            <div onClick={navToProject} style={{display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
              <p style={{color: 'white', fontSize: `${fontSize}`}} >View Project</p>
              <MdNavigateNext size={'2.2vh'} color='white'/> 
            </div>
            :
            <p>View Soon</p>
          }

        </div>
      </div>
    </div>
  )
}

export default Project
import React from 'react'
import styles from './index.module.scss'
import { MdNavigateNext } from 'react-icons/md'
import {useNavigate } from 'react-router-dom'


const Project = (props) => {

  const { title, img, project } = props;
  let navigate = useNavigate();

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
              <p style={{color: 'white', fontSize: '3.5vw'}} >View Project</p>
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
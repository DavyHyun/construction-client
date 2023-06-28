import React from 'react'
import styles from './index.module.scss'
import background from '../../images/topBackground.jpg'
import Project from '../../Components/Project/index.js'
import { Link } from 'react-router-dom'
import BottomBar from '../../Components/BottomBar/index.js'
import PageHeader from '../../Components/PageHeader'
import EachInfo from '../../Components/EachInfo'
import NavButton from '../../Components/NavButton'

const Commercial = () =>  {
  const hardcodedH1 = "Commercial Construction";
  const hardcodedH2 = "What we do";
  const hardcodedP1 = ["Bathroom Remodeling", "Kitchen Remodeling", "Demolition", "Siding", "Painting", "Concrete Work", "Concrete Masoning", "Concrete Finishing and Repair", "Extension Building", "Flooring/Hardwood", "Tiling"];
  const hardcodedH3 = "Our certification";
  const hardcodedP2 = "We are a licensed general contracting company, license # JERICFL772LZ. Our license includes commercial construction and residential construction.";
  const hardcodedH4 = "What we've done";
  const hardcodedProjTitle1 = "COMING SOON";
  const hardcodedProjTitle2 = "COMING SOON";
  const hardcodedNavRoute1 = "/ABOUT";
  const hardcodedButtonText1 = "VIEW OUR PROJECTS";

  return (
    <div className={styles.wrapper}>
      <PageHeader hardcodedH1={hardcodedH1} />
      <div className={styles.contentWrapper}>
        <EachInfo hardcodedH1={hardcodedH2} hardcodedP1={hardcodedP1} />
        <EachInfo hardcodedH1={hardcodedH3} hardcodedP1={hardcodedP2} />
      </div>
      <h1>{hardcodedH4}</h1>
      <div className={styles.contentWrapper}>
        <Project title={hardcodedProjTitle1} />
        <Project title={hardcodedProjTitle2} />
      </div>
      <NavButton route={hardcodedNavRoute1} hardcodedButtonText1={hardcodedButtonText1}/>
      <BottomBar />
    </div>
  )
}

export default Commercial
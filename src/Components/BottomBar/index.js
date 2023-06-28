import React from 'react'
import styles from './index.module.scss'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsClockFill, BsFillTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt } from 'react-icons/fa'

// const navItems = ['HOME', 'RESIDENTIAL', 'COMMERCIAL', 'REQUEST AN ESTIMATE', 'ABOUT', 'CONTACT'];
const navItems = ['HOME', 'RESIDENTIAL', 'COMMERCIAL', 'REQUEST AN ESTIMATE', 'ABOUT'];
const BottomBar = () => {

    const openFacebook = () => {
        window.open('https://www.facebook.com/jerichofoundationllc', "_blank")
    }

    const openAngis = () => {
        window.open('https://www.angi.com/companylist/us/wa/seattle/jericho-foundation-llc-reviews-10454499.htm', "_blank");
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.eachColumn}>
                    <h1>Navigation</h1>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            <Link to={`/${item}`} style={{ textDecoration: 'none', color: '#14364B', fontSize: '1vw', fontFamily: 'Inter-Regular', textAlign: 'left', width: '100%', marginLeft: '-8%' }}>
                                {item}
                            </Link>
                        </Button>
                    ))}
                </div>
                <div className={styles.eachColumn}>
                    <h1>Follow Us</h1>
                    <div className={styles.iconContainer}>
                        <div style={{ marginRight: '4%' }} onClick={openFacebook}>
                            <BsFacebook size={'2.1vw'} color='#14364B' />
                        </div>
                        <div style={{ marginRight: '4%' }} onClick={openAngis}>
                            <img src={require('../../images/angieIcon.png')} style={{width: "2.1vw"}}/>
                        </div>
                    </div>
                </div>
                <div className={styles.eachColumn}>
                    <h1>Hours</h1>
                    <div className={styles.iconRow}>
                        <div>
                            <BsClockFill size={'2.1vw'} color='#14364B' />
                        </div>
                        <p>Sat - Fri:  6am - 12am</p>
                    </div>
                </div>
                <div className={styles.eachColumn}>
                    <h1>Contact Us</h1>
                    <div className={styles.iconRow}>
                        <div>
                            <BsFillTelephoneFill size={'2.1vw'} color='#14364B' />
                        </div>
                        <p style={{ width: '70%' }}>(708) 466-2533 (708) 955-4838</p>
                    </div>
                    <div className={styles.iconRow}>
                        <div>
                            <HiMail size={'2.3vw'} color='#14364B' />
                        </div>
                        <p>jericho1foundation@gmail.com</p>
                    </div>
                    {/* <div className={styles.iconRow}>
                        <div>
                            <FaMapMarkerAlt size={'2.1vw'} color='#14364B' />
                        </div>
                        <p>No office</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BottomBar
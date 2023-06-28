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
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        /* passing an empty array as the dependencies of the effect will cause this
           effect to only run when the component mounts, and not each time it updates.
           We only want the listener to be added once */
    }, []);

    const openFacebook = () => {
        window.open('https://www.facebook.com/jerichofoundationllc', "_blank")
    }

    const openAngis = () => {
        window.open('https://www.angi.com/companylist/us/wa/seattle/jericho-foundation-llc-reviews-10454499.htm', "_blank");
    }

    const getIconSize = () => {
        if (width > 900) {
            return '2.1vw'
        } else {
            return '5.5vw'
        }
    }

    const getFontSize = () => {
        if (width > 900) {
            return '1vw'
        } else {
            return '3vw'
        }
    }

    const getTextAlign = () => {
        if (width > 900) {
            return 'left'
        } else {
            return 'center'
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.eachColumn}>
                    <h1>Navigation</h1>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            <Link to={`/${item}`} style={{ textDecoration: 'none', color: '#14364B', fontSize: getFontSize(), fontFamily: 'Inter-Regular', textAlign: getTextAlign(), width: '100%', marginLeft: '-8%' }}>
                                {item}
                            </Link>
                        </Button>
                    ))}
                </div>
                <div className={styles.eachColumn}>
                    <h1>Follow Us</h1>
                    <div className={styles.iconContainer}>
                        <div style={{ margionTop: '4%' }} onClick={openFacebook}>
                            <BsFacebook size={getIconSize()} color='#14364B' />
                        </div>
                        <div style={{ marginLeft: '4%' }} onClick={openAngis}>
                            <img src={require('../../images/angieIcon.png')} style={{ width: getIconSize() }} />
                        </div>
                    </div>
                </div>
                <div className={styles.eachColumn}>
                    <h1>Hours</h1>
                    <div className={styles.iconRow}>
                        <div>
                            <BsClockFill size={getIconSize()} color='#14364B' />
                        </div>
                        <p style={{ width: '100%' }}>Sat - Fri:  6am - 12am</p>
                    </div>
                </div>
                <div className={styles.eachColumn}>
                    <h1>Contact Us</h1>
                    <div className={styles.iconRow}>
                        <div>
                            <BsFillTelephoneFill size={getIconSize()} color='#14364B' />
                        </div>
                        {width > 480 ?

                            <p style={{ width: '70%' }}>(708) 466-2533 (708) 955-4838</p>
                            :
                            <div className={styles.numberWrapper}>
                                <p>&nbsp; (708) 466-2533</p>
                                <p>&nbsp; (708) 955-4838</p>
                            </div>
                        }
                    </div>
                    <div className={styles.iconRow}>
                        <div>
                            <HiMail size={getIconSize()} color='#14364B' />
                        </div>
                        <p style={{ width: '100%' }}>jericho1foundation@gmail.com</p>
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
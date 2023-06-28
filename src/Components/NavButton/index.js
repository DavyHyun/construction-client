import { Link } from "react-router-dom"
import styles from './index.module.scss'

const NavButton = (props) => {
  const {hardcodedButtonText1, route} = props;
    return (
        <button className={styles.button}>
        <Link to={route} className={styles.link}>
          {hardcodedButtonText1} &nbsp;<b>{'>'}</b>
        </Link>
      </button>
    )
}

export default NavButton
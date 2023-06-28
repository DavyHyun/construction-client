import styles from './index.module.scss';
import background from '../../images/topBackground.jpg'

const PageHeader = (props) => {
    const { hardcodedH1 } = props;
    const hardcodedStyles1 = { backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '33vw', width: '100%', marginTop: 10 };
    return (
        <div className={styles.imageWrapper} style={hardcodedStyles1}>
            <h1>{hardcodedH1}</h1>
            <div className={styles.line}></div>
        </div>
    )
}

export default PageHeader
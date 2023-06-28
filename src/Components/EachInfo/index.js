import styles from './index.module.scss'
const EachInfo = (props) => {
    let { hardcodedH1, hardcodedP1 } = props;
    
    if (Array.isArray(hardcodedP1)) {
        hardcodedP1 = hardcodedP1.map((text, index) => (
            <p key={index}>{text}</p>
        ))
    }

    return (
        <div className={styles.eachInfo}>
            <h1>{hardcodedH1}</h1>
            <p>{hardcodedP1}</p>
        </div>
    )
}

export default EachInfo
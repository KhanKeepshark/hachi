import pixelArrow from '../../../assets/images/pixel-arrow.png'
import styles from './withdraw.module.scss';

export const Withdraw = ({ back }: {back: () => void}) => {
    return (
        <div className={styles.main}>
            <img src={pixelArrow} onClick={back} className={styles.arrow} alt="pixelArrow" />
            <input className={styles.input} type="number" placeholder="enter the amount" />
            <button className={styles.btn}>Withdraw</button>
        </div>
    )
}
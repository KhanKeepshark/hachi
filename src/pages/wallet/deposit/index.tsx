import tonecoinIcon from '../../../assets/images/toncoin.png'
import pixelArrow from '../../../assets/images/pixel-arrow.png'
import styles from './deposit.module.scss';
import { PixelBtn } from '../../../components/pixelBtn';
export const Deposit = ({back}: {back: () => void}) => {
    return (
        <div className={styles.main}>
            <img src={pixelArrow} onClick={back} className={styles.arrow} alt="pixelArrow" />
            <PixelBtn btnText="10 ton" imgSrc={tonecoinIcon} />
            <PixelBtn btnText="20 ton" imgSrc={tonecoinIcon} />
            <PixelBtn btnText="30 ton" imgSrc={tonecoinIcon} />
        </div>
    )
}
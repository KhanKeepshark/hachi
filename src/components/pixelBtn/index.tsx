import { FC } from "react";
import styles from "./pixelBtn.module.scss";
import { PixelBtnProps } from "./props";

export const PixelBtn:FC<PixelBtnProps> = ({btnText, imgSrc, shopBtn, disabled, onClick}) => {
    return (
        <div className={`${styles.btn} ${shopBtn && styles.shop} ${disabled && styles.disabled}`}>
            <button onClick={onClick}>{btnText}</button>
            {imgSrc && (
                <img src={imgSrc} height={24} alt="tonecoinIcon" />
            )}
        </div>
    )
}
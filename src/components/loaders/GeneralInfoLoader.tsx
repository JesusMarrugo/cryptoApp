/**
 * GeneralInfoLoader component loader
 */
import styles from '../../assets/styles/GeneralMarketInfo.module.css'
import SkeletonLoader from "tiny-skeleton-loader-react";

export const GeneralInfoLoader = () => {
    return (
        <div className={styles.general_market_info_container}>
            <h1 className={styles.general_market_info_title}>Crypto Market</h1>
            <div className={styles.general_market_info_detailContainer}>
                <div className={styles.general_market_info_detail}>
                    <h3 className={styles.general_market_info_subtitle}>Total Crypto MarketCap</h3>
                    <p className={styles.general_market_info_number}><SkeletonLoader width="200px" height="20px"/></p>
                </div>
                <div className={styles.general_market_info_detail}>
                    <h3 className={styles.general_market_info_subtitle}>Total Volume</h3>
                    <p className={styles.general_market_info_number}><SkeletonLoader width="90%" height="20px"/></p>
                </div>
                <div className={styles.general_market_info_detail}>
                    <h3 className={styles.general_market_info_subtitle}>MarketCap</h3>
                    <p className={styles.general_market_info_number}> <SkeletonLoader width="90%" height="20px"/></p>
                </div>
            </div>
        </div>
    )
}

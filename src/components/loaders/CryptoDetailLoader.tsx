import React from 'react'
import styles from '../../assets/styles/CryptoDetail.module.css'
import SkeletonLoader from "tiny-skeleton-loader-react";

export const CryptoDetailLoader = () => {
    return (
        <div className={styles.cryptoDetail_mainContainer}>

        <div className={styles.cryptoDetail_titleContainer}>
            <p className={styles.cryptoDetail_rank}><SkeletonLoader width="0px" height="18px"/></p> 
            <h2 className={styles.cryptoDetail_title}><SkeletonLoader width="150px" height="30px"/></h2> 
            <p className={styles.cryptoDetail_symbol}><SkeletonLoader width="50px" height="30px"/></p>
        </div>

        <p className={styles.cryptoDetail_price}><SkeletonLoader width="150px" height="35px"/></p>

        <hr/>
        <div className={styles.cryptoDetail_section}>
            <h4 className={styles.cryptoDetail_sectionTitle}>MarketCap</h4>
            <p><SkeletonLoader width="100px" height="22px"/></p>
        </div>
       
        <hr/>
        <h4 className={styles.cryptoDetail_sectionTitle}>Change %</h4>
        <div className={styles.cryptoDetail_gridContainer}>
           
            <div>
                <p className={styles.cryptoDetail_gridContainersubtitle}>Change % 1h</p>
                <p className={styles.cryptoDetail_gridContainerPrice}><SkeletonLoader width="150px" height="22px"/></p>
            </div>
            <div>
                <p className={styles.cryptoDetail_gridContainersubtitle}>Change % 1d</p>
                <p className={styles.cryptoDetail_gridContainerPrice}><SkeletonLoader width="150px" height="22px"/></p>
            </div>
            <div>
                <p className={styles.cryptoDetail_gridContainersubtitle}>Change % 7d</p>
                <p className={styles.cryptoDetail_gridContainerPrice}><SkeletonLoader width="150px" height="22px"/></p>
            </div>
        </div>

        <hr/>
        <h4 className={styles.cryptoDetail_sectionTitle}>Supply</h4>
        <div className={styles.cryptoDetail_gridContainer}>
            
            <div>
                <p className={styles.cryptoDetail_gridContainersubtitle}>Circulating Supply</p>
                <p className={styles.cryptoDetail_gridContainerPrice}><SkeletonLoader width="150px" height="22px"/></p>
            </div>
            <div>
                <p className={styles.cryptoDetail_gridContainersubtitle}>Total Supply</p>
                <p className={styles.cryptoDetail_gridContainerPrice}><SkeletonLoader width="150px" height="22px"/></p>
            </div>
            
        </div>


    </div>
    )
}

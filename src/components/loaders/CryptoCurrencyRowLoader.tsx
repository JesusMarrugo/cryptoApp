import React from 'react'
import styles  from '../../assets/styles/CryptoCurrencyListRow.module.css'
import SkeletonLoader from "tiny-skeleton-loader-react";

export const CryptoCurrencyRowLoader = () => {
    
    const list = [1,2,3,4,5,6,7,8,9,10,11,12]
    
    return (
        <>
        {
            list.map(loader => {
                return(
                    <div  className={styles.currency_row} key={loader}>
                    <div className={styles.currency_row_leftSection}> 
                        <span className={styles.indicative}><SkeletonLoader width="15px" height="18px"/></span>
                        
                        <div>
                            <h4 className={styles.currency_row_title}> <SkeletonLoader width="100px" height="18px"/></h4>
                            <p className={styles.currency_row_symbol}><SkeletonLoader width="50px" height="18px"/></p>
                        </div>
                       
                    </div>
                    <div>
                        <p className={styles.currency_row_price}><SkeletonLoader width="100px" height="18px"/></p>
                        <p className={`${styles.currency_row_change} ${styles.currency_row_change_green}`}><SkeletonLoader width="50px" height="18px"/></p>
                    </div>
                </div>
                )
            })
        }
        </>
       
    )
}

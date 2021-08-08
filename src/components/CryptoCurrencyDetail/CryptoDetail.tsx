import React from 'react'
import styles from '../../assets/styles/CryptoDetail.module.css'
import { Caret } from '../general/Caret'
import {useGetCryptoDetail} from '../../hooks/api/useGetCryptoDetail'
import { useParams } from 'react-router-dom'
import {CryptoDetailLoader} from '../loaders/CryptoDetailLoader'

export const CryptoDetail = () => {

    const {id}:{id:string} = useParams()




    const {data, loading, error} = useGetCryptoDetail(id)




    return (
        <>
        {
            loading ?
            <CryptoDetailLoader />
            
            : error ?
            <p>Error</p>
            :

            <div className={styles.cryptoDetail_mainContainer}>

            <div className={styles.cryptoDetail_titleContainer}>
                <p className={styles.cryptoDetail_rank}>{data ? data.rank : ''}</p> 
                <h2 className={styles.cryptoDetail_title}>{data ? data.name : '-'}</h2> 
                <p className={styles.cryptoDetail_symbol}>{`- ${data ? data.symbol : ''}`}</p>
            </div>
    
            <p className={styles.cryptoDetail_price}>{`$${data ? data.price_usd : '-'}`}</p>
    
            <hr/>
            <div className={styles.cryptoDetail_section}>
                <h4 className={styles.cryptoDetail_sectionTitle}>MarketCap</h4>
                <p>{`$${data ? data.market_cap_usd : '-'}`}</p>
            </div>
           
            <hr/>
            <h4 className={styles.cryptoDetail_sectionTitle}>Change %</h4>
            <div className={styles.cryptoDetail_gridContainer}>
               
                <div>
                    <p className={styles.cryptoDetail_gridContainersubtitle}>Change % 1h</p>
                    <p className={styles.cryptoDetail_gridContainerPrice}><Caret value={data!.percent_change_1h}/>{data ? data.percent_change_1h : '-'}</p>
                </div>
                <div>
                    <p className={styles.cryptoDetail_gridContainersubtitle}>Change % 1d</p>
                    <p className={styles.cryptoDetail_gridContainerPrice}><Caret value={data!.percent_change_24h} />{data ? data.percent_change_24h : '-'}</p>
                </div>
                <div>
                    <p className={styles.cryptoDetail_gridContainersubtitle}>Change % 7d</p>
                    <p className={styles.cryptoDetail_gridContainerPrice}> <Caret value={data!.percent_change_7d}/>{data ? data.percent_change_7d : '-'}</p>
                </div>
            </div>
    
            <hr/>
            <h4 className={styles.cryptoDetail_sectionTitle}>Supply</h4>
            <div className={styles.cryptoDetail_gridContainer}>
                
                <div>
                    <p className={styles.cryptoDetail_gridContainersubtitle}>Circulating Supply</p>
                    <p className={styles.cryptoDetail_gridContainerPrice}>{`$${data ? data.csupply : '-'}`}</p>
                </div>
                <div>
                    <p className={styles.cryptoDetail_gridContainersubtitle}>Total Supply</p>
                    <p className={styles.cryptoDetail_gridContainerPrice}>{`$${data ? data.tsupply : '-'}`}</p>
                </div>
                
            </div>
    
    
        </div>

        }
       </>
    )
}

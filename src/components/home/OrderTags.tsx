/**
 * shows three tags to sort the list of cryptocurrencies according 
 * to the marketCap, the price or the change in one day
 */
import React, { useState } from 'react'
import styles from '../../assets/styles/CryptoCurrencyListFilters.module.css'
import { crypto } from '../../interfaces/Crypto'
import {orderList} from '../../utilities/orderList'

interface filterPros {
    setCryptos: React.Dispatch<React.SetStateAction<crypto[]>>,
    data: crypto[],
}

export const OrderTags: React.FC<filterPros> = ({ data, setCryptos }) => {


    const [propertyFilter, setPropertyFilter] = useState('rank')
    const [filterIndex, setFilterIndex] = useState(1)


    const sort = (property: string) => {
        const result = orderList({data, property, setPropertyFilter, filterIndex, setFilterIndex} )
        setCryptos([...result])
    }


    const singleTag = (name: string, property:string) => {
        if(property === propertyFilter && filterIndex === 2) {
            return(
                <div className={styles.currencyList_filterTagActive} onClick={() => sort(property)}>
                <span>{name}</span>
                <span className={styles.arrow_green}>&#8593;</span>
                <span className={styles.arrow_gray}>&#8595;</span>
            </div>
            )
        }else if (property === propertyFilter && filterIndex === 1) {
            return(
                <div className={styles.currencyList_filterTagActive} onClick={() => sort(property)}>
                    <span>{name}</span>
                    <span className={styles.arrow_gray}>&#8593;</span>
                    <span className={styles.arrow_green}>&#8595;</span>
                </div>
            )
        }else{
            return(
                <div className={styles.currencyList_filterTagActive} onClick={() => sort(property)}>
                    <span>{name}</span>
                    <span className={styles.arrow_gray}>&#8593;</span>
                    <span className={styles.arrow_gray}>&#8595;</span>
                </div>
            )
        }             
    }


    return (
        <>
         <div className={styles.currencyList_filters}>
            { singleTag('MarketCap', 'rank')}
            { singleTag('Price', 'price_usd')}
            { singleTag('Change', 'percent_change_1h')}
         </div>
        </>
    )
}

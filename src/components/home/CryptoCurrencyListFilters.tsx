/**
 * contains the searcher and the ordering tags of the cryptocurrency list
 */
import React from 'react'
import styles from '../../assets/styles/CryptoCurrencyListFilters.module.css'
import { crypto } from '../../interfaces/Crypto'
import { OrderTags } from './OrderTags'
import { SearcherInput } from './SearcherInput'

interface filterPros {
    setCryptos: React.Dispatch<React.SetStateAction<crypto[]>>,
    data: crypto[]
}

export const CryptoCurrencyListFilters: React.FC<filterPros> = ({ setCryptos, data }) => {
    return (
        <div className={styles.currencyList_filtersContainer}>
            <SearcherInput setCryptos={setCryptos} data={data} />
            <OrderTags data={data} setCryptos={setCryptos} />
        </div>
    )
}

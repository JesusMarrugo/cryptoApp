/**
 cryptocurrency list searcher, search by cryptocurrency name
 */
import React, { useState, useEffect } from 'react'
import styles from '../../assets/styles/CryptoCurrencyListFilters.module.css'
import { crypto } from '../../interfaces/Crypto'

interface filterPros {
    setCryptos: React.Dispatch<React.SetStateAction<crypto[]>>,
    data: crypto[],
}


export const SearcherInput: React.FC<filterPros> = ({ setCryptos, data }) => {

    const [termSearch, setTermSearch] = useState('')


    //SEARCHER
    useEffect(() => {
        if (termSearch === '') {
            setCryptos(data)
        } else {
            const results = data.filter(crypto => crypto.name.toLowerCase().includes(termSearch.toLowerCase()))
            setCryptos(results)
        }
    }, [termSearch])


    return (
        <div className={styles.currencyList_searcher}>
            <input type="text"
                placeholder="Search"
                className={styles.currencyList_searcher_input}
                value={termSearch}
                onChange={(e) => setTermSearch(e.target.value)}
            />
            <span className={styles.currencyList_searcher_icon} onClick={() => setTermSearch('')}>&#215;</span>
        </div>
    )
}

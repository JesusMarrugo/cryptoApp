import React from 'react'
import styles from '../assets/styles/Home.module.css'
import {GeneralMarketInfo} from '../components/home/GeneralMarketInfo'
import { CryptoCurrencyList } from '../components/home/CryptoCurrencyList';


export const Home = () => {

   

    return (
        <div className={styles.home_container}>
            <GeneralMarketInfo />

            <CryptoCurrencyList />
        </div>
    )
}

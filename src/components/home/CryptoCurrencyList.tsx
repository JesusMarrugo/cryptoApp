import React, { useState, useEffect } from 'react'
import { CryptoCurrencyListRow } from '../home/CryptoCurrencyListRow'
import { useGetCryptoList } from '../../hooks/api/useGetCryptoList'
import { crypto } from '../../interfaces/Crypto'
import { CryptoCurrencyListFilters } from './CryptoCurrencyListFilters'
import { CryptoCurrencyRowLoader } from '../loaders/CryptoCurrencyRowLoader'


export const CryptoCurrencyList = () => {

    const [cryptos, setCryptos] = useState<crypto[]>([])

    const { data, loading, error } = useGetCryptoList()



    useEffect(() => { console.log(data); setCryptos(data) }, [data])


    return (
        <div>

            <CryptoCurrencyListFilters data={data} setCryptos={setCryptos} />
            
            {
                loading ?
                    <CryptoCurrencyRowLoader />
                :
                error ?
                    <p>Error</p>
                :
                    cryptos.map(crypto => <CryptoCurrencyListRow key={crypto.id} {...crypto} />)      
            }

        </div>
    )
}

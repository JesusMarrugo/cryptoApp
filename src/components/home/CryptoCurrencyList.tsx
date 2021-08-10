/**
 * show the list of cryptocurrencies and some filters, get the information with the useGetCryptoList() hook
 */
import { useState, useEffect } from 'react'
import { CryptoCurrencyListRow } from '../home/CryptoCurrencyListRow'
import { useGetCryptoList } from '../../hooks/api/useGetCryptoList'
import { crypto } from '../../interfaces/Crypto'
import { CryptoCurrencyListFilters } from './CryptoCurrencyListFilters'
import { CryptoCurrencyRowLoader } from '../loaders/CryptoCurrencyRowLoader'


export const CryptoCurrencyList = () => {

    const [cryptos, setCryptos] = useState<crypto[]>([])

    const { data, loading, error } = useGetCryptoList()

    useEffect(() => { setCryptos(data) }, [data])

    return (
        <div>       
            {
                loading ?
                    <CryptoCurrencyRowLoader />
                :
                error ?
                    <p>Error</p>
                :  
                    <>
                        <CryptoCurrencyListFilters data={data} setCryptos={setCryptos} />
                        {cryptos.map(crypto => <CryptoCurrencyListRow key={crypto.id} {...crypto} />)}    
                    </>               
            }
        </div>
    )
}

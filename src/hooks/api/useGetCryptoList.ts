/**
 * hook that makes a request to the api using the getData() method
 * 
 * @returns {Object} If the request is successful, it returns an object with 
 * a cryptocurrency list, if it is wrong, it returns an object with a variable error true
 */
import {useState, useEffect} from 'react'
import {getData} from '../../services/getData'
import {crypto} from '../../interfaces/Crypto'

interface state{
    data: crypto[],
    loading: boolean,
    error: any,
}

export const useGetCryptoList = () => {
    
    const [state, setState] = useState<state>({
        data: [], 
        loading: true, 
        error: null
    })

    useEffect(() => {
        getData( 'https://api.coinlore.net/api/tickers/')
            .then(resp => {
                resp.error ? 
                setState({
                    data: [], 
                    loading: false, 
                    error: resp.e
                })
                :
                setState({
                    data: resp.data.data, 
                    loading: false, 
                    error: null
                })
                
            })      
    }, [])


    return state
}

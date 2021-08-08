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
                // console.log(resp)
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

/**
 * hook that makes a request to the api using the getData() method
 * 
 * @param {string} id cryptocurrency id
 * @returns {Object} If the request is successful, it returns an object with the 
 * details of a cryptocurrency, if it is wrong, it returns an object with a variable error true
 */
import {useState, useEffect} from 'react'
import {getData} from '../../services/getData'
import {crypto} from '../../interfaces/Crypto'

interface state{
    data: crypto | null,
    loading: boolean,
    error: any,
}

export const useGetCryptoDetail = (id: string) => {

    const [state, setState] = useState<state>({
        data: null,
        loading: true, 
        error: null
    })


    useEffect(() => {
        getData(`https://api.coinlore.net/api/ticker/?id=${id}`)
            .then(resp => {
                resp.error ? 
                setState({
                    data: null, 
                    loading: false, 
                    error: resp.e
                })
                :
                setState({
                    data: resp.data[0], 
                    loading: false, 
                    error: null
                })
                
            })      
    }, [id])

    return state;


}

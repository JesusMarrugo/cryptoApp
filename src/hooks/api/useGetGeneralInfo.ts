import {useState, useEffect} from 'react'
import {getData} from '../../services/getData'
import {generalInfo} from '../../interfaces/GeneralInfo'


interface generalInfoState{
    data?: generalInfo,
    loading: boolean,
    error: any,
}

export const useGetGeneralInfo = () => {
   
    const [state, setState] = useState<generalInfoState>({
        data: undefined,
        loading: true, 
        error: null
    })




    useEffect(() => {
        getData('https://api.coinlore.net/api/global/')
            .then(resp => {
                resp.error ? 
                setState({
                    data: undefined, 
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
    }, [])

    return state

}

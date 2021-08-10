/**
 * shows information of the general market of cryptocurrencies, 
 * obtains the data from the hook useGetGeneralInfo()
 */
import styles from '../../assets/styles/GeneralMarketInfo.module.css'
import {Caret} from '../general/Caret'
import { useGetGeneralInfo } from '../../hooks/api/useGetGeneralInfo'
import {GeneralInfoLoader} from '../loaders/GeneralInfoLoader'

export const GeneralMarketInfo = () => {

    const {data, loading, error} = useGetGeneralInfo()



    return (
        <>
        {
            loading ? 
            <GeneralInfoLoader />
            :
            error ?
            <p>error</p>
            :
            <div className={styles.general_market_info_container}>
                <h1 className={styles.general_market_info_title}>Crypto Market</h1>

                <div className={styles.general_market_info_detailContainer}>
                    <div className={styles.general_market_info_detail}>
                        <h3 className={styles.general_market_info_subtitle}>Total Crypto MarketCap</h3>
                        <p className={styles.general_market_info_number}>{`$${data ? data.total_mcap : ''}`}</p>
                    </div>

                    <div className={styles.general_market_info_detail}>
                        <h3 className={styles.general_market_info_subtitle}>Total Volume</h3>
                        <p className={styles.general_market_info_number}>{`$${data ? data.total_volume : ''}`}</p>
                    </div>

                    <div className={styles.general_market_info_detail}>
                        <h3 className={styles.general_market_info_subtitle}>MarketCap</h3>
                        <p className={styles.general_market_info_number}><Caret value={data!.mcap_change}/> {data ? data.mcap_change : ''}</p>
                    </div>
                </div>
            </div>
        }
        
       
        </>
    )
}

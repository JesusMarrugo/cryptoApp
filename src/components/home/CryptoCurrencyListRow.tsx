/**
 * shows an item with the information of a cryptocurrency in the list of cryptocurrencies
 * @param {<crypto>} object with the cryptocurrency information
 */
import styles from '../../assets/styles/CryptoCurrencyListRow.module.css'
import {Caret} from '../general/Caret'
import {crypto} from '../../interfaces/Crypto'
import {Link} from 'react-router-dom';

export const CryptoCurrencyListRow = ({id, name, rank, symbol, price_usd, percent_change_1h}: crypto) => {
  

    return (
        <Link to={`detail/?id=${id}`} className={styles.currency_row}>
            <div className={styles.currency_row_leftSection}> 
                <span className={styles.indicative}>{rank}</span>
                
                <div>
                    <h4 className={styles.currency_row_title}>  {name}</h4>
                    <p className={styles.currency_row_symbol}>{symbol}</p>
                </div>
               
            </div>
            <div>
                <p className={styles.currency_row_price}>{`$${ price_usd}`}</p>
                <p className={`${styles.currency_row_change} ${styles.currency_row_change_green}`}>
                    <Caret value={percent_change_1h}/> 
                    {percent_change_1h} 
                    <span className={styles.indicative}>1d</span>
                </p>
            </div>
        </Link>
    )
}

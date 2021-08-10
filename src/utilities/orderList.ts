/**
 * This method sorts a list of objects of type Crypto according to a property 
 * corresponding to a field of the object, you can order from highest to lowest or from lowest to highest
 * @param {<orderListI>}
 * @returns {Array} a list ordered according to the parameters entered
 */
import { crypto } from '../interfaces/Crypto'

interface orderListI {
    data: crypto[],
    property: string,
    setPropertyFilter: React.Dispatch<React.SetStateAction<string>>,
    filterIndex : number;
    setFilterIndex: React.Dispatch<React.SetStateAction<number>>,
}

export const orderList = ({data, property, setPropertyFilter, filterIndex, setFilterIndex}: orderListI) => {

 
    const dynamicSort = (property:string) => {
        setPropertyFilter(property)
        return function (a: crypto, b: crypto) {
            let result = 0;
            if (filterIndex === 1) {
                setFilterIndex(2)
                if (property === 'rank')
                    result = b.rank > a.rank ? 1 : b.rank === a.rank ? 0 : -1;
                else if (property === 'price_usd')
                    result = parseFloat(b.price_usd) > parseFloat(a.price_usd) ? 1 : parseFloat(b.price_usd) === parseFloat(a.price_usd) ? 0 : -1;
                else if (property === 'percent_change_1h')
                    result = parseFloat(b.percent_change_1h) > parseFloat(a.percent_change_1h) ? 1 : parseFloat(b.percent_change_1h) === parseFloat(a.percent_change_1h) ? 0 : -1;
            } else {
                setFilterIndex(1)
                if (property === 'rank')
                    result = a.rank > b.rank ? 1 : a.rank === b.rank ? 0 : -1;
                else if (property === 'price_usd')
                    result = parseFloat(a.price_usd) > parseFloat(b.price_usd) ? 1 : parseFloat(a.price_usd) === parseFloat(b.price_usd) ? 0 : -1;
                else if (property === 'percent_change_1h')
                    result = parseFloat(a.percent_change_1h) > parseFloat(b.percent_change_1h) ? 1 : parseFloat(a.percent_change_1h) === parseFloat(b.percent_change_1h) ? 0 : -1;
            }
            if (result === undefined) {
                return 0
            } else {
                return result
            }
        };
    }

    const result = data.sort(dynamicSort(property))
    return result
  
}

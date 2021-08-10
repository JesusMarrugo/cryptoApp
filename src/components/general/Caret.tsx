/**
 * returns an arrow indicating the price change, up green or down red
 * @param {string} value the value of the price
 */
import React from 'react'
import styles from '../../assets/styles/Caret.module.css'

interface Props {
    value: string;
}

export const Caret: React.FC<Props> = ({ value }) => {

    const number = parseFloat(value)
    const isPositive = (v: number) => Math.sign(v) === 1 ;

    return (
        <>
            {
                isPositive(number) ?
                <span className={styles.green}>
                    &#8593;
                </span>
                    :
                <span className={styles.red}>
                    &#8595;
                </span>
            }
        </>

    )
}

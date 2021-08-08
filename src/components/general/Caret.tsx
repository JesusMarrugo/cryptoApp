import React from 'react'
import styles from '../../assets/styles/Caret.module.css'

interface Props {
    value: string;
}

export const Caret: React.FC<Props> = ({ value }) => {

    const isPositive = (v: string) => v[0] === '-' ? false : true

    return (
        <>
            {
                isPositive(value) ?
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

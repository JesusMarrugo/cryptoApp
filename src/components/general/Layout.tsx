/**
 * the general layout of the application contains the header and receives the child as a body
 */
import styles from '../../assets/styles/Layout.module.css'

export const Layout = ({ children }: any) => {
    return (
        <div >
            <header className={styles.layout_header}>
                <h3 className={styles.header_title}>Crypo Weelo</h3>
            </header>

            <div className={styles.layout_body}>
                {children}
            </div>       
        </div>
    )
}

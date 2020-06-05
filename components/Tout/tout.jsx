import styles from './tout.module.sass'

export function Tout({children}) { 
    return (
        <header className={styles['primary-tout']}>
            {children}
        </header>
    )
}
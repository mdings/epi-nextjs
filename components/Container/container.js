import styles from './container.module.sass'

export function Container ({ children }) {
    return (
        <div className={styles['c-container']}>
            {children}
        </div>
    )
}
import styles from './center.module.scss'

export function Center ({children, className}) {
    return (
        <div className={`${styles['c-center']} ${className || ''}`}>
            {children}
        </div>
    )
}
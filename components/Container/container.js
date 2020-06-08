import css from './container.module.scss'

export function Container ({ children }) {
    return (
        <div className={css['c-container']}>
            {children}
        </div>
    )
}
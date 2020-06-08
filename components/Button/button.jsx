import css from './button.module.scss'

export function Button ({children}) {
    return (
        <button type="button" className={css['c-button']}>{children}</button>
    )
}
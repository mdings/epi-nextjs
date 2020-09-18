import css from './button.module.scss'

export function Button ({children, renderAs, href = null}) {
    return renderAs == 'link' 
        ? (<a href={href} className={css['Button']}>{children}</a>) 
        : (<button type="button" className={css['Button']}>{children}</button>)
}
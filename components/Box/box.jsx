import css from './box.module.sass'
import className from 'classnames'

export function Box (props) {
    const padding = props.padding || 'none'
    const classes = className(css['c-box'], `padding--${padding}`)
    return (
        <div className={`${classes} ${props.className || ''}`}>
            {props.children}
        </div>
    )
}
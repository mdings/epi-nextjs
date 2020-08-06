import css from './columns.module.sass'
import className from 'classnames'

export function Columns(props) {
    const classes = className(css['c-columns'])
    return (
        <div className={`${classes} ${props.className || ''}`}>
            {props.children}
        </div>
    )
}
import styles from './stack.module.scss'

export function Stack (props) {
    const {className, children } = props
    const spacing = props.spacing || 'none'
    return (
        <div className={`${styles['c-stack']} ${className || ''} ${`spacing--${spacing}`}`}>
            {children}
        </div>
    )
}
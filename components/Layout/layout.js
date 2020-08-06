import React from 'react'
import css from './layout.module.scss'
import { Box } from '../../components'

export class Layout extends React.Component {
    componentDidMount() {
        console.log('I was mounted man')
    }

    render() {
        return (
            <div className={css['c-layout']}>
                <nav className={css['nav--main']}>
                    <Box padding="small">
                        <img src="/mosey-logo.svg" alt="Mosey logo" />
                    </Box>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
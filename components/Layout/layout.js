import css from './layout.module.scss'
import { Box } from '../../components'

export function Layout ({children}) {

    return (
        <div className={css['c-layout']}>
            <nav className={css['nav--main']}> 
                <Box padding="small">
                    <img src="/mosey-logo.svg" alt="Mosey logo" />
                </Box>
            </nav>
            {children}
        </div>
    )
}
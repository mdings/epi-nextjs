import css from './tout.module.sass'
import { Container, Stack } from '../../components'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export function Tout({children, image, title, created: createdAt}) { 
    return (
        <header className={css['Tout']}>
            <Container>
                <Stack spacing="xxlarge">
                    <Stack spacing="small">
                        {/* <span className={css['Tout__created']}>
                            {formatRelative(subDays(new Date(createdAt), 0), new Date(createdAt))}
                        </span> */}
                        <h1>{title}</h1>
                        <p className={css['Tout__teaser']}>
                            <span>
                            {children}
                            </span>
                        </p>
                        
                    </Stack>
                   
                    <div className={css['Tout__background']} style={{
                        'backgroundImage': `url(${image})`
                    }}></div>
                </Stack>
            </Container>
        </header>
    )
}
import css from './tout.module.sass'
import { Container, Stack } from '../../components'

export function Tout({children, image}) { 
    return (
        <header className={css['primary-tout']}>
            <Container>
                <Stack spacing="xxlarge">
                    {children}
                    <div className={css['primary-tout__bg']} style={{
                        'backgroundImage': `url(${image})`
                    }}></div>
                </Stack>
            </Container>
        </header>
    )
}
import css from './tout.module.sass'
import Link from 'next/link'
import { Button, Container, Stack } from '../../components'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export function Tout({children, post}) { 
    return (
        <header className={css['Tout']}>
            <Container>
                <Link href="/blog/[id]" as={`/blog/${post.routeSegment}`}>
                    <a href={`/blog/${post.routeSegment}`}>
                        <Stack spacing="xxlarge">
                            <Stack spacing="small">
                                
                                {/* <span className={css['Tout__created']}>
                                    {formatRelative(subDays(new Date(createdAt), 0), new Date(createdAt))}
                                </span> */}
                                <h1><span>{post.name}</span></h1>
                                <p className={css['Tout__teaser']}>
                                    <span>{children}</span>
                                </p>
                                
                                
                            </Stack>
                        
                            <div className={css['Tout__background']} style={{
                                'backgroundImage': `url(${post.pageImage?.value?.url})`
                            }}></div>
                        </Stack>
                    </a>
                </Link>
            </Container>
        </header>
    )
}
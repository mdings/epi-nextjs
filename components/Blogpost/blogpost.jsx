import Link from 'next/link'
import css from './blogpost.module.sass'
import className from 'classnames'

const ReplacePath = imagePath => imagePath && imagePath.replace('epiblog-nextjs', 'epiblog-nextjs.epi-demo.nl')

export function Blogpost(props) {
    const classes = className(css['Blogpost'])
    const { post } = props
    return (
        <div className={`${classes} ${props.className || ''}`}>
            <Link href="/blog/[id]" as={`/blog/${post.routeSegment}`}>
                <div>
                    <figure className={css['Blogpost__image']} style={{ 
                        'backgroundImage': `url(${post.pageImage?.value?.url})`
                    }} />
                    <span>{post.name}</span>
                    {post.pageImage?.value?.url}
                </div>
            </Link>
        </div>
    )
}
import Link from 'next/link'
import css from './blogpost.module.sass'
import className from 'classnames'

const ReplacePath = imagePath => imagePath && imagePath.replace('foundation-nextjs', 'foundation-nextjs.epi-demo.nl')

export function Blogpost(props) {
    const classes = className(css['c-blogpost'])
    const { post } = props
    return (
        <div className={`${classes} ${props.className || ''}`}>
            <Link href="/blog/[id]" as={`/blog/${post.routeSegment}`}>
                <>
                    <img src={ReplacePath(post.pageImage?.value?.url)} className={css['c-blogpost__teaser-image']} />
                    <a>{post.name}</a>
                </>
            </Link>
        </div>
    )
}
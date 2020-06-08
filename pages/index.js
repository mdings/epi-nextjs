import css from './index.module.sass'
import Link from 'next/link'
import { Box, Button, Center, Container, Layout, Stack, Tout} from '../components'

export default function({data}) {
    return (
        <Layout>
            <Tout image="naeim-jafari-svQZUVLOLjM-unsplash.jpg">
                <h1>This is how to make use of the spring collection</h1>
            </Tout>
            <div className="introduction">
                <h1>Hi there</h1>
            </div>
            <h1>Hello world {data.totalMatching}!!</h1>
            <ul>
                {data.results.map(item => (
                    <li key={item.contentLink.id}>
                        <Link href="/blog/[item.routeSegment]" as={`/blog/${item.routeSegment}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://foundation-nextjs.epi-demo.nl/api/episerver/v2.0/search/content/?filter=ContentType/any(t:t eq 'BlogItemPage')&orderby=created desc`, {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': 'en'
        }
    })
    const data = await res.json()
    return {
        props: { data }
    }
}
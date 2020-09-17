import css from './index.module.sass'
import { Blogpost, Box, Button, Center, Columns, Container, Layout, Stack, Tout} from '../components'


export default function({data}) {
    // Get the first post of our dataset
    const firstPost = data.results[0]
    console.log(firstPost)
    return (
        <Layout>
            <Tout image={firstPost.pageImage?.value?.url} title={firstPost.name} created={firstPost.created}>
                {firstPost.teaserText.value}
            </Tout>

            <Container>
                <div className="introduction">
                    <h1>Hi there</h1>
                </div>
                <h1>Tota posts: {data.totalMatching}</h1>
                <Columns>
                    {/* Slice the rest of our dataset so that it excluded the first post we're already displaying on top of the page */}
                    {data.results.slice(1).map(item => (
                        <Blogpost post={item} key={item.contentLink.id} />
                    ))}
                </Columns>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://epiblog-nextjs.epi-demo.nl/api/episerver/v2.0/search/content/?filter=ContentType/any(t:t eq 'BlogItemPage')&orderby=created desc`, {
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
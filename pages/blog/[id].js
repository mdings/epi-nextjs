import { getContentIds, getBlogPostBySegment } from '../../lib/posts'

export default function({postData}) {
    return(
        <div className="container">
            <span dangerouslySetInnerHTML={{__html: postData.mainBody.value }}></span>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const postData = await getBlogPostBySegment(params.id)
    return {
        props: {
            postData
        }
    }
}

// So Next.js first once to know all of our id that are going to be passed through the wildcard
export async function getStaticPaths() {
    const paths = await getContentIds()
    return { paths, fallback: false }
}
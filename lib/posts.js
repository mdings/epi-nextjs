export async function getContentIds() {
    const res = await fetch(`https://epiblog-nextjs.epi-demo.nl/api/episerver/v2.0/search/content/?filter=ContentType/any(t:t eq 'BlogItemPage')`, {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': 'en'
        }
    })
    /* Should return an array like this:
    [{
        params: {
            id: contentLinkId
        }
    }, {
        params: {
            id: conteneLinkId
        }
    }]
    */

    const data = await res.json()
    return data.results.map(item => {
        console.log(item)
        return {
            params: {
                id: item.routeSegment.toString()
            }
        }
    })
}

export async function getBlogPostBySegment(id) {
    const res = await fetch(`https://epiblog-nextjs.epi-demo.nl/api/episerver/v2.0/search/content/?filter=routeSegment eq '${id}'`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await res.json()
    return {
        id,
        ...data.results[0]
    }
}
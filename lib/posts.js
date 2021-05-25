export async function getSortedPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

export async function getAllPostIds() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    // console.log('response.json()', await response.json())
    // return ([{
    //     params: {
    //         id: '1'
    //     }
    // }])
    const posts = await response.json();
    return posts.map(post => {
        return (
            {
                params: {
                    id: `${post.id}`
                }
            }
        )
    });
}


export async function getPostData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json();
}
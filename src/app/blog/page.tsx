import PostCard from "@/components/postCard/postCard";

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
        throw new Error('getData error')
    }

    return response.json()
}

const BlogPage = async () => {
    const posts = await getData()
    return (
        <div className="flex flex-wrap g-5">
            {
                posts.map((post: {
                    "userId": number,
                    "id": number,
                    "title": string,
                    "body": string
                }) => {
                    return (
                        <div key={post.id} className=" w-full md:w-1/2 xl:w-1/3">
                            <PostCard post={post} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogPage;
import PostCard from "@/components/postCard/postCard";

const BlogPage = () => {
    return (
        <div className="flex flex-wrap g-5">
            <div className=" w-full md:w-1/2 xl:w-1/3">
                <PostCard />
            </div>
            <div className=" w-full md:w-1/2 xl:w-1/3">
                <PostCard />
            </div>
            <div className=" w-full md:w-1/2 xl:w-1/3">
                <PostCard />
            </div>
            <div className=" w-full md:w-1/2 xl:w-1/3">
                <PostCard />
            </div>
        </div>
    )
}

export default BlogPage;
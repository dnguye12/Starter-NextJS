import Link from "next/link";
import Image from "next/image";


const PostCard = ({ post }: {
    post: {
        "userId": number,
        "id": number,
        "title": string,
        "desc": string,
        "slug": string,
        "img"?: string
    }
}) => {
    return (
        <div className="flex flex-col g-5 mb-5">
            <div className="flex">
                {post.img &&
                    <div className=" relative w-9/12" style={{ height: 400, }}>
                        <Image src={post.img} alt="" fill className=" object-cover" />
                    </div>
                }
                <span className=" text-xs text-white -rotate-90 m-auto">10-06-2024</span>
            </div>
            <div className="">
                <h1 className=" text-2xl my-4 font-bold text-white w-9/12">{post.title}</h1>
                <p className=" mb-4 text-gray-500 w-9/12 text-sm">{post.desc}</p>
                <Link className=" underline text-white mb-4" href={`/blog/${post.id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard;
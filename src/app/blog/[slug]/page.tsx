import Image from "next/image";

import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

    if (!response.ok) {
        throw new Error('getData error')
    }

    return response.json()
}


const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const post: {
        "userId": number,
        "id": number,
        "title": string,
        "body": string
    } = await getData(slug);

    return (
        <div className=" flex gap-24">
            <div className="hidden md:block relative" style={{ flex: 1, height: "calc(100vh - 200px)", }}>
                <Image src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-12" style={{ flex: 2 }}>
                <h1 className=" text-6xl text-white font-bold">{post.title}</h1>
                <div className="flex gap-5 text-white">
                    <Image src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full object-cover w-12 h-12" alt="" width={48} height={48} />

                    <Suspense fallback={<div>...loading</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>

                    <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-bold">Published</span>
                        <span className="font-medium">
                            10-06-2024
                        </span>
                    </div>
                </div>
                <div className=" text-xl text-white">{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage;
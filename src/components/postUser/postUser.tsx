import { getUser } from "@/lib/data";

const getData = async (userId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
        throw new Error('getData error')
    }

    return response.json()
}

const PostUser = async ({userId} : {userId: number}) => {
    const user = await getUser(userId);

    return (
        <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-bold">Author</span>
            <span className=" font-medium">{user.name}</span>
        </div>
    )
}

export default PostUser;
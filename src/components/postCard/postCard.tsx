import Link from "next/link";
import Image from "next/image";


const PostCard = () => {
    return (
        <div className="flex flex-col g-5 mb-5">
            <div className="flex">
                <div className=" relative w-9/12" style={{height: 400,}}>
                    <Image src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className=" object-cover" />
                </div>
                <span className=" text-xs text-white -rotate-90 m-auto">10-06-2024</span>
            </div>
            <div className="">
                <h1 className=" text-2xl my-4 font-bold text-white w-9/12">Cat</h1>
                <p className=" mb-4 text-gray-500 w-9/12 text-sm">Close-Up Photo of Yellow and White Cat</p>
                <Link className=" underline text-white mb-4" href={`/blog/1`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard;
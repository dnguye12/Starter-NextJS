import Image from "next/image";
const SinglePostPage = () => {
    return (
        <div className=" flex gap-24">
            <div className="hidden md:block relative" style={{flex: 1, height: "calc(100vh - 200px)",}}>
                <Image src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-12" style={{flex: 2}}>
                <h1 className=" text-6xl text-white font-bold">Cat</h1>
                <div className="flex gap-5 text-white">
                    <Image src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full object-cover w-12 h-12" alt="" width={48} height={48} />
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-bold">Author</span>
                        <span className=" font-medium">Mike Tyson</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-bold">Published</span>
                        <span className="font-medium">
                            10-06-2024
                        </span>
                    </div>
                </div>
                <div className=" text-xl text-white">Close-Up Photo of Yellow and White Cat</div>
            </div>
        </div>
    )
}

export default SinglePostPage;
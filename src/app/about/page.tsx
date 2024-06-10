import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-24">
            <div className=" flex-1 flex flex-col gap-12">
                <h2 className=" text-blue-500 font-bold text-2xl">About Agency</h2>
                <h1 className=" text-5xl text-white font-bold">
                    We create digital ideas that are bigger, bolder, braver and better.
                </h1>
                <p className=" text-lg text-white">
                We create digital ideas that are bigger, bolder, braver, and better. 
                We believe in good ideas, flexibility, and precision. 
                Our special team is the world's best consulting and finance solution provider, 
                offering a wide range of web and software development services.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-0 text-center md:text-start">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-blue-500 font-bold text-3xl">10 K+</h1>
                        <p className="text-white text-sm">Year of experience</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-blue-500 font-bold text-3xl">234 K+</h1>
                        <p className="text-white text-sm">People reached</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-blue-500 font-bold text-3xl">5 K+</h1>
                        <p className="text-white text-sm">Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full flex-1" style={{height: 500,}}>
                <Image
                    src="/about.png"
                    alt="About Image"
                    fill
                    className=" object-contain"
                />
            </div>
        </div>
    )
}

export default AboutPage;
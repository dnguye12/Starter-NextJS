import Image from "next/image";

const AboutPage = () => {
    return (
        <div>
            <div className=" relative w-full h-96">
                <Image src="/about.png " alt="" fill/>
            </div>
        </div>
    )
}

export default AboutPage;
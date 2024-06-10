import Image from "next/image";

const ContactPage = () => {
    return (
        <div className="flex items-center gap-24">
            <div className="flex-1 relative" style={{height: 500,}}>
                <Image src="/contact.png" alt="" fill className=" object-contain" />
            </div>
            <div className="flex-1">
                <form action="" className="flex flex-col gap-5">
                    <input type="text" placeholder="Name and Surname" className="p-5 rounded-md outline-none border-none bg-indigo-950 text-gray-500 text-sm"/>
                    <input type="text" placeholder="Email Address"  className="p-5 rounded-md outline-none border-none bg-indigo-950 text-gray-500 text-sm"/>
                    <input type="text" placeholder="Phone Number (Optional)"  className="p-5 rounded-md outline-none border-none bg-indigo-950 text-gray-500 text-sm"/>
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Message"
                         className="p-5 rounded-md outline-none border-none bg-indigo-950 text-gray-500 text-sm"
                    ></textarea>
                    <button className="p-5 bg-blue-500 text-white font-bold border-none rounded">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;
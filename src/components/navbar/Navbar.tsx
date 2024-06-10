import Link from "next/link";

import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-24">
            <Link href="/" className="text-white font-bold text-3xl">Lama</Link>
            <Links />
        </div>
    )
}

export default Navbar;
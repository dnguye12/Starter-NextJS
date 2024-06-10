"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ link }: { link: { title: string, path: string } }) => {
    const pathName = usePathname();

    return (
        <Link 
        href={link.path} 
        className={` p-2 text-center rounded-2xl min-w-24 font-medium text-sm ${pathName === link.path ? 'bg-white text-gray-900' : ''}`}
        >{link.title}
        </Link>
    )
}

export default NavLink
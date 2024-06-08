"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";

const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" }
];


const Links = () => {
    const [open, setOpen] = useState(false)

    const session = true;
    const isAdmin = true;

    return (
        <div className="flex items-center gap-3 text-white">
            {
                links.map(link => (
                    <NavLink key={link.title} link={link} />
                ))
            }
            {
                session
                    ? (
                        <>
                            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
                            <button className="font-bold p-2 cursor-pointer bg-white text-gray-900">Logout</button>
                        </>
                    )
                    : (
                        <NavLink link={{ title: "Login", path: "/login" }} />
                    )
            }
        </div>
    )
}

export default Links;
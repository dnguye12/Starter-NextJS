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
        <div className="">

            <div className=" hidden md:flex items-center gap-3 text-white">
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
            <button onClick={() => setOpen((prev) => !prev)} className="cursor-pointer block md:hidden">Menu</button>
            {
                open && <div className="mobileLinks md:hidden bg-gray-900 absolute top-24 w-1/2 right-0 flex flex-col items-center justify-center g-2 overflow-hidden text-white" style={{
                    height: "calc(100vh - 96px)",
                    transition: "height 0.5s ease-in-out"
                }}>
                    {
                        links.map(link => (
                            <NavLink key={link.title} link={link} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Links;
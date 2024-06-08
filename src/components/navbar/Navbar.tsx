import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-24">
            <div className="text-white font-bold text-3xl">Logo</div>
            <Links />
        </div>
    )
}

export default Navbar;
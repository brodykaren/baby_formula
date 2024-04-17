"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
    const navRef = useRef();

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        // navRef.current.classlist.toggle("responsive_nav");
        setShowNavbar(!showNavbar)
    }


    return (

        <div>
            {showNavbar ?
                <div>
                    <div onClick={handleShowNavbar}>
                        <FaTimes />
                    </div>
                    <nav className="header-nav nav">
                        <Link href="/"> Home</Link>
                        <Link href="/search"> Shop</Link>
                        <Link href="/signin"> Sign In</Link>
                    </nav>
                </div>
                :
                <div onClick={handleShowNavbar}>
                    <FaBars />
                </div>
            }
        </div>
    );
}

export default Navbar;
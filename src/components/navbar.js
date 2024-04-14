import { useRef } from "react";
import { faBars, FaTimes} from "react-icons/fa";
import"../app/global.css";



function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classlist.toggle("responsive_nav");
    }


    return ( 

        <header>
       <h3> Logo</h3>
       <nav ref = {navRef}>
       <a href="/#"> Home</a>
       <a href="/#"> Shop</a>
       <a href="/#"> Sign In</a>
       <button className ="nav-btn nav-close-btn"onClick={showNavbar}>
      
         <FaTimes/>
         
       </button>
       </nav>
       <button className ="nav-btn" onClick={showNavbar}>

       <faBars />

       </button>
        </header>
    );
}

export default Navbar;
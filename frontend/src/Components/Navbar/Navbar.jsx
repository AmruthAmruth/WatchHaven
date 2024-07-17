import React, { useRef } from 'react'
import './Navbar.css'
import { FaBars, FaTimes,FaHome,FaShoppingBag,FaShoppingCart,FaUser,FaSmile} from 'react-icons/fa'
const Navbar = () => {
    const navRef = useRef()

    const showNavbar=()=>{
        navRef.current.classList.toggle('responsive-nav')
    }

    return (
        <div className="main">
        <header>
            <h3>WATCH HAVEN</h3>
            <nav ref={navRef}>
                <a href="/"><FaHome/> Home</a>
                <a href="/about"><FaSmile/> About Us</a>
                <a href="/shop"><FaShoppingBag/> Shop</a>
                <a href="/cart"><FaShoppingCart/> Cart</a>
                <a href="/login"><FaUser/> Login/Register</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


export default function Navbar() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">Rudransh Development</div>
                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`navbar-menu ${isMenuActive ? 'active' : ''}`} id="navbar-menu">
                    <Link to="/" onClick={() => setIsMenuActive(false)}>Home</Link>
                    <Link to="/AboutUs" onClick={() => setIsMenuActive(false)}>About</Link>
                    <Link to="/Projects" onClick={() => setIsMenuActive(false)}>Projects</Link>
                    <Link to="/Skills" onClick={() => setIsMenuActive(false)}>Skills</Link>
                    <Link to="/ContactUs">Contact</Link>
                </div>
            </nav>
        </>
    );
}
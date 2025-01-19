import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


export default function Navbar() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check the user's theme preference from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode'); // Apply dark mode to the body
        } else {
            setIsDarkMode(false);
            document.body.classList.remove('dark-mode'); // Remove dark mode if it's not set
        }
    }, []);

    // Toggle the theme between dark and light mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Save theme preference to localStorage
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Save theme preference to localStorage
        }
    };

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
                    <Link to="#">Contact</Link>
                </div>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDarkMode ? '🌞' : '🌙'}
                </button>
            </nav>
        </>
    );
}
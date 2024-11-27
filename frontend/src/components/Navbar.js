import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/RDLightsLogo.png'; 
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <Link to="/" className="logo-link">
                <img src={logo} alt="RD Lights Logo" />
            </Link>
            
            <button className="hamburger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><NavLink to="/" className="navbar-link" onClick={toggleMenu}>Home</NavLink></li>
                <li><NavLink to="/pool-lights" className="navbar-link" onClick={toggleMenu}>Pool Lights</NavLink></li>
                <li><NavLink to="/wall-racks" className="navbar-link" onClick={toggleMenu}>Wall Racks</NavLink></li>
                <li><NavLink to="/installation" className="navbar-link" onClick={toggleMenu}>Installation</NavLink></li>
            </ul>

            <Link to="/contact" className="contact-button navbar-link-contact">
                Contact Us
            </Link>
        </header>
    );
};

export default Navbar;
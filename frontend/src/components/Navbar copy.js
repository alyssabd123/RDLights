import { Link } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/RDLightsLogo.png'; 
import './Navbar copy.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <ul className="navbar-links">
                <Link to="/admin-login">
                    <img src={logo} alt="RD Lights Logo" />
                </Link>
                <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
                <li><NavLink to="/pool-lights" className="navbar-link">Pool Lights</NavLink></li>
                <li><NavLink to="/wall-racks" className="navbar-link">Wall Racks</NavLink></li>
                <li><NavLink to="/installation" className="navbar-link">Installation</NavLink></li>
            </ul>
            <button className="contact-button">
                <Link to="/contact" className="navbar-link-contact">
                    Contact Us
                </Link>
            </button>
        </header>
    );
};

export default Navbar;

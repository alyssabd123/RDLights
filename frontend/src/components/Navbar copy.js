import { Link } from 'react-router-dom';
import logo from '../images/RDLightsLogo.png'; 
import './Navbar copy.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <ul className="navbar-links">
                <Link to="/admin-login">
                    <img src={logo} alt="RD Lights Logo" />
                </Link>
                <li><Link to="/" className="navbar-link">Home</Link></li>
                <li><Link to="/pool-lights" className="navbar-link">Pool Lights</Link></li>
                <li><Link to="/wall-racks" className="navbar-link">Wall Racks</Link></li>
            </ul>
            <button className="contact-button">
                <Link to="/contact" className="navbar-link">
                    Contact Us
                </Link>
            </button>
        </header>
    );
};

export default Navbar;

import { Link } from 'react-router-dom'
import logo from '../images/RDLightsLogo.png'; 

const Navbar = () => {

    return (
        <header className ="navbar">
            <div className ="navbarLeft">
                <div className="container">
                    <Link to="/">
                    <img src={logo} alt="RD Lights Logo" className="logo"/>
                    </Link>
                </div>
                <div className="container">
                    <Link to ="/" className="navbar-link">
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className="container">
                    <Link to ="/" className="navbar-link">
                        <h1>Pool Lights</h1>
                    </Link>
                </div>
                <div className="container">
                    <Link to ="/" className="navbar-link">
                        <h1>Wall Racks</h1>
                    </Link>
                </div>
            </div>

            {/* Right Side */}
            <div className="navbarRight">
                <Link to ="/" className="navbar-link">
                    <h1>Contact Us</h1>
                </Link>
            </div> 
        </header>
    )
}

export default Navbar
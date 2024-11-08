import "./AdminLogin.css"
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return(
        <div className="login-page">
            <div className="login-box">
                <button type="button" className="back-button" onClick={handleBackClick}>&lt;Back</button>
                <form actions="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
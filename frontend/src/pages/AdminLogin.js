import "./AdminLogin.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleBackClick = () => {
        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log("Form submitted:", formData);
        
        navigate('/AdminDashboard')
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <button type="button" className="back-button" onClick={handleBackClick}>&lt;Back</button>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

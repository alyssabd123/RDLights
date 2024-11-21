import "./AdminLogin.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useLogin } from '../hooks/useLogin';

const AdminLogin = () => {
    const { login, isLoading, error } = useLogin()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const success = await login(username, password)
        if (success) {
          navigate('/admin-dashboard')
        }
        
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className="submit-button">Submit</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

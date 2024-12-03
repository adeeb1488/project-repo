import React, { useState } from 'react';
import '../styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const[error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/api/auth/login', formData);
            localStorage.setItem('token', response.data.token); // Save token to localStorage
            alert('Login successful');
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Invalid email or password');
        }
    };

    return (
        <div className='container'>
            {/* Logo Section */}
            <div className="logo-section">
                <img className="logo-section img"src="./assets/img/app_logo.jpeg" alt="LU Logo" />
            </div>

            {/* Form Section */}
            <div className="form-section">
                <div className="form-container">
                    <div className="form-header">
                        <p>Real-Time Face Recognition Attendance System</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="University Email"
                                onChange={handleChange}
                                required
                            />
                            <i className="input-icon ri-mail-line"></i>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                            <i className="input-icon ri-eye-off-line"></i>
                        </div>
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                        <button type="submit" className="sign-in-button">
                            Sign In to LU Smart
                        </button>
                        <p className="register-link">
                            New faculty member? <a href="/register">Register Here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

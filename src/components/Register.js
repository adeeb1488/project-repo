import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css'; // Ensure this CSS file is created and styled appropriately
import { useNavigate } from 'react-router-dom';

const FacultyRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [isVerifying, setIsVerifying] = useState(false); // Optional: Handle verification state
    const navigate = useNavigate();

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('Submitting registration data:', formData);
            const response = await axios.post('http://localhost:5500/api/auth/register', formData);

            alert(response.data.message); // Success message from the server
            navigate('/dashboard'); // Navigate to dashboard on successful registration
        } catch (error) {
            console.error('Error during registration:', error);
            alert(
                error.response?.data?.message || 'An error occurred during registration.'
            );
        }
    };

    return (
        <div className='registration'>
        <div className="registration-container">
            {/* Logo and Title */}
            <div className="logo-container">
                <img src="assets/img/logo.png" alt="LU Logo" className="logo" />
                <h1 className="title">Faculty Registration</h1>
                <p className="subtitle">
                    Create your account for LU Smart Attendance System
                </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="form-row">
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-input"
                                name="firstName"
                                placeholder=" "
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            <label className="form-label" htmlFor="firstName">
                                First Name
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-input"
                                name="lastName"
                                placeholder=" "
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                            <label className="form-label" htmlFor="lastName">
                                Last Name
                            </label>
                        </div>
                    </div>
                </div>

                {/* Email with Verify Button */}
                <div className="email-group">
                    <div className="form-group" style={{ flex: 1 }}>
                        <div className="input-container">
                            <input
                                type="email"
                                className="form-input"
                                name="email"
                                placeholder=" "
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <label className="form-label" htmlFor="emailInput">
                                University Email
                            </label>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="verify-button"
                        onClick={() => {
                            setIsVerifying(true);
                            console.log('Verification process started.');
                        }}
                    >
                        {isVerifying ? 'Verifying...' : 'Verify'}
                    </button>
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <div className="input-container">
                        <input
                            type="password"
                            className="form-input"
                            name="password"
                            placeholder=" "
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="password">
                            Create Password
                        </label>
                    </div>
                </div>

                {/* Register Button */}
                <button type="submit" className="register-button">
                    Register
                </button>

                {/* Login Link */}
                <p className="login-link">
                    Already have an account? <a href="/login">Sign In</a>
                </p>
            </form>
        </div>
        </div>
    );
};

export default FacultyRegistration;

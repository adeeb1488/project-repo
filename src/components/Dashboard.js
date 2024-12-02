import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
 // Ensure the CSS file is created and linked

const Dashboard = () => {
    const navigate = useNavigate();
    // Event handlers for buttons
    const handleButtonClick = (text) => {
        console.log('Clicked:', text);
    };

    const handleHelpClick = () => {
        console.log('Help requested');
    };
    const handleTakeAttendance = () => {
        navigate('/take-attendance'); // Update the route as needed
    };
    const handleAttendanceRecord = () => {
        navigate('/course-attendance'); // Update the route as needed
    };
    return (
        <div className = "dashboard">
            {/* Navigation Bar */}
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src="assets/img/logo.png" alt="LU Logo" />
                        <span>LU Smart</span>
                    </div>
                    <div className="nav-links">
                        <a href="#" className="nav-link">
                            <i className="ri-home-4-line"></i>
                            Dashboard
                        </a>
                        <a href="#" className="nav-link">
                            <i className="ri-calendar-line"></i>
                            Review Attendance
                        </a>
                        <a href="#" className="nav-link">
                            <i className="ri-group-line"></i>
                            Manage Attendance
                        </a>
                        <a href="#" className="nav-link">
                            <i className="ri-settings-3-line"></i>
                            Settings
                        </a>
                    </div>
                    <div className="nav-profile">
                        <i className="ri-user-3-line"></i>
                        <span>Professor</span>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="dashboard-container">
                <div className="logo-container">
                    <img src="assets/img/logo.png" alt="LU Logo" className="logo" />
                    <h1 className="welcome-text">Hello Professor</h1>
                </div>

                <div className="dashboard-grid">
                    <button
                        className="dashboard-button"
                        onClick={() => handleTakeAttendance()}
                    >
                        <span className="button-text">Take Attendance</span>
                        <i className="ri-camera-line button-icon"></i>
                    </button>

                    <button
                        className="dashboard-button"
                        onClick={() => handleAttendanceRecord()}
                    >
                        <span className="button-text">My Attendance Record</span>
                        <i className="ri-file-list-3-line button-icon"></i>
                    </button>

                    <button
                        className="dashboard-button"
                        onClick={() => handleButtonClick('Review Attendance')}
                    >
                        <span className="button-text">Review Attendance</span>
                        <i className="ri-eye-line button-icon"></i>
                    </button>

                    <button
                        className="dashboard-button"
                        onClick={() => handleButtonClick('Manage Attendance')}
                    >
                        <span className="button-text">Manage Attendance</span>
                        <i className="ri-settings-3-line button-icon"></i>
                    </button>
                </div>
            </div>

            {/* Help Button */}
            <button className="help-button" title="Need Help?" onClick={handleHelpClick}>
                <i className="ri-question-line"></i>
            </button>
        </div>
    );
};

export default Dashboard;

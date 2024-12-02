import React, { useEffect, useState } from 'react';
import '../styles/TakeAttendance.css'; // Ensure the CSS is linked properly
import { useNavigate } from 'react-router-dom';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
const TakeAttendance = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Timer functionality
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on unmount
    }, []);

    // Format timer display
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (totalSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    const handleStopAttendance = () => {
        if (window.confirm('Are you sure you want to stop taking attendance?')) {
            console.log('Stopping attendance');
            // Add logic to stop attendance
            navigate('/attendance-confirmed')
        }
    };

    return (
        <div className="take-attendance-page">
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
                    </div>
                    <div className="nav-profile">
                        <i className="ri-user-3-line"></i>
                        <span>Professor</span>
                    </div>
                </div>
            </nav>

            {/* Webcam Feed Container */}
            <div className="dashboard-container">
                <h1 className="section-title">Webcam Feed</h1>

                <div className="webcam-container">
                    <div className="webcam-overlay">
                        <div className="webcam-header">
                            <div className="rec-indicator">
                                <div className="rec-dot"></div>
                                REC
                            </div>
                            <div className="battery-indicator">
                                <i className="ri-battery-2-line"></i>
                                75%
                            </div>
                        </div>
                        <div className="crosshair">
                            <i className="ri-add-line"></i>
                        </div>
                        <div className="timer">{formatTime(seconds)}</div>
                        <div className="quality-indicator">4K</div>
                    </div>
                </div>

                {/* Attendance Table */}
                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Present/Absent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" defaultChecked />
                            </td>
                            <td>Student 1</td>
                            <td className="status-present">Present</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" defaultChecked />
                            </td>
                            <td>Student 2</td>
                            <td className="status-absent">Absent</td>
                        </tr>
                    </tbody>
                </table>

                {/* Stop Button */}
                <button className="stop-button" onClick={handleStopAttendance}>
                    <i className="ri-stop-circle-line"></i>
                    Stop Attendance
                </button>
            </div>
        </div>
    );
};

export default TakeAttendance;

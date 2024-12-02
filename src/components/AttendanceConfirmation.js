import React from 'react';
import '../styles/AttendanceConfirmation.css'; // Ensure the CSS file is linked properly
import { useNavigate } from 'react-router-dom'; // For navigation

const AttendanceSuccess = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Button Handlers
    const handleViewAttendance = () => {
        console.log('View Attendance clicked');
        // Add navigation or logic for viewing attendance
    };

    const handleUpdateAttendance = () => {
        console.log('Update Attendance clicked');
        // Add navigation or logic for updating attendance
    };

    const handleDone = () => {
        console.log('Done clicked');
        navigate('/dashboard'); // Redirect to dashboard
    };

    return (
        <div className='attendance-confirmation '>
        <div className="dashboard-container">
            {/* Success Animation */}
            <div className="success-animation">
                <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                >
                    <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                    />
                    <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                </svg>
            </div>

            {/* Success Text */}
            <div className="success-text">Done</div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="action-button" onClick={handleViewAttendance}>
                    View Attendance
                </button>
                <button className="action-button" onClick={handleUpdateAttendance}>
                    Update Attendance
                </button>
            </div>

            {/* Done Button */}
            <button className="action-button done-button" onClick={handleDone}>
                Done
            </button>
        </div>
        </div>
    );
};

export default AttendanceSuccess;

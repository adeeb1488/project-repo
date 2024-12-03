import React, { useState } from 'react';
import '../styles/ViewAttendance.css'; // Ensure the CSS file is linked
import { useNavigate } from 'react-router-dom';
const ViewAttendance = () => {
    const navigate = useNavigate()
    // State for attendance date
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Default date is today
    });

    // Handle date change
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        console.log('Selected date:', e.target.value);
    };

    // Handle done button click
    const handleDone = () => {
        console.log('Done clicked');
        // Add your done button logic here
        navigate('/dashboard')
    };

    return (
        <div className="attendance-record">
        <div className="dashboard4-container">
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
                    <div className="nav-links">
                        <a href="#" className="nav-link">
                            <i className="ri-home-4-line"></i>
                            Update Attendance
                        </a>
                    </div>
                    <div className="nav-profile">
                        <i className="ri-user-3-line"></i>
                        <span>Professor</span>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <div className="header-container">
                <div className="title-date-group">
                    <h1 className="section-title">Course 1</h1>
                    <input
                        type="date"
                        className="date-input"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>
            </div>

            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Present/Absent</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { name: 'Student 1', status: 'Present' },
                        { name: 'Student 2', status: 'Present' },
                        { name: 'Student 3', status: 'Absent' },
                        { name: 'Student 4', status: 'Present' },
                        { name: 'Student 5', status: 'Present' },
                        { name: 'Student 6', status: 'Absent' },
                        { name: 'Student 7', status: 'Present' },
                        { name: 'Student 8', status: 'Present' },
                        { name: 'Student 9', status: 'Absent' },
                        { name: 'Student 10', status: 'Present' },
                    ].map((student, index) => (
                        <tr key={index}>
                            <td className="student-name">{student.name}</td>
                            <td>
                                <div
                                    className={`status-${student.status.toLowerCase()}`}
                                >
                                    <i
                                        className={`ri-${
                                            student.status === 'Present'
                                                ? 'checkbox-circle-fill'
                                                : 'close-circle-fill'
                                        }`}
                                    ></i>
                                    {student.status}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="attendance-percentage">
                Class Attendance: <span>70%</span>
            </div>

            <button className="done-button" onClick={handleDone}>
                <i className="ri-check-line"></i>
                Done
            </button>
            </div>
        </div>
    );
};

export default ViewAttendance;

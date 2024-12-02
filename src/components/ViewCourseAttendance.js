import React, { useState } from 'react';
import '../styles/ViewCourseAttendance.css'; // Ensure the CSS file is linked properly
import { useMatch, useNavigate } from 'react-router-dom';
const AttendanceRecord = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);
const navigate = useNavigate()
    // Handle subject selection
    const handleSubjectChange = (subjectId) => {
        setSelectedSubject(subjectId);
    };

    // Handle "View Attendance" button click
    const handleViewAttendance = () => {
        if (selectedSubject) {
            console.log('Viewing attendance for:', selectedSubject);
            
            // Add navigation or logic for viewing attendance here
           navigate('/attendance');
        }
    };

    // Handle "Next" button click
    const handleNext = () => {
        if (selectedSubject) {
            console.log('Next clicked for:', selectedSubject);
            // Add navigation or logic for the next step here
        }
    };

    return (
        
        <div className='course-attendance'>
        <div>
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
            <h1 className="section-title">Attendance Record</h1>

            {/* Subjects List */}
            <div className="subjects-list">
                <div className="subject-item">
                    <input
                        type="radio"
                        className="subject-radio"
                        id="subject1"
                        name="subject"
                        onChange={() => handleSubjectChange('subject1')}
                    />
                    <label className="subject-label" htmlFor="subject1">
                        Course 1
                    </label>
                </div>
                <div className="subject-item">
                    <input
                        type="radio"
                        className="subject-radio"
                        id="subject2"
                        name="subject"
                        onChange={() => handleSubjectChange('subject2')}
                    />
                    <label className="subject-label" htmlFor="subject2">
                        Course 2
                    </label>
                </div>
            </div>

            {/* Buttons */}
            <div className="button-container">
                <button className="view-button" onClick={handleViewAttendance}>
                    View Attendance
                </button>
                <button
                    className="next-button"
                    onClick={handleNext}
                    disabled={!selectedSubject}
                >
                    Next
                </button>
            </div>
        </div>
        </div>
    );
};

export default AttendanceRecord;

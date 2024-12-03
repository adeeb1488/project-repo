import React, { useState } from 'react';
import '../styles/UpdateCourseBefore.css'; // Ensure this CSS file is created and linked
import { useNavigate } from 'react-router-dom';

const UpdateCourseBefore = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const navigate = useNavigate()
    const handleRadioChange = (e) => {
        setSelectedStudent(e.target.id);
        console.log('Selected student:', e.target.id);
    };

    const handleUpdateAttendance = () => {
        if (selectedStudent) {
            console.log('Updating attendance for:', selectedStudent);
            // Add your update logic here
            navigate('/updateCourseAfter')
            
        } else {
            alert('Please select a student to update attendance');
        }
    };

    return (
        <div className='updateCourseBefore'>
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

            {/* Dashboard Content */}
            <div className="dashboard-container">
                <div className="header-container">
                    <h1 className="section-title">Course 1</h1>
                </div>

                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Mark</th>
                            <th>Name</th>
                            <th>Present/Absent</th>
                            <th>Attendance % (75%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="student-radio">
                                <input
                                    type="radio"
                                    name="student_select"
                                    id="radio1"
                                    className="radio-input"
                                    onChange={handleRadioChange}
                                />
                            </td>
                            <td className="student-name">Student 1</td>
                            <td>
                                <div className="status-present">
                                    <i className="ri-checkbox-circle-fill"></i>
                                    Present
                                </div>
                            </td>
                            <td>
                                <span className="percentage-green">80%</span>
                            </td>
                        </tr>
                        {/* Add the rest of your student rows here */}
                    </tbody>
                </table>

                <div className="attendance-percentage">
                    <div className="total-attendance">
                        Class Attendance: <span>70%</span>
                    </div>
                    <button
                        className="update-attendance-button"
                        onClick={handleUpdateAttendance}
                    >
                        <i className="ri-edit-line"></i>
                        Update Attendance
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourseBefore;

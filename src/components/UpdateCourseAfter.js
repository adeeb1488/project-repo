import React, { useState, useEffect } from 'react';
import '../styles/UpdateCourseAfter.css'; // Ensure this file exists for styles
import { useNavigate } from 'react-router-dom';
const UpdateCourseAfter = () => {
    // Sample attendance data
    const [attendanceData, setAttendanceData] = useState([
        { class: 'Class 1', date: '20 Nov 2024', status: 'present' },
        { class: 'Class 2', date: '21 Nov 2024', status: 'present' },
        { class: 'Class 3', date: '22 Nov 2024', status: 'present' },
        { class: 'Class 4', date: '23 Nov 2024', status: 'absent' },
        { class: 'Class 5', date: '23 Nov 2024', status: 'absent' },
    ]);
    const navigate = useNavigate()

    const [attendancePercentage, setAttendancePercentage] = useState(0);
    // const navigate = useNavigate()
    // Calculate attendance percentage on data change
    useEffect(() => {
        const total = attendanceData.length;
        const presentCount = attendanceData.filter(item => item.status === 'present').length;
        const percentage = Math.round((presentCount / total) * 100);
        setAttendancePercentage(percentage);
    }, [attendanceData]);

    // Handle attendance status change
    const handleStatusChange = (index, newStatus) => {
        const updatedData = [...attendanceData];
        updatedData[index].status = newStatus;
        setAttendanceData(updatedData);
    };

    // Review attendance summary
    const reviewAttendance = () => {
        const total = attendanceData.length;
        const present = attendanceData.filter(item => item.status === 'present').length;
        const absent = attendanceData.filter(item => item.status === 'absent').length;
        const excused = attendanceData.filter(item => item.status === 'excuse').length;

        alert(
            `Attendance Summary:\n\n` +
            `Total Classes: ${total}\n` +
            `Present: ${present}\n` +
            `Absent: ${absent}\n` +
            `Excused: ${excused}\n\n` +
            `Attendance Percentage: ${attendancePercentage}%`
        );
    };

    // Save attendance changes
    const saveChanges = () => {
        console.log('Saving attendance:', attendanceData);
        alert('Changes saved successfully!');
        navigate("/dashboard")
    };

    return (
        <div className = 'updateAfterCourse'>
            {/* Navigation */}
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

            {/* Dashboard */}
            <div className="dashboard-container">
                <h1 className="student-name">Student 1</h1>
                <div
                    className="percentage"
                    style={{
                        color:
                            attendancePercentage >= 75
                                ? '#28a745'
                                : attendancePercentage >= 50
                                ? '#ffc107'
                                : '#dc3545',
                    }}
                >
                    {attendancePercentage}%
                </div>

                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Date</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.class}</td>
                                <td>{item.date}</td>
                                <td>
                                    <select
                                        className={`attendance-select ${item.status}`}
                                        value={item.status}
                                        onChange={(e) =>
                                            handleStatusChange(index, e.target.value)
                                        }
                                    >
                                        <option value="present">Present</option>
                                        <option value="absent">Absent</option>
                                        <option value="excuse">Excuse</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="button-container">
                    <button
                        className="action-button review-button"
                        onClick={reviewAttendance}
                    >
                        Review
                    </button>
                    <button
                        className="action-button save-button"
                        onClick={saveChanges}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourseAfter;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
// import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TakeAttendance from './components/TakeAttendance';
import AttendanceSuccess from './components/AttendanceConfirmation';
import AttendanceRecord from './components/ViewCourseAttendance';
import ViewAttendance from './components/ViewAttendance';
import FacultyRegistration from './components/Register';
import UpdateCourseBefore from './components/UpdateCourseBefore';
import UpdateCourseAfter from './components/UpdateCourseAfter';
const App = () => (
    <Router>
        <Routes>
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/take-attendance" element={<TakeAttendance />} />
            <Route path="/attendance-confirmed" element={<AttendanceSuccess />} />
            <Route path="/course-attendance" element={<AttendanceRecord />} />
            <Route path="/attendance" element={<ViewAttendance />} />
            <Route path="/manage-attendance" element={ <AttendanceRecord />} />
            <Route path="/register" element={ <FacultyRegistration />} />
            <Route path="/updateCourseBefore" element={ <UpdateCourseBefore />} />
            <Route path="/updateCourseAfter" element={ <UpdateCourseAfter />} />

        </Routes>
    </Router>
);

export default App;

import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from '../App';

import AdminLogin from '../component/admin/Login';
import AdminSignup from '../component/admin/AddAdmin';
import AdminDashbord from '../component/admin/Dashbord'
import AddStudent from '../component/admin/AddStudent';
import AllStudent from '../component/admin/AllStudent';
import AllAdmin from '../component/admin/AllAdmin';
import AdminProfile from '../component/admin/Profile';

import StudentLogin from "../component/student/Login";
import StudentDashbord from '../component/student/Dashbord';

function Routess() {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/admin-login' element={<AdminLogin />}/>
        <Route path='/add-admin' element={<AdminSignup />}/>
        <Route path='/admin-dashbord' element={<AdminDashbord />}/>
        <Route path='/add-student' element={<AddStudent />}/>
        <Route path='/all-student' element={<AllStudent />}/>
        <Route path='/all-admin' element={<AllAdmin />}/>
        <Route path='/admin-profile' element={<AdminProfile />}/>
        
        <Route path='/login' element={<StudentLogin />}/>
        <Route path='/student-dashbord' element={<StudentDashbord />}/>
    </Routes>
  )
}

export default Routess
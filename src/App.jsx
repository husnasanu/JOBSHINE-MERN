import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './bootstrap.min.css'; 
import {  Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Userhome from "./pages/Userhome";
import Dashboard from "./pages/Dashboard";
import Userview from "./pages/Userview";
import Applyjob from "./pages/Applyjob";
import UserJobView from "./pages/UserJobView";
import StatusView from "./pages/StatusView";
import { tokenAuthContext } from "./contexts/AuthContext";
import UsersList from "./pages/UsersList";
function App() { 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 120,      
    });
  }, []);
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/userhome" element={isAuthorised ? <Userhome/> : <Navigate to={'/login'}/> } />
      <Route path="/dashboard" element={isAuthorised ?<Dashboard/> : <Navigate to={'/login'}/> } />
      <Route path="/userview" element={isAuthorised ? <Userview/> : <Navigate to={'/login'}/>  }/>
      <Route path="/applicationForm" element={isAuthorised ? <Applyjob/>: <Navigate to={'/login'}/> }/>
      <Route path="/user-job-view" element={isAuthorised ? <UserJobView/> : <Navigate to={'/login'}/> } />
      <Route path="/statusView" element={isAuthorised ? <StatusView/> : <Navigate to={'/login'}/> } />
      <Route path="/userViewByAdmin" element={<UsersList/>} />
    </Routes>
  );
}

export default App;

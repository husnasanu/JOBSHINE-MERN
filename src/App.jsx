import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Userhome from "./pages/Userhome";
import Dashboard from "./pages/Dashboard";
import Userview from "./pages/Userview";
import Applyjob from "./pages/Applyjob";
import Profile from "./pages/Profile";
import UserJobView from "./pages/UserJobView";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 120,      
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/userhome" element={<Userhome/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/userview" element={<Userview/>} />
      <Route path="/applicationForm" element={<Applyjob/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/user-job-view" element={<UserJobView/>} />

    </Routes>
  );
}

export default App;

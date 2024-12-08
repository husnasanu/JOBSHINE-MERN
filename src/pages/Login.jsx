import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../Services/allAPI";
const Login = () => {
  const navigate = useNavigate()
  const [userData,setUserData]=useState({
       email:'',password:''
  })
 console.log(userData);
 
 const handleLogin= async(e)=>{
    e.preventDefault()
  if(userData.email && userData.password){
    // api call
   try{
    const result = await loginAPI(userData)
    console.log(result);
    if(result.status==200){
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      sessionStorage.setItem("token",result.data.token)
      // alert("Successfully Completed")
      setUserData({email:'',password:''})
      if(result.data.user.role=="Admin"){
        navigate('/dashboard')
      }else{
        navigate('/userhome')
      }
    }
   }catch(err){
    alert(result.response.data)
   }
  }else{
    alert("please fill the form completely!!!")
  }
 }
 
  return (
    <div className="text-dark">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg p-4">
              <h3  className="text-center mb-4">Welcome User</h3>
              <form>
                <div>
                  <input value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email"className="form-control mb-3"    placeholder="Enter your email"required />
                  <input value={userData.password}  onChange={e=>setUserData({...userData,password:e.target.value})}  type="text"className="form-control mb-3"    placeholder="Enter your Password"required />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    
                  </div>
                  <Link >Forgot password</Link>
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary w-100 mt-3">
                  Login
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to={'/register'}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

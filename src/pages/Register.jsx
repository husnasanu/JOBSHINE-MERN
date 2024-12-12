import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../Services/allAPI";

const Register = () => {
  
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
     username:'',email:'',password:''
  })
console.log(userData);


const handleRegister= async(e)=>{
  e.preventDefault()
  if(userData.username && userData.email && userData.password){
    // api call
    try{
     const result = await registerAPI(userData)
     console.log(result);
     if(result.status==200){
      alert(`Welcome ${result?.data?.username} please Login`)
      setUserData({username:'',email:'',password:''})
      navigate('/login')
     }else{
      if(result.response.status==406){
        alert(result.response.data)
        setUserData({username:'',email:'',password:''})
      }
     }
     
    }catch(err){
      console.log(err);
      
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
              <h3 className="text-center mb-4">Welcome User</h3>
              <form>
                <div>
                  <input value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text"className="form-control mb-3"  id="email" placeholder="Enter your Name"required />
                  <input value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email"className="form-control mb-3"    placeholder="Enter your email"required />
                  <input value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password"className="form-control mb-3"    placeholder="Enter your Password"required />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    
                  </div>
                  <Link >Forgot password</Link>
                </div>
                <button type="submit" onClick={handleRegister} className="btn btn-primary w-100 mt-3">
                  Register
                </button>
              </form>
              <p className="text-center mt-3">
                Already Have an account? <Link to={'/login'}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

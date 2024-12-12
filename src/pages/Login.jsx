import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../Services/allAPI";
import GoogleSignIn from "../GoogleSignin/Signin";
import { tokenAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext); // Correct placement of useContext inside the component
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      try {
        const result = await loginAPI(userData);
        if (result.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setIsAuthorised(true);
          setUserData({ email: '', password: '' });

          if (result.data.user.role === "Admin") {
            navigate('/dashboard');
          } else {
            navigate('/userhome');
          }
        }
      } catch (err) {
        alert(err.response?.data?.message || "Something went wrong. Please try again.");
      }
    } else {
      alert("Please fill the form completely!");
    }
  };

  return (
    <div className="text-dark">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg p-4">
              <h3 className="text-center mb-4">Welcome User</h3>
              <form onSubmit={handleLogin}>
                <div>
                  <input
                    value={userData.email}
                    onChange={e => setUserData({ ...userData, email: e.target.value })}
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    required
                  />
                  <input
                    value={userData.password}
                    onChange={e => setUserData({ ...userData, password: e.target.value })}
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/forgot-password">Forgot password?</Link>
                  <div>
                    <GoogleSignIn /> {/* Google SignIn component */}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Login
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

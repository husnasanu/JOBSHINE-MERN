import React, { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { registerAPI, loginAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';
import { auth } from './Config'; // Ensure this is correctly imported

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleClick = async () => {
    const customProvider = new GoogleAuthProvider();
    customProvider.setCustomParameters({ prompt: 'select_account' });

    try {
      const { user } = await signInWithPopup(auth, customProvider); // Use auth correctly

      const userInfo = {
        username: user.displayName || 'fromGoogle', // Use displayName from Google Auth
        email: user.email,
        password: user.email, 
        photoURL: user.photoURL,
      };

      setUserData(userInfo);
      localStorage.setItem('userData', JSON.stringify(userInfo));

      try {
        const registerResult = await registerAPI(userInfo);
        if (registerResult.status === 200) {
          console.log("Registration successful, logging in...");
          await loginUser(userInfo, navigate);
        } else if (registerResult.status === 406) {
          console.log("User already registered, logging in...");
          await loginUser(userInfo, navigate);
        }
      } catch (registerError) {
        console.error('Registration error:', registerError);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      alert('Failed to sign in with Google. Please try again.');
    }
  };

  // This function handles login logic to avoid repeating it
  const loginUser = async (userInfo, navigate) => {
    try {
      const loginResult = await loginAPI(userInfo);
      if (loginResult.status === 200) {
        sessionStorage.setItem('user', JSON.stringify(loginResult.data.user));
        sessionStorage.setItem('token', loginResult.data.token);
        alert(`Welcome ${loginResult.data.user.username}...!`);
        navigate('/userhome'); // Navigate to the user home after successful login
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (loginError) {
      console.error('Login error:', loginError);
      alert('Login failed. Please try again.');
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className='text-center'>
      <button className="google-login-btn btn" onClick={handleClick}>
        <img 
          width={'30px'} 
          height={'30px'}
          src="https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp" 
          alt="Google Logo" 
          className="google-icon" 
        />
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;



// import React, { useEffect, useState } from 'react';
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { registerAPI, loginAPI } from '../Services/allAPI';
// import { useNavigate } from 'react-router-dom';
// import { auth } from './Config';

// const GoogleSignIn = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   const handleClick = async () => {
//     const customProvider = new GoogleAuthProvider();
//     customProvider.setCustomParameters({ prompt: 'select_account' });

//     try {
//       const { user } = await signInWithPopup(auth, customProvider); // Use auth here

//       const userInfo = {
//         username: 'fromGoogle', 
//         email: user.email,
//         password: user.email, 
//         photoURL: user.photoURL,
//       };

//       setUserData(userInfo);
//       localStorage.setItem('userData', JSON.stringify(userInfo));

//       try {
//         const registerResult = await registerAPI(userInfo);
//         if (registerResult.status === 200) {
//           try {
//             const loginResult = await loginAPI(userInfo);
//             if (loginResult.status === 200) {
//               sessionStorage.setItem('user', JSON.stringify(loginResult.data.user));
//               sessionStorage.setItem('token', loginResult.data.token);
//               alert(`Welcome ${registerResult.data.username}...!`);
//               navigate('/userhome');
//               window.location.reload();
//             }
//           } catch (loginError) {
//             console.error('Login error:', loginError);
//             alert('Login failed. Please try again.');
//           }
//         } else if (registerResult.status === 406) {
//           try {
//             const loginResult = await loginAPI(userInfo);
//             if (loginResult.status === 200) {
//               sessionStorage.setItem('user', JSON.stringify(loginResult.data.user));
//               sessionStorage.setItem('token', loginResult.data.token);
//               alert(`Welcome  ${loginResult.data.user.username}...!`);
//               navigate('/userhome');
//               window.location.reload();
//             }
//           } catch (loginError) {
//             console.error('Login error:', loginError);
//             alert('Login failed. Please try again.');
//           }
//         }
//       } catch (registerError) {
//         console.error('Registration error:', registerError);
//         alert('Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during Google Sign-In:', error);
//       alert('Failed to sign in with Google. Please try again.');
//     }
//   };

//   useEffect(() => {
//     const storedUserData = localStorage.getItem('userData');
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//     }
//   }, []);

//   return (
//     <div className='text-center'>
//       <button className="google-login-btn btn" onClick={handleClick}>
//         <img width={'30px'} height={'30px'}
//           src="https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp" 
//           alt="Google Logo" 
//           className="google-icon" 
//         />
//         Sign In with Google
//       </button>
//     </div>
//   );
// };

// export default GoogleSignIn;

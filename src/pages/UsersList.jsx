import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUserAPI, getUserAPI } from '../Services/allAPI';
import { editResponseContext } from '../contexts/ContextShare';
import serverURL from '../Services/serverURL';

const UsersList = () => {
  const { editResponse, setEditResponse } = useContext(editResponseContext);
  const [username, setUsername] = useState('');
  const [usersList, setUsersList] = useState([]); // Fixed typo here

  useEffect(() => {
    getUserList();
    if (sessionStorage.getItem('user')) {
      setUsername(JSON.parse(sessionStorage.getItem('user')).username);
    } else {
      setUsername('');
    }
  }, [editResponse]);

  const getUserList = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json', // changed this to application/json
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getUserAPI(reqHeader);
        if (result.status === 200) {
          // Filter out admin users
          const filteredUsers = result.data.filter(user => user.role !== 'Admin');
          setUsersList(filteredUsers);
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteUser = async (jid) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await deleteUserAPI(jid, reqHeader);
        if (result.status === 200) {
          getUserList();
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div>
        {/* Header Image */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KHH3cSCCFCW7It-Yr7vYXAQ8PnYtV2Q1-g&s" 
          width="100%" 
          height="50px" 
          alt="JobShine" 
          className="mb-3" 
        />
        
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1 className="text-danger fst-italic">
              Welcome 
              <span className='text-danger fst-italic'> to Hire_Connect</span>
            </h1>
          </div>

          <div className="d-flex">
            
            <h6 className="ms-4">
              {/* applications */}
              <Link to="/userview" className="text-dark text-decoration-none fs-5">
                  <i class="fa-solid fa-file-lines me-5"></i> 
              </Link>
            </h6>
            <h6 className="ms-4">
              {/* logout */}
              <Link to="/dashboard" className="text-dark text-decoration-none fs-5">
                 <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </h6>
          </div>
        </div>

        <hr />
        <div className="text-center my-5 d-flex container-fluid">
          <div className="my-3 col-10">
            <table className='container shadow my-5 p-5'>
              <thead className='my-3'>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>LinkedIn</th>
                  <th>Photo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {usersList?.length > 0 ? 
                  usersList.map(user => (
                    <tr key={user._id} className='p-5 shadow'>
                      <td className='ps-3 text-dark'>{user.username}</td>
                      <td className='ps-3 text-dark'>{user.email}</td>
                      <td className='ps-3 text-dark'>{user.phno}</td>
                      <td className='ps-3 text-dark'>{user.linkedin}</td>
                      <td className='ps-3 text-dark'>
                        {user.profilePic ? (
                           <img 
                           src={user.profilePic ? `${serverURL}/uploads/${user.profilePic}` : 'default.png'} 
                           alt="Profile" 
                           width="50" 
                           height="50" 
                         />
                        ) : (
                          'No Image'
                        )}
                      </td>
                      <td>
                        <button 
                          onClick={() => deleteUser(user._id)}  
                          className='btn'
                        >
                          <i className="fa-solid fa-trash text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                  : 
                  <tr>
                    <td colSpan="6">
                      <h1 className='text-center text-danger my-3'>No users found!</h1>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <div className="col-2 my-3">
            <h6 className="w-100"></h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;

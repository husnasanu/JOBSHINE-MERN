import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteApplicationAPI, getApplyJobAPI } from '../Services/allAPI';
import Profile from '../components/Profile';
import { editResponseContext } from '../contexts/ContextShare';

const Userhome = () => {
  const { editResponse, setEditResponse } = useContext(editResponseContext);
  const [username, setUsername] = useState('');
  const [userApplyJob, setUserApplyJob] = useState([]);

  useEffect(() => {
    getUserAppliedJob();
    if (sessionStorage.getItem('user')) {
      setUsername(JSON.parse(sessionStorage.getItem('user')).username);
    } else {
      setUsername('');
    }
  }, [editResponse]);

  console.log(userApplyJob);

  const getUserAppliedJob = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      };
      // API call
      try {
        const result = await getApplyJobAPI(reqHeader);
        console.log(result);
        if (result.status === 200) {
          setUserApplyJob(result.data);
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteApplication = async (jid) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await deleteApplicationAPI(jid, reqHeader);
        if (result.status === 200) {
          getUserAppliedJob();
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
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KHH3cSCCFCW7It-Yr7vYXAQ8PnYtV2Q1-g&s"
          width="100%"
          height="50px"
          alt="JobShine"
          className="mb-3"
        /> */}

        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
          <div>
            <h1 className="text-danger fst-italic">
              Welcome{' '}
              <span className="text-danger fst-italic">to Hire_Connect</span>
            </h1>
          </div>

          <div className="d-flex flex-wrap justify-content-center mt-3 mt-md-0">
            <h6 className="ms-4">
              <Link to="/user-job-view" className="text-dark text-decoration-none fs-5">
                Jobs <i className="fa-solid fa-graduation-cap"></i>
              </Link>
            </h6>
            <h6 className="ms-4">
              <Link to="/statusView" className="text-dark text-decoration-none fs-5">
                Status <i className="fa-solid fa-graduation-cap"></i>
              </Link>
            </h6>
            <h6 className="ms-4">
              <Link to="/" className="text-dark text-decoration-none fs-5">
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </h6>
          </div>
        </div>

        <hr />
        <div className="container-fluid text-center my-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9">
              <table className="table table-striped shadow my-5 p-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>cName</th>
                    <th>Title</th>
                    <th>Qualification with CGPA</th>
                    <th>Role</th>
                    <th>CTC</th>
                    <th>Skills</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userApplyJob?.length > 0 ? (
                    userApplyJob.map((appliedJob) => (
                      <tr key={appliedJob?._id}>
                        <td>{appliedJob?.Name}</td>
                        <td>{appliedJob?.cName}</td>
                        <td>{appliedJob?.title}</td>
                        <td>{appliedJob?.qualification} with {appliedJob?.cgpa} %</td>
                        <td>{appliedJob?.currRole}</td>
                        <td>{appliedJob?.expCTC}</td>
                        <td>{appliedJob?.skills}</td>
                        <td>
                          <button
                            onClick={() => deleteApplication(appliedJob?._id)}
                            className="btn text-danger"
                          >
                            <i className="fa-solid fa-trash text-danger"  ></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center text-danger">
                        No applied jobs!!!!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="col-12 col-md-3 my-3">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userhome;

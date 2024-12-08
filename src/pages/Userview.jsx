import React, { useEffect, useState } from 'react'
import { allApplcationAPI } from '../Services/allAPI';
import { Link } from 'react-router-dom';

const Userview = () => { 
  
  const [allApplications,setAllApplications]=useState([])
  useEffect(() => {
    // if (token) getAdminAddJobs();
    getAllApplications()
  }, []);
  console.log(allApplications);

  const getAllApplications = async()=>{
    const token = sessionStorage.getItem("token")
    // application/json
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      // api call - post request
      try {
        const result = await allApplcationAPI(reqHeader)
        console.log(result);
        if(result.status==200){
         setAllApplications(result.data)

        }else{
          console.log(result.response.data);
          
        }
        
      } catch (err) {
        console.log(err);
        
      }
    }
  }

  return (
    <div className="container mt-4">
    <div className="d-flex">
    <div className="col-10">  <h1 className="text-center text-primary">All Applications </h1></div>
     <div className="col-2"> 
      <span className='ms-5'> <Link to={'/dashboard'}>Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></Link></span>
      </div>
    </div>
  <div className="table-responsive">
    <table className="table table-bordered shadow">
      <thead className="table-dark">
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Company </th>
          <th className="text-center">Job Title</th>
          <th className="text-center">Gender</th>
          <th className="text-center">Qualification</th>
          <th className="text-center">Passout</th>
          <th className="text-center">CGPA</th>
          <th className="text-center">Role</th>
          <th className="text-center">Experience</th>
          <th className="text-center">CUR_CTC</th>
          <th className="text-center">EXP_CTC</th>
          <th className="text-center">Skills</th>
          <th className="text-center">Resume</th>
        </tr>
      </thead>
      <tbody>
        {allApplications?.length > 0 ? (
          allApplications.map((application, index) => (
            <>
              <tr key={index}>
                <td className="text-start p-2">{application.Name}</td>
                <td className="text-start p-2">{application.cName}</td>
                <td className="text-start p-2">{application.title}</td>
                <td className="text-center">{application.gender}</td>
                <td className="text-start p-2">{application.qualification}</td>
                <td className="text-center">{application.passout}</td>
                <td className="text-center">{application.cgpa}</td>
                <td className="text-start p-2">{application.currRole}</td>
                <td className="text-center">{application.experience}</td>
                <td className="text-center">{application.currCTC}</td>
                <td className="text-center">{application.expCTC}</td>
                <td className="text-start p-2">{application.skills}</td>
                <td className="text-center">
                  <a href={application.resume} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-sm">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan="13" className="text-center p-3">
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-success ">Send Call Letter</button>
                    
                    <button className="btn btn-danger btn-sm">
                       Reject
                    </button>
                  </div>
                </td>
              </tr>
            </>
          ))
        ) : (
          <tr>
            <td colSpan="13" className="text-center text-danger p-4">
              <h4>No Applications Here ...</h4>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Userview
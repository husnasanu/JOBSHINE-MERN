import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteApplicationAPI, getApplyJobAPI } from '../Services/allAPI';
import Profile from '../components/Profile';
import { editResponseContext } from '../contexts/ContextShare';

const Userhome = () => {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const [username,setUsername] = useState("")
  const [userApplyJob,setUserApplyJob] = useState([])
 
  useEffect(()=>{
getUserAppliedJob()
if(sessionStorage.getItem("user")){
  setUsername(JSON.parse(sessionStorage.getItem("user")).username)
}else{
  setUsername("")
}    
  },[editResponse])
   console.log(userApplyJob);
   
   
  const getUserAppliedJob = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
      }
      //api call
      try {
        const result = await getApplyJobAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setUserApplyJob(result.data) 

        }else{
          console.log(result);
          
        }
        
      } catch (err) {
        console.log(err);
        
      }
    }
    // getUserAppliedJob()
  }
  
  const deleteApplication = async (jid)=>{
    const token = sessionStorage.getItem("token")
    
    if(token){
      const reqHeader = {
        "Content-Type":"applicaion/json",
          "Authorization":`Bearer ${token}`
      }
      try{
        const result = await deleteApplicationAPI(jid,reqHeader)
        if(result.status==200){
          getUserAppliedJob()
        }else{
          console.log(result);      
        }
      }catch(err){
        console.log(err);
      }
    }
  }

  

  return (
    <>
    
   
    <div>
      {/* Header Image */}
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KHH3cSCCFCW7It-Yr7vYXAQ8PnYtV2Q1-g&s" width="100%"   height="50px" alt="JobShine"   className="mb-3"
      />
      
      
      <div className="container d-flex justify-content-between align-items-center">
        
            <div>
          <h1 className="text-danger fst-italic">Welcome 
             {/* <span> {username?.split(" ")[0]}  </span>  */} 
        <span className='text-danger fst-italic'>    to Hire_Connect</span></h1>
        </div>
         
        <div className="d-flex">
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
      <div className=" text-center my-5 d-flex container-fluid">
      
        <div className="my-3 col-10">
          <table className='container shadow my-5 p-5'>
            <thead className='my-3'>
              <th className='ms-5'>Name</th>
              <th className='ms-5'>cName</th>
              <th className='ms-5'>Title</th>
              <th className='ms-5'>Qualification with CGPA</th>
              <th className='ms-5'>Role</th>
              <th className='ms-5'>CTC</th>
              <th className='ms-5'>Skills</th>
              
            </thead>
            <tbody>
              
        {
             
                userApplyJob?.length>0 ? 
                userApplyJob?.map(appliedJob=>(
                  <tr key={appliedJob?._id}  className='p-5 shadow'>
                  <td  className='ms-5 ps-3 text-dark'> {appliedJob?.Name} </td>
                  <td  className='ms-5 ps-3 text-dark'> {appliedJob?.cName}</td>
                  <td  className='ms-5 ps-3 text-dark'>{appliedJob?.title}</td>
                  <td  className='ms-5 ps-3  text-dark'>{appliedJob?.qualification} with {appliedJob?.cgpa} %</td>
                  <td  className='ms-5 ps-3 text-dark'>{appliedJob?.currRole}</td>
                  <td  className='ms-5 ps-3 text-dark'>{appliedJob?.expCTC}</td>
                  <td  className='ms-5 ps-3 text-dark'>{appliedJob?.skills}</td>
                 
                  <td><button onClick={()=>deleteApplication(appliedJob?._id)}  className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
                ))
                :
                <div>
                <h1 className='text-center text-Danger my-3'>No applied jobs!!!!</h1>
                </div>
            }
            </tbody>
          </table>
              
        </div>
        <div className="col-2 my-3">
       
        <h6 className="w-100">
          <Profile/>
          </h6>
        </div>
      </div>
    </div>
    </>
  );
};

export default Userhome;


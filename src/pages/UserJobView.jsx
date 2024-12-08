import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { getAllJobsAPI } from '../Services/allAPI'

const UserJobView = () => {

  const Navigate = useNavigate()
  
 useEffect(()=>{
  getAllJobs()
 },[])

  const [adminAddJobs, setAdminAddJobs] = useState([]);
 
  // get all jobs from dashboard
  const getAllJobs = async()=>{
    const token = sessionStorage.getItem("token")
    // application/json
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      // api call - post request
      try {
        const result = await getAllJobsAPI(reqHeader)
        console.log(result);
        if(result.status==200){
         setAdminAddJobs(result.data)

        }else{
          console.log(result.response.data);
          
        }
        
      } catch (err) {
        console.log(err);
        
      }
    }
  }

  const handleApply = (title, cName) => {
    Navigate('/applicationForm', { state: { title, cName } });
  };

  return (
    <div className='container'>
      <h2 className='text-primary text-center my-5 fst-italic'> Job Vaccancy List</h2>
<div className="  d-flex flex-column align-items-center  gap-4">

      
      {
        adminAddJobs?.length>0 ?
        adminAddJobs?.map(allJobs=>(
          <Card style={{ width: "100%", maxWidth:"800px" ,border:'2px solid aqua' }} className=' mb-3 rounded shadow '>
          <Card.Body key={allJobs?._id} className='text-dark'> 
       <h6 className='text-center text-danger fs-4 '>{allJobs?.title}</h6> 
        <h6 className='text-center text-danger '> <b className='me-3 text-danger'>Company Name :</b> {allJobs?.cName} </h6>
         <h6 className='text-dark'> <b className='me-3'>job Discription :</b>
         {allJobs?.description} </h6>
        <div className="d-flex justify-content-between">
        <div>
         <h6 className='text-dark'><b  className='me-3'>Qualification:</b> {allJobs?.qualification}</h6>
        <h6 className='text-dark'><b  className='me-3'>Experience :</b> {allJobs?.experience}</h6>
        <h6 className='text-dark'><b  className='me-3'>Last Date Of Application:</b>{allJobs?.lDate}</h6>
         </div>
         
         <Button
  onClick={() => handleApply(allJobs?.title, allJobs?.cName)}
  variant="primary"
  className="btn-danger"
>
  Apply
</Button>        </div>
     
      </Card.Body>
      </Card>
        ))
        :
        <div>
          No vaccancies Added .........
        </div>
      }
    
</div>
    </div>
  )
}

export default UserJobView
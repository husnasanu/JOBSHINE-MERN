import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addJobAPI, deleteJobAPI, editJobAPI, getAdminJobAPI } from '../Services/allAPI';



const Dashboard = () => {
  
  const [adminAddJobs, setAdminAddJobs] = useState([]);
  const [addData, setAddData] = useState({
    cName: '', cEmail: '', title: '', qualification: '', description: '', experience: '', lDate: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editJobId, setEditJobId] = useState(null);
  const [show, setShow] = useState(false);

  // Fetch token once for reuse
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) getAdminAddJobs();
   
  }, []);


  const handleAdd = async () => {
    const { cName, cEmail, title, qualification, description, experience, lDate } = addData;

    if (cName && cEmail && title && qualification && description && experience && lDate) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      const reqBody = { cName, cEmail, title, qualification, description, experience, lDate };

      try {
        let result;
        if (isEditMode) {
          result = await editJobAPI(editJobId, addData, reqHeader);
        }else{
          result = await addJobAPI(reqBody, reqHeader);
        }
        
        if (result.status === 200) {
        
          alert(isEditMode ? "Job updated successfully" : "Job added successfully");
          // setAdminAddJobs([...adminAddJobs, result.data]);
          setAddData({ cName: '', cEmail: '', title: '', qualification: '', description: '', experience: '', lDate: '' });
          handleClose();
          getAdminAddJobs();

        } 
      } catch (err) {
        console.error(err);
        alert("An error occurred while adding the job.");
      }
    } else {
      alert("Please fill out the form completely.");
    }
  };

  const handleEditJob = (job) => {
    setAddData({
      cName:job.cName, 
      cEmail:job.cEmail,
      title:job.title,
      qualification:job.qualification,
      description:job.description,
      experience:job.experience,
      lDate:job.lDate.split('T')[0]
    });
    setEditJobId(job._id);
    setIsEditMode(true);
    handleShow();
  };


  const getAdminAddJobs = async () => {
    if (!token) {
      alert("Token not found. Please log in again.");
      return;
    }

    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    try {
      const result = await getAdminJobAPI(reqHeader);
      if (result.status === 200) {
        setAdminAddJobs(result.data);
      } else {
        alert(result.response?.data || "Error fetching jobs.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch jobs. Please try again later.");
    }
  };

  

  const handleDeleteJob = async (jid)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"applicaion/json",
          "Authorization":`Bearer ${token}`
      }
      try{
        const result = await deleteJobAPI(jid,reqHeader)
        if(result.status==200){
          getAdminAddJobs()
        }else{
          console.log(result);      
        }
      }catch(err){
        console.log(err);
      }
    }
  }

 const handleClose = () => {
    setShow(false);
    setIsEditMode(false);
    setAddData({ cName: '', cEmail: '', title: '', qualification: '', description: '', experience: '', lDate: '' });
  };
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-6">
          <h3 className="text-center text-danger my-3">
            Add Job Vacancies
            <button onClick={handleShow} className="btn px-4 fs-4 text-primary border border-dark">+</button>
          </h3>
          <Modal className="text-primary" centered size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Job Hiring</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input value={addData.cName} onChange={e => setAddData({ ...addData, cName: e.target.value })} type="text" placeholder="Enter Company Name" className="form-control my-2" />
              <input value={addData.cEmail} onChange={e => setAddData({ ...addData, cEmail: e.target.value })} type="email" placeholder="Enter Email" className="form-control mb-2" />
              <input value={addData.title} onChange={e => setAddData({ ...addData, title: e.target.value })} type="text" placeholder="Enter Job Role" className="form-control mb-2" />
              <input value={addData.qualification} onChange={e => setAddData({ ...addData, qualification: e.target.value })} type="text" placeholder="Enter Qualification" className="form-control mb-2" />
              <textarea value={addData.description} onChange={e => setAddData({ ...addData, description: e.target.value })} placeholder="Enter Job Description" className="form-control mb-2"></textarea>
              <input value={addData.experience} onChange={e => setAddData({ ...addData, experience: e.target.value })} type="text" placeholder="Enter Experience" className="form-control mb-2" />
              <input value={addData.lDate} onChange={e => setAddData({ ...addData, lDate: e.target.value })} type="date" className="form-control mb-2" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleAdd}>Add</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="col-6 pt-4">
          <h3>
           <div className='d-flex'>
           <Link to={'/userViewByAdmin'} style={{ paddingLeft: "350px" }} className="fst-italic text-primary">
           <i class="fa-solid fa-user-large me-5"></i>
            </Link>
           <Link to={'/userview'}  className="fst-italic text-primary">
            <i class="fa-solid fa-file-lines me-5"></i> 
            </Link>
            <Link to={'/'}> <i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
           </div>
          </h3>
        </div>
      </div>
      <table className="w-100 shadow mt-4">
        <thead>
          <tr className="border border-dark">
            <th className="col-2">Company Name</th>
            <th className="col-2">Email</th>
            <th className="col-2">Job Title</th>
            <th className="col-2">Qualification</th>
            <th className="col-3">Description</th>
            <th className="col-2">Last Date</th>
          </tr>
        </thead>
        <tbody>
          {adminAddJobs?.length > 0 ? (
            adminAddJobs.map((job) => (
              <tr key={job._id}>
                <td>{job.cName}</td>
                <td>{job.cEmail}</td>
                <td>{job.title}</td>
                <td>{job.qualification}</td>
                <td>
                  {job.description} <br />
                  Experience: {job.experience}
                </td>
                <td>{new Date(job.lDate).toLocaleDateString("en-CA")}</td>
                <td>
                  <button  onClick={() => handleEditJob(job)} className="btn rounded me-3">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
                <td>
                  <button  onClick={()=>handleDeleteJob(job?._id)}  className="btn rounded">
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-danger">No Job Vacancies Added</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllJobsAPI } from '../Services/allAPI';

const UserJobView = () => {
 
  const navigate = useNavigate();
  
  const [adminAddJobs, setAdminAddJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(3); 
 
  useEffect(() => {
    getAllJobs();
  }, []);
 
  // Get all jobs from the API
  const getAllJobs = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await getAllJobsAPI(reqHeader);
        if (result.status === 200) {
          setAdminAddJobs(result.data);
        } else {
          console.log(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
 

  const handleApply = (title, cName) => {
    navigate('/applicationForm', { state: { title, cName } });
  };

  const logout = () => {
    navigate('/userhome');
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = adminAddJobs.slice(indexOfFirstJob, indexOfLastJob);

 
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 
  const handleNextPage = () => {
    if (indexOfLastJob < adminAddJobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='container'>
      <h2 className='text-primary text-center my-5 fst-italic'>  
        <button onClick={logout} className='custom-btn btn btn-info me-5 fw-bolder'> 
          <i className="fa-solid fa-arrow-left"></i> 
        </button> 
        Active Job Openings Apply Now <span className='text-danger fw-bolder fs-4'>!!!</span>
      </h2>
      
      <div className="d-flex flex-column align-items-center gap-4">
        {currentJobs?.length > 0 ? (
          currentJobs.map(allJobs => (
            <Card key={allJobs?._id} style={{ width: "100%", maxWidth: "800px", border: '2px solid aqua' }} className='mb-3 rounded shadow'>
              <Card.Body className='text-dark'> 
                <h6 className='text-center text-danger fs-4'>{allJobs?.title}</h6> 
                <h6 className='text-center text-danger'> 
                  <b className='me-3 text-danger'>Company Name:</b> {allJobs?.cName} 
                </h6>
                <h6 className='text-dark'> 
                  <b className='me-3'>Job Description:</b> {allJobs?.description} 
                </h6>
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className='text-dark'><b className='me-3'>Qualification:</b> {allJobs?.qualification}</h6>
                    <h6 className='text-dark'><b className='me-3'>Experience:</b> {allJobs?.experience}</h6>
                    <h6 className='text-dark'><b className='me-3'>Last Date Of Application:</b> {new Date(allJobs.lDate).toLocaleDateString("en-CA")}</h6>
                  </div>
                  <Button
                    onClick={() => handleApply(allJobs?.title, allJobs?.cName)}
                    variant="primary"
                    className="btn-danger"
                  >
                    Apply
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>No vacancies added...</div>
        )}
      </div>
      
      <div className='d-flex justify-content-between mt-4'>
        <Button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1} 
          className='btn btn-secondary'
        >
          <i className="fa-solid fa-arrow-left"></i> Previous
        </Button>
        
        <Button 
          onClick={handleNextPage} 
          disabled={indexOfLastJob >= adminAddJobs.length} 
          className='btn btn-secondary'
        >
          Next <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default UserJobView;

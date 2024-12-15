import React, { useContext, useEffect, useState } from 'react';
import { statusViewAPI } from '../Services/allAPI';
import { editResponseContext } from '../contexts/ContextShare';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StatusView = () => {
    const { editResponse, setEditResponse } = useContext(editResponseContext);
    const [allApplications, setAllApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    useEffect(() => {
        getApplicationStatus();
    }, [editResponse]);

    const getApplicationStatus = async () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await statusViewAPI(reqHeader);
                if (result.status === 200) {
                    setAllApplications(result.data);
                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    const approvedApplications = allApplications.filter(application => application.status === "Approved");
    const rejectedApplications = allApplications.filter(application => application.status === "Rejected");

    const paginate = (applications) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return applications.slice(startIndex, startIndex + itemsPerPage);
    };

    const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1);
    const handlePreviousPage = () => setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));

    const totalPages = (applications) => Math.ceil(applications.length / itemsPerPage);

    const renderPaginationButtons = (applications) => {
        const total = totalPages(applications);
        return (
            <div className="pagination d-flex justify-content-center mt-4">
                <button 
                    onClick={handlePreviousPage} 
                    className="btn btn-outline-primary mx-2" 
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <button 
                    onClick={handleNextPage} 
                    className="btn btn-outline-primary mx-2" 
                    disabled={currentPage === total}>
                    Next
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className="px-3 d-flex justify-content-between align-items-center shadow">
                <div>
                    <h1 className="text-danger fst-italic">
                        <span className='text-danger fst-italic'>Hire_Connect</span>
                    </h1>
                </div>
                <div className="d-flex">
                    <h6 className="ms-4">
                        <Link to="/user-job-view" className="text-dark text-decoration-none fs-5"> 
                            Jobs <i className="fa-solid fa-graduation-cap"></i>
                        </Link>
                    </h6>
                    <h6 className="ms-4">
                        <Link to="/" className="text-dark text-decoration-none fs-5">
                            Logout <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    </h6>
                </div>
            </div>

            <div style={{ textAlign: 'justify' }} className="container">
                <h5 className='mt-4'>
                    <button className='btn'>
                        <Link to="/userhome" className="text-dark text-decoration-none fs-5">
                            <i className="fa-solid fa-arrow-left px-3"></i>
                        </Link>
                    </button> 
                    Your next big opportunity is just one application away !!!
                </h5>

                <h2 className='mt-4 text-success fw-bolder'>APPROVED APPLICATIONS</h2>
                <div>
                    {approvedApplications.length > 0 ? (
                        paginate(approvedApplications).map((application, index) => (
                            <Card className='mt-3 mx-auto' key={index} style={{ maxWidth: '100%' }}>
                                <Card.Body>
                                    <Card.Text className='text-dark'>
                                        <h5 className='text-success'>{application.title} at {application.cName}</h5>
                                        Dear {application.Name}, <br />
                                        Thank you for applying for this position.
                                        <span className='display text-dark'>We are pleased to inform you that your application has been successfully received. 
                                        Thank you for your interest in joining {application.cName}. <br className='mt-3' /></span>
                                        Best Regards From Hire_Connect <br />
                                        HR Department
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p className='text-center'>No approved applications available.</p>
                    )}
                    {renderPaginationButtons(approvedApplications)}
                </div>

                <h2 className='mt-5 text-danger fw-bolder'>REJECTED APPLICATIONS</h2>
                <div>
                    {rejectedApplications.length > 0 ? (
                        paginate(rejectedApplications).map((application, index) => (
                            <Card className='mt-3 mx-auto' key={index} style={{ maxWidth: '100%' }}>
                                <Card.Body>
                                    <Card.Text className='text-dark'>
                                        <h5 className='text-danger'>{application.title} at {application.cName}</h5>
                                        Dear {application.Name}, <br /> <span className='display text-dark'> We regret to inform you that</span> we have chosen to move forward with other candidates.
                                     <br />   Best Regards From Hire_Connect <br  className='mt-3' />
                                        HR Department
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p className='text-center'>No rejected applications available.</p>
                    )}
                    {renderPaginationButtons(rejectedApplications)}
                </div>
            </div>
        </div>
    );
};

export default StatusView;

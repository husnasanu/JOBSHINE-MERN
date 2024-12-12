import React, { useContext, useEffect, useState } from 'react';
import { statusViewAPI } from '../Services/allAPI';
import { editResponseContext } from '../contexts/ContextShare';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StatusView = () => {
    const { editResponse, setEditResponse } = useContext(editResponseContext);
    const [allApplications, setAllApplications] = useState([]);
   
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

            <div style={{ textAlign: 'justify' }} className="row container">
                <h5 className='mt-4'>
                    <button className='btn'>
                        <Link to="/userhome" className="text-dark text-decoration-none fs-5">
                            <i className="fa-solid fa-arrow-left px-3"></i>
                        </Link>
                    </button> 
                    Your next big opportunity is just one application away !!!
                </h5>

                <div>
                    {allApplications?.length > 0 ? (
                        allApplications.map((application, index) => (
                            <div key={index}>
                                {application.status === "Approved" ? (
                                    <Card className='mt-5 shadow' style={{ maxWidth: '100vh', marginLeft: '400px' }}>
                                        <Card.Body>
                                            <Card.Text>
                                                <div className="Card approve">
                                                    <p>
                                                        <h6 className='text-success'>{application.title} at {application.cName}</h6>
                                                        Dear {application.Name},
                                                        Thank you for applying for this position.
                                                        We are pleased to inform you that your application has been successfully received. 
                                                        Thank you for your interest in joining {application.cName}.
                                                        <br />
                                                        Best Regards,
                                                        HR Department
                                                        <br />
                                                        Hire_Connect
                                                    </p>      
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ) : application.status === "Rejected" ? (
                                    <Card className='mt-5 shadow' style={{ maxWidth: '100vh', marginLeft: '400px' }}>
                                        <Card.Body>
                                            <Card.Text>
                                                <div className="reject">
                                                    <p>
                                                        <h6 className='text-danger'>{application.title} at {application.cName}</h6>
                                                        Dear {application.Name},
                                                        Thank you for applying for this position. We regret to inform you that we have chosen to move forward with other candidates at this time. 
                                                        <br />
                                                        Best Regards,
                                                        HR Department
                                                        <br />
                                                        Hire_Connect
                                                    </p>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <div style={{ marginLeft: '300px' }}> 
                            <img 
                                className='m-5' 
                                width={'300px'} 
                                height={'300px'} 
                                src="https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg?semt=ais_hybrid" 
                                alt="No data found" 
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatusView;
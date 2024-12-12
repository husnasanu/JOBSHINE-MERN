import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Contact = () => {
  return (
    <div className="contact-page text-dark">
      <Header/>

      <div className="container mt-5 pt-5 shadow">
        <div className="row d-flex align-items-center">
          
        
          <div className="col-md-6 text-center">
            <img 
              src="https://www.aihr.com/wp-content/uploads/job-advertisement-example-cover.png" 
              alt="Contact Us" 
              className="img-fluid rounded contact-image"
            />
          </div>

          
          <div className="col-md-6">
            <h2 className="mb-4 text-center text-md-start">GET IN TOUCH</h2>
            
            <div className="info-items">
            
              <div className="info-item d-flex align-items-start mb-4">
                <i className="fas fa-map-marker-alt contact-icon fs-1"></i>
                <div className="ms-3">
                  <h3 className="info-title">ADDRESS</h3>
                  <p className="info-text">JobShine, SRT Road, XX1 B, CO 80202, Kerala, Chennai, Hyderabad</p>
                </div>
              </div>

             
              <div className="info-item d-flex align-items-start mb-4">
                <i className="fas fa-phone-alt contact-icon fs-1"></i>
                <div className="ms-3">
                  <h3 className="info-title">PHONE</h3>
                  <p className="info-text">+1 555 123 0067</p>
                </div>
              </div>

             
              <div className="info-item d-flex align-items-start mb-4">
                <i className="fas fa-envelope contact-icon fs-1"></i>
                <div className="ms-3">
                  <h3 className="info-title">EMAIL</h3>
                  <p className="info-text">hirehonnect@gmail.com</p>
                  <p className="info-text">
                    OFFICIAL WEBSITE: 
                    <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer" className="website-link"> http://hire_connect.com</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact

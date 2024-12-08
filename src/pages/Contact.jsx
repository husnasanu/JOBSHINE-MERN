import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <div  className="text-dark">
         <Header/>
         

<div className="container d-flex  mt-5 pt-5">
  <div  className="col-6 ">
    <img height={'350px'} src="https://www.aihr.com/wp-content/uploads/job-advertisement-example-cover.png" alt="" />
  </div>
<div className="col-6 pt-4 ms-5">
      <h2>GET IN TOUCH</h2>
      <div className="info-items">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>ADDRESS</h3>
          <p>JobShine,SRT Road ,XX1 B, CO 80202,KERALA,CHENNAI,HYDRABAD</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <h3>PHONE</h3>
          <p>+1 555 123 0067</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <h3>EMAIL</h3>
          <p>jobshine@gmail.com</p>
         OFFICIAL WEBSITE : http://jobshine.com 
        </div>
      </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Contact

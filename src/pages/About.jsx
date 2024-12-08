import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {

  return (
    <>
    <Header/>
   
    <div className='container w-100 d-flex my-5'>
<div className="main col-6 shadow px-4">
      <h3 className=" text-warning mb-3 " data-aos="fade-up">Welcome to <span className='job fst-italic '> JobShine</span></h3>
      <p  className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>
      <h3 className='text-success'>Why Choose Us </h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>

      <Link to={"/login"} className='fw-bolder fst-italic ' style={{fontSize:'20px',color:'chocolate'}}>Get Started</Link>
    </div>
    <div className="main col-6 shadow ">
      <img className='w-100 ' src="https://5.imimg.com/data5/SELLER/Default/2022/3/QJ/TU/UX/11444717/1-500x500.jpg" alt="" />
    </div>
    </div>
    <marquee behavior="" direction="">
      <img width={'500px'} height={'500px'} src="https://static.vecteezy.com/system/resources/previews/008/878/596/non_2x/job-vacancy-concept-with-we-are-hiring-text-design-orange-and-white-color-job-vacancy-social-media-post-design-we-are-hiring-a-banner-design-with-an-orange-shade-free-png.png" alt="" />
    </marquee>
<img src="https://www.aihr.com/wp-content/uploads/job-advertisement-example-cover.png" alt="" />
    <Footer/>
    </>
  )
}

export default About
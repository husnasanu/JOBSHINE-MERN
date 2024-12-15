import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
   <Header insideHome={true} />
   <div className="container shadow my-4 py-4 d-flex">
      <div className="col-6">
        <img className='w-100' height={'500px'} src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png" alt="" />
      </div>
      <div className="col-6">
        <h1 style={{paddingTop:"100px",fontSize:'70px'}}>Create an account and <span id='account' className='text-center text-danger'>find the right job</span>for you.</h1>
        <Link to={"/login"} className='fw-bolder fst-italic ' style={{fontSize:'30px',color:'red'}}>Get Started</Link>
      </div>
    </div>
    <div className='container w-100 d-flex my-5'>
<div style={{}} className="main col-6 shadow px-4 fw-bolder">
      <h3 className=" text-warning mb-3 pt-5 " data-aos="fade-up">Welcome to <span className='job fst-italic texh-danger '>Hire_Connect</span></h3>
      <p  className='mt-5 text-dark'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>
      <h3 className='text-success'>Why Choose Us </h3>
      <p className='text-dark'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>
        <div className='d-flex '> 
           
        </div>
    </div>
    <div className="main col-6 shadow ">
      <img className='w-100 ' src="https://5.imimg.com/data5/SELLER/Default/2022/3/QJ/TU/UX/11444717/1-500x500.jpg" alt="" />
    </div>
    </div>
   
    <div className="container my-4 py-4 shadow">
      <h3 className='text-success text-center fst-italic my-4'>Our Testimonials</h3>
      <div style={{textAlign:'justify'}} className='row d-flex justify-content-evenly' >
      <Card style={{ width: '18rem' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbUuWihp-5UzW1IcdPsb5C1lsGzjExUgwkQ&s" alt="" />
      <Card.Body>
        <Card.Title>Python Developer</Card.Title>
        <h6>⭐⭐⭐⭐</h6>
        <Card.Text>
        Thank you for your support and guidance throughout the recruitment process. Your efforts played a significant role in helping me secure
         this placement, and I’m truly grateful for the opportunity.
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
     
      <img src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png" alt="" />
      <Card.Body>
        <Card.Title>Software Engineer</Card.Title>
        <h6>⭐⭐⭐⭐</h6>
        <Card.Text>
        I would like to express my sincere thanks to your team for your professionalism and assistance during my recruitment journey. Your expertise has been invaluable, 
        and I’m excited to begin this new chapter in my career!
       
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1dXcbGQTvqLXLBEQnr3S2ta1flJNUUc6kw&s" alt="" />
      <Card.Body>
        <Card.Title>Digital Marketing</Card.Title>
        <h6>⭐⭐⭐⭐⭐</h6> 
        <Card.Text>
        A huge thank you to Hire_Connect for believing in me and helping me land my dream job! I truly appreciate all your efforts, 
        and I’m thrilled to start this new chapter.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    
<Footer/>
    </>
  )
}

export default Home
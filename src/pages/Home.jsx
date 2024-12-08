import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
   <Header/>
   <div className="container shadow my-4 py-4 d-flex">
      <div className="col-6">
        <img className='w-100' height={'500px'} src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png" alt="" />
      </div>
      <div className="col-6">
        <h1 style={{paddingTop:"100px",fontSize:'70px'}}>Create an account and <span id='account' className='text-center text-danger'>find the right job</span>for you.</h1>
        <Link to={"/login"} className='fw-bolder fst-italic ' style={{fontSize:'40px',color:'chocolate'}}>Get Started</Link>
      </div>
    </div>
    <div className='container w-100 d-flex my-5'>
<div className="main col-6 shadow px-4">
      <h3 className=" text-warning mb-3 " data-aos="fade-up">Welcome to <span className='job fst-italic '> JobShine</span></h3>
      <p  className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>
      <h3 className='text-success'>Why Choose Us </h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>

     
    </div>
    <div className="main col-6 shadow ">
      <img className='w-100 ' src="https://5.imimg.com/data5/SELLER/Default/2022/3/QJ/TU/UX/11444717/1-500x500.jpg" alt="" />
    </div>
    </div>
   
    <div className="container my-4 py-4 shadow">
      <h3 className='text-success text-center fst-italic my-4'>Our Services</h3>
      <div className='row d-flex justify-content-evenly' >
      <Card style={{ width: '18rem' }}>
      <img src="https://png.pngtree.com/template/20190904/ourmid/pngtree-we-are-hiring-sticker-isolated-02-image_297026.jpg" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    
<Footer/>
    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {

  return (
    <>
      <Header/>
   
      <div className='container w-100 d-flex flex-column flex-sm-row my-5'>
        <div className="main col-12 col-sm-6 shadow px-4 fw-bolder">
          <h3 className="text-warning mb-3 pt-5" data-aos="fade-up">Welcome to <span className='job fst-italic text-danger'>Hire_Connect</span></h3>
          <p className='mt-5 text-dark'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>
          <h3 className='text-success'>Why Choose Us</h3>
          <p className='text-dark'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, optio exercitationem. Repellendus optio voluptatum labore commodi numquam? Error quo reiciendis aliquam iure cumque, exercitationem ut repellat, ipsam, corrupti fugit accusamus?</p>
        </div>
        <div className="main col-12 col-sm-6 shadow">
          <img className='w-100 img-fluid' src="https://5.imimg.com/data5/SELLER/Default/2022/3/QJ/TU/UX/11444717/1-500x500.jpg" alt="" />
        </div>
      </div>

      <div className="container my-4 py-4 shadow">
        <h3 className='text-success text-center fst-italic my-4'>Our Partners</h3>
        <div className='row d-flex justify-content-evenly'>
          <div className="col-12 col-sm-2">
            <img width='100%' height='auto' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFYeoxD5_KvEubAoW8iDuwEYasj5FlWREFg&s" alt="" />
          </div>
          <div className="col-12 col-sm-2">
            <img width='100%' height='auto' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJE6wJ5TvXvIxkb8qt5HIm8VTHr1G56WObzQ&s" alt="" />
          </div>
          <div className="col-12 col-sm-2">
            <img width='100%' height='auto' className='ms-4 img-fluid' src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg" alt="" />
          </div>
          <div className="col-12 col-sm-2">
            <img width='100%' height='auto' className='ms-4 img-fluid' src="https://blog.boon.so/wp-content/uploads/2024/03/facebook-logo-2-1024x640.jpg" alt="" />
          </div>
          <div className="col-12 col-sm-2">
            <img width='100%' height='auto' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJToNqMVlq9Gc0JcBGreMDplkRotSmH2rng&s" alt="" />
          </div>
          <div className="col-12 col-sm-2">
            <img width='100%' height='auto' className='ms-4 img-fluid' src="https://cdn-icons-png.flaticon.com/512/825/825454.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container text-center">
        <img style={{ maxWidth: '100%', height: 'auto' }} src="https://static.vecteezy.com/system/resources/previews/008/878/596/non_2x/job-vacancy-concept-with-we-are-hiring-text-design-orange-and-white-color-job-vacancy-social-media-post-design-we-are-hiring-a-banner-design-with-an-orange-shade-free-png.png" alt="We Are Hiring" />
      </div>

      {/* Marquee - Left to Right */}
      <marquee behavior="scroll" direction="left" className="marquee">
        <div className="d-flex">
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://blog.logomaster.ai/hs-fs/hubfs/samsung-logo-1993.jpg?width=672&height=454&name=samsung-logo-1993.jpg" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://w7.pngwing.com/pngs/308/426/png-transparent-visa-logo-credit-card-visa-logo-payment-visa-blue-text-trademark-thumbnail.png" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91g86GYPEmouJD3LiPGSYtYYW9XycFIu4pA&s" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://i.pinimg.com/736x/cf/73/9c/cf739c151d098fcef06f1222dc0f7b1f.jpg" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://blog.boon.so/wp-content/uploads/2024/03/facebook-logo-2-1024x640.jpg" alt="" />
        </div>
      </marquee>

      {/* Marquee - Right to Left */}
      <marquee behavior="scroll" direction="right" className="marquee">
        <div className="d-flex">
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwVRB73cIbH0QV3lonV_zuiiS_jYCttt8dw&s" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNtFQWi4DmofY6dDJxOjUoSarMyBhMhTu0A&s" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Kerala_StartUp_Mission_Logo.svg/640px-Kerala_StartUp_Mission_Logo.svg.png" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3L9zVt9Z-Nxkcjjf6S5qzM5ysqtEHrxXFg&s" alt="" />
          <img width='100px' height='100px' className='ms-4 img-fluid' src="https://banner2.cleanpng.com/20180806/swf/ee3e0a0e56b5b3df5ec3941f35a8225f.webp" alt="" />
        </div>
      </marquee>

      <Footer/>
    </>
  )
}

export default About

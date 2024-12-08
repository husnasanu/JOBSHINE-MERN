import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    navigate('/')
  }
  return (
    <div className='d-flex justify-content-between px-5'>

      <div>
      <Nav>
       <b  className=' fs-1 fst-italic'> 
        <img style={{borderRadius:'50px'}} className='' width={'40px'} height={'40px'} src="https://img.freepik.com/free-vector/job-vacancy-isolated-object-with-female-hr-manager-studying-resume-candidates-vacant-position-vector-illustration_1284-81714.jpg?semt=ais_hybrid" alt="" /> 
        <span style={{ color:'darkmagenta'}} className='ms-2'>JobShine</span> </b>
      <Nav.Item>
        <Nav.Link className='mt-2' href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='mt-2'  href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='mt-2'  href="/contact">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
   <div>
   <Link className='fs-4' onClick={logout} to={'/'}>Logout</Link>
   </div>
    </div>
  )
}

export default Header
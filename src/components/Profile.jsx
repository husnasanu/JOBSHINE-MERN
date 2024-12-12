import { React, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import serverURL from '../Services/serverURL'
import profileimg from '../assets/profile1.png'
import { editUserAPI } from '../Services/allAPI'

const Profile = () => { 
    const [preview,setPreview] = useState("")
    const [existingUserImg,setExistingUserImg] = useState("")
    const [userData,setUserData] = useState({
        username:'',email:'',password:'',phno:'',linkedin:'',profilePic:''
     })
   console.log(userData);
   const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
   const existingUserDetails = JSON.parse(sessionStorage.getItem("user"))
   setUserData({...userData,username:existingUserDetails.username,email:existingUserDetails.email,password:existingUserDetails.password,phno:existingUserDetails.phno,linkedin:existingUserDetails.linkedin})
   setExistingUserImg(existingUserDetails.profilePic)
    }
  },[open])
  useEffect(()=>{
    if(userData.profilePic){
      setPreview(URL.createObjectURL(userData.profilePic))
    }else{
      setPreview("")
    }
    },[userData.profilePic])

    const handleUpdateProfile = async ()=>{
        const { username,email,password,phno,linkedin,profilePic}= userData
        if(phno && linkedin){
          const reqBody = new FormData()
          reqBody.append("username",username)
          reqBody.append("email",email)
          reqBody.append("password",password)
          reqBody.append("phno",phno)
          reqBody.append("linkedin",linkedin)
          preview ? reqBody.append("profilePic",profilePic) :  reqBody.append("profilePic",existingUserImg) 
          const token = sessionStorage.getItem("token")
          if(token){
            const reqHeader = {
              "Content-Type":preview?"multipart/form-data":"application/json",
              "Authorization":`Bearer ${token}`
            }
            // api call
            try {
              const result = await editUserAPI(reqBody,reqHeader)
              if(result.status==200){
                sessionStorage.setItem("user",JSON.stringify(result.data))
                setOpen(!open)
                alert("Profile Updated Successfully!!✅")
              }else{
                console.log(result);
                
              }
            } catch (err) {
              console.log(err);
              
            }
          }
        }else{
          alert ("please fill the form completely!!!")
        }
      }

  return (
    <>
    
    
    <div className="d-flex justify-content-evenly">
      <h3 className="text-warning">Profile</h3>
      <button   onClick={() => setOpen(!open)} className='btn text-warning fw-bolder'> <i className="fa-solid fa-chevron-down"></i></button>
    </div>
    <Collapse in={open}>
        <div className='row align-items-center justify-cntent-center shadow rounded p-2 ' id="example-collapse-text">
          <label className='text-center mb-2'>
           <input onChange={e=>setUserData({...userData,profilePic:e.target.files[0]})} style={{display:'none'}} type="file" />  
          { 
          existingUserImg==""?
            <img width={'200px'} height={'200px'} src={preview?preview:profileimg} alt="" />
            :
            <img width={'200px'} height={'200px'} src={preview?preview:`${serverURL}/uploads/${existingUserImg}`} alt="" />
          }

          </label>
          <div className="mb-2">
          
          </div>
          <div className="mb-2">
            <input onChange={e=>setUserData({...userData,phno:e.target.value})} value={userData.email} type="text" placeholder='EMAIL' className='form-control' readOnly />
          </div>
          <div className="mb-2">
            <input onChange={e=>setUserData({...userData,phno:e.target.value})} value={userData.phno} type="text" placeholder='PHONE NUMBER' className='form-control'/>
          </div>
          <div className="mb-2">
            <input  onChange={e=>setUserData({...userData,linkedin:e.target.value})}  value={userData.linkedin} type="text" placeholder='LINKEDIN / PORFOLIO URL' className='form-control'/>
          </div>
          <div className="d-grid">
            <button onClick={handleUpdateProfile} className='btn btn-warning'>Update Profile</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile

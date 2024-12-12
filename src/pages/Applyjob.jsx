import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { applyJobAPI } from '../Services/allAPI';

const Applyjob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, cName } = location.state || {};

  const [applyData, setApplyData] = useState({
    Name: '',
    title: title || '',
    cName: cName || '',
    gender: '',
    qualification: '',
    passout: '',
    cgpa: '',
    currRole: '',
    experience: '',
    currCTC: '',
    expCTC: '',
    skills: '',
    resume: ''
  });

  useEffect(() => {
    setApplyData((prev) => ({
      ...prev,
      title: title || '',
      cName: cName || ''
    }));
  }, [title, cName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplyData({
      ...applyData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setApplyData({
      ...applyData,
      resume: e.target.files[0]
    });
  };

  const handleSaveProject = async () => {
    const { Name, title, cName, gender, qualification, passout, cgpa, currRole, experience, currCTC, expCTC, skills, resume } = applyData;
    
    if (Name && title && cName && gender && qualification && passout && cgpa && currRole && experience && currCTC && expCTC && skills && resume) {
      const reqBody = new FormData();
      reqBody.append("Name", Name);
      reqBody.append("title", title);
      reqBody.append("cName", cName);
      reqBody.append("gender", gender);
      reqBody.append("qualification", qualification);
      reqBody.append("passout", passout);
      reqBody.append("cgpa", cgpa);
      reqBody.append("currRole", currRole);
      reqBody.append("experience", experience);
      reqBody.append("currCTC", currCTC);
      reqBody.append("expCTC", expCTC);
      reqBody.append("skills", skills);
      reqBody.append("resume", resume);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await applyJobAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status === 200) {
            setApplyData({
              Name: '', title: '', cName: '', gender: '', qualification: '', passout: '', cgpa: '', currRole: '', experience: '', currCTC: '', expCTC: '', skills: '', resume: ''
            });
            alert("Job Application Submitted Successfully!");
            navigate('/userhome')
          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      alert("Please fill out the form completely.");
    }
  }
const logout = ()=>{
  navigate('/user-job-view')
}

  return (
    <div style={{ maxWidth: '600px' }} className="container">
      <h1 className="text-center mt-3"> <button onClick={logout} className=' btn btn-info me-5 ' > <i className="fa-solid fa-arrow-left"></i> </button>  Job Application Form</h1>
      <form>
        <input
          type="text"
          name="Name"
          value={applyData.Name}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Enter Your Full Name"
        />
        <input
          type="text"
          name="title"
          value={applyData.title}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Enter Job Title"
          readOnly
        />
        <input
          type="text"
          name="cName"
          value={applyData.cName}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Enter Company Name"
          readOnly
        />
        {/* Remaining fields */}

        <div className='text-dark'>
          Gender
          <label> 
            <input 
              className='ms-2' 
              id='g1' 
              name='gender' 
              type="radio" 
              value="Male" 
              onChange={handleChange} 
            />   
            Male 
          </label>
          <label> 
            <input 
              className='ms-2' 
              id='g2' 
              name='gender' 
              type="radio" 
              value="Female" 
              onChange={handleChange} 
            /> 
            Female 
          </label>
          <label> 
            <input 
              className='ms-2' 
              id='g3' 
              name='gender' 
              type="radio" 
              value="Others" 
              onChange={handleChange} 
            /> 
            Others 
          </label>
        </div>

        <input 
          type="text" 
          name="qualification" 
          value={applyData.qualification}
          onChange={handleChange} 
          className='form-control mb-3' 
          placeholder='Enter Qualification' 
        />
        
        <div className="d-flex w-100">
          <input 
            type="text" 
            name="passout" 
            value={applyData.passout} 
            onChange={handleChange} 
            className='form-control mb-3' 
            placeholder='Enter Passout Year' 
          />
          <input 
            type="text" 
            name="cgpa" 
            value={applyData.cgpa} 
            onChange={handleChange} 
            className='form-control mb-3' 
            placeholder='Enter CGPA' 
          />
        </div>

        <div className='text-dark'>
          Enter Current Role
          <label> 
            <input 
              className='ms-2' 
              id='r1' 
              name='currRole' 
              type="radio" 
              value="Fresher" 
              onChange={handleChange} 
            />   
            Fresher 
          </label>
          <label> 
            <input 
              className='ms-2' 
              id='r2' 
              name='currRole' 
              type="radio" 
              value="Experienced" 
              onChange={handleChange} 
            />   
            Experienced 
          </label>
          <label> 
            <input 
              className='ms-2' 
              id='r3' 
              name='currRole' 
              type="radio" 
              value="Student" 
              onChange={handleChange} 
            />   
            Student 
          </label>
          <label> 
            <input 
              className='ms-2' 
              id='r4' 
              name='currRole' 
              type="radio" 
              value="Internship" 
              onChange={handleChange} 
            />   
            Internship 
          </label>
        </div>

        <input 
          type="text" 
          name="experience" 
          value={applyData.experience} 
          onChange={handleChange} 
          className='form-control mb-3' 
          placeholder='Experience If Any' 
        />

        <div className="d-flex w-100">
          <input 
            type="text" 
            name="currCTC" 
            value={applyData.currCTC} 
            onChange={handleChange} 
            className='form-control mb-3 me-1' 
            placeholder='Enter Current CTC' 
          />
          <input 
            type="text" 
            name="expCTC" 
            value={applyData.expCTC} 
            onChange={handleChange} 
            className='form-control mb-3' 
            placeholder='Enter Expected CTC' 
          />
        </div>

        <textarea 
          name="skills" 
          value={applyData.skills} 
          onChange={handleChange} 
          placeholder='Enter Skills' 
          className='form-control'
        ></textarea>

        <label className='text-dark' htmlFor="">Upload Resume</label>
        <input 
          type="file" 
          name="resume" 
          className='form-control mb-3' 
          onChange={handleFileChange} 
        />
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={handleSaveProject}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Applyjob;
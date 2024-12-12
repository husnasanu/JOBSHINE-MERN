import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


// register called by Auth
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
   }
   
   // register called by Auth
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
   }

   // register called by Auth
export const addJobAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/dashboard`,reqBody,reqHeader)
   }

//    get All jobs Added by Admin in dashboard

export const getAdminJobAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/get-Jobs`,"",reqHeader)
}
// removeProjectsAPI called by dashbard 
export const deleteJobAPI = async (jid,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/${jid}/remove-job`,{},reqHeader)
}

//update task
export const editJobAPI = async (jid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/${jid}/edit-job`,reqBody,reqHeader)
}

//    get All jobs Added by Admin in dashboard

export const getAllJobsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/get-all-jobs`,"",reqHeader)
}
  //    applyjob API 
export const applyJobAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/applicationForm`,reqBody,reqHeader)
}
//    applyjob API 
export const getApplyJobAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/get-applied-Jobs`,"",reqHeader)
}

// removeProjectsAPI called by dashbard 
export const deleteApplicationAPI = async (jid,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/${jid}/remove-application`,{},reqHeader)
}
// allJobApplicationAPI called by Dashboard
export const allApplcationAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/userview`,"",reqHeader)
}
// editUserAPI called by Profile : put request http://localhost:3000/user/edit
export const editUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/edit`,reqBody,reqHeader)
}

//    applyjob API 
export const getProfileAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/get-user-profile`,"",reqHeader)
}

   //update task
export const editStatusAPI = async (jid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/${jid}/edit-status`,reqBody,reqHeader)
}
export const allApplicationAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/applications`, "", reqHeader);
  };
  export const statusViewAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/statusView`, "", reqHeader);
  };
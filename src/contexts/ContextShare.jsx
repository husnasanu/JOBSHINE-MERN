import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const editResponseContext = createContext()

const ContextShare = ({children}) => {
    
    const [editResponse,setEditResponse] = useState("")

  return (
    
       <editResponseContext.Provider value={{editResponse,setEditResponse}}>
         {children}
       </editResponseContext.Provider>
    
  )
}

export default ContextShare
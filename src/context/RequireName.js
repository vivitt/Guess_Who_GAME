import React from "react"
import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useUserContext } from "./UserContextProv"

export const RequireName = ({children}) => {
    const authUser = useUserContext()

    const location = useLocation()

    if (sessionStorage.getItem('CURRENT_PLAYER')) {
        // Restore the contents of the text field
        authUser.userName = sessionStorage.getItem('CURRENT_PLAYER');
      }

    if(!authUser.userName) {
        return <Navigate to="/" state={{ from : location }} replace />
} 
    return   children
}
export default RequireName




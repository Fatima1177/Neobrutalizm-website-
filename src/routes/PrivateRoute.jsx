import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    if(localStorage.getItem('token')){
        return children
    }
    return <Navigate to='/loginPage'/>
    
    //return children

}

export default PrivateRoute
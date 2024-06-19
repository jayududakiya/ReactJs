import React from 'react'
import { Navigate ,Outlet} from 'react-router-dom';

function ProtectedRoutes({isLoggedIn,children}) {
    if(!isLoggedIn){
        return <Navigate to='/login'/>
    }else{            
        return  children ? children : <Outlet/>
    }
      
}

export default ProtectedRoutes

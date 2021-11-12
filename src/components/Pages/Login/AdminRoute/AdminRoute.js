import React from 'react';
import { Redirect, Route } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const AdminRoute=({ children, ...rest })=> {


    const {user,isLoading,admin} = useAuth();
    console.log('admin route',admin);
    

    if(isLoading){
        return <span className="visually-hidden">Loading...</span>
      
    }
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default AdminRoute;
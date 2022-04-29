import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user}=useAuth();
    // console.log(user);

    
    return (
        <div style={{background:"#f5f6fa",height:"100vh"}} className=" text-center">
            <h1 className="py-5 fw-bold">Dashboard Section</h1>
            <h3 className='fw-bold'><span className="text-danger">Hello</span>, {user.displayName} !! Have a nice day</h3>
        </div>
    );
};

export default DashboardHome;
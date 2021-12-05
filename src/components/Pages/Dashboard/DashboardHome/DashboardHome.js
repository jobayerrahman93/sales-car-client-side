import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user}=useAuth();
    // console.log(user);

    
    return (
        <div style={{background:"#f5f6fa",height:"100vh"}} className=" text-center">
            <h3 className="py-5 text-dark">Dashboard Section</h3>
            <h3><span className="text-primary ">Hello</span>, {user.displayName} !! Have a nice day</h3>
        </div>
    );
};

export default DashboardHome;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SharedNavigation.css';
const SharedNavigation = () => {
    const {user,logOut,admin}=useAuth();

    

    return (
        <>
            
            <nav className="navbar navbar-expand-lg py-0  sticky-top main-nav  ">
                <div className="container">
                    <a className="navbar-brand text-danger" href="#">Cars</a>
                    <button className="navbar-toggler text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"/>
                        </span>
                    </button>
                    <div className="collapse  navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav-design">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            
                            { user.email && !admin &&<li className="nav-item">
                                <Link to="/myOrder" >My Order</Link>
                            </li>
                            }
                            { user.email&& !admin &&<li className="nav-item">
                                <Link to="/pay" >Pay</Link>
                            </li>
                            }
                            { user.email&& !admin &&<li className="nav-item">
                                <Link to="/review" >Review</Link>
                            </li>
                            }
                            { user.email&& admin &&<li className="nav-item">
                                <Link to="/dashboard" >Dashboard</Link>
                            </li>
                            }

                            <span className="mt-3 mx-2">{user.displayName} </span>

                            {!user.email? <h1 className="mx-3 mt-2"><i className="fas fa-user-circle"></i> </h1> :
                            <img src={user.photoURL} width="50px" height="50px" className="rounded-circle mx-3 mt-2" alt=""/>}
                       
                            {user?.email?<li className="nav-item">
                              <button onClick={logOut} className="btn btn-outline-danger">Log Out</button>
                            </li>:
                             <li className="nav-item">
                             <Link to="/login">Login</Link>
                         </li>}
                    
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default SharedNavigation;
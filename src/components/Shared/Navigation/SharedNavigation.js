import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SharedNavigation.css';
const SharedNavigation = () => {
    const {user,logOut,admin}=useAuth();
    return (
        <>
            
            <nav className="navbar navbar-expand-lg py-0 navbar-light sticky-top main-nav  bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Cars</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
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
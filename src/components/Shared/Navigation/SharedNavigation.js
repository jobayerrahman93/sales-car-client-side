import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carLogo from '../../../asssets/image/car-logo.png';
import useAuth from '../../hooks/useAuth';
import './SharedNavigation.css';
const SharedNavigation = () => {
    const {user,logOut,admin}=useAuth();
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

    // const location = useLocation();
    // console.log(location);
    

    return (
        <>
            
            <nav className={colorChange? "navbar navbar-expand-lg py-0 nav-color  main-nav": "navbar navbar-expand-lg py-0  main-nav"}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={carLogo} className="img-fluid" width="100" height="80" alt="" />
                    </a>
                    <button className="navbar-toggler text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        <i class="fa-solid fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse  navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav-design">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            { !user.email&&<li className="nav-item">
                                <a href='#service'>Service</a>
                            </li>}
                            {!user.email && <li className="nav-item">
                                <a href='#review'>Review</a>
                            </li>}
                            
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

                            

                            {!user.email || !user.photoURL ? <h1 className="ms-4 mt-4">
                            {/* <span className="mt-3 mx-2 text-light">{user.displayName} </span>  */}
                                <i className="fas fa-user-circle text-light"></i> </h1> :
                            <img src={user.photoURL} width="50px" height="50px" className="rounded-circle mx-3 mt-4" alt=""/>}
                       
                            {user?.email?<li className="nav-item">
                              <button onClick={logOut} className="btn btn-danger mt-4 mb-md-4 mb-4 mb-lg-0">Log Out</button>
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
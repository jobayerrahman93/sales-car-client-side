import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginImage from '../../../../asssets/image/car-garage.jpg';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {

    const [loginData, setLoginData] = useState('');
    const {LoginUser,authError}=useAuth();
    
    // console.log('login',authError);
    

    const location=useLocation();
    const history=useHistory();


    const handleOnsubmit = (e) => {
        console.log(loginData.email,loginData.password);

        LoginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field);
        // console.log(value);
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    // console.log(loginData);


    


    return (
        <>

        <div className="login-page ">
 
                <div className="row">
                    <div className="col-md-6 px-0">
                     <div className="form-container">

                        <div className="authError text-center">
                            <p className='text-danger mb-0'>{authError}</p>
                        </div>

                     <form onSubmit={handleOnsubmit} className="mt-5 pt-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    name="email"
                                    onBlur={handleOnChange}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    name="password"
                                    onBlur={handleOnChange}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1" />

                            </div>

                            <button type="submit" className="btn btn-danger w-100 mt-2">Login</button>

                            <Link className='text-decoration-none' to="/register">
                                <p  className="my-3 text-white">New user ? Please register</p>
                            </Link>


                        </form>
                     </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <img className="img-fluid login-img" src={loginImage} alt="" />
                    </div>
                </div>


            </div>
  


        </>

    );
};

export default Login;
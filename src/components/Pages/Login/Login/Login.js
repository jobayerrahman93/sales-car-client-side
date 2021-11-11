import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginImage from '../../../../asssets/image/login.png';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState('');
    const {LoginUser}=useAuth();

    const location=useLocation();
    const history=useHistory();


    const handleOnsubmit = (e) => {


        LoginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field);
        console.log(value);
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    console.log(loginData);


    const handleGoogleSignIn = () => {

    }



    return (
        <div className="login-page ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleOnsubmit} className="mt-5 pt-5">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input
                                    name="email"
                                    onBlur={handleOnChange}
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
                                    name="password"
                                    onBlur={handleOnChange}
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1" />

                            </div>

                            <button type="submit" class="btn btn-primary">Login</button>

                            <Link to="/register">
                                <p  className="my-3">New user ? Please register</p>
                            </Link>


                        </form>
                    </div>
                    <div className="col-md-6 ">
                        <img className="img-fluid " src={loginImage} alt="" />
                    </div>
                </div>


            </div>
        </div>




    );
};

export default Login;
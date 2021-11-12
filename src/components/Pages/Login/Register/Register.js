import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginImage from '../../../../asssets/image/login.png';
import useAuth from '../../../hooks/useAuth';
import "./Register.css";


const Register = () => {

    const { registerUser } = useAuth();

    const [registerData, setRegisterData] = useState('');

    const history = useHistory();

    // console.log(registerData);

    const handleOnsubmit = (e) => {

       
            if (registerData.password !== registerData.password2) {
                alert("Password doesnot match")
            }

            else {

                registerUser(registerData.email, registerData.password, registerData.UserName, history);
            }
            e.preventDefault();
        }


        const handleOnChange = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            // console.log(field);
            // console.log(value);
            const newLoginData = { ...registerData };

            newLoginData[field] = value;
            setRegisterData(newLoginData);

        }

        return (
            <div className="login-page ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleOnsubmit} className="mt-5 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                    <input
                                        name="UserName"
                                        onBlur={handleOnChange}

                                        placeholder="enter your name"
                                        className="form-control"
                                        id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                                    <input
                                        name="email"
                                        onBlur={handleOnChange}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="enter email"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        name="password"
                                        onBlur={handleOnChange}
                                        type="password"
                                        placeholder="enter Password"
                                        className="form-control"
                                        id="exampleInputPassword1" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        name="password2"
                                        onBlur={handleOnChange}
                                        type="password"
                                        placeholder="re enter password"
                                        className="form-control"
                                        id="exampleInputPassword1" />

                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>

                                <Link to="/login">
                                    <p className="my-3">already registered ? Please login</p>
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

    export default Register;
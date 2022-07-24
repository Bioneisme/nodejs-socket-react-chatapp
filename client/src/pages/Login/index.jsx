import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import {userSelector, clearState, loginUser} from '../../store/slices/userSlice';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'

import "./login.css"

function Login() {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {isSuccess, isError, errorMessage} = useSelector(
        userSelector
    );
    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

    useEffect(() => {
        if (isError) {
            setError(errorMessage)
            dispatch(clearState())
        }

        if (isSuccess) {
            dispatch(clearState())
            window.location.href = "/"
        }
    }, [isError, isSuccess]);

    return (
        <div className="box">
            <div className="left-side">
                <span className="logo">
                    {process.env.REACT_APP_NAME}
                </span>
            </div>
            <div className="right-side">
                <div className="back" onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
                    <FontAwesomeIcon className="icon" icon={faAngleLeft}/>
                    Back
                </div>
                <div className="container">
                    <div className="container-login">
                        <h3 className="loginText">Account Login</h3>
                        <p className="lead text">
                            If you are already a member you can login with your email address and password.
                        </p>
                        <p className="error">{error}</p>

                        <form className="loginForm my-4"
                              onSubmit={handleSubmit(onSubmit)}
                              method="POST">

                            <label>Email Address</label><br/>
                            <input type="email"
                                   placeholder="example@gmail.com"
                                   {...register("email")}
                                   required/>

                            <label>Password</label><br/>
                            <input type="password"
                                   placeholder="**********"
                                   {...register("password")}
                                   autoComplete="on"
                                   required/>

                            <input type="submit" value="Log In"/>
                        </form>
                        <span className="text-center">
                            <p style={{color: 'darkslategray'}}>
                                Don't have an account ? <a style={{textDecoration: "none"}}
                                                           href="/registration">Sign up here</a>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
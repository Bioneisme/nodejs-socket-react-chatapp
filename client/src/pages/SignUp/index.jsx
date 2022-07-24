import React, {useEffect, useState} from 'react';
import {clearState, userSelector, registerUser} from "../../store/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

import "./signup.css"

function SignUp() {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {isSuccess, isError, errorMessage} = useSelector(
        userSelector
    );
    const onSubmit = (data) => {
        dispatch(registerUser(data));
    };

    useEffect(() => {
        if (isError) {
            let error
            switch (errorMessage) {
                case 'nickname_unique': error = 'This nickname is already taken!'; break
                case 'email_unique': error = 'This email is already taken!'; break
                default: error = errorMessage
            }
            setError(error)
            dispatch(clearState());
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
                    <div className="container-signup">
                        <h3 className="loginText">Account Signup</h3>
                        <p className="lead text">
                            Become a member and enjoy communication with other users.
                        </p>
                        <p className="error">{error}</p>

                        <form className="loginForm my-3"
                              onSubmit={handleSubmit(onSubmit)}
                              method="POST">

                            <label>Nickname</label><br/>
                            <input type="text"
                                   placeholder="Steve"
                                   {...register("nickname")}
                                   required/>

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

                            <label>Repeat Password</label><br/>
                            <input type="password"
                                   placeholder="**********"
                                   {...register("repeat_password")}
                                   autoComplete="on"
                                   required/>

                            <input type="submit" value="Sign Up"/>
                        </form>
                        <span className="text-center">
                            <p style={{color: 'darkslategray'}}>
                                Already have an account? <a style={{textDecoration: "none"}}
                                                           href="/login">Log In here</a>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUp;
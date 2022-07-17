import React from "react";
import "./navbar.css"
import {clearState, logoutUser} from "../../store/slices/userSlice";
import {useDispatch} from 'react-redux'

const Index = ({email}) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
        dispatch(clearState())
    };

    return (
        <nav className="navbar navbar-light">
            <div className="navbar-brand">
                <a href="/" className="text mx-3">
                    Home
                </a>
                <a href="/registration" className="text mx-3">
                    Sign Up
                </a>
                <a href="/login" className="text mx-3">
                    Log In
                </a>
            </div>
            <div className="navbar-brand">
                <div>
                    <a href="/profile" style={{textDecoration: "none", color: "black"}}>
                        <i className="fa fa-user-circle fa-lg m-2" aria-hidden="true"/>
                        {email}
                    </a>
                    <a style={{cursor: "pointer"}}
                       onClick={logout}>
                        <i className="mx-2 fa fa-remove"/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Index;
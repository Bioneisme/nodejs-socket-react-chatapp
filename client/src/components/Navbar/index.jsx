import React from "react";
import "./navbar.css"
import {clearState, logoutUser} from "../../store/slices/userSlice";
import {useDispatch} from 'react-redux'


const Index = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
        dispatch(clearState())
    };
    return (
        <div>

        </div>
    );
};

export default Index;
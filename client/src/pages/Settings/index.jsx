import React from 'react';
import {useSelector} from "react-redux";
import {userSelector} from "../../store/slices/userSlice";

import ProfileCard from "../../components/ProfileCard";

import "./profile.css"

function Profile() {
    const {currentUser} = useSelector(userSelector)

    return (
        <div className="container-fluid">
            <ProfileCard/>
        </div>
    );
}

export default Profile;
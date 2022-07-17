import React from 'react';
import {useSelector} from "react-redux";
import {userSelector} from "../../store/slices/userSlice";

import "./profile.css"

function Profile() {
    const {currentUser} = useSelector(userSelector)

    return (
        <div className="container-fluid">
            <div className="row mx-3">
                <div className="col-4 border border-2">
                    <h4>Profile</h4>
                    <br/>
                    <p className="fields">
                        Email: {currentUser.email}
                    </p>
                    <hr/>
                    <p className="fields">
                        Nickname: {currentUser.nickname}
                    </p>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
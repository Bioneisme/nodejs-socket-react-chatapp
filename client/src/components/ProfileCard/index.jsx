import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {userSelector, getUser} from "../../store/slices/userSlice";

const Card = () => {
    const {currentUser} = useSelector(userSelector)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);

    if (!user) return (
        <div>
            <i className="fa fa-sign-in-alt mx-1" />
            <a href="/login" style={{textDecoration: "none", color: "white"}}>
                 Log In
            </a>
        </div>
    )

    return (
        <div className="text-center">
            <img className="rounded-circle border"
                 src={user.image} style={{height: "125px", width: "125px"}}/>
            <hr />
            <h3>{user.nickname}</h3>
            <span className="lead" style={{fontSize: "19px"}}>{user.email}</span>
        </div>
    );
};
export default Card;
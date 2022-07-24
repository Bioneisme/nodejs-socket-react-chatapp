import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector, updateUser, clearState, uploadImage} from "../../store/slices/userSlice";
import {useForm} from "react-hook-form";

import "./settings.css"

function Profile() {
    const {register, handleSubmit, setValue} = useForm();
    const {isSuccess, isError, errorMessage} = useSelector(
        userSelector
    );
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(updateUser(data));
    };

    const uploadImg = (data) => {
        dispatch(uploadImage(data));
    };

    const {currentUser} = useSelector(userSelector)

    useEffect(() => {
        setValue("id", currentUser.id)
        setValue("email", currentUser.email)
        setValue("nickname", currentUser.nickname)

        if (isError) {
            let error
            switch (errorMessage) {
                case 'SequelizeUniqueConstraintError':
                    error = 'This nickname is already taken!';
                    break
            }
            setSuccess(null)
            setError(error)
            dispatch(clearState())
        }

        if (isSuccess) {
            setError(null)
            setSuccess('Successfully updated!')
            dispatch(clearState())
        }
    }, [isError, isSuccess])

    return (
        <div className="container">
            <div className="col-lg-6">
                <fieldset className="p-3">
                    <div className="shadow p-3 mb-5 bg-white rounded text-center">
                        <div className="lead" style={{fontSize: "24px"}}>Profile Settings</div>
                    </div>
                    <div className="shadow p-3 mb-3 bg-white rounded text-center">
                        <img className="rounded-circle border"
                             src={currentUser.image} style={{height: "125px", width: "125px"}}/>
                        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit(uploadImg)}>
                            <input type="file"
                                   name="file"
                                   accept="image/*"
                                   {...register("file")}
                            /> <br/>
                            <button style={{width: "40%"}} type="submit"
                                    className="btn btn-outline-dark col-12 my-2">Upload
                                Image
                            </button>
                        </form>
                        <p className="text-danger">{error}</p>
                        <p className="text-success">{success}</p>
                        <div className="settingsForm my-4">
                            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                                <label>User ID</label>
                                <input className="form-control"
                                       type="text"
                                       placeholder="165"
                                       {...register("id")}
                                       disabled/>
                                <label>Email</label>
                                <input className="form-control"
                                       type="email"
                                       placeholder="example@gmail.com"
                                       {...register("email")}
                                       disabled/>
                                <label>Nickname</label>
                                <input className="form-control"
                                       type="text"
                                       placeholder="Steve"
                                       {...register("nickname")}
                                       required/>
                                <br/>
                                <button className="btn btn-outline-dark col-12" type="submit">Update</button>
                            </form>
                        </div>
                    </div>

                </fieldset>
            </div>
        </div>
    );
}

export default Profile;
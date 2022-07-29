import React, {useEffect} from "react";
import {logoutUser, getUser, clearState} from '../../store/slices/userSlice';
import {useDispatch} from "react-redux";

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';

import ProfileCard from "../ProfileCard";

import "./sidebar.css"

const Index = ({children}) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser())
        dispatch(clearState())
    };

    useEffect(() => {
        dispatch(getUser())
    })

    return (
        <div className="side-container">
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"/>}>
                    <ProfileCard/>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/chats">
                            <CDBSidebarMenuItem icon="comments">Chats</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/settings" onClick={window.location.reload}>
                            <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
                        </NavLink>
                        <div className="text-danger" onClick={logout}>
                            <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
                        </div>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{textAlign: 'center'}}>
                    <div style={{padding: '20px 5px'}}>
                        <a href="https://github.com/Bioneisme" style={{textDecoration: "none", color: 'white'}}
                           target="_blank">
                            Bioneisme </a>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            {children}
        </div>
    );
};

export default Index;
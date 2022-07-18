import React from "react";
import Index from "../../components/Navbar";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Index/>
            <Outlet/>
        </>
    );
};

export default Layout;
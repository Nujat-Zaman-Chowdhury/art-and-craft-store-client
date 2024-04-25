import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";


const Root = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
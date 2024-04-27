import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Footer from "../Components/Footer";


const Root = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-116px)">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
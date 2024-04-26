import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Footer from "../Components/Footer";


const Root = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
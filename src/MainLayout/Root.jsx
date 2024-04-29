import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Utils/ScrollToTop";


const Root = () => {
    
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            
            <Navbar></Navbar>

            <div className="min-h-[100vh] overflow-hidden block relative pb-[100px] px-2 md:px-0">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";



const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <div><Lottie animationData="Animation - 1714126431082.json" loop={true} /></div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default ProtectedRoute;
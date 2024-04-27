import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Rings } from "react-loader-spinner";



const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <div><Rings
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
            /></div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default ProtectedRoute;
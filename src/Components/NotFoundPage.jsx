import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1714300999626.json"
const NotFoundPage = () => {
    return (
        <div className="flex justify-center items-center mt-8 md:mt-12">
            <div>
            <Lottie animationData={animationData} loop={true} className="w-full md:w-96"/>
            </div>
        </div>
    );
};

export default NotFoundPage;
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1714116146478.json"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="flex flex-col justify-around md:flex-row md:gap-8 mx-auto px-12 bg-orange-100">
            
            <div className=" bg-white rounded shadow-lg shadow-orange-200 my-5 md:p-8 w-[500px]">
                <h2 className="font-bold font-lato text-xl md:text-3xl border-b-4 border-spacing-2 w-8 border-orange-500 dark:text-black">Register</h2>
                <p className="my-3 font-workSans text-black">Register to your account to access all features</p>
                <form className="space-y-3">
                <div className="">
                  <fieldset className="border border-solid border-orange-400 w-full shadow">
                    <legend className="font-medium text-orange-500">
                      Name
                    </legend>
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter Your Email"
                      className="px-4 py-2 w-full focus:outline-0 dark:bg-transparent"
                    />
                  </fieldset>
                </div>
                <div className="">
                  <fieldset className="border border-solid border-orange-400 w-full shadow">
                    <legend className="font-medium text-orange-500">
                      Email
                    </legend>
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Enter Your Email"
                      className="px-4 py-2 w-full focus:outline-0 dark:bg-transparent"
                    />
                  </fieldset>
                </div>
                <div className="">
                  <fieldset className="border border-solid border-orange-400 w-full shadow">
                    <legend className="font-medium text-orange-500">
                      Photo URL
                    </legend>
                    <input
                      type="text"
                      name="photo"
                      id=""
                      placeholder="Enter Photo URL"
                      className="px-4 py-2 w-full focus:outline-0 dark:bg-transparent"
                    />
                  </fieldset>
                </div>
                <div className="mt-3">
                  <fieldset className="border border-solid border-orange-400 w-full shadow">
                    <legend className="font-medium text-orange-500">
                      Password
                    </legend>
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="Enter Your Password"
                      className="px-4 py-2 w-full focus:outline-0 dark:bg-transparent"
                    />
                  </fieldset>
                </div>
                <div className="w-full">
                    <button className="btn mt-4 text-center w-1/3 bg-orange-500 hover:bg-orange-600 text-white font-medium font-workSans border-0">Login</button>
                </div>
                </form>
                
               
                <div className="my-4 font-lato font-medium font-workSans text-center">
                    Already a member? Please <Link to="/register" className="text-orange-400">Login</Link>
                </div>
                
            </div>
            <div className="flex items-center justify-center w-[500px]">
            <Lottie animationData={animationData} loop={true} />
            </div>
        </div>
        
        </div>
    );
};

export default Register;
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1714109777074.json"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col justify-around md:flex-row md:gap-8 mx-auto md:px-12 bg-orange-100">
            <div className="flex items-center justify-center">
            <Lottie animationData={animationData} loop={true} />
            </div>
            <div className=" bg-white rounded shadow-lg shadow-orange-200 my-5 p-8 w-full md:w-[500px]">
                <h2 className="font-bold font-lato text-xl md:text-3xl border-b-4 border-spacing-2 w-8 border-orange-500 dark:text-black">Login</h2>
                <p className="my-3 font-workSans text-black">Login to your account to access all features</p>
                <form className="space-y-3">
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
                <div className="divider font-medium">Or</div>
                <div className="flex flex-col lg:flex-row justify-evenly gap-2">
                    <button className="btn flex items-center ">
                        <div className="bg-white flex items-center justify-center w-6 h-6 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path></svg>
                        </div>
                         Login With Google
                    </button>
                    <button className="btn flex items-center ">
                        <div className="bg-white flex items-center justify-center w-6 h-6 rounded-full">
                        <svg className="w-6" viewBox="0 0 32 32"><path fillRule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"></path></svg>
                        </div>
                         Login With Github
                    </button>
                </div>
                <div className="my-4 font-lato font-medium font-workSans text-center">
                    New Here? Please <Link to="/register" className="text-orange-400">Register</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
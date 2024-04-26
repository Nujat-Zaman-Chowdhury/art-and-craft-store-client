import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1714116146478.json"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Register = () => {
    const {createUser,updateUserProfile,logOut} = useContext(AuthContext)
    const [error,setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);

        if(password.length<6){
            setError('Password must be 6 characters or above')
            return;
        }

        if(!/^(?=.*[A-Z]).+$/.test(password))
        {
            setError('Must have an Uppercase letter in the password')
            return;
        }
        if(!/^(?=.*[a-z]).+$/.test(password))
        {
            setError('Must have an Lowercase letter in the password')
            return;
        }

        setError('')

        createUser(email,password)
        .then(result=>{
            updateUserProfile(name,photo)
            .then(()=>{
            toast("Register Successfully");
            console.log(result.user);
            })
            logOut();
            }
        )
        .catch(error=>{
            setError(error.code.split('/')[1]);
        })
        form.reset();
    }
    return (
        <div>
            <div className="flex flex-col-reverse justify-around md:flex-row md:gap-8 mx-auto md:px-12 bg-orange-100">
            
            <div className=" bg-white rounded shadow-lg shadow-orange-200 my-5 p-8 w-full md:w-[500px]">
                <h2 className="font-bold font-lato text-xl md:text-3xl border-b-4 border-spacing-2 w-16 border-orange-500 dark:text-black">Register</h2>
                <p className="my-3 font-workSans text-black">Register to your account to access all features</p>
                <form className="space-y-3"  onSubmit={handleSubmit}>
                <div className="">
                  <fieldset className="border border-solid border-orange-400 w-full shadow">
                    <legend className="font-medium text-orange-500">
                      Name
                    </legend>
                    <input
                        required
                      type="text"
                      name="name"
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
                      required
                      type="email"
                      name="email"
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
                       required 
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      className="px-4 py-2 w-full focus:outline-0 dark:bg-transparent"
                    />
                  </fieldset>
                  {
                        error && <p className="text-red-700">{error}</p>
                }
                </div>
                <div className="w-full">
                    <button className="btn mt-4 text-center w-1/3 bg-orange-500 hover:bg-orange-600 text-white font-medium font-workSans border-0">Register</button>
                </div>
                </form>
                
               
                <div className="my-4 font-lato font-medium font-workSans text-center">
                    Already a member? Please <Link to="/login" className="text-orange-400">Login</Link>
                </div>
                
            </div>
            <div className="flex items-center justify-center w-full md:w-[500px]">
            <Lottie animationData={animationData} loop={true} />
            </div>
        </div>
        
        </div>
    );
};

export default Register;
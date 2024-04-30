import { useContext, useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { PiFlowerTulipDuotone, PiGooglePhotosLogo } from "react-icons/pi";
import { RiFolderUserFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
    const{user,logOut} = useContext(AuthContext)
    const [theme,setTheme] = useState('light');
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localStorageTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localStorageTheme)
    },[theme])
    const handleTheme = e =>{
        console.log(e);
        if(e.target.checked){
            setTheme('night')
        }
        else{
            setTheme('light')
        }
    }
    const navLinks = <>
    <NavLink className={({isActive})=>isActive? "text-white btn bg-orange-400" : "btn border-0 shadow-none text bg-transparent text-orange-400 hover:bg-transparent"} to="/"><IoHome /> Home</NavLink>
    <NavLink  className={({isActive})=>isActive? "text-white btn bg-orange-400" : "btn border-0 shadow-none text bg-transparent text-orange-400 hover:bg-transparent"} to="/allArtCraft"><PiGooglePhotosLogo /> All Art & craft Items</NavLink>
    <NavLink className={({isActive})=>isActive? "text-white btn bg-orange-400" : "btn border-0 shadow-none text bg-transparent text-orange-400 hover:bg-transparent"} to="/addCraftItem"><IoIosAddCircle /> Add Craft Item</NavLink>
    {
      user && 
      <NavLink className={({isActive})=>isActive? "text-white btn bg-orange-400" : "btn border-0 shadow-none text bg-transparent text-orange-400 hover:bg-transparent"} to="/my-art-and-craft"><RiFolderUserFill /> My Art&Craft List</NavLink>
    }
    </>

    const handleLogOut = ()=>{
      logOut();
    }

    return (
        <div className="navbar p-3 flex flex-col md:flex-row font-lato shadow">
  <div className="navbar-start w-full md:w-1/2">
    <div className="dropdown z-30">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex items-center lg:gap-2 text-orange-400 font-dancing  text-pretty text-xl md:text-3xl font-bold btn bg-transparent border-0 shadow-none hover:bg-transparent">
        <PiFlowerTulipDuotone />
        <h2 className="">Artisanal Crafts</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end w-full md:w-1/2 gap-3 justify-between md:justify-end" >
  <label className="flex  cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller text-orange-400"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

     <div>
      {
        user?
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded-full border border-orange-400 cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
          <img  className="w-full h-full rounded-full object-cover" src={user?.photoURL} alt="" />
          <Tooltip id="my-tooltip" />
          </div>
          <Link onClick={handleLogOut} to="/login" className="btn bg-orange-400 hover:bg-orange-500 text-white">Sign out</Link>
        </div> 

       
        :
        <div>
          <Link to="/login" className="btn bg-orange-400 hover:bg-orange-500 text-white">Login</Link>
          <Link to="/register" className="btn bg-orange-400 hover:bg-orange-500 text-white">Register</Link>
        </div>
      }
     </div>
     </div>
</div>
    );
};

export default Navbar;
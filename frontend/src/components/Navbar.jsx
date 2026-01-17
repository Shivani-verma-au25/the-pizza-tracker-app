import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import useAuth from "@/customHooks/useAuth";
import { Button } from "./ui/button";
import LoadingPage from "./LoadingPage";


function Navbar() {
  const {isAuthenticated} = useSelector(state => state.auth)
  console.log(isAuthenticated);
  
  const {userLogout} = useAuth()
  const naviagte = useNavigate();
  return (
    <nav className="max-w-7xl bg-slate-500-100 mx-auto flex justify-between items-center p-3 shadow-xs" >
      <div onClick={()=> naviagte('/')} className=" flex justify-center items-end gap-3 cursor-pointer ">
        <img className="w-20 h-20 rounded-full" src="/pizzalogo.jpg" alt="" />
        <span  className="text-2xl font-bold">Pizza</span>
      </div>
      <div className="flex justify-center items-center gap-2  px-10">
        <div  className="flex justify-center items-center gap-3 px-3">
          <Link  className="text-md font-semibold text-gray-500" >Menu</Link>
          <Link className="text-md font-semibold text-gray-500" >Offer</Link>
          { isAuthenticated ? (
            <Button onClick={() => userLogout()} variant={''} className="text-md font-semibold cursor-pointer" >Sign out</Button>
            ):(
              <Button><Link to={'/signin'} className="text-md font-semibold" >Signin</Link></Button>
          )}
          
        </div>
        <Link to={'/cart'} className="flex justify-center items-center gap-2 bg-yellow-400 px-3 py-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 ease-in">
          <span>0</span>
          <FaCartPlus className="" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

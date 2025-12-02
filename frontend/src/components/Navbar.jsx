import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";


function Navbar() {
  return (
    <nav className="max-w-7xl bg-slate-500-100 mx-auto flex justify-between items-center p-3 shadow-xs" >
      <div className=" flex justify-center items-end gap-3 ">
        <img className="w-20 h-20 rounded-full" src="/pizzalogo.jpg" alt="" />
        <span className="text-2xl font-bold">Pizza</span>
      </div>
      <div className="flex justify-center items-center gap-2  px-10">
        <div  className="flex justify-center gap-3 px-3">
          <Link  className="text-md font-semibold text-gray-500" >Menu</Link>
          <Link className="text-md font-semibold text-gray-500" >Offer</Link>
          <Link className="text-md font-semibold text-gray-500" >Register</Link>
          <Link className="text-md font-semibold text-gray-500" >Login</Link>
        </div>
        <FaCartPlus className="" />
      </div>
    </nav>
  );
}

export default Navbar;

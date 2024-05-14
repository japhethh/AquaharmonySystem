import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import {Link, useNavigate} from 'react-router-dom'
import {StoreContext} from '../context/StoreContext'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";



const Navbar = ({setShowLogin}) => {  
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const {getTotalFromAmount,token, setToken,URL} = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }
  return (
    <div className="flex justify-between items-center py-5  ">
      <Link to="/"><img
        className="max-md:w-[90px] md:w-[120px] lg:w-[150px]"
        src={assets.logo}
        alt=""
      /></Link>

      <ul className="navbar-menu flex gap-5 text-[#49557e] cursor-pointer max-md:hidden ">
        <Link to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          Home
        </Link>
        <Link
          onClick={() => setMenu("menu")}
          className={
            menu === "menu" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          Menu
        </Link>
        <Link
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          mobile-app
        </Link>
        <Link
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          contact-us
        </Link>
      </ul>

      <div className="navbar-right flex items-center gap-10 cursor-pointer">
        <img className="w-5" src={assets.search_icon} alt="" />

        <div className="navbar-search-icon relative">
          <Link to="/cart"><img className="w-5" src={assets.basket_icon} alt="" /></Link>

          <div className={`${getTotalFromAmount() === 0 ? "" : "absolute h-2 w-2 bg-orange-500 rounded-full top-[-6px] right-[-5px]"}`}></div>
        </div>

        {!token ? (<button className="bg-transparent border-[1px] md:text-lg text-sm py-1 px-2  md:py-2 md:px-3 text-[#49557e]   rounded-full cursor-pointer hover:bg-[#fff4f2] transition duration-150 ease-in-out" onClick={() => setShowLogin(true)}>
          Sign in
        </button>) : (
       <div className="navbar-profile relative group">
       <img className="w-5" src={assets.profile_icon} alt="" />
       <ul className="nav-profile-dropdown absolute right-0 z-10 hidden group-hover:flex flex-col  gap-4 bg-white border-[1px] border-orange-500 shadow-md px-3 py-5 rounded-sm outline-white">
         <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-orange-500"><HiOutlineShoppingBag /><p>Orders</p></li>
         <hr className="h-[1px] bg-blue-500" />
         <li onClick={logout} className="flex items-center justify-start gap-1 cursor-pointer hover:text-orange-500"><IoLogOutOutline /><p>Logout</p></li>
       </ul>
     </div>
        ) }

        
      </div>
    </div>
  );
};

export default Navbar;

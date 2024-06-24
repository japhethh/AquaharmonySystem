import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";



const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [openSlide, setOpenSlide] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalFromAmount, token, cartItem, setToken, URL, userInfo } =
    useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("accountData");
    setToken("");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center py-5 ${
        isScrolled ? "sticky top-0 bg-white z-50" : ""
      }`}
    >
      <FaBars
        className={`max-md:block hidden z-40  ${
          openSlide ? "text-white" : "text-black"
        }`}
        onClick={() => setOpenSlide((prev) => !prev)}
      />
      <div className={` ${openSlide ? "flex" : "hidden"}`}>
        <div
          className={`absolute   top-0 left-0 w-full bg-black z-30 animate-all `}
        >
          <ul className="navbar-menu gap-5 cursor-pointer max-md:flex hidden flex-col text-white px-2 py-2 text-center ">
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "pb-1 " : ""}
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "pb-1 " : ""}
            >
              Menu
            </Link>
            
            {/* <Link to="/mobile-app"
            onClick={() => setMenu("mobile-app")}
            className={
              menu === "mobile-app" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
            }
          >
            mobile-app
          </Link> */}
            <Link
              to="/contactUs"
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "pb-1  " : ""}
            >
              contact-us
            </Link>
          </ul>
        </div>
      </div>

      <Link
        className="flex justify-center items-center font-semibold text-2xl gap-2 max-md:hidden "
        to="/"
      >
        <img
          className="max-md:w-[40px] md:w-[50px] lg:w-[50px]"
          src={assets.iconlogo}
          alt=""
        />
        <span className="max-md:hidden">Aqua Harmony</span>
      </Link>

      <ul className="navbar-menu flex gap-5 text-[#49557e] cursor-pointer max-md:hidden ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          Home
        </Link>
        <Link
          to="/menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          Menu
        </Link>
        {/* <Link to="/mobile-app"
            onClick={() => setMenu("mobile-app")}
            className={
              menu === "mobile-app" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
            }
          >
            mobile-app
          </Link> */}
        <Link
          to="/contactUs"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us" ? "pb-1 border-b-[2px] border-[#49557e]" : ""
          }
        >
          contact-us
        </Link>
      </ul>

      <div className="navbar-right flex   items-center gap-10 cursor-pointer ">
        <IoSearch className="text-2xl" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <FiShoppingCart className="text-2xl" />

            <div
              className={`${
                getTotalFromAmount() === 0
                  ? "absolute text-white bg-[#EF4444] rounded-full top-[-8px] right-[-8px] flex justify-center items-center w-5 h-5"
                  : "absolute text-white bg-[#EF4444] rounded-full top-[-8px] right-[-8px] flex justify-center items-center w-5 h-5"
              }`}
            >
              <h1 className="text-xs ">
                {Object.keys(cartItem).filter((key) => cartItem[key] !== 0)
                  .length > 0
                  ? Object.keys(cartItem).filter((key) => cartItem[key] !== 0)
                      .length
                  : 0}
              </h1>
            </div>
          </Link>
        </div>

        {!token ? (
          <button
            className="bg-transparent border-[1px] md:text-lg text-sm py-1 px-2  md:py-2 md:px-3 text-[#49557e]   rounded-full cursor-pointer hover:bg-[#fff4f2] transition duration-150 ease-in-out"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        ) : (
          <div className="navbar-profile relative group">
            <div className="flex flex-row gap-2">
            <img
              className="w-[40px] h-[40px] bg-contain rounded-full"
              src={
                userInfo.user && userInfo.user.image
                  ? `http://localhost:4000/images/${userInfo.user.image}`
                  : assets.upload_area
              }
              alt=""
            />
            {userInfo.user && (
            <div className="flex flex-col ">
              <h1 className="font-bold text-gray-600 text-[13px]">{userInfo.user.name}</h1>
              <div className="flex flex-row justify-center items-center">
              <h1 className="text-gray-400 text-xs italic">Online</h1> 
              <img className="w-[15px]" src={assets.active_online} alt="" />
              </div>
            </div>
            )
            }
            </div>
            <ul className="nav-profile-dropdown w-[200px] absolute right-0 z-10 hidden group-hover:flex flex-col  gap-0 bg-white border-[1px] shadow-xl  rounded-md outline-white">
              <div className="bg-gray-200 px-6 py-2">
                <h1 className="text-gray-400 font-semibold">Account</h1>
              </div>
            
              <Link
                rel="stylesheet"
                to="/account"
                className="flex items-center justify-start px-6 py-3 text-gray-500 gap-1 cursor-pointer hover:text-orange-500"
              >
                <IoPersonOutline />
                Profile
              </Link>
              <li className="flex items-center justify-start px-6 py-3 text-gray-500 gap-1 cursor-pointer hover:text-orange-500">
                <HiOutlineShoppingBag />
                <p>Orders</p>
              </li>
              <hr className="h-[1px] bg-blue-500" />
              <li
                onClick={logout}
                className="flex items-center text-gray-500  px-6 py-3 justify-start gap-1 cursor-pointer hover:text-orange-500"
              >
                <div className="flex justify-center items-center gap-1">
                  <SlLogout />
                  <p>Logout</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

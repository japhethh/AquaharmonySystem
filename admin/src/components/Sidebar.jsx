import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar w-[18%] border-[1px] border-gray-500 border-t-0 min-h-screen text-[15px]">
      <div className="sidebar_options pt-10 pl-[20%] flex flex-col gap-5">
        <NavLink to="/add" className={({isActive}) => `sidebar_option flex items-center gap-2  py-2 px-2 border-[1px] border-gray-500 border-r-0 cursor-pointer ${isActive ? "border border-orange-500 bg-slate-100  " : ""}` }>
          <IoIosAddCircleOutline className="text-2xl" />
          <p className="max-md:hidden">Add Items</p>
        </NavLink>

        <NavLink to="/list" className={({isActive}) => `sidebar_option flex items-center gap-2  py-2 px-2 border-[1px] border-gray-500 border-r-0 cursor-pointer ${isActive ? "border border-orange-500 bg-slate-100  " : ""}` }>
          <FaRegCalendarCheck className="text-2xl" />
          <p className="max-md:hidden">List Items</p>
        </NavLink>

        <NavLink to="/orders" className={({isActive}) => `sidebar_option flex items-center gap-2  py-2 px-2 border-[1px] border-gray-500 border-r-0 cursor-pointer ${isActive ? "border border-orange-500 bg-slate-100  " : ""}` }>
          <FaRegCalendarCheck className="text-2xl" />
          <p className="max-md:hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

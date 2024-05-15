import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div
      className="flex flex-col items-center pt-20 pb-3 mt-10 px-4 gap-4 bg-[#323232] text-white"
      id="footer"
    >
      <div className="flex justify-between gap-12 wrap max-md:flex-col max-md:px-4 ">
        <div className="footer-content-left md:w-2/5 w-full  flex flex-col gap-3">
          <img className="w-[50px]" src={assets.iconlogo} alt="" />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="flex text-2xl items-center gap-5 ">
            <a href="https://www.instagram.com/adreyjapheth/?hl=en"><FaInstagram  /></a> 
            <a href="https://www.facebook.com/Japhetlocaylocay"><FaFacebook /></a>
            <a href=""><FaXTwitter /></a>
          </div>
        </div>
        <div className="footer-content-center md:w-1/5 w-full  flex flex-col gap-3">
          <h2 className="font-bold text-2xl">COMPANY</h2>
          <ul className="flex flex-col gap-1 cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right md:w-1/5 w-full  flex flex-col gap-3">
          <h2 className="font-bold text-2xl">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-1">
            <li>09511431876</li>
            <li>mtrcb32130@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-400 h-[3px]  flex justify-center items-center my-8 w-full" />
      <p className="text-center ">Copy right 2024 ©️ AquaHarmony. All Right Reserved.</p>
    </div>
  );
};

export default Footer;

import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="text-[25px] mx-auto flex flex-col items-center justify-center mt-[100px]  text-center font-medium">
      <p className="text-[18px] py-5 font-medium">
        For Better Experience Download <br /> Food App
      </p>
      <div className="app-download-platforms flex  gap-3 items-center justify-between cursor-pointer">
        <img
          className="w-[30vh] max-w-[180px] max-md:w-[115px] hover:scale-105 duration-300"
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-[30vh] max-w-[180px] max-md:w-[115px] hover:scale-105 duration-300  "
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;

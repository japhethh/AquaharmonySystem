import React, { useState } from 'react'
import {assets} from '.././assets/assets'
const Navbar = () => {  
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <div className="flex justify-center items-center font-semibold text-2xl gap-2">
      <img className="max-md:w-[40px] md:w-[50px] lg:w-[50px]" src={assets.iconLogo} alt="" />
      <span className="max-md:hidden">Aqua Harmony</span>
      </div>
      <div className="relative" >

      <img onClick={() => setOpen(!open)} className="w-10" src={assets.profile_image} alt="" />
      <div  className={`${open ? "block" : "hidden"} absolute top-[45px] right-[5px] rounded-md w-[180px] h-[180px] bg-gray-200 shadow-md`}>

      </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
const Header = () => {
  return (
    <header className=" bg-no-repeat bg-cover bg-[url('./assets/homemain.jpg')] relative xl:w-[1170px] h-screen " >
    <div className="header_contents absolute bottom-[15%] max-md:bottom-[10%] left-[6vw] w-[40%] max-md:w-[70%] md:w-[60%] flex flex-col items-start ">
      <h2 className="max-md:text-[25px] md:text-[50px] max-md:leading-7 font-semibold text-white font-size  md:leading-normal">Order your Showers here</h2>
      <p className="max-md:hidden md:text- md:pb-5 py-2 text-white md:text-[15px] text-[10px]">Groundbreaking integration of a shower head with an integrated speaker system</p>
      <button className="md:my-1 bg-white text-black rounded-full  md:text-xl text-md max-md:py-1 max-md:px-2 md:py-2 md:px-4 ">View Menu</button>
    </div>
    
    </header>
  )
}

export default Header
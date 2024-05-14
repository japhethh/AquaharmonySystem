import React from 'react'
const Header = () => {
  return (
    <header className="h-[40vw] bg-no-repeat bg-contain bg-[url('./header_img.png')] relative  " >
    <div className="header_contents absolute bottom-[15%] max-md:bottom-[10%] left-[6vw] w-[40%] max-md:w-[70%] md:w-[60%] flex flex-col items-start ">
      <h2 className="max-md:text-[25px] md:text-[50px] max-md:leading-7 font-semibold text-white font-size  md:leading-normal">Order your favorite food here</h2>
      <p className="max-md:hidden md:text- md:pb-5 py-2 text-white md:text-[15px] text-[10px]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest</p>
      <button className="md:my-1  bg-gray-200 rounded-full  md:text-xl text-md max-md:py-1 max-md:px-2 md:py-2 md:px-4">View Menu</button>
    </div>
    
    </header>
  )
}

export default Header
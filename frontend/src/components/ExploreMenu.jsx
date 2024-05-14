import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-medium text-3xl">Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

      <div className="flex  justify-between py-5 gap-5 max-w-screen overflow-x-scroll mx-3 cursor-pointer">

        {menu_list.map((item, index) => (
          <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="flex flex-col items-center   w-20" key={index}>
            
            <img className={`${category === item.menu_name ? "border-4 border-orange-500 p-1" : ""} w-[7vw] h-[7vh] min-w-[80px] min-h-[80px] object-cover rounded-full`} src={item.menu_image} alt={item.menu_name} />
            <p className="mt-2 text-center">{item.menu_name}</p>


          </div>
        ))}
      </div>
      <hr />

    </div>
  )
}

export default ExploreMenu

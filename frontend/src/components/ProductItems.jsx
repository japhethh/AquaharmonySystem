import React, { useContext } from "react";
import { StoreContext } from '../context/StoreContext';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

const ProductItems = ({ id, name, image, price, description }) => {
  
  const { cartItem, addToCart, removeFromCart,URL } = useContext(StoreContext);

  return (
    <div className="food-item w-full shadow-md py-2 px-2">
      <div className="relative">
        <img className="rounded-tr-xl rounded-tl-xl w-full" src={URL+"/images/"+image} alt="" />
        <div className="absolute right-2 bottom-2">
          {!cartItem[id] ? (
            <IoIosAddCircleOutline
              className="flex cursor-pointer justify-end items-center text-4xl max-md:text-2xl gap-2 text-green-500 bg-white rounded-full border-2 border-green-600"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="cursor-pointer py-2 px-2 bg-white rounded-full flex justify-end items-center gap-2">
              <CiCircleMinus
                className="text-red-500 bg-white rounded-full border-2 border-red-600 text-4xl max-md:text-2xl"
                onClick={() => removeFromCart(id)}
              />
              <p>{cartItem[id]}</p>
              <IoIosAddCircleOutline
                className="text-green-500 bg-white rounded-full border-2 border-green-600 text-4xl max-md:text-2xl"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <h1 className="text-[17px] font-medium">{name}</h1>
        {/* Ensure the image for rating stars is correctly imported */}
        {/* <img className="w-[70px]" src={assets.rating_starts} alt="" /> */}
      </div>
      <p className="text-slate-500 text-sm font-medium">{description}</p>
      <p className="text-lg font-semibold text-orange-500">₱{price}</p>
    </div>
  );
};

export default ProductItems;

import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalFromAmount,URL } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-6 items-center text-gray-600 gap-2 ">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr className="h-[2px] bg-gray-300" />
      {food_list.map((item, index) => {
        if (cartItem[item._id] > 0) {
          return (
            <div key={index}>
              <div className="cart-item-title cart-items-item grid grid-cols-6 py-1  items-center text-black gap-2">
                <img className="w-[50px]" src={URL+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]} </p>
                <p onClick={() => removeFromCart(item._id)} className="cursor-pointer text-xl">x</p>
              </div>
              <hr className="h-[1px] bg-gray-300 border-none" />
            </div>
          );
        }
      })}
    <div className="flex py-10 gap-10 max-md:flex-col-reverse">
      <div className="flex-1 flex-col gap-2 px-2">
        <h2 className="text-xl font-semibold">Cart Totals</h2>
        <div>
          <div className="cart-total-details flex py-2 justify-between items-center text-gray-500">
            <p>Subtotal</p>
            <p>{getTotalFromAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details flex py-2 justify-between items-center text-gray-500">
            <p>Delivery Fee</p>
            <p>{getTotalFromAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details flex py-2 justify-between items-center text-gray-700">
            <b>Total</b>
            <b>{getTotalFromAmount() === 0 ? 0 : getTotalFromAmount() + 2}</b>
          </div>
        </div>
        <hr className="my-5 "/>
        <button type="submit" onClick={() => navigate("/order")} className="flex justify-center items-center py-2 px-4 bg-orange-500 text-white font-semibold text-md">PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode flex-1">
        <div>
          <p>If you have a promo code, Enter it here</p>
            <div className="flex justify-between gap-2 mt-2 rounded-md bg-gray-200">
              <input className="outline-none py-2 px-3 bg-transparent border-none " placeholder="promo code" type="text" />
              <button className="max-w-[250px] w-[150px] bg-black text-white py-2 px-3 rounded-md">Submit</button>
            </div>
        </div>
        
      </div>
    </div>
    </div>
    
  );
};

export default Cart;

import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'
const Placeholder = () => {
  const navigate = useNavigate();
  const { getTotalFromAmount, token, food_list, cartItem, URL } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeHolder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if(cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id]
        orderItems.push(itemInfo);
      }
    })
//  The amount you can change that into peso (php ) means the charge is 30 pesos
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalFromAmount() + 30
    }
    try {
    let response = await axios.post(URL+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }else{
      alert("Error")

    }
  } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
  }
  };

  return (
    <div>
      <form
        onSubmit={placeHolder}
        className="place-order flex max-md:flex-col items-start justify-between mt-24"
        action=""
      >
        <div className="place-order-left w-full max-w-[500px]">
          <p className="title font-semibold text-2xl mb-4">
            Delivery Information
          </p>
          <div className="multi-fields flex flex-row gap-3">
            <input required
              name="firstName"
              onChange={onChangeHandle}
              value={data.firstName}
              className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
              type="text"
              placeholder="First Name "
            />
            <input required
              name="lastName"
              onChange={onChangeHandle}
              value={data.lastName}
              className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input required
            name="email"
            onChange={onChangeHandle}
            value={data.email}
            className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
            type="email"
            placeholder="Email Address"
          />
          <input required
            name="street"
            onChange={onChangeHandle}
            value={data.street}
            className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields flex flex-row gap-3">
            <input required
              name="city"
              onChange={onChangeHandle}
              value={data.city}
              className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
              type="text"
              placeholder="City"
            />
            <input required
              name="state"
              onChange={onChangeHandle}
              value={data.state}
              className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input required
              name="zipCode"
              onChange={onChangeHandle}
              value={data.zipCode}
              className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
              type="text"
              placeholder="Zip code"
            />
            <input required
              name="country"
              onChange={onChangeHandle}
              value={data.country}
              className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
              type="text"
              placeholder="Country"
            />
          </div>
          <input required
            name="phone"
            onChange={onChangeHandle}
            value={data.phone}
            className="py-1 px-2 w-full border-[1.5px] border-gray-400 mb-2 outline-orange-500 rounded-sm"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="place-order-right w-full max-w-[500px]">
          <div>
            <p className="title font-semibold text-2xl mb-4">Cart title</p>

            <div className="cart-total-details flex py-2 justify-between items-center text-gray-400">
              <p className=" ">Subtotal</p>
              <p>₱{getTotalFromAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details flex py-2 justify-between items-center text-gray-400">
              <p>Delivery Fee</p>
              <p>{30}</p>
            </div>
            <hr />
            <div className="cart-total-details flex py-2 justify-between items-center text-gray-700">
              <b>Total</b>
              <b>₱{getTotalFromAmount() + 30}</b>
            </div>
            <hr className="my-5 " />
            <button
              type="submit"
              onClick={() => navigate("/order")}
              className="flex justify-center items-center bg-black rounded-full py-4 w-full text-white font-semibold text-md mt-4"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Placeholder;

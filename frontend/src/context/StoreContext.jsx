import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

// import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const URL = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState([]);

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if(localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const loadCartData = async (token) => {
    const response = await axios.post(`${URL}/api/cart/get`,{},{headers:{token}});
    setCartItem(response.data.cartData);
  }
  
  const fetchFoodList = async () => {
    const response = await axios.get(`${URL}/api/food/list`);
    setFood_list(response.data.data);
  };

 
  
  // addToCart
  const addToCart = async (itemId) => {

    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if(token){
      await axios.post(URL+"/api/cart/add",{itemId},{headers:{token}})
    }
    
  };

  const removeFromCart = async (itemId) => {
    if (cartItem[itemId] > 1) {
      setCartItem((prev) => ({
        ...prev,
       [itemId]:prev[itemId] - 1
      }));
    
    } else {
      const updatedCart = { ...cartItem };
      delete updatedCart[itemId];
      setCartItem(updatedCart);
   
    }
      // I'm in computer in this part you can modify this or remove 
      if(token){
        await axios.post(URL+"/api/cart/remove",{itemId},{headers:{token}})
      }
  };

  const getTotalFromAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      let findItem = food_list.find((product) => product._id === item);
      // the cartItem[item] is like this value of the id 1
      totalAmount += findItem.price * cartItem[item];
    }
    return totalAmount;
  };
  
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalFromAmount,
    URL,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

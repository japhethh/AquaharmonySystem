import React, { useContext, useState } from "react";
import axios from 'axios'
// import { assets } from "../assets/assets";
import { IoIosClose } from "react-icons/io";
import { StoreContext } from "../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { URL,setToken,token } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = URL;
    if(currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }else{
      alert(response.data.message)
    }

  }

  return (
    <div className="bg-slate-600 bg-opacity-50 flex justify-center items-center absolute w-full h-screen z-10 ">
      <form onSubmit={onLogin} className="login-popup-form max-w-[330px] flex flex-col gap-4 blur-none bg-white p-4 rounded-xl">
        <div className="form-title flex justify-between mb-5">
          <h2 className="text-xl font-semibold">{currState} </h2>

          <IoIosClose
            className="text-4xl cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-inputs flex flex-col gap-3  ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              className="py-2 px-4 rounded-lg outline-none border-[1px] border-slate-300"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="py-2 px-4 rounded-lg outline-none border-[1px] border-slate-300 "
            type="text"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            className="py-2 px-4 rounded-lg outline-none border-[1px] border-slate-300"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="cursor-pointer py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start mt-1  gap-2">
          <input className="login-condition" type="checkbox" required />
          <p className="text-gray-500 text-sm">
            By condituing, i agree to the terms of use & privacy policy
          </p>
        </div>
        {currState === "Login" ? (
          <p className="text-gray-500 text-sm">
            Create a new Accont?
            <span
              className="text-md font-semibold cursor-pointer  text-orange-500"
              onClick={() => setCurrState("SignUp")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an Account?
            <span
              className="text-md font-semibold cursor-pointer  text-orange-500"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

const account = () => {
  const { userInfo, dispatch, URL, token } = useContext(StoreContext);
  const url = "http://localhost:4000";
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("accountData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
           email: "",
          password: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("accountData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (userInfo.user) {
      setData({
        name: userInfo.user.name,
        email: userInfo.user.email,
        password: "",
      });
    }
  }, [userInfo.user]);

  const onHandleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${URL}/api/user/updateUser`, data, {
      headers: { token },
    });
    console.log(response.data.user);
    const updateUser = response.data.user;
    toast.success(response.data.message);

    dispatch({ type: "UPDATE_USER", payload: updateUser });
  };

  return (
    <div>
      <div className="py-4">
        <h1 className=" text-2xl text-gray-700 py-2">
          Hello,
          {userInfo.user && (
            <span className="text-orange-500 font-semibold">
              {userInfo.user.name}
            </span>
          )}
        </h1>
        <h1 className="italic text-[13px]">
          Change your profile information & password from here...
        </h1>
      </div>
      <div className="flex max-md:flex-col flex-row gap-4">
        <div className="shadow-xl border-[1px] border-gray-200 rounded-md p-3 w-1/2 max-md:w-full">
          <form
            onSubmit={handleUpdate}
            className="flex flex-col w-full"
            action=""
          >
            <label className="text-sm py-2 text-gray-800" htmlFor="">
              Profile Image<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center">
              {userInfo.user && (
                <img
                  className="w-[120px] bg-contain  "
                  src={`${url}/images/` + userInfo.user.image}
                  alt=""
                />
              )}
            </div>
            <label className="text-sm py-2 text-gray-800" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              onChange={onHandleInput}
              value={data.name}
              className="border-[1px] rounded-sm px-2 py-1 border-gray-300 text-gray-700"
              name="name"
              type="text"
              id="name"
            />

            <label className="text-sm py-2 text-gray-800" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              onChange={onHandleInput}
              value={data.email}
              className="border-[1px] rounded-sm px-2 py-1 border-gray-300 text-gray-700"
              name="email"
              type="email"
              id="email"
            />

            {/* <label className="text-sm py-2 text-gray-800" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              onChange={onHandleInput}
              value={data.password}
              className="border-[1px] rounded-sm px-2 py-1 border-gray-300 text-gray-700"
              name="password"
              type="text"
              id="password"
            /> */}
            <button
              className="bg-orange-500 w-[100px] text-white mt-4 py-2 px-1  rounded-sm flex justify-center items-center gap-2"
              type="submit"
            >
              <span className="text-sm font-normal">Update</span>{" "}
              <FaCheck className="text-[12px] " />
            </button>
          </form>
        </div>

        {/* empty */}
        <div className="shadow-xl border-[1px] border-gray-200 rounded-md p-3 w-1/2 max-md:w-full flex flex-col">
          <label
            className="text-sm py-2 text-gray-800"
            htmlFor="currentpassword"
          >
            Current Password <span className="text-red-500">*</span>
          </label>
          <input
            onChange={onHandleInput}
            value={data.password}
            className="border-[1px] rounded-sm px-2 py-1 border-gray-300 text-gray-700"
            name="password"
            type="text"
            id="password"
          />

          <label
            className="text-sm py-2 text-gray-800"
            htmlFor="currentpassword"
          >
           New Password <span className="text-red-500">*</span>
          </label>
          <input
            onChange={onHandleInput}
            value={data.password}
            className="border-[1px] rounded-sm px-2 py-1 border-gray-300 text-gray-700"
            name="password"
            type="text"
            id="password"
          />
          
          <label
            className="text-sm py-2 text-gray-800"
            htmlFor="currentpassword"
          >
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            onChange={onHandleInput}
            value={data.password}
            className="border-[1px] rounded-sm px-2 py-1 border-gray-300 text-gray-700"
            name="password"
            type="text"
            id="password"
          />
             <button
              className="bg-orange-500 w-[150px] text-white mt-4 py-2 px-2  rounded-sm flex justify-center items-center gap-2"
              type="submit"
            >
              <span className="text-sm font-normal">Update Password</span>
              <FaCheck className="text-[12px] " />
            </button>
        </div>
      </div>
    </div>
  );
};

export default account;

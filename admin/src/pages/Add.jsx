import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios';
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Shower",
  });


  const onChangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting", data);    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image",image);

    const response = await axios.post(`${url}/api/product/add`,formData);
      if(response.data.success){
          setData({
            name: "",
            description: "",
            price: "",
            category: "Shower",
          } )
          setImage(false);
        toast.success(response.data.message )
      }else{
        toast.error(response.data.message)
      }
  };
  return (
    <div className="add w-[70%] ml-[5vw] mt-14 text-sm">
      <form className="flex flex-col gap-2" onSubmit={onHandleSubmit}>
        <div className="add-img-upload flex flex-col gap-2">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-28"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            type="file"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex flex-col gap-2 w-[40%]  ">
          <p>Product name</p>
          <input
            onChange={onChangeHandle}
            value={data.name}
            className="border-[1.50px] border-gray-400 py-1 px-1  d rounded-sm"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex flex-col gap-2 w-[40%]   ">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandle}
            value={data.description}
            className="border-[1.50px] border-gray-400 py-1 px-1 rounded-sm"
            name="description"
            id=""
            rows="6"
            placeholder="Write content"
          ></textarea>
        </div>
        <div className="add-category-price flex  gap-5">
          <div className="add-category flex flex-col gap-2">
            <p>Product category</p>

            {/* Select */}
            <select
              onChange={onChangeHandle}
              value={data.category}
              className="border-[1.50px] border-gray-400 py-1 px-1 rounded-sm w-[120px] p-2"
              name="category"
            >
              <option value="Shower">Shower</option>
            </select>

          </div>
          <div className="add-price flex flex-col gap-2">
            <p>Product Price</p>
            <input
              onChange={onChangeHandle}
              value={data.price}
              className="border-[1.50px] border-gray-400 py-1 px-1 rounded-sm w-[120px] p-2"
              type="Number"
              name="price"
              placeholder="₱10000"
            />
          </div>
        </div>
        <button
          className="add-button bg-black text-white cursor-pointer p-2 w-32"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;

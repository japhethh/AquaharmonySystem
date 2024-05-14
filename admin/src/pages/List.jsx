import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const List = ({url}) => {
  const [list, setList] = useState([]);
  

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  
  const removeFood = async (foodId) => {
      const response = await axios.post(`${url}/api/product/remove`,{id:foodId});
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message)
      }else{
        toast.error("Error")
      }

  }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list flex flex-col p-10    w-full ">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title  grid grid-cols-5 gap-2 py-2 px-3 border-[1px] border-gray-400 text-sm max-md:hidden text-gray-600">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-2 px-3 border-[1px] border-gray-400 text-sm text-gray-600" key={index}>
              <img className="w-[50px]" src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor-pointer" onClick={() => removeFood(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

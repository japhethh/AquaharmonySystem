import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItems from "./FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  // console.log(food_list)

  // console.log(category);
  return (
    <div className="food-display pt-6" id="food-display ">
      <h2 className="text-[25px] font-semibold">Top dishes near you</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {food_list.map((item, index) => {
          
          if (category === "All" || category === item.category) {
            return (
              <FoodItems
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default FoodDisplay;

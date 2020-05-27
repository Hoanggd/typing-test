import React from "react";
import { useSelector } from "react-redux";

const FoodList = () =>  {
  const foods = useSelector(state => state.foods)
  const createFoodListItem = () => {
    let listItem = foods.map((item) => (
      <li onClick={() => {}}>{item.name}</li>
    ));
    return listItem;
  }

  return <ul>{createFoodListItem()}</ul>;
  
}

export default FoodList



export const selectFood = (food) => {
  console.log(`you clicked a food: ${food.name} `);
  return {
    type: "SELECT_FOOD",
    payload: food
  }
}
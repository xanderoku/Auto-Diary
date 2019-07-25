export function allCars(state = [], action) {
  switch (action.type) {
    case "GET_CARS":
      return action.payload;
    default:
      return state;
  }
}

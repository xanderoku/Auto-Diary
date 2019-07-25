export function allCars(state = [], action) {
  switch (action.type) {
    case "GET_CARS":
      // return { ...state,  ...action.payload };
      return action.payload;
    default:
      return state;
  }
}

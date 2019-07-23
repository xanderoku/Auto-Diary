const initialState = {
    loading: false,
    text: null,
    models: [],
    brand: null,
    payload: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MODELS":
        // console.log("reducer-action: ", action);
        return { ...state, models: action.models, brand: action.brand };
      case "SELECT_MODEL":
        return { ...state, model: action.payload };
      case "FETCH_SENT":
        return { loading: true };
      case "FETCH_RCVD":
        return { loading: false, text: action.payload };
      default:
        return state;
    }
}

export default reducer;
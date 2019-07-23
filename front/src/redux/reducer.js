const initialState = {
    loading: false,
    text: null,
    models: [],
    brand: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MODELS":
        // console.log("reducer-action: ", action);
        return { ...state, models: action.models, brand: action.brand };
      case "FETCH_SENT":
        return { loading: true };
      case "FETCH_RCVD":
        return { loading: false, text: action.payload };
      default:
        return state;
    }
}

export default reducer;
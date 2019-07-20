const initialState = {
    loading: false,
    text: null,
    models: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MODELS":
            console.log(action.payload);
            return { ...state, models: action.payload }
        case "FETCH_SENT":
            return { loading: true };
        case "FETCH_RCVD":
            return { loading: false, text: action.payload };
        default:
            return state;
    }
}

export default reducer;
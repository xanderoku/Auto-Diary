const initialState = {
    loading: false,
    text: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SENT":
            return { loading: true };
        case "FETCH_RCVD":
            return { loading: false, text: action.payload };
        default:
            return state;
    }
}

export default reducer;
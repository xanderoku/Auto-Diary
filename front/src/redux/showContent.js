export function showContent (state='cars', action){
    // console.log(action)
    switch (action.type){
        case 'CHANGE_CONTENT':
            return action.payload;
        default:
            return state;
    }
}
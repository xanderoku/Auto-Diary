export function showCar (state='oneCarMain', action){
    // console.log(action)
    switch (action.type){
        case 'SHOW_CAR':
            return action.payload;
        default:
            return state;
    }
}
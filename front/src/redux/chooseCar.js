export function chooseCar (state=false, action){
    switch (action.type){
        case 'CHOOSE_CAR':
            return action.payload;
        default:
            return state;
    }
}
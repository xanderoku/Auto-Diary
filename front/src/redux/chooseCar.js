export function chooseCar (state=[], action){
    switch (action.type){
        case 'CHOOSE_CAR':
            return action.payload;
        default:
            return state;
    }
}
import { combineReducers } from 'redux';
import reducer from './reducer'
import { showCar } from './showCar'
import { chooseCar } from './chooseCar';
import { showContent } from './showContent';
import { allCars } from './getAllCars';
 
const rootReducer = combineReducers({
  showCar,
  reducer,
  chooseCar,
  showContent,
  allCars
});

export default rootReducer;
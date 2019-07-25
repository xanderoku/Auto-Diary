import { combineReducers } from 'redux';
import reducer from './reducer'
import { showCar } from './showCar'
import { chooseCar } from './chooseCar';
import { showContent } from './showContent';

const rootReducer = combineReducers({
  showCar,
  reducer,
  chooseCar,
  showContent
  
});

export default rootReducer;
import { combineReducers } from 'redux';
import reducer from './reducer'
import { showCar } from './showCar'

const rootReducer = combineReducers({
  showCar,
  reducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import moneyReducer from './moneyReducer';

// combineReducers: 여러 개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  balance: moneyReducer,
});

export default rootReducer;

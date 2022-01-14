import { combineReducers } from "redux";
import paymentReducer from './payment.reducer';

const createRootReducer = () =>
  combineReducers({
    payment: paymentReducer
  });

export default createRootReducer;
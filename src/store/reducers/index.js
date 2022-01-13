import { combineReducers } from "redux";
import appReducer from "./app.reducer";

// import paymentReducer from './payment';

const createRootReducer = (his) =>
  combineReducers({
    app: appReducer,
  });

export default createRootReducer;
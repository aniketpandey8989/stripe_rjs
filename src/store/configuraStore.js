import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(), // root reducer with router state
    preloadedState,
    // composeEnhancers
    composeEnhancers(
      applyMiddleware(...middlewares)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}

const store = configureStore(/* provide initial state if any */);

export { store };

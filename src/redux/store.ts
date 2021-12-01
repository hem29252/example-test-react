import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

/**
 * applyMiddleware(thunk) = promise
 */
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

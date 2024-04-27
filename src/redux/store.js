import { applyMiddleware, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";


const store=createStore(ProductReducer,applyMiddleware(logger))
export default store
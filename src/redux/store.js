import { applyMiddleware, combineReducers, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import cakeReducer from "./cake/cakeReducer";


const reducer=combineReducers({
    products:ProductReducer,
    cake:cakeReducer
})


const store=createStore(reducer,applyMiddleware(thunk,logger))
export default store
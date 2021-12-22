import { combineReducers } from "redux";
import { radioReducer } from "./radioReducer";



export const rootReducer = combineReducers({
    radio: radioReducer,

});
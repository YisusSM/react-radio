import { combineReducers } from "redux";
import { radioReducer } from "./radioReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    radio: radioReducer,
    ui:uiReducer,

});
import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messagesReducer";
import { radioReducer } from "./radioReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    radio: radioReducer,
    ui: uiReducer,
    msg: messagesReducer,
    auth:authReducer

});
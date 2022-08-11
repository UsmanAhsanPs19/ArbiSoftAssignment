import { combineReducers } from "redux";
import {reducre as userReducer} from "./user/reducres";

export const reducre = combineReducers({
    user: userReducer
});
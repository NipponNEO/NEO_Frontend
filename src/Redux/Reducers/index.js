import { combineReducers } from "redux";
import { LeadsReducer } from "./LeadsReducer";

export const reducer = combineReducers({
    allLeads: LeadsReducer
})
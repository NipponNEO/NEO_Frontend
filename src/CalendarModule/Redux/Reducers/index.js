import { combineReducers } from "redux";
import { schedulerReducer } from "./SchedulerReducer";

export const reducer = combineReducers({
   Scheduler: schedulerReducer
})
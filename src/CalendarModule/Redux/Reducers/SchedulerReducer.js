import { schedulerConstant } from "../Constants/SchedulerConstant";

const initialState={
    date:null
}

export const schedulerReducer =(state={initialState},{type,payload})=>{
   switch (type) {
       case schedulerConstant.DISPLAY_DATE:
           console.log(payload)
           return state.date, payload
           break;
   
       default:
           return state
           break;
   }
}
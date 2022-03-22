import { schedulerConstant } from "../Constants/SchedulerConstant"

export const DateCustomDialog =(data)=>{
    console.log("dataAction" ,data)
    return{
        type: schedulerConstant.DISPLAY_DATE,
        payload: data,
    }
}
import { leadsConstant } from "../Constants/LeadsConstant"
export const setLeads = (leads)=>{
  return{
      type: leadsConstant.SET_LEADS,
      payload: leads
  }
}



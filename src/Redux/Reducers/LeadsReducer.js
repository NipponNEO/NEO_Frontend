
import { leadsConstant } from './../Constants/LeadsConstant';



const initialState = {
    leads:[],
    

    
}

export const LeadsReducer = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case leadsConstant.SET_LEADS:
            return { ...state }, payload
            break;

       
    

        default:
            return state
            break;
    }
}

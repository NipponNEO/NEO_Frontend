import * as React from "react";
import { DatePicker } from "@progress/kendo-react-dateinputs";

const  Datepicker = () => {

  const value = new Date();
  return <div >
          <div style={{display:'flex',marginLeft:20,marginTop:10}}>
            <p>Date :</p>
            <DatePicker defaultValue={value} format="dd/MMM/yyyy" weekNumber={true} width={150}/>
          </div>
        </div>

};
export default Datepicker

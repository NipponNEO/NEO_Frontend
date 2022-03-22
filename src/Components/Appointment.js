import * as React from "react";
import Datepicker from "../Components/Date";
import { Input } from "@progress/kendo-react-inputs";

const Appointment = () => {
  return (
    <div style={{borderStyle:"solid",borderWidth:"1px",margin:"20px"}}>
      <div className="row">
        <div className="col-6 mb-2">
          <Datepicker />
        </div>

        <div className="col-6 ">
          <label style={{ marginTop: 20 }}>Assigned to SO</label>
        </div>
        <div className="col-3 mb-2">
          <label className="mb-0" style={{ marginLeft: "5%" }}>
            Time:
          </label>
          {/* <Combo /> */}
          <Input style={{ width: "100px", marginLeft: "3%" }} />
          {/* <label>am</label> */}
        </div>
        <div className="col-3 mb-2">
          <span class="k-icon k-i-arrow-right" style={{ fontSize: 30 }}></span>
        </div>
        <div className="col-3 ">
          <label> SO1 - Gowtham</label>
        </div>
        <div className="col-6 mb-2">
          <label className="mb-0" style={{ marginLeft: "3%" }}>
            Slot:
          </label>
          <Input style={{ width: "50px", marginLeft: "2%" }} />
        </div>
      </div>
    </div>
  );
};
export default Appointment;

import * as React from "react";
import { Checkbox, Input } from "@progress/kendo-react-inputs";

const SiteSummary = () => {
  return (
    <div style={{borderStyle
    :"solid",borderWidth:"1px",margin:"20px"}}>
    <div style={{ marginTop: 10 }}>
      <div className="row">
        <div className="col-3 mb-2">
          <label style={{ marginLeft: 10 }}>Initial Requirement: </label>
        </div>

        <div className="col-3 ">
          <Checkbox defaultChecked={true} label={"Interior"} contentEditable={false} />
        </div>
        {/* <div className="col-2 ">
          <Checkbox value={null} label={"Exterior"} />
        </div> */}
        <div className="col-3 ">
          <label>Rooms:</label>
          <Input style={{ width: "100px", marginLeft: "3%" }} />
        </div>
        </div>
        <div className="row">
        <div className="col-3 ">
          <label  style={{ marginLeft: 10 }}> Selected Interior :</label>
        </div>

        <div className="col-2 ">
          <label>Bedroom</label>
        </div>
        <div className="col-2 ">
          <label>KitchenRoom</label>
        </div>
        <div className="col-2 ">
          <label>BathRoom</label>
        </div>
      </div>
    </div>
    </div>
  );
};
export default SiteSummary;

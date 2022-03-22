import { Button, DropDownButton } from "@progress/kendo-react-buttons";
import React from "react";
import "./ChunkProgress.css";



const ChunkProgress = () => {

  return (

    <div className="chunkContainer"> 
             <div className="previous-btn previous"><span ><Button className="leftright-button" size="large" fillMode="flat"><span className="k-icon k-i-arrow-chevron-left"></span></Button></span></div>
    <div className="wrapper"> 
    <div className="arrow-steps clearfix">
             <div className="step current first"> <span> <Button className="span-button" fillMode="flat"> Customer Details</Button></span> </div>
              <div className="step "> <span> <Button className="span-button" fillMode="flat">HL Site Summary</Button></span> </div>
              <div className="step"> <span><Button className="span-button" fillMode="flat">Damage Assessment</Button></span> </div>
              <div className="step"> <span><Button className="span-button" fillMode="flat">Site Summary</Button></span> </div>
              <div className="step"> <span><Button className="span-button" fillMode="flat">Package Summary</Button></span> </div>
              <div className="step"> <span> <DropDownButton  text=" Dropdown" className="span-button"  items={["some","item"]}  fillMode={"flat"} /> </span> </div>
              <div className="step"> <span><Button className="span-button" fillMode="flat">Site Summary</Button></span> </div>
              <div className="step"> <span><Button className="span-button" fillMode="flat">Site Summary</Button></span> </div>
              <div className="step last"> <span> Step 3</span> </div>
   </div>
    </div>
              <div className="next"><span><Button className="leftright-button" size="large" fillMode="flat"><span className="k-icon k-i-arrow-chevron-right"></span></Button></span></div>
    </div>
    
  );
};

export default ChunkProgress;

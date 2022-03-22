import React, { useEffect, useState } from "react";
import { Card, PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import Username from "../Components/UserName";
import MobileNum from "../Components/MobileNo";
import Email from "../Components/Email";
import { FaHome, FaLocationArrow } from "react-icons/fa";
import { Input } from "@progress/kendo-react-inputs";
import axios from "axios";
const GD = () => {

  const [gdapi, setGdapi] = useState({})

    useEffect(async ()=>{
     await axios.get("https://mocki.io/v1/e093d921-f8a2-46d9-842c-8fbe59e4f146")
      .then(res => setGdapi(res.data))
      
      .catch(err=> console.log(err))
    },[])
    console.log(gdapi)
    
  return (
    <div style={{borderStyle:'solid',borderWidth:'1px',margin:"20px"}}>
      <div >
        {/* <img src={imageUrl("andrew")} alt="Andrew Fuller" /> */}

        <span className="mate-info" >
          <h2 style={{ textAlign: "center",marginLeft:'14%' }}>Requirement</h2>
          <p style={{ textAlign: "center", marginBottom: "4px",marginLeft:'11%' }}>
            Surface to be Painted
          </p>
        </span>
        <div className="test" style={{ padding: "1.5rem" }}>
          <div className="row">
            <div className="col-6 mb-2">
              <Username value={gdapi.userName} />
            </div>

            <div className="col-3">
              <span style={{ fontSize: "14px" }}>
                <FaHome style={{ height: "1.5rem", width: "1.5rem" }} />{" "}
                Interior
              </span>
            </div>

            {/* <div className="col-3 d-flex align-items-center">
          <span style={{ fontSize: "14px" }}><FaHome style={{ height:"1.5rem", width: "1.5rem",fontWeight:'lighter' }} /> Exterior</span>
        </div> */}

            <div className="col-6 mb-2">
              <MobileNum value={gdapi.mobile} />
            </div>

            <div className="col-3">
              <label className="mb-0">Building Type</label>
            </div>

            <div className="col-3 ">
              <label>Villa</label>
            </div>

            <div className="col-6 mb-2">
              <Email value={gdapi.email} />
            </div>

            <div className="col-3 ">
              <label className="mb-0">Occupancy Status</label>
            </div>

            <div className="col-3 ">
              <label className="mb-0">Vacant</label>
            </div>

            <div className="col-6 mb-2">
              <label className="mb-0" style={{ display: "flex" }}>
                Preferred Mode of Contact
              </label>
              {/* <Combo /> */}
              <Input value="SMS" style={{ width: "300px" }} />
            </div>

            <div className="col-3 ">
              <label className="mb-0">Property Size</label>
            </div>

            <div className="col-3 ">
              <label className="mb-0">3BHK</label>
            </div>

            <div className="col-6"></div>

            <div className="col-3">
              <label className="mb-0">Expected to Paint</label>
            </div>

            <div className="col-3">
              <label className="mb-0">Immediate</label>
            </div>
          </div>
        </div>
      </div>
      <div>
          <div style={{ display: "flex" }}>
         <span style={{ fontSize: 15,marginLeft:15 }}>
           <FaLocationArrow />
         </span>
         <h6 style={{marginLeft:5,fontSize:"18px"}}>Location</h6>
       </div>  
       <div style={{marginLeft:30,fontSize:"16px"}}>Address : Vivekanandha St, Whites Road, Chennai 600012</div>
       <div style={{marginLeft:30,fontSize:"16px",marginTop:3}}>City : Chennai </div>
       <div style={{marginLeft:30,fontSize:"16px",marginTop:3}}>State : Tamil Nadu </div>
       <div style={{marginLeft:30,fontSize:"16px",marginTop:3}}>Country : India </div>
       <div style={{marginLeft:30,fontSize:"16px",marginTop:3}}>Pincode : 600012 </div>
       
       </div>
    </div>
  );
};
export default GD;

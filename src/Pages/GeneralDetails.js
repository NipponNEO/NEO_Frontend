import React, { useEffect, useState } from "react";
import { Card, PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import Username from "../Components/UserName";
import MobileNum from "../Components/MobileNo";
import Email from "../Components/Email";
import Combo from "../Components/ComboBox";
import Datepicker from "../Components/Date";
import { Input } from "@progress/kendo-react-inputs";
import { FaHome, FaPhone, FaLocationArrow } from "react-icons/fa";
import axios from "axios";

function GeneralDetails() {
  useEffect(async () => {
    await axios
      .get("url")
      .then((res) => {
        res.JSON();
      })
      .then((res) => {
        setValue(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [value, setValue] = useState([]);
  console.log(value);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ fontWeight: "bolder", marginLeft: "5%" }}>Mohamed ijaz</p>
        <div style={{ display: "flex", marginLeft: "15%" }}>
          <p>#6,12th cross street, Dhandeeswaram, Velachery, Chennai</p>
        </div>
        <div style={{ marginLeft: "20%" }}>
          <p>ijas@nippon.com</p>
          <div style={{ display: "flex" }}>
            <span style={{ fontSize: 15 }}>
              <FaPhone />
            </span>
            <p style={{ marginLeft: "5%" }}>9949971921</p>
          </div>
        </div>
      </div>
      <PanelBar>
        <PanelBarItem expanded={true} title="General Details">
          <div>
            <div>
              {/* <img src={imageUrl("andrew")} alt="Andrew Fuller" /> */}

              <span className="mate-info">
                <h2 style={{ textAlign: "center" }}>Requirement</h2>
                <p style={{ textAlign: "center", marginBottom: "4px" }}>
                  Surface to be Painted
                </p>
              </span>

              <div className="test" style={{ padding: "1.5rem" }}>
                <div className="row">
                  <div className="col-6 mb-2">
                    <Username value="ijazz" />
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <span style={{ fontSize: "14px" }}>
                      <FaHome style={{ height: "1.5rem", width: "1.5rem" }} />{" "}
                      Interior
                    </span>
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <span style={{ fontSize: "14px" }}>
                      <FaHome style={{ height: "1.5rem", width: "1.5rem" }} />{" "}
                      Exterior
                    </span>
                  </div>

                  <div className="col-6 mb-2">
                    <MobileNum value="9944971604" />
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">Building Type</label>
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label>Villa</label>
                  </div>

                  <div className="col-6 mb-2">
                    <Email value="ijas@ideassion.com" />
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">Occupancy Status</label>
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">Vacant</label>
                  </div>

                  <div className="col-6 mb-2">
                    <label className="mb-0">Preferred Mode of Contact</label>
                    <Combo />
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">Property Size</label>
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">3BHK</label>
                  </div>

                  <div className="col-6"></div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">Expected to Paint</label>
                  </div>

                  <div className="col-3 d-flex align-items-center">
                    <label className="mb-0">Immediate</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div style={{ display: "flex" }}>
         <span style={{ fontSize: 15,marginLeft:15 }}>
           <FaLocationArrow />
         </span>
         <p style={{marginLeft:5 }}>Location</p>
       </div>  
       <div style={{ display: "flex",marginLeft:25 }}>
        <p>Address :</p>
        <p style={{marginLeft:20 }}>#6 Vivekananda St, WhitesRoad, Chennai 600002</p>
      </div> 
      <div style={{ display: "flex",marginLeft:45 }}>
         <p>City :</p>
         <p style={{marginLeft:20 }}>Chennai</p>
     </div>
       <div style={{ display: "flex",marginLeft:35 }}>
         <p>State :</p>
         <p style={{marginLeft:20 }}>Tamil Nadu</p>
      </div>
      <div style={{ display: "flex",marginLeft:15 }}>
         <p>Country :</p>
        <p style={{marginLeft:20 }}>INDIA</p>
       </div>
       <div style={{ display: "flex",marginLeft:14 }}>
        <p>Pin Code:</p>
        <p style={{marginLeft:20 }}>600002</p>
       </div>     
       </div>
        </PanelBarItem>
      </PanelBar>
    </div>
  );
}

export default GeneralDetails;
// <div>
//   <div style={{ display: "flex" }}>
//     <p style={{ fontWeight: "bolder", marginLeft: "5%" }}>Mohamed ijaz</p>
//     <div style={{ display: "flex", marginLeft: "15%" }}>
//       <p>#6,12th cross street, Dhandeeswaram, Velachery, Chennai</p>
//     </div>
//     <div style={{ marginLeft: "20%" }}>
//       <p>ijas@nippon.com</p>
//       <div style={{ display: "flex" }}>
//         <span style={{ fontSize: 15 }}>
//           <FaPhone />
//         </span>
//         <p style={{ marginLeft: "5%" }}>9949971921</p>
//       </div>
//     </div>
//   </div>
//   <Card style={{ borderColor: "#000", borderRadius: 0 }}>
//     <div style={{ marginLeft: "2%" }}>
//       <p style={{ fontWeight: "bolder" }}>General Details</p>
//       <div style={{ display: "flex" }}>
//         <Username value="ijazz" />
//         <div style={{ marginLeft: "40%" }}>
//           <h5>Requirement</h5>
//           <div style={{ display: "flex" }}>
//             <span style={{ fontSize: 20 }}>
//               <FaHome />
//             </span>
//             <p
//               style={{
//                 marginLeft: "5%",
//                 fontWeight: "bolder",
//                 marginTop: 7,
//               }}
//             >
//               Interior
//             </p>
//           </div>
//         </div>
//       </div>
//       <div style={{ display: "flex" }}>
//         <MobileNum value='9944971607' />
//         <div style={{ marginLeft: "40%" }}>
//           {/* <p>Email Id</p> */}
//           <Email value='ijas@ideassion.com' />
//         </div>
//       </div>
//     </div>
//   </Card>
//   <Card
//     style={{
//       borderColor: "#000",
//       borderRadius: 0,
//       backgroundColor: "lightgrey",
//       marginTop: "2%",
//     }}
//   >
//     <div style={{ marginLeft: "5%" }}>
//       <p style={{ fontWeight: "bolder" }}>Appointment : </p>
//       <div>
//         <div style={{ display: "flex" }}>
//           <Datepicker />
//           <span
//             class="k-icon k-i-arrow-right"
//             style={{ marginLeft: "20%", fontSize: 40 }}
//           ></span>
//           <p style={{ marginLeft: "22%", fontWeight: "bolder" }}>
//             Assigned to SO
//           </p>
//         </div>
//         <p style={{ marginLeft: "61%" }}>SO1 - Gowtham</p>

//         <div style={{ display: "flex", marginTop: "2%" }}>
//           <p>Time :</p>
//           <div style={{ display: "flex" }}>
//             <Input
//               style={{
//                 width: 50,
//                 height: 30,
//                 marginLeft: 10,
//               }}
//             />
//             <p>am</p>
//           </div>
//         </div>
//         <div style={{ display: "flex", marginTop: "2%" }}>
//           <p>Slot :</p>
//           <Input
//             style={{
//               width: 30,
//               height: 30,
//               marginLeft: 10,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   </Card>
//   <Card
//     style={{
//       borderColor: "#000",
//       borderRadius: 0,
//       backgroundColor: "lightgrey",
//       marginTop: "2%",
//     }}
//   >
//     <div style={{ marginLeft: "5%", marginTop: 10 }}>
//       <div style={{ display: "flex" }}>
//         <span style={{ fontSize: 15 }}>
//           <FaLocationArrow />
//         </span>
//         <p style={{ fontWeight: "bolder", marginLeft: 5 }}>Location</p>
//       </div>
//       <div style={{ display: "flex" }}>
//         <p>Address :</p>
//         <p>#6 Vivekananda St, WhitesRoad, Chennai 600002</p>
//       </div>
//       <div style={{ display: "flex" }}>
//         <p>City :</p>
//         <p>Chennai</p>
//       </div>
//       <div style={{ display: "flex" }}>
//         <p>State :</p>
//         <p>Tamil Nadu</p>
//       </div>
//       <div style={{ display: "flex" }}>
//         <p>Country :</p>
//         <p>INDIA</p>
//       </div>
//       <div style={{ display: "flex" }}>
//         <p>Pin Code:</p>
//         <p>600002</p>
//       </div>
//     </div>
//   </Card>
//   <button
//     style={{
//       width: 135,
//       marginLeft: "79%",
//       height: 50,
//       marginTop: 10,
//       color: "#fff",
//       backgroundColor: "green",
//       borderRadius: 10,
//     }}
//   >
//     Save & Continue
//   </button>
//   {/* <Footer/> */}
// </div>

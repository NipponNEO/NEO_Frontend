import { Card } from "@progress/kendo-react-layout";
import * as React from "react";
import {
  FaBed,
  FaWindows,
  FaSquareFull,
  FaRegClone,
  FaBurn,
  FaRegObjectGroup,
  FaIcicles,
  FaBath,
  FaUtensilSpoon
} from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
const SiteAsessment = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ fontSize: 30, marginLeft: "43%" }}>
          <FaBed />
        </div>
        <button style={{ fontSize: 30 }}>Bedroom 1</button>
      </div>
      <Card style={{borderRadius:0,backgroundColor:'#fff',padding:'1rem',borderColor:'black',width:'90%',marginLeft:'4%'}}>
      <div style={{marginLeft:'20%' }}>
        <div className="row">
          <div className="col-6">
            <label>Alpha</label>
            <Card style={{ width: "50%", borderRadius: 0, padding: "1rem",borderColor:'black' }}>
              <div className="row">
                <div className="col-6 mb-2 ">
                  <FaRegClone /> 35sqft
                </div>
                <div className="col-6 mb-2">
                  <FaWindows /> 35sqft
                </div>
                <div className="col-6">
                  <FaRegObjectGroup /> 35sqft
                </div>
                <div className="col-6">
                  <FaSquareFull /> 35sqft
                </div>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <label>Beta</label>
            <Card style={{ width: "50%", borderRadius: 0, padding: "1rem",borderColor:'black' }}>
              <div className="row">
                <div className="col-6 mb-2">
                  <FaRegClone /> 35sqft
                </div>
                <div className="col-6 mb-2">
                  <FaWindows /> 35sqft
                </div>
                <div className="col-6">
                  <FaRegObjectGroup /> 35sqft
                </div>
                <div className="col-6">
                  <FaSquareFull /> 35sqft
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: '20%' }}>
        <p style={{ color: "blue" }}>
          <FaBurn />
        </p>
        <p>Water Proofing Required </p>
      </div>
      <div style={{ display: "flex", marginLeft: '20%' }}>
        <p>
          <FaIcicles />
        </p>
        <p>Special Treatment Required </p>
      </div>
      <div className="card-border" style={{marginLeft: '20%'  }}>
        <div className="row">
          <div className="col-6">
            <label>Gamma</label>
            <Card style={{ width: "50%", borderRadius: 0, padding: "1rem",borderColor:'black' }}>
              <div className="row">
                <div className="col-6 mb-2 ">
                  <FaRegClone /> 35sqft
                </div>
                <div className="col-6 mb-2">
                  <FaWindows /> 35sqft
                </div>
                <div className="col-6">
                  <FaRegObjectGroup /> 35sqft
                </div>
                <div className="col-6">
                  <FaSquareFull /> 35sqft
                </div>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <label>Ceiling</label>
            <Card style={{ width: "50%", borderRadius: 0, padding: "1rem",borderColor:'black' }}>
              <div className="row">
                <div className="col-6 mb-2">
                  <FaRegClone /> 35sqft
                </div>
                <div className="col-6 mb-2">
                  <FaWindows /> 35sqft
                </div>
                <div className="col-6">
                  <FaRegObjectGroup /> 35sqft
                </div>
                <div className="col-6">
                  <FaSquareFull /> 35sqft
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </Card>
      <div className="row">
        <Card style={{width:'17%',marginLeft:'23%',borderRadius:0,marginTop:10,borderColor:'black',padding:'1rem'}}>
        <div className="col-6">
                  <GrCafeteria/>Kitchen
                </div>
        </Card>
        <Card style={{width:'17%',marginLeft:'18.5%',borderRadius:0,marginTop:10,borderColor:'black',padding:'1rem'}}>
        <div className="col-6">
                  <FaBath/>BathRoom
                </div>
        </Card>
      </div>
    </div>
  );
};
export default SiteAsessment;

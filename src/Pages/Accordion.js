import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { FaPhone } from "react-icons/fa";
import GD from "../Components/GD";
import Appointment from "../Components/Appointment";
import SiteSummary from "../Components/SiteSummary";
import SiteAsessment from "../Components/SiteAsessment";
import EstimateView from "../Pages/Estimate";
import Payment from "../Components/Payment";
import SiteClosure from "./../Components/SiteClosure";
import Workorder from "../Components/Workorder";
import DailyUpdation from "../Components/DailyUpdation";
import ChunkProgress from "../Components/ChunkProgress";
import Billing from "../Components/Billing";
const Accord = () => {
  return (
    <div style={{backgroundColor:'grey'}}>
      <div style={{ display: "flex",borderStyle:"solid",borderWidth:"1px"}}>
        <p style={{ fontWeight: "bolder", marginLeft: "5%",marginTop:10}}>Mohamed ijaz</p>
        <div style={{ display: "flex", marginLeft: "15%",marginTop:10}}>
          <p>#6,12th cross street, Dhandeeswaram, Velachery, Chennai</p>
        </div>
        <div style={{ marginLeft: "20%",marginTop:10 }}>
          <p>ijas@nippon.com</p>
          <div style={{ display: "flex" }}>
            <span style={{ fontSize: 15 }}>
              <FaPhone />
            </span>
            <p style={{ marginLeft: "5%" }}>9949971921</p>
          </div>
        </div>
      </div>
      <ChunkProgress/>
      <div>
        <h6 style={{marginBottom:20,marginTop:10}}>Activity History</h6>
      </div>
      <div style={{marginTop:-10,flex:1,justifyContent:'flex-start',alignItems:'flex-start',padding:20}}>
       <div style={{backgroundColor:'white',marginBottom:5,borderRadius:10,padding:40}}>
           <div style={{shadowColor:'#000',shadowOffset:{width:1,height:6},shadowOpacity:0.37,shadowRadius:4.49,elevation:7}}>
        <PanelBar>
          <PanelBarItem title="General Details">
            <GD />
          </PanelBarItem>
          <PanelBarItem title="Appointment">
            <Appointment />
          </PanelBarItem>
          <PanelBarItem title="Site Summary">
            <SiteSummary />
          </PanelBarItem>
          <PanelBarItem title="Site Assessment">
            <SiteAsessment />
          </PanelBarItem>

          <PanelBarItem title="Estimate">
            <EstimateView />
          </PanelBarItem>

          <PanelBarItem title="Payment">
            <Payment />
          </PanelBarItem>
          <PanelBarItem title="Billing">
           <Billing/>
          </PanelBarItem>

          <PanelBarItem title="Work Order">
            <Workorder />
          </PanelBarItem>

          <PanelBarItem title={'Site-Progress'}>
          <DailyUpdation/>
          </PanelBarItem>

          <PanelBarItem title="Site-Closure">
            <SiteClosure />
          </PanelBarItem>
        </PanelBar>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Accord;
{
  /* <PanelBarItem title={ [<p style={{display:'inline-block'}}>GeneralDetails</p>,<p  style={{display:'inline-block'}}> hi </p>]}> */
}
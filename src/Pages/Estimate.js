import { CardBody,Card, PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import React from "react";
import { DateInput } from "@progress/kendo-react-dateinputs";
import { Input } from "@progress/kendo-react-inputs";


const bedroomdata =
[{
    "Surface" : "Alpha",
    "PrimaryPackage" : "Neo Luxe",
    "ShadeName" : "Acid Lime",
    "Size" : "100",
    "Rate" :"40",
    "TotalCost": "4000"
},
{
  "Surface" : "Beta",
    "PrimaryPackage" : "Neo Luxe",
    "ShadeName" : "Acid Lime",
    "Size" : "100",
    "Rate" :"40",
    "TotalCost": "4000"
},
{
  "Surface" : "Gamma",
  "PrimaryPackage" : "Neo Luxe",
  "ShadeName" : "Acid Lime",
  "Size" : "100",
  "Rate" :"40",
  "TotalCost": "4000"
},{
"Surface" : "Ceiling",
    "PrimaryPackage" : "Neo Luxe",
    "ShadeName" : "Acid Lime",
    "Size" : "100",
    "Rate" :"40",
    "TotalCost": "4000"
}
]


const bathroomdata =
[{
    "Surface" : "Alpha",
    "PrimaryPackage" : "Neo Luxe",
    "ShadeName" : "Acid Lime",
    "Size" : "100",
    "Rate" :"40",
    "TotalCost": "4000"
}
]

const summarydata =
[{
    "RoomName" : "Bedroom",
    "Printable" : "260",
    "totaCost" : "21200.00"
},
{
  "RoomName" : "Bathroom",
  "Printable" : "110",
  "totaCost" : "4000.00"
},
{
  "RoomName" : "Kitchen",
  "Printable" : "100",
  "totaCost" : "4000.00"
},
{
  "RoomName" : "Damage Repair",
  "Printable" : "025",
  "totaCost" : "250.00"
},
{
  "RoomName" : "Total",
  "Printable" : "485",
  "totaCost" : "29450.00"
},
]






const Fromvalue =  new Date(2022, 2, 20);
const Tovalue =  new Date(2022, 3, 15);

const EstimateView = () => {
    return(
        <div>
            <div className="panelbar-wrapper">
 
        
              <div style={{margin:20, borderStyle:"solid", borderWidth:"1px", padding:10}}>
            <h6 style={{fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"10px"}}>Estimate</h6>
            <div style={{display:"flex",marginLeft:5}}>
            <DateInput label="Valid From" format="dd-MMM-yyyy" value={Fromvalue}  width="30%"/>
            <DateInput label="Valid To" format="dd-MMM-yyyy"  value={Tovalue}  width="30%" />
            <h6 style={{marginLeft:"20%"}}>Estimate No<Input style={{marginTop:2}} placeholder="12345" width="40%"/></h6>
            <h6 style={{marginTop:25,marginLeft:10}}>01/03/2022</h6>
           
            </div>
            <hr></hr>
            <Card style={{backgroundColor:"#E1F0F7",fontSize:"15px",fontWeight:"bold"}}>Interior - Bedroom1</Card>
           {/* Table */}
           <table class="table table-bordered" >
  <tbody>
  <tr>
      <th scope="col">Surface</th>
      <th scope="col" style={{textAlign:"center"}}>Primary Package</th>
      <th scope="col" style={{textAlign:"center"}}>Shade Name</th>
      <th scope="col" style={{textAlign:"center"}}>Size (Sq)</th>
      <th scope="col" style={{textAlign:"center"}}>Rate per (Sq)</th>
      <th scope="col"  style={{textAlign:'right'}}>Total Cost</th>
    </tr>
   {bedroomdata.map((data)=>{
     console.log(data)
      return (
        <tr>
          <td>{data.Surface}</td>
          <td style={{textAlign:"center"}}>{data.PrimaryPackage}</td>
          <td style={{textAlign:"center"}}>{data.ShadeName}</td>
          <td style={{textAlign:"center"}}>{data.Size}</td>
          <td style={{textAlign:"center"}}>{data.Rate}</td>
          <td  style={{textAlign:'right'}}>{data.TotalCost}</td>
          </tr>
      )
   })}
    <tr>
      <td colSpan={3}></td>
      <td style={{backgroundColor:"#EFF0EE",fontWeight:"bold",textAlign:"right"}}> Bedroom1</td>
      <td style={{backgroundColor:"#EFF0EE",fontWeight:"bold",textAlign:"right"}}>Cost</td>
      <td  style={{fontWeight:"bold",textAlign:'right'}}>16000</td>
    </tr> 
  </tbody>
</table>
<Card style={{backgroundColor:"#E1F0F7",fontSize:"15px",fontWeight:"bold"}}>Bathroom</Card>
{/* Table */}
<table class="table table-bordered" >
  <tbody>
  <tr>
      <th scope="col">Surface</th>
      <th scope="col" style={{textAlign:"center"}}>Primary Package</th>
      <th scope="col" style={{textAlign:"center"}}>Shade Name</th>
      <th scope="col" style={{textAlign:"center"}}>Size (Sq)</th>
      <th scope="col" style={{textAlign:"center"}}>Rate per (Sq)</th>
      <th scope="col"  style={{textAlign:'right'}}>Total Cost</th>
    </tr>
   {bathroomdata.map((data)=>{
     console.log(data)
      return (
        <tr>
          <td>{data.Surface}</td>
          <td style={{textAlign:"center"}}>{data.PrimaryPackage}</td>
          <td style={{textAlign:"center"}}>{data.ShadeName}</td>
          <td style={{textAlign:"center"}}>{data.Size}</td>
          <td style={{textAlign:"center"}}>{data.Rate}</td>
          <td  style={{textAlign:'right'}}>{data.TotalCost}</td>
          </tr>
      )
   })}
    <tr>
      <td colSpan={3}></td>
      <td style={{backgroundColor:"#EFF0EE",fontWeight:"bold",textAlign:"right"}}>Bathroom</td>
      <td style={{backgroundColor:"#EFF0EE",fontWeight:"bold",textAlign:"right"}}>Cost</td>
      <td  style={{fontWeight:"bold",textAlign:'right'}}>16000</td>
    </tr> 
  </tbody>
</table>

<Card style={{backgroundColor:"#E1F0F7",fontSize:"15px",fontWeight:"bold",marginTop:20}}>Applied Offers</Card>
<div style={{marginTop:"20px",display:"flex"}}>
           <Card style={{height:'100%',backgroundColor:"#D1F0C8",width:"100%",color:"black",display:"flex",alignItems:"center", justifyContent:"center"}}>
           <CardBody >
        <h6>Neo Smart Satin</h6>
        <Card style={{backgroundColor:"white",display:"flex",alignItems:"center", justifyContent:"center",fontSize:"20PX"}}>15%</Card>
           </CardBody>
           </Card>
        </div>

        <Card style={{backgroundColor:"#E1F0F7",fontSize:"15px",fontWeight:"bold",marginTop:20}}>Cost Summary</Card>
        <table class="table table-bordered" >
  <tbody>
  <tr>
      <th scope="col">Room Name</th>
      <th scope="col" style={{textAlign:"center"}}>Printable (sqft)</th>
      <th scope="col"  style={{textAlign:'right'}}>Total Cost (RS)</th>
    </tr>
   {summarydata.map((data)=>{
     console.log(data)
      return (
        <tr>
          <td>{data.RoomName}</td>
          <td style={{textAlign:"center"}}>{data.Printable}</td>
          <td  style={{textAlign:'right'}}>{data.totaCost}</td>
          </tr>
      )
   })}
    <tr>
      <td colspan="2" style={{fontWeight:"bold"}}>Discount - Neo Luxe offer 15% off *</td>
      <td style={{fontWeight:"bold",textAlign:'right'}}>Rs 4417.50</td>
      </tr>
      <tr>
      <td colspan="2" style={{fontWeight:"bold"}}>Total Amount</td>
      <td style={{fontWeight:"bold",textAlign:'right'}}>Rs 25,032.05</td>
    </tr> 
    <tr>
      <td colspan="2" style={{fontWeight:"bold"}}>GST 18% </td>
      <td style={{fontWeight:"bold",textAlign:'right'}}>Rs 4505.08</td>
    </tr> 
    <tr>
      <td colspan="2" style={{fontWeight:"bold"}}>Total Payable Amount </td>
      <td style={{fontWeight:"bold",textAlign:'right'}}>Rs 25,032.05</td>
    </tr> 
    <tr>
      <td colspan="2" style={{fontWeight:"bold"}}>Additional x% discount</td>
      <td style={{fontWeight:"bold",textAlign:'right'}}>Rs 1026.00</td>
    </tr> 
    <tr>
      <td colspan="2" style={{backgroundColor:"#EFF0EE",fontWeight:"bold"}}>Total Payable Amount</td>
      <td style={{backgroundColor:"#EFF0EE",fontWeight:"bold",textAlign:'right'}}>Rs 19,500/-</td>
    </tr> 
  </tbody>
</table>
<p style={{fontSize:"13px"}}>* This offer is only dependent on the selected products only</p>
            </div>
            </div>
        </div>
        
    );
}

export default EstimateView
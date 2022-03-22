import { Card } from "@progress/kendo-react-layout";
import * as React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { TextArea } from "@progress/kendo-react-inputs";


const DailyUpdation = () => {
  return (
    <div>
      <PanelBar>
        <PanelBarItem title="Daily Update">
          <div  style={{borderStyle:"solid",borderWidth:"1px",margin:"20px",padding:20}}>
        <Card style={{backgroundColor:"#E1F0F7",fontSize:"15px",fontWeight:"bold"}}>Day1 - Bedroom</Card>
        <table class="table table-bordered" >
  <tbody>
  <tr>
      <th scope="col" style={{textAlign:"center"}}>Name</th>
      <th scope="col" style={{textAlign:"center"}}>Status</th>
      <th scope="col" style={{textAlign:"center"}}>Reason</th>
    </tr>
 
    <tr>
          <td style={{textAlign:"center"}}>Masking</td>
          <td >
            <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Card style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"green",color:"white",fontSize:"15px",width:"100%"}}>Completed</Card></div></td>
          <td style={{textAlign:"center"}}>-</td>
          </tr>

          <tr>
          <td style={{textAlign:"center"}}>Sanding</td>
          <td>
            <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Card style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"green",color:"white",fontSize:"15px",width:"100%"}}>Completed</Card></div></td>
          <td style={{textAlign:"center"}}>-</td>
          </tr>

          <tr>
          <td style={{textAlign:"center"}}>1st Top Coat</td>
          <td>
            <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Card style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F86B54",color:"white",fontSize:"15px",width:"100%"}}>Delay</Card></div></td>
          <td style={{textAlign:"center"}}>Due to Rain</td>
          </tr>

          <tr>
          <td style={{textAlign:"center"}}>2nd Top Coat</td>
          <td>
            <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Card style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F86B54",color:"white",fontSize:"15px",width:"100%"}}>Delay</Card></div></td>
          <td style={{textAlign:"center"}}>Due to unplanned cutomer action</td>
          </tr>

  </tbody>
</table>
</div>
        </PanelBarItem>
        <PanelBarItem title={"Attendance"}>
        <div  style={{borderStyle:"solid",borderWidth:"1px",margin:"20px",padding:20}}>
        <div style={{display:"flex",marginBottom:10}}><h6>Month : May</h6><h6 style={{marginLeft:30}}>Year : 2022</h6> </div>
        <Card style={{backgroundColor:"#E1F0F7",fontSize:"15px",fontWeight:"bold"}}>Attendance</Card>
        <table class="table table-bordered" >
  <tbody>
  <tr>
      <th scope="col" style={{textAlign:"center"}}>Name</th>
      <th scope="col" style={{textAlign:"center"}}>Day 1</th>
      <th scope="col" style={{textAlign:"center"}}>Day 2</th>
      <th scope="col" style={{textAlign:"center"}}>Day 3</th>

    </tr>
 
    <tr>
          <td style={{textAlign:"center"}}>Ijazz</td>
          <td>
            <div className="col d-flex justify-content-center" style={{textAlign:'center'}}><Card style={{width:"30%",fontSize:"15px",borderRadius:0}}>CL</Card></div></td>
          <td style={{textAlign:"center"}}></td>
          <td style={{textAlign:"center"}}></td>
          </tr>

          <tr>
          <td style={{textAlign:"center"}}>Sridhar</td>
          <td>
            <div className="col d-flex justify-content-center" style={{textAlign:'center'}}><Card style={{width:"30%",fontSize:"15px",borderRadius:0}}>EL</Card></div></td>
          <td style={{textAlign:"center"}}></td>
          <td style={{textAlign:"center"}}></td>
          </tr>

          <tr>
          <td style={{textAlign:"center"}}>Magesh</td>
          <td>
            <div className="col d-flex justify-content-center" style={{textAlign:'center'}}><Card style={{width:"30%",fontSize:"15px",borderRadius:0}}>P</Card></div></td>
          <td style={{textAlign:"center"}}></td>
          <td style={{textAlign:"center"}}></td>
          </tr>

          <tr>
          <td style={{textAlign:"center"}}>Gowtham</td>
          <td>
            <div className="col d-flex justify-content-center" style={{textAlign:'center'}}><Card style={{width:"30%",fontSize:"15px",borderRadius:0}}>P</Card></div></td>
          <td style={{textAlign:"center"}}></td>
          <td style={{textAlign:"center"}}></td>
          </tr>
          

  </tbody>
</table>
</div>
        </PanelBarItem>
        
        <PanelBarItem title="Parameters">
          <div style={{borderStyle:"solid",borderWidth:"1px",margin:"20px",padding:20}}>
          <div style={{display:"flex",marginBottom:10}}><h6>Month : May</h6><h6 style={{marginLeft:30}}>Year : 2022</h6> </div>
           
            <div style={{ marginTop: "2%" }}>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Parameters</th>
                    <th scope="col">Day1</th>
                    <th scope="col">Day2</th>
                    <th scope="col">Day3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1. Availability of trained manpower</th>
                    <td style={{backgroundColor:'#76AA40',color:'#fff'}}>Yes</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      2. Are all the household items properly covered?
                    </th>
                    <td  style={{backgroundColor:'#F6835B',color:'#fff'}}>No</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      3. Are all the non-removable items like a fan,
                      switchboard,light, etc. covered properly
                    </th>
                    <td  style={{backgroundColor:'#76AA40',color:'#fff'}}>Yes</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      4. Is the same Head Paint working at this place
                    </th>
                    <td style={{backgroundColor:'#F6835B',color:'#fff'}}>No</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      5. Does the team follow the PPS application method!
                    </th>
                    <td style={{backgroundColor:'#F6835B',color:'#fff'}}>No</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      6. Are all the doors, windows, foors masked before
                      painting
                    </th>
                    <td style={{backgroundColor:'#F6835B',color:'#fff'}}>No</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">7. Is the team wearing uniforms?</th>
                    <td style={{backgroundColor:'#F6835B',color:'#fff'}}>No</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      8. Quality of Surface Preparation / Sanding
                    </th>
                    <td  style={{backgroundColor:'#76AA40',color:'#fff'}}>Yes</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">9. Quality of Finish Coat</th>
                    <td  style={{backgroundColor:'#76AA40',color:'#fff'}}>Yes</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">10. Quality of Final Cleaning</th>
                    <td  style={{backgroundColor:'#76AA40',color:'#fff'}}>Yes</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      11. Is the behavior of the team good at the site
                    </th>
                    <td  style={{backgroundColor:'#76AA40',color:'#fff'}}>Yes</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div>
                <h6>Remarks</h6>
              <TextArea
                style={{ marginTop: 10,borderColor:"black" }}
                disabled={true}
                placeholder="Day1: Due to Unplanned Customer Action "
                rows="5"
              />
              </div>
            </div>
          </div>
        </PanelBarItem>
      </PanelBar>
    </div>
  );
};
export default DailyUpdation;

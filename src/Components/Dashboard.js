
import React, { Component } from 'react';
import { DropDownButton } from '@progress/kendo-react-buttons';
import styled from 'styled-components';
import ArcGaugeComponent from '../Components/Arcchart';
import Bar from '../Components/Bar';
import { Card, CardTitle, CardBody, AppBar } from '@progress/kendo-react-layout';
import Search from '../Components/Search';
import "../Pages/Leads.css"
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import ChunkProgress from './ChunkProgress';

const AppointmentLeaddata =[{
  "Time" : "09:00 - 11:00",
  "Name" : "Janani"
},
{
  "Time" : "09:00 - 11:00",
  "Name" : "Ijas"
},
{
  "Time" : "09:00 - 11:00",
  "Name" : "Uma"
}
]
const items = ['Monthly', 'Dialy'];
const UnassignedLeaddata=[{
  "Name" : "Janani",
  "Phoneno" : "#########"
},
{
  "Name" : "Ijas",
  "Phoneno" : "########"
},
{
  "Name" : "Rama",
  "Phoneno" : "#########"
}
]
const estimatedata =
    [{
        "Name" : "Janani",
        "Phoneno" : "#########",
        "Estimate No" : "123"
    },
    {
        "Name" : "Ijas",
        "Phoneno" : 9944971605,
        "Estimate No" :"456"
    },
    {
        "Name" : "Rama",
        "Phoneno" : "#########",
        "Estimate No" : "789"
    }
    ]

    const paymentdata =
    [{
        "Name" : "Janani",
        "Phoneno" : "#########",
        "Amount" : "50000"
    },
    {
        "Name" : "Ijas",
        "Phoneno" : 9944971605,
        "Amount" :"200000"
    },
    {
        "Name" : "Rama",
        "Phoneno" : "#########",
        "Amount" : "30000"
    }
    ]




const Dashboard = () =>{
    return(
        <div style={{paddingBottom:'70px'}}>
          <div> <ChunkProgress/></div>
           <div style={{marginTop:20}}><Search/></div>
            <p style={{fontSize:'20px', color:'#000f89',marginTop:'20px'}}>Upcoming:</p>
            <div style={{ paddingTop:"20px",paddingBottom:"20px", backgroundColor:"#EFF0EE"}}>
            <div class="container" style={{marginTop:20}} >
              <div class="row">
            
             <div class="col">
               <Card>
                 <CardBody>
                  <CardTitle style={{fontWeight:'bold'}}>Appointments - Today</CardTitle>
                  <Grid style={{height: '150px'}} data={AppointmentLeaddata}>
        <GridColumn field="Time" title="Time"  />
        <GridColumn field="Name" title="Name" />
      </Grid>
                  <a href='#' style={{float:'right',marginTop:'10px'}}>View All</a>
                  </CardBody>
               </Card>
             </div>

        <div class="col">
        <Card>
                 <CardBody>
                  <CardTitle style={{fontWeight:'bold'}}>Unassigned Lead</CardTitle>
                  <Grid style={{height: '150px'}} data={UnassignedLeaddata}>
        <GridColumn field="Name" title="Name"  />
        <GridColumn field="Phoneno" title="Phoneno" />
      </Grid>
                  <a href='#' style={{float:'right',marginTop:'10px'}}>View All</a>
                  </CardBody>
               </Card>
        </div>
        
     </div>
     <div class="row" style={{marginTop:"20px"}}>
     <div class="col">
        <Card>
                 <CardBody>
                  <CardTitle style={{fontWeight:'bold'}}>Payments</CardTitle>
                  <Grid style={{height: '150px'}} data={paymentdata}>
        <GridColumn field="Name" title="Name"  />
        <GridColumn field="Phoneno" title="Phoneno" />
        <GridColumn field="Amount" title="Amount" />

      </Grid>;

                  <a href="#" style={{float:'right',marginTop:'10px'}}>View All</a>
                  </CardBody>
               </Card>
        </div>
        <div class="col">
        <Card>
                 <CardBody>
                  <CardTitle style={{fontWeight:'bold'}}>Estimates</CardTitle>
                  <Grid style={{height: '150px'}} data={estimatedata}>
        <GridColumn field="Name" title="Name"  />
        <GridColumn field="Phoneno" title="Phoneno" />
        <GridColumn field="Estimate No" title="Estimate" />
      </Grid>
                  <a href='#'style={{float:'right',marginTop:'10px'}}>View All</a>
                  </CardBody>
               </Card>
        </div>
       </div>
   </div>
   </div>
   {/* keymetrics */}
   <p style={{display:'flex',fontSize:'20px', color:'#000f89', marginTop:5, width:'100%',paddingTop:"10px"}}>KeyMetrics:
<StyledButton items={items} text="Weekly" themeColor='primary' size='large' /> </p>
   <div style={{ paddingBottom:"20px", backgroundColor:"#EFF0EE"}}> 
  
  
    <div class="container" style={{marginTop:"10px", paddingTop:"20px"}}>
        <div class="row">
             <div class="col" >
             <Card>
              <CardBody style={{marginLeft:'10%'}}>
              <ArcGaugeComponent/>
               </CardBody>
               </Card>
               </div>
             

        <div class="col">
           <Card style={{height:'100%'}}>
           <CardBody>
             <Bar/>
           </CardBody>
           </Card>
        </div>
        </div>
        <div class="row">
        <div class="col" style={{marginTop:"20px"}}>
           <Card style={{height:'100%'}}>
           <CardBody>
           <h6 style={{display:"flex",alignItems:"center", justifyContent:"center"}}>Conversion</h6>
             <p style={{display:"flex",alignItems:"center", justifyContent:"center"}}><Card style={{backgroundColor:"#C9D5EE",height:"50%", width:"50%", fontSize:"30px",display:"flex",alignItems:"center", justifyContent:"center"}}>76</Card></p>
           </CardBody>
           </Card>
        </div>
        <div class="col" style={{marginTop:"20px"}}>
           <Card style={{height:'100%'}}>
           <CardBody >
             <h6 style={{display:"flex",alignItems:"center", justifyContent:"center"}}>Conversion Values</h6>
           <h5 style={{display:"flex",alignItems:"center", justifyContent:"center"}}>Rs 1,00,0000</h5>
           </CardBody>
           </Card>
        </div>
        </div>
  

   
   </div>

   </div>

</div>
    );
}
const StyledButton =styled(DropDownButton)`
margin-left: 75%;
`;
export default Dashboard
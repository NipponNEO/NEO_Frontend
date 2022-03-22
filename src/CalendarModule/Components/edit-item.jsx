import * as React from 'react';
import { SchedulerEditItem } from '@progress/kendo-react-scheduler';

export const EditItemWithDynamicTitle=(props)=>{
  return (
  <div>
      <SchedulerEditItem {...props} title={generateTitle(props.dataItem)} style={{backgroundColor: props.dataItem.Switch ? 'red' : 'orange' , color:"black"}}/>
      {/* <SchedulerEditItem {...props} title={switchtoggle?generateTitle(props.dataItem):(props.generateUAtitle)} style={{backgroundColor: props.dataItem.Switch ? 'red' : 'orange' , color:"black"}} /> */}
    </div>
  )
}


export const generateTitle = dataItem => {

  
  console.log(dataItem,"./..............................");
  // const displayTitle = dataItem.customerCompanyName;
  const displayTitle = dataItem.Title;
  const displayAddress = dataItem.Description;
  const displayNumber = dataItem.Contactnumber;
  
  return( 
    <div style={{fontStyle:"italic"}}>
    Customer Name :{displayTitle} <br/>
    Customer Address : {displayAddress}<br/>
    Contact.no:{displayNumber}
    </div>
  )
  };

  // export const generateUAtitle = dataItem2=>{
  //   console.log("dataitem of UA",dataItem2);
  //   const displayUAstarttime = dataItem2.start;

  //   return(
  //     <div>
  //       startUAtime: {displayUAstarttime}
  //     </div>
  //   )
  // }
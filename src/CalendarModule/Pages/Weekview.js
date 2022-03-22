import * as React from 'react';
import { displayDate} from '../JsonData/events-utc';
import { guid } from '@progress/kendo-react-common';
import { FormWithCustomEditor } from '../Components/custom-form';
import { EditItemWithDynamicTitle } from '../Components/edit-item';
import { CustomViewItem } from '../Components/custom-view-item';
import { CustomViewSlot } from '../Components/custom-view-slot';
import moment from 'moment';
import '../Styles/week.css';
import { Icon } from '@progress/kendo-react-common';
import { Scheduler} from '../Pages/Scheduler';
// import { images } from './images';
import { Card } from '@progress/kendo-react-layout';
// import { Card, CardHeader, Avatar, CardTitle, CardSubtitle } from '@progress/kendo-react-layout';
import headerBg from '../Assets/header-bg.png';
import { connect } from 'react-redux';
import { calenderData, ordersModelfields } from '../JsonData/calendar_sample_data.js';
// import { resData } from './res';

const Week = () => {
//   const renderRes=resData.find(resData.id === calenderData.res_id)

const [data, setData] = React.useState(calenderData);
console.log('data.......................', data);

const handleDataChange = ({
  created,
  updated,
  deleted
}) => {

let count = 0
console.log('handledata')


if( data && data.length > 0 && created.length > 0 ) {
  for (let i = 0; i < data.length; i++) {
    console.log('moment(created[0].start).format', moment(created[0].start).format('YYYY MM DD'));
    console.log('moment(data[i].start).format', moment(data[i].start).format('YYYY MM DD'));
    if (moment(created[0].start).format('YYYY MM DD') === moment(data[i].start).format('YYYY MM DD')) {
      count ++;
    }
  }
}

if(count < 4) {
  setData(old => old // Filter the deleted items
  .filter((item) => deleted.find(current => current.res_id === item.res_id ) === undefined) // Find and replace the updated items
  .map(item => updated.find(current => current.res_id === item.res_id) || item) // Add the newly created items and assign an `id`.
  .concat(created.map(item => Object.assign({}, item, {
    id: guid()
  }))));
} 

else {
  alert('slot limit exceeded (4 slots)');
}

};
  
return (
  <div>
    {/*-------------------------------------------------------------------------------header------------------------------------------------- */}
    <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div style={{flexDirection:'row',display:'flex', paddingLeft:30}}>
        <div style={{paddingTop:15 , color:"white"}}>
          <Icon name='calendar' size='large' />
        </div>
        <div style={{paddingLeft:15,color:"white", fontFamily:"revert"}}>
          <h1>Calendar</h1>
        </div>       
      </div> 
    </header>
    {/* -------------------------------------------------------
    --------------------nameboard------------------------------------------------- */}
          
    <div id="Planning" className="planning-page main-content" style={{padding:20,backgroundColor:"#CCCCCC"}}>
      <Card>
        <div className="card-container grid">
          {/* { 
            renderRes.map(employee => {
              <div
                key={employee.id} 
                onClick={() => onResClick(employee.id)}
                style={!filterState[employee.id] ? {opacity: .5} : {}}
               >
                <Card style={{ borderWidth: 0, cursor: 'pointer'}}>
                  <CardHeader className="k-hbox" >
                    <Avatar type='image' shape='circle' size={'large'} style={{
                      borderWidth: 3,
                      borderColor: "black"
                     }}>
                      <div className="k-avatar-image" style={{
                          // backgroundImage: images[employee.imgId + employee.gender],
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                      }}/>
                    </Avatar>
                  </CardHeader>
                </Card>
              </div>                       
            })
          } */}

          {/* .................................scheduler (main calendar component)....................................... */}
          <div className="card-component" >               
            <Scheduler
              data={data}
              onDataChange={handleDataChange}
              modelFields={ordersModelfields}
              className='scheduler'
              form ={FormWithCustomEditor}
              height={950}
              editItem={EditItemWithDynamicTitle}
              viewSlot={CustomViewSlot} 
              viewItem={CustomViewItem}
              defaultDate={displayDate}
              timezone="Etc/UTC"
            />
          </div>
        </div>
      </Card> 
    </div> 
  </div>
)

}
export default connect()(Week);






/* --------------------------------------------------------------------------Component--------------------------------------------------- */
    /* <div className="ww-view">
    <Scheduler
      className='scheduler'
      data={data}
      onDataChange={handleDataChange}
      editable={{
        add:true,
        drag:true,
        edit:true,
        resize:true,
        remove:true,
      }}
      defaultDate={displayDate}
      form ={FormWithCustomEditor}
      height={950}
      editItem={EditItemWithDynamicTitle}
      viewSlot={CustomViewSlot} 
      viewItem={CustomViewItem} 
      // defaultView={window.innerWidth<768?"day":"work-week"}
    >
      <WorkWeekView  
        title="Work Week" 
        workWeekStart={Day.Monday} 
        workWeekEnd={Day.Friday} 
        workDayStart={'09:00'}
        workDayEnd={'18:00'} 
        defaultDate={displayDate} 
        currentTimeMarker={true} 
        slotDivisions={2} 
      />
    </Scheduler>
  </div>

  <div className="d-view">
    <Scheduler
      className='scheduler'
      data={data}
      onDataChange={handleDataChange}
      editable={{
        add:true,
        drag:true,
        edit:true,
        resize:true,
        remove:true,
      }}
      defaultDate={displayDate}
      form={FormWithCustomEditor}
      height={950}
      editItem={EditItemWithDynamicTitle}
      viewSlot={CustomViewSlot} 
      viewItem={CustomViewItem}
    >
      <DayView 
        title="Work Week" 
        currentTimeMarker={true} 
        defaultDate={displayDate} 
        slotDivisions={2}
        numberOfDays={2}
      />
    </Scheduler>
  </div>  */

// const mapDispatchToProps =(dispatch)=>{ 
//   return (
//     Showdate : (data) => dispatch({DateCustomDialog(data)})
//   )
// }
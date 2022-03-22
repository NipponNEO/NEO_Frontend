import * as React from 'react';
import { Window} from '@progress/kendo-react-dialogs';
import moment from 'moment';
import { useSelector } from 'react-redux';

export const CustomDialog =(props)=> {
 const [displayDate,setDisplayDate]= React.useState([])

 const DisplayDate = useSelector( (state)=> state.Scheduler)
  React.useEffect(()=>{
    setDisplayDate(DisplayDate)
  },[])
 
  for(var i=0 ;i<displayDate.length; i++){
  
    var selectedDate = moment(displayDate[i].start).format('YYYY-MM-DD');
      
  }

  
  return (
    <div>
      <Window {...props} title={'Slot'+ ` ` +`${selectedDate}`} resizable={false} width={600} height draggable={false}/>
    </div>
  )
};
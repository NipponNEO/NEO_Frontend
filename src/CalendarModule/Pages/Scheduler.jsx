import React from 'react';
import * as PropTypes from 'prop-types';
import {Scheduler as KendoScheduler,DayView, WorkWeekView} from '@progress/kendo-react-scheduler';
import { Day } from '@progress/kendo-date-math';
import { displayDate } from '../JsonData/calendar_sample_data';
import { ordersModelfields } from '../JsonData/calendar_sample_data';

export const Scheduler = (props) => {
    const {
        data, modelFields, resources, form ,onDataChange,handleDataChange,editItem,viewItem,viewSlot} = props;
    const defaultDate = new Date();

    return (
        <div>
         <div className="ww-view">
        <KendoScheduler
            data={data}
            // modelFields={modelFields}
            // resources={resources}
            // timezone={'Etc/UTC'}
            modelFields={modelFields}
            defaultDate={displayDate}
            onDataChange={onDataChange}
            editable={{
                add: true,
                remove: true,
                drag: true,
                resize: true,
                edit: true
            }}
            form ={form}
            height={950}
            editItem={editItem}
            viewSlot={viewSlot} 
            viewItem={viewItem}
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
        </KendoScheduler>
        </div>

        <div className="d-view">
        <KendoScheduler
          data={data}
          modelFields={ordersModelfields}
          resources={resources}
        //   timezone={'Etc/UTC'}
          defaultDate={defaultDate}
          onDataChange={handleDataChange}
          editable={{
              add: true,
              remove: true,
              drag: true,
              resize: true,
              edit: true
          }}
          form ={form}
          height={950}
          editItem={editItem}
          viewSlot={viewSlot} 
          viewItem={viewItem}
        >
          <DayView 
            title="Work Week" 
            currentTimeMarker={true} 
            defaultDate={defaultDate} 
            slotDivisions={2}
            numberOfDays={2}
          />
        </KendoScheduler>
      </div>
        </div>
    );
};

Scheduler.displayName = 'Scheduler';
Scheduler.propTypes = {
    data: PropTypes.array
};
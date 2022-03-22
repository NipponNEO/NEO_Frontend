import * as React from 'react';
import { SchedulerViewItem } from '@progress/kendo-react-scheduler';
export const CustomViewItem = props => {
  return <SchedulerViewItem {...props} style={{ ...props.style}} />;
};

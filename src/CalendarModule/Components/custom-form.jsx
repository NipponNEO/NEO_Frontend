import * as React from 'react';
import { SchedulerForm } from '@progress/kendo-react-scheduler';
import { CustomFormEditor } from './custom-form-editor';                        //using this for validations .
import { CustomDialog } from './custom-dialog';

export const FormWithCustomEditor = props => {
  const phreg = new RegExp(/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/);
  const phvalid = (value) => phreg.test(value);
  const requiredValidator = React.useCallback(value => value === undefined || value === null || value === '' ? 'Field is required.' : undefined, []);
  const requiredInteger = React.useCallback(value => value === undefined || value === null || value === '' || value === phvalid  ? 'Enter the mobile number' : undefined, []);
  
  const formValidator = (_dataItem, formValueGetter) => {
    let result = {};
    result.Title = [requiredValidator(formValueGetter('Title'))].filter(Boolean).reduce((current, acc) => current || acc, '');
    result.Description = [requiredValidator(formValueGetter('Description'))].filter(Boolean).reduce((current, acc) => current || acc, '');
    result.Contactnumber = [requiredInteger(formValueGetter('Contactnumber'))].filter(Boolean).reduce((current,acc)=> current|| acc,'')
    return result;
  };

  return(
  <div>
    <SchedulerForm {...props} editor={CustomFormEditor} dialog={CustomDialog} validator={formValidator}/>
  </div>
  )
};
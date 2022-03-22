import * as React from 'react';
import { FormElement, Field } from '@progress/kendo-react-form';
import { Label, Error } from '@progress/kendo-react-labels';
import { MaskedTextBox, Switch } from '@progress/kendo-react-inputs';
import { DatePicker, DateTimePicker,TimePicker } from '@progress/kendo-react-dateinputs';
// import { TitleEditor, TreatmentEditor, RoomEditor, TherapistEditor } from './editors';

export const CustomFormEditor = (props) => {
  const [switchtoggle, setSwitchtoggle] = React.useState(true);
  const handleChange=()=>{
    setSwitchtoggle(!switchtoggle)
  }

  const renderSettoggle = React.useCallback(
    () => {
    return(
      <div>
        <FormElement horizontal={true}>
          <div className="k-form-field">
            <div className="k-form-field-wrap">
              <div style={{ width: '300px', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <Label>
                  Start Time
                </Label>
                &nbsp;
                <Field name={'start'} component={props.startEditor || DatePicker} as={TimePicker} rows={1} width={'140px'} format="t" />
                &nbsp;
                <Label>
                  End Time
                </Label>
                &nbsp;
                <Field name={'end'} component={props.endEditor || DatePicker} as={TimePicker} rows={1} width={'140px'} format="t" />
              </div>
            </div>
          </div>
        </FormElement>
      </div>
    )
  },[setSwitchtoggle]
  )

  const renderToggle = React.useCallback(
    () => {
    return(
      <>
      <FormElement horizontal={true}>
        <div className="k-form-field">
          <Label>
            Customer Name
          </Label>
          <div className="k-form-field-wrap">
            <Field name={'Title'} component={MaskedTextBox} rows={1} style={{ width: '300px'}} />
          </div>
        </div>

        <div className="k-form-field">
          <Label>
            Customer Address
          </Label>
          <div className="k-form-field-wrap">
            <Field name={'Description'} component={MaskedTextBox} rows={1} style={{ width: '300px' }} />
          </div>
        </div>
  
        <div className="k-form-field">
          <Label>
            Customer Contact Number
          </Label>
          <div className="k-form-field-wrap">
            <Field name={'Contactnumber'} component={MaskedTextBox} rows={1} style={{ width: '300px' }} />
          </div>
        </div>
  
        <div className="k-form-field">
          <Label>
            Start Time
          </Label>
          &nbsp;
          <div className="k-form-field-wrap">
            <div style={{
              width: '300px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            
              <Field name={'start'} component={props.startEditor || DatePicker} as={TimePicker} rows={1} width={'140px'} format="t" />    
              {/* this name={'start'} represents the start variable in /data.js --> customModelField() --> RHS ('start') */}
              &nbsp;
              <Label>
                End Time
              </Label>
              &nbsp;
              <Field name={'end'} component={props.endEditor || DatePicker} as={TimePicker} rows={1} width={'140px'} height format="t" />
            {/* this name={'end'} represents the end variable in /data.js --> customModelField() --> RHS ('end') */}

            </div>
          </div>
        </div>
      </FormElement>
      </>
    )
    },
    [switchtoggle]
  )

  return (
    <FormElement>
      <div className="k-form-field" style={{paddingBottom:20}}>
        <div className="k-form-field-wrap" >
          <div style={{paddingLeft:200, display:"flex", flexDirection:"row", paddingBottom:20}}>
            <div className="k-form-field">
              <Label>
                SO Availability Status
              </Label>
            </div>
            <div className="k-form-field-wrap" style={{paddingTop:10, paddingLeft:20}}>
              <Field name={'Switch'} component={Switch} rows={1} style={{width: '300px'}} onLabel={"A"} offLabel={"UA"} defaultChecked={true} onChange={handleChange} />
            </div>
          </div>
        
          {switchtoggle ? renderToggle() : renderSettoggle()}
        
        </div>
      </div>
    </FormElement>
  )
};
import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Label, PanelBar, PanelBarItem } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';



const FormInput = (props) => {
 
  return <FieldWrapper>
      <fieldset className={'k-form-fieldset'}>
        <Label >Username</Label>
        <div className={'k-form-field-wrap'}>
          <Input  disabled={false}   value={props.value} id={props.id}  maxlength={20} style={{ width: "300px",}}  />
        </div>
        </fieldset>
      </FieldWrapper>;
};


export default FormInput

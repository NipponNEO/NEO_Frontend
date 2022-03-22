import * as React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label} from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';



const MobileNo = (props) => {
 
  return <FieldWrapper>
      <fieldset className={'k-form-fieldset'}>
        <Label >Mobile No</Label>
        <div className={'k-form-field-wrap'}>
          <Input  disabled={false}   value={props.value} id={props.id}  minlength={10} style={{ width: "300px",}} />
        </div>
        </fieldset>
      </FieldWrapper>;
};


export default MobileNo


// import * as React from 'react';
// import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
// import { Label, Hint, Error } from '@progress/kendo-react-labels';
// import { Input } from '@progress/kendo-react-inputs';

// const mobilenoRegex = new RegExp(
//   "^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$");
// const inputValidator = (value) =>
// mobilenoRegex.test(value) ? "" : "Please enter a valid MobileNo.";

// const FormInput = fieldRenderProps => {
  
//   const {
//     validationMessage,
//     touched,
//     label,
//     id,
//     valid,
//     disabled,
//     hint,
//     type,
//     optional,
//     max,
//     value,
//     ...others
//   } = fieldRenderProps;
//   const showValidationMessage = touched && validationMessage;
//   const showHint = !showValidationMessage && hint;
//   const hindId = showHint ? `${id}_hint` : '';
//   const errorId = showValidationMessage ? `${id}_error` : '';
//   return <FieldWrapper>
//         <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
//         <div className={'k-form-field-wrap'}>
//           <Input valid={valid} type={type} id={id} disabled={disabled} maxlength={max} ariaDescribedBy={`${hindId} ${errorId}`} {...others} />
//           <Hint direction={'end'} style={{
//         // position: 'absolute',
//         right: 0
//       }}></Hint>
//           {showHint && <Hint id={hindId}>{hint}</Hint>}
//           {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
//         </div>
//       </FieldWrapper>;
// };

// const MobileNum = () => {
//   const max = 10;

//   const handleSubmit = dataItem => alert(JSON.stringify(dataItem, null, 2));

//   return <Form initialValues={{
//     Mobile: ''
//   }} onSubmit={handleSubmit} render={formRenderProps => <FormElement style={{
//     width: 250,
//     // position: 'absolute'
//   }}>
//             <fieldset className={'k-form-fieldset'}>
//               <Field id={'Mobile'} name={'Mobile'} label={'Mobile:'} max={max} value={formRenderProps.valueGetter('Mobile')}  component={FormInput} validator={inputValidator} style={{borderColor:'green'}} />
//               {/* <div className="k-form-buttons k-justify-content-end">
//                 <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
//                   Send
//                 </Button>
//               </div> */}
//             </fieldset>
//           </FormElement>} />;
// };
// export default MobileNum

import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';



const Email = (props) => {
 
  return <FieldWrapper>
      <fieldset className={'k-form-fieldset'}>
        <Label >Email</Label>
        <div className={'k-form-field-wrap'}>
          <Input  disabled={false}   value={props.value} id={props.id}  minlength={30} style={{ width: "300px",}} />
        </div>
        </fieldset>
      </FieldWrapper>;
};


export default Email


// import * as React from "react";
// import {
//   Form,
//   Field,
//   FormElement,
//   FieldWrapper,
// } from "@progress/kendo-react-form";
// import { Input } from "@progress/kendo-react-inputs";
// import {
//   Label,
//   Error,
//   Hint,
// } from "@progress/kendo-react-labels";
// const emailRegex = new RegExp(/\S+@\S+\.\S+/);

// const emailValidator = (value) =>
//   emailRegex.test(value) ? "" : "Please enter a valid email.";

// const LabelEmailInput = (fieldRenderProps) => {
//   const { validationMessage, visited, label, id, valid, disabled, ...others } =
//     fieldRenderProps;
//   const showValidationMessage = visited && validationMessage;
//   return (
//     <FieldWrapper>
//       <Label editorId={id} editorValid={valid} editorDisabled={disabled}>
//         {label}
//       </Label>
//       <Input
//         valid={valid}
//         type={"email"}
//         id={id}
//         disabled={disabled}
//         {...others}
//       />
//       {!showValidationMessage && <Hint></Hint>}
//       {showValidationMessage && <Error>{validationMessage}</Error>}
//     </FieldWrapper>
//   );
// };

// const Email = () => {
//   const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

//   return (
//     <Form
//       onSubmit={handleSubmit}
//       render={(formRenderProps) => (
//         <FormElement
//           style={{
//             width: 250,
//           }}
//         >
//           <Field
//             id={"email"}
//             name={"email"}
//             label={"Email ID:"}
//             component={LabelEmailInput}
//             validator={emailValidator}
//             style={{ borderColor: "green" }}
//           />
//         </FormElement>
//       )}
//     />
//   );
// };
// export default Email;

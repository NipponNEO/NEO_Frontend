import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";


const BillInput = (props) => {
    return ( 
                <>       
                    <label className="col-4 d-flex align-items-center">{props.formField.label}</label>
                    
                    <div className="col-8">
                        <Field
                            name={props.formField.name}
                            component={Input}
                        />
                    </div>
                </>
            );
}
 
export default BillInput;
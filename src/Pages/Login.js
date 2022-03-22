import { Typography } from "@progress/kendo-react-common";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import companyLogo from '../Assests/Images/neo1.png';
// import companyName from '../Assests/Images/neoLetter.png';
import axios from 'axios'
import './Login.css';
import { useState } from "react";
import { Redirect } from "react-router-dom";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);



const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid User_Id.";

const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} className="email-input" />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};






const Login = () => {


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

   
    
    const onHandleButton = async () =>{
       
        await axios.post('localhost:7021/api/Login/Connect',{userName, password})
            .then(res=> {
                if(res.data){
            <Redirect to="/leads/Accord"/>
            } else {
                alert(" userName Login is invalid")
            }
        })
        .catch(err=> console.log(err))
    }
    
    return ( 
        <div className="login" >

            <div className="logo">
                <img src={companyLogo} />
            </div>

                <Typography.h2 className="mt-5" textAlign={"center"} >Welcome</Typography.h2>
                <Typography.p textAlign={"center"} fontWeight={"light"}>Sign in to Continue</Typography.p>

            <div className="login-form">

                    <Form
                        onSubmit={onHandleButton}
                        initialValues={[0]}
                        render = {(formRenderProps) => (
                            <FormElement
                                style={{
                                    maxWidth: 350,
                                }}
                                >
                                
                                <fieldset className={"k-form-fieldset"}>
                                    <div className="mb-3 mt-3">
                                        <Field
                                            name={"email"}
                                            type={"email"}
                                            component={EmailInput}
                                            placeholder="UserId"
                                            validator={emailValidator}
                                            onChange={(e)=> setUserName(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="mb-3">
                                        <Input
                                            name="password"
                                            type="password"
                                            style={{
                                            width: "100%",
                                            }}
                                            required={true}
                                            placeholder="password"
                                            minLength={6}
                                            maxLength={18}
                                            className="password-input"
                                            onChange={(e)=> setPassword(e.target.value)}
                                        />
                                        </div>
                                </fieldset>

                                <div className="k-form-buttons m-0" >
                                    <button
                                        type={"submit"}
                                        onClick={onHandleButton}
                                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base m-auto"
                                        disabled={!formRenderProps.allowSubmit}
                                        style = {{background:'#08f26e', color: 'white'}}
                                        >
                                        Login
                                    </button>
                                </div>

                                    <Typography.p textAlign={"center"} className="mt-3" style={{color:'red', cursor: 'pointer'}}>Forget Password ?</Typography.p>
                                    
                            </FormElement>
                        )}
                        />
               
            </div>
        </div>
     );
}

export default Login;




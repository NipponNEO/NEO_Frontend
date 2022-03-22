

export const validPhoneNumber = new RegExp(
    "^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$"
 );

 export const validPinCode = new RegExp(
    "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$"
 );

 export const isValidElement = (data) =>{
     return data !==null && data !== "undefined";
 }
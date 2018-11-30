import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";

/* export function forbiddenNameValidator(control:AbstractControl):{[key:string]:any}{
const forbidden=/admin/.test(control.value);
return forbidden ? {'forbiddenName':{value:control.value}} :null; */

//defining regExp for name validator
export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} |null =>{
        const forbidden=forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName':{value:control.value}} :null;
};
}


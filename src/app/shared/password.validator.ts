import { AbstractControl } from "@angular/forms";


export function PasswordValidator(control:AbstractControl):{[key:string]:boolean} | null{
const password=control.get('password');
const confirmPassword=control.get('confirmPassword');
//When password and confirm password is given and mismatch then it shows error
if(password.pristine || confirmPassword.pristine){
    return null;
}
return password && confirmPassword && password.value!==confirmPassword.value?{'misMatch':true}:
null;

}
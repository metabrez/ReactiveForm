import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //This get userName() is used in app.component.html for making code cleaner
  
  get userName(){
    return this.registrationForm.get('userName');
  }
  title = 'reactive-form';
  constructor(private fb:FormBuilder){}

  registrationForm = this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3)]],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  });

 /*  registrationForm=new FormGroup(
    {userName:new FormControl('Tabrez'),
  password:new FormControl(''),
  confirmPassword:new FormControl(''),
  address:new FormGroup(
    {city:new FormControl(''),
    state:new FormControl(''),
    postalCode:new FormControl('')
  }
  )
  }); */

  loadApiData(){
    this.registrationForm.patchValue({
      userName:'Tabrez',
      password:'test',
      confirmPassword:'test',
      /* address:{
        city:'city',
        state:'state',
        postalCode:'12345'
      } */
    });
  }
}

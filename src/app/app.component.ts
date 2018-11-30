import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  registrationForm=new FormGroup(
    {userName:new FormControl('Tabrez'),
  password:new FormControl(''),
  confirmPassword:new FormControl(''),
  address:new FormGroup(
    {city:new FormControl(''),
    state:new FormControl(''),
    postalCode:new FormControl('')
  }
  )
  });

  loadApiData(){
    this.registrationForm.setValue({
      userName:'Tabrez',
      password:'test',
      confirmPassword:'test',
      address:{
        city:'city',
        state:'state',
        postalCode:'12345'
      }
    });
  }
}

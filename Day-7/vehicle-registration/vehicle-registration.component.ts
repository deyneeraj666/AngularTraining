import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent 
{

 
   public formComponent:FormGroup = new FormGroup(
    {
      name : new FormControl("", Validators.required),
      number :  new FormControl("", [Validators.required,Validators.pattern("^[0-9]{10}"),Validators.minLength(10),Validators.maxLength(10)]),
      email :  new FormControl("", [Validators.email,Validators.required]),

      reg_number : new FormControl("",[Validators.required,Validators.pattern("^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$")]),

      address :  new FormControl("", Validators.required),
      model : new FormControl("",[Validators.required,Validators.pattern("^[A-Z|a-z]{10}$")]),
      color : new FormControl("",Validators.required),
      year : new FormControl("",[Validators.required,])  
    }
    );

 
  submit_click()
  {
    alert("Data added successfully!!");
    
  }

}

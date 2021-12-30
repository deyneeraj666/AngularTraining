import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  public  Employee_Id:number=  54654564;
	public Employee_Name: string= "Stephen";	 
	public Employee_Job:string =  "Manger";
	public Employee_Salary:number=  75000;
	public Employee_Depo:number=10;

  

}

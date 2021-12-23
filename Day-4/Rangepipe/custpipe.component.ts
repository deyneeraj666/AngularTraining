import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-custpipe',
  templateUrl: './custpipe.component.html',
  styleUrls: ['./custpipe.component.css']
})
export class CustpipeComponent  
{
  m:number=0;
  mx:number=0;
  min:number=0;
  max:number=0;
 

  userArray:User[]=[
    {name:"Tom",salary:10000},
    {name:"Robert",salary:20000},
    {name:"Sam",salary:10000},
    {name:"Tom",salary:5000},
    {name:"Jerry",salary:50000},
    {name:"Tom",salary:15000},
    {name:"Robert",salary:25000},
    {name:"Sam",salary:1000},
    {name:"Tom",salary:5000},
    {name:"Jerry",salary:50000},
    {name:"Tom",salary:45000},
    {name:"Robert",salary:25000},
    {name:"Sam",salary:200000},
    {name:"Tom",salary:5000},
    {name:"Jerry",salary:50000},
  ]
  getData_click()
  {
    this.min=this.m;
    this.max=this.mx;
  }

}

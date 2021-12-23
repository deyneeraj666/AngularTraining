import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Users } from '../Models/Users';

@Component({
  selector: 'app-slicepipe',
  templateUrl: './slicepipe.component.html',
  styleUrls: ['./slicepipe.component.css']
})
export class SlicepipeComponent
{
  start:number=0;
  end:number=4;
  isDisable:boolean=false;

  //@ViewChild('tempRef') paraRef!: ElementRef;

  userArray:Users[]=[
    {uid:1,uname:"Tom",uemailid:"tom@gmail.com",uloc:"Hyderabad"},
    {uid:2,uname:"Jerry",uemailid:"jerry@gmail.com",uloc:"Chennai"},
    {uid:3,uname:"Harry",uemailid:"Harry@gmail.com",uloc:"Delhi"},
    {uid:4,uname:"Robert",uemailid:"Robert@gmail.com",uloc:"Kolkata"},
    {uid:5,uname:"Tom",uemailid:"tom@gmail.com",uloc:"Hyderabad"},
    {uid:6,uname:"Jerry",uemailid:"jerry@gmail.com",uloc:"Chennai"},
    {uid:7,uname:"Harry",uemailid:"Harry@gmail.com",uloc:"Delhi"},
    {uid:8,uname:"Robert",uemailid:"Robert@gmail.com",uloc:"Kolkata"},
    {uid:9,uname:"Tom",uemailid:"tom@gmail.com",uloc:"Hyderabad"},
    {uid:10,uname:"Jerry",uemailid:"jerry@gmail.com",uloc:"Chennai"},
    {uid:11,uname:"Harry",uemailid:"Harry@gmail.com",uloc:"Delhi"},
    {uid:12,uname:"Robert",uemailid:"Robert@gmail.com",uloc:"Kolkata"},
    {uid:13,uname:"Tom",uemailid:"tom@gmail.com",uloc:"Hyderabad"},
    {uid:14,uname:"Jerry",uemailid:"jerry@gmail.com",uloc:"Chennai"},
    {uid:15,uname:"Harry",uemailid:"Harry@gmail.com",uloc:"Delhi"},
    {uid:16,uname:"Robert",uemailid:"Robert@gmail.com",uloc:"Kolkata"},
  

  ]

  next_data()
  {
    this.end   = this.end + 4;
    if( this.end == this.userArray.length)
    {
      this.isDisable=true;
      //this.paraRef.nativeElement.visibility="hidden" 
     //alert(this.paraRef.nativeElement.visibility="hidden"  ) 
    }
  }



  


}

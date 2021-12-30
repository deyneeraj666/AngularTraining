import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraytech',
  templateUrl: './arraytech.component.html',
  styleUrls: ['./arraytech.component.css']
})
export class ArraytechComponent  {
  public tech_list:string[]=["Angular,","React,","NodeJs,","Express"];
}

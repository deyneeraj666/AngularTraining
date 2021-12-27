import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})
export class ApitestComponent implements OnInit 
{
  userarr:any[]=[];
  
  constructor(private http : HttpClient)
  {
  } 
  
  getdata_Click()
  {
    this.http.get('https://reqres.in/api/users').subscribe((Response:any) => {
      console.log(Response.support);
      this.userarr  = Response.data;
    });

  }

  ngOnInit(): void
  {
   /* this.http.get('https://reqres.in/api/users').subscribe((Response:any) => {
      console.log(Response.support);
      this.userarr  = Response.data;
    });*/
  }
 
}

